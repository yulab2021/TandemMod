## TandemMod

![GitHub release (latest SemVer)](https://img.shields.io/badge/Version-v1.0-yellowgreen)
### Environment configuration
#### 

The following modules are needed to run TandemMod. You 
module | version
---|---
samtools | 1.3.1
minimap2 | 2.17-r941
python                               |3.7.3
h5py                               |2.9.0
statsmodels                        |0.10.0
joblib                        |0.16.0
pysam                         |0.16.0.1
tqdm                          |4.39.0
scikit-learn              |0.22
torch                     |1.9.1
scipy                     |1.6.3
guppy                     |6.1.5

You can install dependent modules manually or install them through yaml file.
```
conda create env -f TandemMod.yaml
```
---
### Data preprocessing
#### Basecalling
Guppy, as well as the now deprecated Albacore and all other basecallers, uses files in fast5 format as input. In addition to basecalling, Guppy also performs filtering of low quality reads, clipping of Oxford Nanopore adapters.
```
guppy_basecaller -i data/fast5 -s data/guppy --num_callers 40 --recursive --fast5_out --config rna_r9.4.1_70bps_hac.cfg
```
#### Multi-fast5 to single_fast5
If fast5 reads are stored at multi-reads format, ont_fast5_api is recommended to convert multi-fast5 reads to single-fast5 reads. The ont_fast5_api is available on PyPI and can be installed via pip:
```
pip install ont-fast5-api
multi_to_single_fast5 -i data/guppy -s data/guppy_single -t 40 --recursive 
```
#### Resquiggle
The re-squiggle algorithm is the basis for the Tombo framework. The re-squiggle algorithm takes as input a read file (in FAST5 format) containing raw signal and associated base calls. The base calls are mapped to a genome or transcriptome reference and then the raw signal is assigned to the reference sequence based on an expected current level model.
```
tombo resquiggle --overwrite --basecall-group Basecall_1D_001 data/guppy_single  data/reference_transcripts.fasta --processes 40 --fit-global-scale --include-event-stdev
```
#### Extract features
minimap2 is used to map basecalled sequences to reference transcripts.
```
cat data/guppy/*.fastq >data/m5C.fastq
minimap2 -ax map-ont data/reference_transcripts.fasta data/m5C.fastq >data/m5C.sam
```
Extract signal files and features from resquiggled fast5 files using python scripts.
```
find data/guppy_single -name "*.fast5" >data/files.txt 
python script/extract_signal_from_fast5.py --cpu=40 --fl=data/files.txt -o data/m5C --clip=10
python extract_feature_from_signal.py -sam_file data/m5C.sam -reference data/reference_transcripts.fasta -signal_file data/m5C.signal.tsv -clip 10 -label m5C -out_dir data
```

---
### Train your own model

```
python TandemMod.py -run_mode train \
  -new_model model/m5C.pkl \
  -train_data_mod data/m5C_train.tsv \
  -train_data_unmod data/C_train.tsv \
  -test_data_mod data/m5C_test.tsv \
  -test_data_unmod data/C_test.tsv \
```
---
### Predict modifications using pretrained model.
Pretained models were saved in directory ./models. You can load pretrained models to predict modification for new data.
```
python TandemMod.py -run_mode predict \
  -pretrained_model model/m6A.pkl \
  -predict_file data/WT.feature.tsv
```

### Transfer learning to new modification.
In transfer learning mode, you can used a pretrained model to retrain the bottom layers to identify new modification.
```
python TandemMod.py -run_mode transfer \
  -pretrained_model model/m6A.pkl \
  -new_model model/m6Am.pkl
  -train_data_mod data/m6Am_train.tsv \
  -train_data_unmod data/A_train.tsv \
  -test_data_mod data/m6Am_test.tsv \
  -test_data_unmod data/A_test.tsv \
```
---
### Contact
TandemMod is maintained by Yu lab.
If you use TandemMod in your research, please cite *************************.


