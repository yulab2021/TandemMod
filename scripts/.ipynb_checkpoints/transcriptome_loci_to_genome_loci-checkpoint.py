#fasta="/home/wuyou/Projects/Osativa_nanopore/ref/Osativa_323_v7.0.fa"
#gff="/home/wuyou/Projects/Osativa_nanopore/ref/Osativa_323_v7.0.gene_exons.gtf"


def get_sequence_dict_from_fasta(fasta):
    """
    Convert a fasta file into a dictionary of sequences.

    Args:
        fasta (str): The path to the fasta file.

    Returns:
        Dict[str, str]: A dictionary containing the sequence data, where the keys are chromosome names and the values
        are the corresponding sequences.

    Raises:
        None
    """
    sequence_dict={}
    chr="Chr0"
    sequence=""
    with open(fasta) as f:
        for line in f:

            line=line.rstrip()
            if ">" in line:
                sequence_dict[chr]=sequence
                sequence=""

                chr=line[1:]
                print(chr) 
            else:
                sequence+=line
    sequence_dict[chr]=sequence    
    return sequence_dict
    
# transcript_location_to_genome_location()

def get_exon_dict_from_gff(gff):
    """
    Extract exon information from a GFF file and return it as a dictionary.

    Args:
        gff (str): The path to the GFF file.

    Returns:
        Dict[str, List[List[int]]]: A dictionary containing exon information, where the keys are transcript IDs and
        the values are lists of exon coordinates represented as [start, end] pairs.

    Raises:
        None
    """
    exon_dict={}
    chr_dict={}
    strand_dict={}
    with open(gff) as f:
        for line in f:
            type=line.split("\t")[2]
            if type=="exon":
                chr=line.split('\t')[0]
                transcript_id=line.split('"')[1]
                start=int(line.split("\t")[3])
                end=int(line.split("\t")[4])
                strand=line.split("\t")[6]
                if transcript_id not in exon_dict:
                    exon_dict[transcript_id]=[]
                    chr_dict[transcript_id]=chr
                    strand_dict[transcript_id]=strand
                exon_dict[transcript_id].append([start,end])
    return exon_dict

def revere_complement(seq):
    """
    Generate the reverse complement of a DNA sequence.

    Args:
        seq (str): The DNA sequence.

    Returns:
        str: The reverse complement of the input sequence.

    Raises:
        None
    """
    seq=seq.replace("A","t")
    seq=seq.replace("C","g")
    seq=seq.replace("G","c")
    seq=seq.replace("T","a")
    return seq.upper()[::-1]


transcript_location="/home/wuyou/Projects/paper/rice/predict/NaCl_C.predict.txt"
genome_location="/home/wuyou/Projects/paper/rice/predict/NaCl_C.predict.genome_loc.tsv"
out=open(genome_location,"w")

count=0
with open(transcript_location) as f:
    for line in f:
        count+=1
        if count % 1e7==0:
            print(count)
        items=line.rstrip().split("\t")
        transcript_id=items[0]
        transcript_location=int(items[1])
        motif=items[2]
        mod=items[4]
        probability=items[5]
        
        exons=exon_dict[transcript_id]
        strand=strand_dict[transcript_id]
        if strand=="+":
            summation=0
            for exon in exons:
                start=exon[0]
                end=exon[1]
                if transcript_location>summation+end-start+1:
                    summation=summation+end-start+1
                else:
                    chr_location=transcript_location-summation+start-1
                    break

            print("%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s" %(transcript_id,transcript_location,motif,chr_dict[transcript_id],chr_location,sequence_dict[chr_dict[transcript_id]][chr_location-3:chr_location+2],mod,probability),file=out)
        if strand=="-":
            summation=0
            for exon in exons[::-1]:       #reverse
                start=exon[0]
                end=exon[1]
                if transcript_location>summation+end-start+1:
                    summation=summation+end-start+1
                else:
                    chr_location=end-(transcript_location-summation)+1
                    break

            print("%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s" %(transcript_id,transcript_location,motif,chr_dict[transcript_id],chr_location,revere_complement(sequence_dict[chr_dict[transcript_id]][chr_location-3:chr_location+2]),mod,probability),file=out)


#merge
genome_location="rice/predict/NaCl_C.predict.genome_loc.tsv"

count_dict={}
with open(genome_location) as f:
    count=0
    for line in f:
        count+=1
        if count % 1e7 == 0:
            print(count)
        line=line.rstrip()
        items=line.split("\t")
        id="|".join(items[0:6])

        mod=items[6]
        probability=float(items[7])

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

    out=open("rice/predict/NaCl_C.predict.genome_loc.merge.tsv","w")

    for id in count_dict:
        try:
            out.writelines("%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n" %(id.split("|")[0],
                                                                                        id.split("|")[1],
                                                                                        id.split("|")[2],
                                                                                        id.split("|")[3],
                                                                                        id.split("|")[4],
                                                                                        id.split("|")[5],
                                                                                        count_dict[id][0],
                                                                                        count_dict[id][1],
                                                                                        count_dict[id][2],
                                                                                        count_dict[id][3],
                                                                                        count_dict[id][4],
                                                                                        count_dict[id][5],
                                                                                       count_dict[id][6]))
        except:
            pass