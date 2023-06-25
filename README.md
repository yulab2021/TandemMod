## TandemMod
---
![GitHub release (latest SemVer)](https://img.shields.io/badge/Version-v1.0-yellowgreen) ![GitHub release (latest SemVer)](https://img.shields.io/badge/Language-python-yellowgreen)

TandemMod is a deep learning framework for detecting RNA modifications in nanopore direct RNA sequencing (DRS) data. It offers three modes: de novo training, transfer learning, and prediction. Researchers can train from scratch, fine-tune pre-trained models, or apply existing models for predictions. TandemMod achieves high accuracy and can be used to identify RNA modifications in various species and conditions. It provides a user-friendly solution for studying RNA modifications.

To use TandemMod, you can follow the instructions below. The detailed usage and run examples of the three modes are available in our [document](https://yulab2021.github.io/TandemMod_document).

### Environment configuration
#### The following modules are needed to run TandemMod. 

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
guppy                     |6.1.5
tombo                     |1.5.1
ont_vbz_hdf_plugin        |1.0.1
ont-fast5-api             |4.1.1

You can install dependent modules manually or install them through yaml file.
```
conda env create -f TandemMod.yaml
```
---
### Data preprocessing
#### Basecalling
Guppy is used for basecalling. Guppy, as well as the now deprecated Albacore and all other basecallers, uses files in fast5 format as input. In addition to basecalling, Guppy also performs filtering of low quality reads, clipping of Oxford Nanopore adapters.
```
guppy_basecaller -i demo/fast5 -s demo/guppy --num_callers 40 --recursive --fast5_out --config rna_r9.4.1_70bps_hac.cfg
```
#### Multi-fast5 to single_fast5
If fast5 reads are stored at multi-reads format, ont_fast5_api is recommended to convert multi-fast5 reads to single-fast5 reads. Usually, the size of multi-reads fast5 file is about 200-300M. The ont_fast5_api is available on PyPI and can be installed via pip:
```
pip install ont-fast5-api
multi_to_single_fast5 -i demo/guppy -s demo/guppy_single -t 40 --recursive 
```
#### Resquiggle
The re-squiggle algorithm is the basis for the Tombo framework. The re-squiggle algorithm takes as input a read file (in FAST5 format) containing raw signal and associated base calls. The base calls are mapped to a genome or transcriptome reference and then the raw signal is assigned to the reference sequence based on an expected current level model.
```
tombo resquiggle --overwrite --basecall-group Basecall_1D_001 demo/guppy_single  demo/reference_transcripts.fasta --processes 40 --fit-global-scale --include-event-stdev
```
#### Extract features
minimap2 is used to map basecalled sequences to reference transcripts.
```
cat demo/guppy/pass/*.fastq >demo/m6A.fastq
minimap2 -ax map-ont demo/reference_transcripts.fasta demo/m6A.fastq >demo/m6A.sam
```
Extract signal files and features from resquiggled fast5 files using the following python scripts.
```
python scripts/extract_signal_from_fast5.py -p=40 --fast5 demo/guppy_single --reference demo/reference_transcripts.fasta --sam demo/m6A.sam --output demo/m6A.signal.tsv --clip 10
python scripts/extract_feature_from_signal.py  -signal_file demo/m6A.signal.tsv -clip 10 --output demo/m6A.feature.tsv
```

---
Three different modes has been developed: de novo training, transfer learning, and prediction. The mode of de novo training allows users to train the TandemMod model from scratch using their own datasets. In the prediction mode, users can apply a pre-trained or fine-tuned TandemMod model to identify modifications in their dataset. In the transfer learning mode, users can fine-tune a pre-trained TandemMod model using their own data. 
### Train your own model
```
python scripts/TandemMod.py --run_mode train \
  --new_model model/m5C.pkl \
  --train_data_mod data/m5C_train.tsv \
  --train_data_unmod data/C_train.tsv \
  --test_data_mod data/m5C_test.tsv \
  --test_data_unmod data/C_test.tsv \
  --epoch 100
```
---
### Predict modifications using pretrained model.
```
python scripts/TandemMod.py --run_mode predict \
  --pretrained_model model/m6A.pkl \
  --feature_file data/WT.feature.tsv
  --predict_result data/WT.prediction.tsv
```

### Transfer learning to new modification.
In transfer learning mode, you can used a pretrained model to retrain the bottom layers to identify new modification.
```
python scripts/TandemMod.py --run_mode transfer \
  --pretrained_model model/m6A.pkl \
  --new_model model/m6Am.pkl
  --train_data_mod data/m6Am_train.tsv \
  --train_data_unmod data/A_train.tsv \
  --test_data_mod data/m6Am_test.tsv \
  --test_data_unmod data/A_test.tsv \
  --epoch 100
```
---
### Contact
TandemMod is maintained by Yu lab.
If you use TandemMod in your research, please cite *************************.


