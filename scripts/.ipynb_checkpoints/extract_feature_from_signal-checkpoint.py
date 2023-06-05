import os
import re
import random
import argparse
import traceback

import numpy as np
from scipy import interpolate
from statsmodels import robust


def reverse_compliment(seq):
    seq=seq.replace("A","t")
    seq=seq.replace("G","c")
    seq=seq.replace("C","g")
    seq=seq.replace("T","a")
    seq=seq.replace("N","N")
    return seq[::-1].upper()

def interp(x):

    l=len(x)
    y=x
    x=np.linspace(0,l-1,l)
    f=interpolate.interp1d(x,y,kind='slinear')
    x_new=np.linspace(0,l-1,100)
    y_new=f(x_new)
    y_new=np.around(y_new,4)
    return y_new.tolist()



def signal_to_file2(out_dir,file_name,line):
    if not os.path.exists(out_dir):
        os.makedirs(out_dir)
    
    with open(out_dir+"/"+args.label,"a") as f:
            f.writelines(line)

def signal_to_file(out_dir,file_name,line):
    if not os.path.exists(out_dir+"/test/"+args.label):
        os.makedirs(out_dir+"/test/"+args.label)
    if not os.path.exists(out_dir+"/train/"+args.label):
        os.makedirs(out_dir+"/train/"+args.label)
    if random.random() <= 0.2:
        with open(out_dir+"/test/"+args.label+"/"+file_name,"w") as f:
            f.writelines(line)
    else:
        with open(out_dir+"/train/"+args.label+"/"+file_name,"w") as f: 
            f.writelines(line)


def extract_5mer_features(signal_file):
    
    base_quality_dict=dict()
    
    kmer_fillter="[ACGT][ACGT]A[ACGT][ACGT]"

    
    out=open(args.out_dir+"/"+args.label,"w")

    #rename
    sequencing_summary_file="/home/wuyou/Projects/m6A/data/guppy_non_2/sequencing_summary.txt"
    read_id_dict=dict()
    with open(sequencing_summary_file) as f:
        for line in f:
            if "filename" in line:
                continue
            filename=line.split("\t")[0].split(".")[0]
            read_id=line.split("\t")[1]
            read_id_dict[ filename]=read_id


    clip=10 
    count=0
    scaling="median_mad"
    
    with open(signal_file) as f:
        
        for line in f:
            try:
                line=line.rstrip()
                items=line.split("\t")
                read_id=items[0]
                chr= items[1]
                
                start=int(items[2])
                reference_sequence=items[3]
                #read_id=read_id_dict[read_id]          #for rename
                base_quality_list=items[4].split("|")
                sequence=line.split("\t")[5]
                if len(sequence)<500:          #for m5C_mix data selection
                    continue
                
                signal_string=line.split("\t")[6]
                             
                raw_signal=[base_signal_string.split("*") for base_signal_string in signal_string.split("|")]   #string list
                            
                full_length_signal=np.array([x for x in re.split('\*|\|',signal_string)],dtype=int)   #for normlization
                full_length_signal_min=min(full_length_signal)
                full_length_signal_max=max(full_length_signal)
                full_length_signal_uniq=np.unique(full_length_signal)
                
                full_length_mean=np.mean(full_length_signal)
                full_length_std=np.std(full_length_signal)
                
                for index in range(clip,len(sequence)-clip):
                    
                    kmer_sequence=sequence[index-2:index+3]
                    
                    if len([x.start() for x in re.finditer(kmer_fillter,kmer_sequence)])==0:
                        continue
                    if sequence[index-2:index+3] != reference_sequence[index-2:index+3]:
                        #print("sequence inconsitant error",read_id,sequence[index-2:index+3],reference_sequence[index-2:index+3])
                        continue

                    kmer_raw_signal=raw_signal[index-2:index+3]
                    kmer_raw_signal=[np.array(x,dtype=float) for x in kmer_raw_signal]
                    
                    if scaling=="min_max":
                        kmer_raw_signal=[(x-full_length_signal_min)/(full_length_signal_max-full_length_signal_min) for x in kmer_raw_signal]     #min_max scaling
                    elif scaling=="zscore":
                        kmer_raw_signal=[(x-full_length_mean)/full_length_std for x in kmer_raw_signal]     #z-score scaling
                    elif scaling=="median_mad":
                        kmer_raw_signal=[(x-np.median(full_length_signal_uniq))/robust.mad(full_length_signal_uniq) for x in kmer_raw_signal]     #median_mad scaling
                    
                    mean=[np.round(np.mean(x),3) for x in kmer_raw_signal]
                    std=[np.round(np.std(x),3) for x in kmer_raw_signal]
                    median=[np.round(np.median(x),3) for x in kmer_raw_signal]
                    length=[len(x) for x in kmer_raw_signal]
                    kmer_base_quality=base_quality_list[index-2:index+3]
                    
                    for i in range(5):
                        kmer_raw_signal[i]=interp(kmer_raw_signal[i])
                        
                    line="%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n"%(read_id,
                                                                                     chr,
                                                                                     start+index,
                                                                                     kmer_sequence,
                                                                                     "|".join([str(x) for x in  mean]),
                                                                                     "|".join([str(x) for x in std]),
                                                                                     "|".join([str(x) for x in  median]),
                                                                                     "|".join([str(x) for x in length]),
                                                                                     "|".join([str(x) for x in  kmer_base_quality]),
                                                                                     "|".join([str(x) for x in kmer_raw_signal[0]]),
                                                                                     "|".join([str(x) for x in kmer_raw_signal[1]]),
                                                                                     "|".join([str(x) for x in kmer_raw_signal[2]]),
                                                                                     "|".join([str(x) for x in kmer_raw_signal[3]]),
                                                                                     "|".join([str(x) for x in kmer_raw_signal[4]])
                                                                                    )
                    file_name="%s_%s_%s_%s.feature" %(read_id,chr,start+index,kmer_sequence)
                    count+=1
                
               
                    if count % 1e4 ==0:
                        print(count)
                    #signal_to_file2(out_dir,file_name,line)

                    out.writelines(line)     
                if count>4e5:
                    pass
            except Exception as e:
                
                print(traceback.print_exc())
    print("done!")
    out.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Extract feature from signal.')

    parser.add_argument('-signal_file', default='BaseCalled_template',help='Basecall subgroup Nanoraw resquiggle into. Default is BaseCalled_template')

    parser.add_argument('-clip', default=10,help='reads first and last N base signal drop out')

    parser.add_argument('-label', required=True, help='modified or unmodified')
    parser.add_argument('-out_dir',required=True,help='output directory')

    args = parser.parse_args()
    
    extract_5mer_features(args.signal_file)   
