from __future__ import absolute_import
import argparse
import os,sys,re,h5py
import multiprocessing

import numpy as np
from tqdm import tqdm


def get_base_quality(reference,sam):
    """
    This function parse base qualities from sam file.

    Args:
        reference (str): The path to reference transcripts, in fasta format.
        sam (str): Alignment results from minimap2.

    Returns:
        dict: A dictionary containing base quality and sequence info.
    """
    base_quality_dict=dict()
    
    reference_dict=dict()
    with open(reference) as f:
        for line in f:
            line=line.rstrip()
            if ">" in line:
                
                contig=line.split()[0][1:]
                reference_dict[contig]=""
            else:
                sequence=line
                reference_dict[contig]=reference_dict[contig]+sequence

    with open(sam) as f:
        for line in f:
    
            if line[0] != "@":
                items =line.split("\t")
                id=items[0]
                flag=items[1]
                chr =items[2]
                start=int(items[3])
                CIGAR=items[5]
                seq=items[9]
                base_quality_string=items[10]
                base_quality_list=[ord(char)-33 for char in base_quality_string]   
                #Convert ascii string to int list. 
                mapped_base_quality_list=[]
                
                if  chr != "*":
                    
                    temp=""
                    index=0
                    new_seq=""
                    for char in CIGAR:
                        temp+=char
                        if char=="H":
                            num=int(temp[:-1])
                            temp=""
                        elif char=="S":
                            num=int(temp[:-1])
                            index+=num
                            temp=""
                        elif char=="M":
                            num=int(temp[:-1])
                            new_seq+=seq[index:index+num]
                            mapped_base_quality_list.extend(base_quality_list[index:index+num])
                            index+=num
                            temp=""
                        elif char=="I":
                            num=int(temp[:-1])
                            index+=num
                            temp=""
                        elif char=="D":
                            num=int(temp[:-1])
                            new_seq+="N"*num
                            mapped_base_quality_list.extend([0]*num)  
                            #padding 0 for deletions, as placeholder
                            temp=""

                    
                    if flag=="0":
                    #DRS reads only map to sense strand.
                        base_quality_dict[id] = [chr,start,reference_dict[chr][start-1:start+len(new_seq)-1],"|".join([str(x) for x in mapped_base_quality_list])]
                    

    return base_quality_dict


def get_events(fast5_path, basecall_group, basecall_subgroup,reverse = False):
	"""
    This function extract events from fast5 file.

    Args:
        fast5_path (str): The path to fast5 file.
        basecall_group (str): The default group from tombo output is "RawGenomeCorrected_000".
	
        

    Returns:
        dict: A dictionary containing base quality and sequence info.
    """

	try:
		fast5_data = h5py.File(fast5_path, 'r')
	except IOError:
		raise IOError('Error opening file. Likely a corrupted file.')

	# Get raw data
	try:
		raw_data = list(fast5_data['/Raw/Reads/'].values())[0]
		# raw_attrs = raw_data.attrs
		raw_data = raw_data['Signal'][()]
		# ~ .value
	except:
		raise RuntimeError(
			'Raw data is not stored in Raw/Reads/Read_[read#] so ' +
			'new segments cannot be identified.')

	# Read corrected data
	try:

		corr_data = fast5_data['/Analyses/'+basecall_group +'/' + basecall_subgroup + '/Events']
		corr_attrs = dict(list(corr_data.attrs.items()))
		corr_data = corr_data[()]

	except Exception as e:
        
		raise RuntimeError(('Corrected data not found.'))

	# Reading extra information
	corr_start_rel_to_raw = corr_attrs['read_start_rel_to_raw']  #
	if len(raw_data) > 99999999:
		raise ValueError(fast5_fn + ": max signal length exceed 99999999")
	if any(len(vals) <= 1 for vals in (corr_data, raw_data)):
		raise NotImplementedError(('One or no segments or signal present in read.'))
	event_starts = corr_data['start'] + corr_start_rel_to_raw
	event_lengths = corr_data['length']
	event_bases = corr_data['base']
	fast5_data.close()

	return raw_data, event_bases, event_starts, event_lengths

    
def extract_signal(fast5_path):
	try:
		signal, sequence, signal_start, signal_length  = get_events(fast5_path, args.basecall_group,args.basecall_subgroup)
	except Exception as e:
		return False, (None, None)
        
	signal = signal[::-1]
	signal = signal.tolist()
	signal_list=[]
	sequence="".join([x.decode() for x in sequence]) 

	for i in range(len(signal_length)):
		signal_list.append("*".join([str(x) for x in signal[signal_start[i]:signal_start[i]+signal_length[i]]]))
        
	line="%s\t%s\t%s\n"%(str(fast5_path).split("/")[-1].split(".")[0],sequence,"|".join(signal_list))     
    
	return line

def subcon(fls):
	base_quality_dict=get_base_quality(args.reference,args.sam)
	if True:
		results=[]
		pool = multiprocessing.Pool(processes = int(args.cpu))

		for fl in fls:

			result=pool.apply_async(extract_signal,(fl,))
			results.append(result)
		pool.close()

		pbar=tqdm(total=len(fls),position=0, leave=True)
		nums=[]
		for result in results:
			num=result.get()

			if num:
				nums.append(num)
			pbar.update(1)

		pool.join()

	else:
		nums=[]
		for fl in fls:

			num=extract_file(fl)
			if num:
				nums.append(num)
	output=open(args.output+".signal.tsv","w")
 
	for num in nums:

		try:
			id,sequence,signal=num.split("\t")

			if "run" in id:

				id=read_id_dict[id]

			line="%s\t%s\t%s\t%s\t%s\t%s\t%s" %(id,base_quality_dict[id][0],base_quality_dict[id][1],
                                                base_quality_dict[id][2],base_quality_dict[id][3],sequence,signal)

			output.writelines(line)
		except Exception as e:
			print(e)
			pass

	output.close()

def main():

    fast5_files=[]
    with open(args.fast5) as f:
        for line in f:
            fast5_files.append(line.rstrip())
            
	subcon(fast5_files)


if __name__ == "__main__":
	parser = argparse.ArgumentParser(description='Extract current signal from fast5 files.')

	parser.add_argument('-o', '--output', required = True, help="Output file.")
	parser.add_argument('--basecall_group',default = "RawGenomeCorrected_000", help='The attribute group to extract the training data from. e.g. RawGenomeCorrected_000.')
	parser.add_argument('--basecall_subgroup', default='BaseCalled_template', help='Basecall subgroup Nanoraw resquiggle into. Default is BaseCalled_template.')
	parser.add_argument('-p','--process', default=1,help='Process.')
	parser.add_argument('--clip', default=10,help='The number of bases to be discarded at both ends.')
	parser.add_argument('--fast5',required = True,help='The file containing fast5 path.')
	parser.add_argument('-r','--reference',required = True,help='Reference transcripts fasta file.')
	parser.add_argument('--sam',required = True,help='Sam file.')
	args = parser.parse_args()

    main()

	
