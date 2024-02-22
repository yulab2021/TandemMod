import argparse

#fasta="/home/wuyou/Projects/Osativa_nanopore/ref/Osativa_323_v7.0.fa"
#gff="/home/wuyou/Projects/Osativa_nanopore/ref/Osativa_323_v7.0.gene_exons.gtf"


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
            if line[0] == "#":
                continue
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
    return exon_dict, chr_dict, strand_dict

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



def convert_transcriptome_loc_to_genome_loc(transcript_location,genome_location):
    with open(genome_location,"w") as out:
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
        
                    print("%s\t%s\t%s\t%s\t%s\t%s\t%s" %(transcript_id,transcript_location,chr_dict[transcript_id],chr_location,motif,mod,probability),file=out)
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
        
                    print("%s\t%s\t%s\t%s\t%s\t%s\t%s" %(transcript_id,transcript_location,chr_dict[transcript_id],chr_location,motif,mod,probability),file=out)




if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Convert transcriptome location to genome location.')
    
    parser.add_argument('-i', '--input', required = True, help="Input file,transcriptome location.")
    parser.add_argument('-o', '--output', required = True, help="Output file, genome location.")
    parser.add_argument('-g', '--gff', required = True, help="Annotation file.")
    args = parser.parse_args()
    
    exon_dict, chr_dict, strand_dict=get_exon_dict_from_gff(args.gff)

    convert_transcriptome_loc_to_genome_loc(args.input,args.output)
    