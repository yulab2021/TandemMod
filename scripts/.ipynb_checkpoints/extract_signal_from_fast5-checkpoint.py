from __future__ import absolute_import
import argparse
import os,sys,re,h5py
import multiprocessing

import numpy as np
from tqdm import tqdm
##################################

def get_base_quality():
    
    base_quality_dict=dict()
    reference_dict=dict()

    with open(args.reference) as f:
        for line in f:
            line=line.rstrip()
            if ">" in line:
                
                contig=line.split()[0][1:]
                reference_dict[contig]=""
            else:
                sequence=line
                reference_dict[contig]=reference_dict[contig]+sequence

    f=open(args.sam)

    k=0
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
            base_quality_list=[ord(char)-33 for char in base_quality_string]   #ascii string to int list
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
                        mapped_base_quality_list.extend([0]*num)  #padding 0 for deletions, as placeholder
                        temp=""

                
                if flag=="0":

                    base_quality_dict[id]=[chr,start,reference_dict[chr][start-1:start+len(new_seq)-1],"|".join([str(x) for x in mapped_base_quality_list])]
                
    f.close()
    return base_quality_dict


def get_label_raw(fast5_fn, basecall_group, basecall_subgroup,reverse = False):
	##Open file

	try:
		fast5_data = h5py.File(fast5_fn, 'r')
	except IOError:
		raise IOError('Error opening file. Likely a corrupted file.')

	# Get raw data
	try:
		raw_dat = list(fast5_data['/Raw/Reads/'].values())[0]
		# raw_attrs = raw_dat.attrs
		raw_dat = raw_dat['Signal'][()]
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
	if len(raw_dat) > 99999999:
		raise ValueError(fast5_fn + ": max signal length exceed 99999999")
	if any(len(vals) <= 1 for vals in (corr_data, raw_dat)):
		raise NotImplementedError(('One or no segments or signal present in read.'))
	event_starts = corr_data['start'] + corr_start_rel_to_raw
	event_lengths = corr_data['length']
	event_bases = corr_data['base']
	fast5_data.close()

	return (raw_dat, event_bases, event_starts, event_lengths)
	#######################################
def search_RRACH(signal,start,length,base,fn_string):
	uniq_arr=np.unique(signal)
	
	raw_signal = signal.tolist()
	kmer_fillter="[AG][AG]AC[ACT]"
	line=""

	signal_list=[]
	base="".join([x.decode() for x in base]) 

	for indx in range(len(length)):
		single_base_signal=raw_signal[start[indx]:start[indx]+length[indx]]
 		    
		signal_list.append("*".join([str(x) for x in raw_signal[start[indx]:start[indx]+length[indx]]]))


	line="%s\t%s\t%s\n"%(str(fn_string).split("/")[-1].split(".")[0],base,"|".join(signal_list))
                                                                                                                                                                                                         
	return line
def extract_file(input_file):
	try:
		(raw_data, raw_label, raw_start, raw_length ) = get_label_raw(input_file, FLAGS.basecall_group,FLAGS.basecall_subgroup)

	except Exception as e:

		return False, (None, None)
	raw_data = raw_data[::-1]

	total_seq=""
	line=search_RRACH(raw_data,raw_start,raw_length,raw_label,input_file)

	return line,total_seq

def subcon(fls):
	base_quality_dict=get_base_quality()
	if True:
		results=[]

		pool = multiprocessing.Pool(processes = int(FLAGS.cpu))

		for fl in fls:


			result=pool.apply_async(extract_file,(fl,))
			results.append(result)
		pool.close()

		pbar=tqdm(total=len(fls),position=0, leave=True)
		nums=[]
		for result in results:
			num,seq=result.get()

			if num:

				nums.append(num)
			pbar.update(1)

		pool.join()

	else:
		nums=[]
		for fl in fls:

			num,seq=extract_file(fl)
			if num:
				nums.append(num)
	output=open(FLAGS.output+".signal.tsv","w")
 

	#rename
	sequencing_summary_file="/home/wuyou/Projects/m6A/data/guppy_non_1/sequencing_summary.txt"
	sequencing_summary_file="/home/wuyou/Projects/human_HEK293T_nanopore/data/HEK293T-KO-rep1_guppy/sequencing_summary.txt"

	read_id_dict=dict()
	with open(sequencing_summary_file) as f:

		for line in f:
			if "filename" in line:
				continue
			filename=line.split("\t")[0].split(".")[0]
			read_id=line.split("\t")[1]
			read_id_dict[filename]=read_id

    
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


if __name__ == "__main__":
	parser = argparse.ArgumentParser(description='Extract fast5 files.')

	parser.add_argument('-o', '--output', required = True, help="Output file")
	parser.add_argument('--basecall_group',default = "RawGenomeCorrected_000",
                        help='The attribute group to extract the training data from. e.g. RawGenomeCorrected_000')

	parser.add_argument('--basecall_subgroup', default='BaseCalled_template',help='Basecall subgroup Nanoraw resquiggle into. Default is BaseCalled_template')
	parser.add_argument('--cpu', default=1,help='cpu number usage')
	parser.add_argument('--clip', default=10,help='reads first and last N base signal drop out')
	parser.add_argument('--fl',required = True,help='files comtained fast5 path, one line, one fast5 file')
	parser.add_argument('-reference',required = True,help='files comtained fast5 path, one line, one fast5 file')
	parser.add_argument('-sam',required = True,help='files comtained fast5 path, one line, one fast5 file')
	args = parser.parse_args(sys.argv[1:])

	global FLAGS
	FLAGS = args
	total_fl=[]
	for i in open(FLAGS.fl,"r"):
		total_fl.append(i.rstrip())
	subcon(total_fl)
