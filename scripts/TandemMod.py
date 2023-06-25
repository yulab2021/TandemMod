import numpy as np
import pickle
import torch
import datetime
import argparse

from scipy import interpolate
from sklearn import metrics
from sklearn import datasets

import torch.nn as nn
from torch.utils import data as torch_data
from torch.utils.data import Dataset
from torch.autograd import Variable

from utils import load_data,load_predict_data,MyDataset,kmer_encode_dic
from models import TandemMod

torch.cuda.empty_cache()
device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
print("device=",device)

class Config:

    train_dir=""
    test_dir=""
    batch_size = 500
    learning_rate=0.001



def test(model):
    test_acc = 0.
    y_test = []
    y_pred = []
    for i,(batch_x, batch_y) in enumerate(test_loader):

        signal, kmer, mean, std, intense, dwell,base_quality = batch_x
        signal, batch_y = Variable(signal.to(device)).to(torch.float32), Variable(batch_y.to(device)).to(torch.long)
        kmer = Variable(kmer.to(device)).to(torch.long)
        mean = Variable(mean.to(device)).to(torch.float32)
        std = Variable(std.to(device)).to(torch.float32)
        intense = Variable(intense.to(device)).to(torch.float32)
        dwell = Variable(dwell.to(device)).to(torch.float32)
        base_quality = Variable(base_quality.to(device)).to(torch.float32)
        batch_size, features = signal.size()
        signal = signal.view(batch_size, 1, features)

        out = model(signal, kmer, mean, std, intense, dwell,base_quality )
        batch_size, out_channels = out.size()
        out = out.view(batch_size, out_channels)

        pred = torch.max(out, 1)[1]
        test_correct = (pred == batch_y).sum()

        y_pred.extend(pred.cpu().numpy())
        y_test.extend(list(batch_y.cpu().numpy()))

        if i > 20:
            break
    test_acc = metrics.accuracy_score(y_test, y_pred)
    tr_auc = metrics.roc_auc_score(y_test, y_pred)
    #print(test_acc,tr_auc)
    return test_acc,tr_auc


def train(model):
    print("Start training...")

    for epoch in range(1000):

        torch.cuda.empty_cache()

        y_train = []
        y_pred = []
        tic=datetime.datetime.now()
        for i,(batch_x, batch_y) in enumerate(train_loader):
            signal,kmer,mean,std,intense,dwell,base_quality=batch_x
            signal, batch_y = Variable(signal.to(device)).to(torch.float32), Variable(batch_y.to(device)).to(torch.long)
            kmer = Variable(kmer.to(device)).to(torch.long)
            mean=Variable(mean.to(device)).to(torch.float32)
            std = Variable(std.to(device)).to(torch.float32)
            intense = Variable(intense.to(device)).to(torch.float32)
            dwell = Variable(dwell.to(device)).to(torch.float32)
            base_quality = Variable(base_quality.to(device)).to(torch.float32)
            
            batch_size, features = signal.size()
            signal = signal.view(batch_size, 1,features)

            out = model(signal,kmer,mean,std,intense,dwell,base_quality)

            optimizer.zero_grad() 

            batch_size,out_channels=out.size()    #[300, 1, 2]  to [300,2]
            out=out.view(batch_size,out_channels)

            loss = loss_func(out, batch_y)
            loss.backward()
            optimizer.step()


            pred = torch.max(out, 1)[1]
            train_correct = (pred == batch_y).sum()

            y_pred.extend(pred.cpu())
            y_train.extend(list(batch_y.cpu().numpy()))
            #print(y_train, y_pred)
            if i % 100 ==0:

                train_acc = metrics.accuracy_score(y_train, y_pred)

                test_acc,tr_auc=test(model)

                toc = datetime.datetime.now()
                print('Epoch {}-{} Train acc: {:.6f},Test Acc: {:.6f},AUC: {:.6f},time{:}'.format(epoch,i,  train_acc,test_acc ,tr_auc,toc-tic))

                tic = datetime.datetime.now()
                y_train = []
                y_pred = []


                torch.save(model, args.new_model)


def predict(model,dataloader):
    predict_result=open(args.predict_result,"w")  
  
    count=0
    
    test_acc = 0.
    y_test = []
    y_pred = []
    label_dict={0:"unmod",1:"mod"}

    for i,(batch_x, batch_y) in enumerate(dataloader):

        signal, kmer, mean, std, intense, dwell,base_quality = batch_x
        signal= Variable(signal.to(device)).to(torch.float32)

        kmer = Variable(kmer.to(device)).to(torch.long)
        mean = Variable(mean.to(device)).to(torch.float32)
        std = Variable(std.to(device)).to(torch.float32)
        intense = Variable(intense.to(device)).to(torch.float32)
        dwell = Variable(dwell.to(device)).to(torch.float32)
        base_quality = Variable(base_quality.to(device)).to(torch.float32)
        batch_size, features = signal.size()
        signal = signal.view(batch_size, 1, features)

        out = model(signal, kmer, mean, std, intense, dwell,base_quality )
        batch_size, out_channels = out.size()

        out = out.view(batch_size, out_channels)
        pred = torch.max(out, 1)[1].numpy()

        out=torch.softmax(out,dim=1)
        probabilities=out.detach().numpy()[:,1]

        for j in range(len(batch_y)):

            contig,position,motif,read_id=batch_y[j].split("|")
            print("%s\t%s\t%s\t%s\t%s\t%s" %(contig,position,motif,read_id,label_dict[pred[j]],probabilities[j]),file=args.predict_result)
        
    file.close()
    predict_result.close()
    

    
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='TandemMod, multiple types of RNA modification detection.')

    parser.add_argument('-run_mode', required=True, default='train',help='Run mode. Default is train')
    parser.add_argument('-pretrained_model', required=False, default='',help='Pretrained model file.')
    parser.add_argument('-new_model', required=False, default='',help='New model file to be saved.')
    parser.add_argument('-train_data_mod', required=False, default='', help='Train data file, modified.')
    parser.add_argument('-train_data_unmod', required=False, default='', help='Train data file, unmodified.')
    parser.add_argument('-test_data_mod', required=False, default='', help='Test data file, modified.')
    parser.add_argument('-test_data_unmod', required=False, default='', help='Test data file, unmodified.')
    parser.add_argument('-predict_file',required=False,default='',help='File to be predcited.')
    parser.add_argument('-predict_result',required=False,default='',help='Predicit results.')
    
    
    args = parser.parse_args()
    
    if args.run_mode=="train":
        print("train process.")
        x_train,y_train=load_data(args.train_data_mod,args.train_data_unmod,data_length=4e5)
        x_test,y_test=load_data(args.test_data_mod,args.test_data_unmod,data_length=4e3)
        train_dataset = MyDataset(x_train,y_train)
        test_dataset = MyDataset(x_test,y_test)
        
        weights=make_weights_for_balanced_classes(train_dataset,2)
        weights = torch.DoubleTensor(weights)
        sampler = CustomWeightedRandomSampler(weights, len(weights))  
        
        train_loader = torch.utils.data.DataLoader(dataset=train_dataset,sampler=sampler, shuffle=True, batch_size=Config.batch_size,num_workers=36,pin_memory=True)
        test_loader = torch.utils.data.DataLoader(dataset=test_dataset, shuffle=True, batch_size=Config.batch_size, num_workers=36,pin_memory=True)
        print("data loaded.")
        print("start training.")
        model = TandemMod(num_classes=2,vocab_zie=5, embedding_size=4,seq_len=5).to(device)
        optimizer = torch.optim.Adam(model.parameters(),lr = Config.learning_rate)
        loss_func = torch.nn.CrossEntropyLoss().to(device)
        train(model)
        
    elif run_mode=="test":
        print("test process.")
        x_test,y_test=load_data(args.test_data_mod,args.test_data_unmod,data_length=4e3)
        test_dataset = MyDataset(x_test,y_test)
        test_loader = torch.utils.data.DataLoader(dataset=test_dataset, shuffle=True, batch_size=Config.batch_size, num_workers=36,pin_memory=True)
        print("data loaded.")
        model= torch.load(args.pretrained_model)
        print("model loaded.")
        test(model)
         
    elif run_mode=="transfer":
        print("transfer learning process.")
        model = torch.load(args.pretrained_model)
        for name,child in (model.named_children()):
            if name.find("fc") !=-1:
                for param in child.parameters():
                    param.requires_grad=True
            else:
                for param in child.parameters():
                    param.requires_grad=False

        x_train,y_train=load_data(args.train_data_mod,args.train_data_unmod,data_length=4e5)
        x_test,y_test=load_data(args.test_data_mod,args.test_data_unmod,data_length=4e3)
        train_dataset = MyDataset(x_train,y_train)
        test_dataset = MyDataset(x_test,y_test)
        
        weights=make_weights_for_balanced_classes(train_dataset,2)
        weights = torch.DoubleTensor(weights)
        sampler = CustomWeightedRandomSampler(weights, len(weights))  
        
        train_loader = torch.utils.data.DataLoader(dataset=train_dataset,sampler=sampler, shuffle=True, batch_size=Config.batch_size,num_workers=36,pin_memory=True)
        test_loader = torch.utils.data.DataLoader(dataset=test_dataset, shuffle=True, batch_size=Config.batch_size, num_workers=36,pin_memory=True)
        print("data loaded.")
        print("start training.")
        model = TandemMod(num_classes=2,vocab_zie=5, embedding_size=4,seq_len=5).to(device)
        optimizer = torch.optim.Adam(model.parameters(),lr = Config.learning_rate)
        loss_func = torch.nn.CrossEntropyLoss().to(device)
        train(model)
        
    elif run_mode=="predict":
        print("predict process")
        X,Y=load_predict_data(args.predict_file)
       
        dataset=MyDataset(X,Y)
        dataloader=torch.utils.data.DataLoader(dataset=dataset,batch_size=20000)
        model= torch.load(args.pretrained_model)
        predict(model,dataloader)