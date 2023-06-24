import argparse



def merge(read_prediction,site_prediction):
    count_dict={}
    with open(read_prediction) as f:
        count=0
        for line in f:
            count+=1
            if count % 1e7 == 0:
                print(count)
            line=line.rstrip()
            items=line.split("\t")
            id="|".join(items[0:5])
    
            mod=items[5]
            probability=float(items[6])
    
            if id not in count_dict:
                count_dict[id]=[0,0,0,0,0,0,0]
            if  probability>=0.5:
                count_dict[id][0]=count_dict[id][0]+1
            if  probability>=0.6:
                count_dict[id][1]=count_dict[id][1]+1
            if  probability>=0.7:
                count_dict[id][2]=count_dict[id][2]+1
            if  probability>=0.8:
                count_dict[id][3]=count_dict[id][3]+1
            if  probability>=0.9:
                count_dict[id][4]=count_dict[id][4]+1
            if  probability>=0.95:
                count_dict[id][5]=count_dict[id][5]+1
    
    
            count_dict[id][6]=count_dict[id][6]+1

    with open(site_prediction,"w") as out:

        out.writelines("transcriptome_id\tsite\tchr\tsite\tmotif\tp_0.5\tp_0.6\tp_0.7\tp_0.8\tp_0.9\tp_0.95\ttotal\n")
        for id in count_dict:
            try:
                out.writelines("%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n" %(id.split("|")[0],
                                                                                    id.split("|")[1],
                                                                                    id.split("|")[2],
                                                                                    id.split("|")[3],
                                                                                    id.split("|")[4],
                                                                                    count_dict[id][0],
                                                                                    count_dict[id][1],
                                                                                    count_dict[id][2],
                                                                                    count_dict[id][3],
                                                                                    count_dict[id][4],
                                                                                    count_dict[id][5],
                                                                                    count_dict[id][6]))
            except:
                pass

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert read-level predictions to site-level predictions.')
    
    parser.add_argument('-i', '--input', required = True, help="Input file,transcriptome location.")
    parser.add_argument('-o', '--output', required = True, help="Output file, genome location.")

    args = parser.parse_args()
    
    merge(args.input,args.output)