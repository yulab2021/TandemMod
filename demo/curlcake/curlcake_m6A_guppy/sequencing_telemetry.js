[
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 12, 
                "pass": 10
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 22, 
                "mean": 6.751950263977051, 
                "sum": 148.54290771484375
            }, 
            "read_len_events_sum_temp": 136267, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 22, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 22, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 7000.0
                }, 
                {
                    "count": 3, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 22, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 22, 
                "mean": 94.91719055175781, 
                "sum": 2088.17822265625
            }, 
            "strand_sd_pa": {
                "count": 22, 
                "mean": 13.8878812789917, 
                "sum": 305.53338623046875
            }
        }, 
        "channel_count": 21, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 3447.69189453125, 
        "levels_sums": {
            "count": 22, 
            "mean": 239.62635803222656, 
            "open_pore_level_sum": 5271.77978515625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 22, 
        "reads_per_channel_dist": [
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 20, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 207, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 345, 
                "count": 2
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 1
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8c1afe39-7fe8-4b74-874b-1472a81cca46", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 12
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 19, 
                "mean": 6.9258198738098145, 
                "sum": 131.590576171875
            }, 
            "read_len_events_sum_temp": 100597, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 19, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 19, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 3, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 19, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 19, 
                "mean": 93.57661437988281, 
                "sum": 1777.9556884765625
            }, 
            "strand_sd_pa": {
                "count": 19, 
                "mean": 13.728370666503906, 
                "sum": 260.83905029296875
            }
        }, 
        "channel_count": 18, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 7120.69970703125, 
        "levels_sums": {
            "count": 19, 
            "mean": 240.9085693359375, 
            "open_pore_level_sum": 4577.2626953125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 19, 
        "reads_per_channel_dist": [
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 124, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 2
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 391, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 1
            }, 
            {
                "channel": 504, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 2, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "254d86f3-5349-4b33-b16b-64b5d6bf67f8", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 12, 
                "mean": 7.251163005828857, 
                "sum": 87.01395416259766
            }, 
            "read_len_events_sum_temp": 75673, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 12, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 12, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 12, 
                "mean": 89.73059844970703, 
                "sum": 1076.7672119140625
            }, 
            "strand_sd_pa": {
                "count": 12, 
                "mean": 13.493782043457031, 
                "sum": 161.92538452148438
            }
        }, 
        "channel_count": 12, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 10542.546875, 
        "levels_sums": {
            "count": 12, 
            "mean": 237.12255859375, 
            "open_pore_level_sum": 2845.470703125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 12, 
        "reads_per_channel_dist": [
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "61768f0c-6c2d-4177-9d2c-6317ef86960c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 6.665660381317139, 
                "sum": 73.322265625
            }, 
            "read_len_events_sum_temp": 60297, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 4, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 92.11962127685547, 
                "sum": 1013.3157958984375
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 13.574823379516602, 
                "sum": 149.32305908203125
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 14269.9921875, 
        "levels_sums": {
            "count": 11, 
            "mean": 229.08316040039062, 
            "open_pore_level_sum": 2519.914794921875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 434, 
                "count": 1
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7bd5955d-3456-4371-acce-904f119b1b0a", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 10, 
                "pass": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 6.125405788421631, 
                "sum": 85.75568389892578
            }, 
            "read_len_events_sum_temp": 71087, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 14, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 14, 
                "mean": 89.26306915283203, 
                "sum": 1249.6829833984375
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 12.068517684936523, 
                "sum": 168.95924377441406
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 17699.953125, 
        "levels_sums": {
            "count": 14, 
            "mean": 222.4644012451172, 
            "open_pore_level_sum": 3114.501708984375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 14, 
        "reads_per_channel_dist": [
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 1
            }, 
            {
                "channel": 273, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "533cb2f2-fca1-4a18-9fca-9d9d4f58e4f8", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5, 
                "pass": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 6.781381130218506, 
                "sum": 74.5951919555664
            }, 
            "read_len_events_sum_temp": 89179, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 14000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 92.1063003540039, 
                "sum": 1013.1693115234375
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 12.788840293884277, 
                "sum": 140.67724609375
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 20258.30078125, 
        "levels_sums": {
            "count": 11, 
            "mean": 242.52259826660156, 
            "open_pore_level_sum": 2667.74853515625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 386, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7d59b41a-5a19-4b0b-a127-60f1b20fa1cb", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5, 
                "pass": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 7.0136003494262695, 
                "sum": 77.14960479736328
            }, 
            "read_len_events_sum_temp": 125975, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 11, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 11, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 2, 
                    "length": 10000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 1, 
                    "length": 20000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 11, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 11, 
                "mean": 91.50682830810547, 
                "sum": 1006.5751342773438
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 13.48157024383545, 
                "sum": 148.29727172851562
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 24854.974609375, 
        "levels_sums": {
            "count": 11, 
            "mean": 237.26939392089844, 
            "open_pore_level_sum": 2609.96337890625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 11, 
        "reads_per_channel_dist": [
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6ab539b2-f0ca-4cff-98e7-01341488bdaf", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6, 
                "pass": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 12, 
                "mean": 6.8276801109313965, 
                "sum": 81.932159423828125
            }, 
            "read_len_events_sum_temp": 64542, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 12, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 12, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 3, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 12, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 12, 
                "mean": 92.4049301147461, 
                "sum": 1108.859130859375
            }, 
            "strand_sd_pa": {
                "count": 12, 
                "mean": 13.640320777893066, 
                "sum": 163.68385314941406
            }
        }, 
        "channel_count": 12, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 28614.521484375, 
        "levels_sums": {
            "count": 12, 
            "mean": 220.49395751953125, 
            "open_pore_level_sum": 2645.927490234375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 12, 
        "reads_per_channel_dist": [
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 273, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 504, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 8, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3a2b749f-11d2-4f05-8a5d-665d70f6e63f", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 6.492835521697998, 
                "sum": 51.942684173583984
            }, 
            "read_len_events_sum_temp": 42398, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 8, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 8, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 8, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 8, 
                "mean": 97.88792419433594, 
                "sum": 783.1033935546875
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 13.46325397491455, 
                "sum": 107.7060317993164
            }
        }, 
        "channel_count": 8, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 32265.931640625, 
        "levels_sums": {
            "count": 8, 
            "mean": 245.3894500732422, 
            "open_pore_level_sum": 1963.1156005859375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 8, 
        "reads_per_channel_dist": [
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6d939f50-b0c3-4fc2-a296-a2031f3692a1", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 6.787567138671875, 
                "sum": 47.512969970703125
            }, 
            "read_len_events_sum_temp": 45229, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 17000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 93.34522247314453, 
                "sum": 653.41656494140625
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 13.272229194641113, 
                "sum": 92.90560150146484
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 34698.98046875, 
        "levels_sums": {
            "count": 7, 
            "mean": 244.0048370361328, 
            "open_pore_level_sum": 1708.0338134765625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 7, 
        "reads_per_channel_dist": [
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 10, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0c9ed0ff-3d0f-4d11-9c4c-c70b2b050d68", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 6.324030876159668, 
                "sum": 25.296123504638672
            }, 
            "read_len_events_sum_temp": 32795, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 4, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 4, 
                "mean": 92.099639892578125, 
                "sum": 368.3985595703125
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 13.921186447143555, 
                "sum": 55.68474578857422
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 38877.62890625, 
        "levels_sums": {
            "count": 4, 
            "mean": 241.7572784423828, 
            "open_pore_level_sum": 967.02911376953125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 4, 
        "reads_per_channel_dist": [
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 11, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0f728af0-c6ae-4e0e-86f2-de4d3dce2957", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.2890496253967285, 
                "sum": 7.2890496253967285
            }, 
            "read_len_events_sum_temp": 7933, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 90.41444396972656, 
                "sum": 90.41444396972656
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 12.016181945800781, 
                "sum": 12.016181945800781
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 41486.7890625, 
        "levels_sums": {
            "count": 1, 
            "mean": 236.42990112304688, 
            "open_pore_level_sum": 236.42990112304688
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 187, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "434f36ef-4181-481a-a573-4fc20c560ee0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 5.22833251953125, 
                "sum": 15.68499755859375
            }, 
            "read_len_events_sum_temp": 15452, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 3, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 100.76985931396484, 
                "sum": 302.3095703125
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 13.383877754211426, 
                "sum": 40.151634216308594
            }
        }, 
        "channel_count": 3, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 46510.19921875, 
        "levels_sums": {
            "count": 3, 
            "mean": 196.3033905029297, 
            "open_pore_level_sum": 588.91015625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 3, 
        "reads_per_channel_dist": [
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 13, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "66c25f8b-07ed-4549-be28-724ccd6e1cdd", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 5.656377792358398, 
                "sum": 11.312755584716797
            }, 
            "read_len_events_sum_temp": 5117, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 2000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 94.3709945678711, 
                "sum": 188.7419891357422
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 15.67965316772461, 
                "sum": 31.35930633544922
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 50345.390625, 
        "levels_sums": {
            "count": 2, 
            "mean": 246.5614013671875, 
            "open_pore_level_sum": 493.122802734375
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 35, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 14, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6b0f3a60-7c90-46d9-893a-9ea04143c65a", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 6.144923210144043, 
                "sum": 12.289846420288086
            }, 
            "read_len_events_sum_temp": 12309, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 93.34522247314453, 
                "sum": 186.69044494628906
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 13.847917556762695, 
                "sum": 27.69583511352539
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 52368.265625, 
        "levels_sums": {
            "count": 2, 
            "mean": 239.394775390625, 
            "open_pore_level_sum": 478.78955078125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 15, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "462355f2-7ed1-4dc3-9cf7-2369307f1b3d", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 2.984877586364746, 
                "sum": 2.984877586364746
            }, 
            "read_len_events_sum_temp": 40, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 7.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 117.67066192626953, 
                "sum": 117.67066192626953
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 2.344620943069458, 
                "sum": 2.344620943069458
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 56406.01953125, 
        "levels_sums": {
            "count": 1, 
            "mean": 233.18975830078125, 
            "open_pore_level_sum": 233.18975830078125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 483, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 16, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fd154acc-87d1-459c-89c4-1c1bb337e93e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 5.9262800216674805, 
                "sum": 11.852560043334961
            }, 
            "read_len_events_sum_temp": 8188, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 2, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 2, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 2, 
                "mean": 99.06023406982422, 
                "sum": 198.12046813964844
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 20.295623779296875, 
                "sum": 40.59124755859375
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 59416.05859375, 
        "levels_sums": {
            "count": 2, 
            "mean": 253.2698516845703, 
            "open_pore_level_sum": 506.5397033691406
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 2, 
        "reads_per_channel_dist": [
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 17, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "b7b12f1d-dcbd-49d1-bd01-3ef6ff271bef", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.85453462600708, 
                "sum": 7.85453462600708
            }, 
            "read_len_events_sum_temp": 15918, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 96.56907653808594, 
                "sum": 96.56907653808594
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 13.628108978271484, 
                "sum": 13.628108978271484
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 65230.03515625, 
        "levels_sums": {
            "count": 1, 
            "mean": 249.53680419921875, 
            "open_pore_level_sum": 249.53680419921875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 206, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 19, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "71e0ff1d-768a-4f0e-a41f-58e51a8e6628", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 6.397881984710693, 
                "sum": 6.397881984710693
            }, 
            "read_len_events_sum_temp": 2646, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 108.14563751220703, 
                "sum": 108.14563751220703
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 12.602337837219238, 
                "sum": 12.602337837219238
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 89595.875, 
        "levels_sums": {
            "count": 1, 
            "mean": 266.92315673828125, 
            "open_pore_level_sum": 266.92315673828125
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 144, 
                "count": 1
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 60, 
        "segment_number": 25, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "e0d935b9-0bea-4a2b-a675-4898ddcca5ea", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 77, 
                "pass": 67
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 35, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 45, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 144, 
                "mean": 6.668894290924072, 
                "sum": 960.32080078125
            }, 
            "read_len_events_sum_temp": 911642, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 144, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 144, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }, 
                {
                    "count": 13, 
                    "length": 1000.0
                }, 
                {
                    "count": 17, 
                    "length": 2000.0
                }, 
                {
                    "count": 18, 
                    "length": 3000.0
                }, 
                {
                    "count": 15, 
                    "length": 4000.0
                }, 
                {
                    "count": 13, 
                    "length": 5000.0
                }, 
                {
                    "count": 10, 
                    "length": 6000.0
                }, 
                {
                    "count": 8, 
                    "length": 7000.0
                }, 
                {
                    "count": 12, 
                    "length": 8000.0
                }, 
                {
                    "count": 7, 
                    "length": 9000.0
                }, 
                {
                    "count": 6, 
                    "length": 10000.0
                }, 
                {
                    "count": 6, 
                    "length": 11000.0
                }, 
                {
                    "count": 5, 
                    "length": 12000.0
                }, 
                {
                    "count": 2, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 14000.0
                }, 
                {
                    "count": 3, 
                    "length": 15000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }, 
                {
                    "count": 2, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 20000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 143, 
                    "speed": 1.0
                }, 
                {
                    "count": 1, 
                    "speed": 7.0
                }
            ], 
            "strand_median_pa": {
                "count": 144, 
                "mean": 93.25056457519531, 
                "sum": 13428.0810546875
            }, 
            "strand_sd_pa": {
                "count": 144, 
                "mean": 13.443918228149414, 
                "sum": 1935.9241943359375
            }
        }, 
        "channel_count": 118, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah84534_ga20000_sequencing_run_rnaab090763_92733", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 89595.875, 
        "levels_sums": {
            "count": 144, 
            "mean": 235.7235565185547, 
            "open_pore_level_sum": 33944.19140625
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 144, 
        "reads_per_channel_dist": [
            {
                "channel": 3, 
                "count": 2
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 20, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 2
            }, 
            {
                "channel": 35, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 2
            }, 
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 2
            }, 
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 2
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 1
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 124, 
                "count": 1
            }, 
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 3
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 2
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 3
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 207, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 2
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 4
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 1
            }, 
            {
                "channel": 273, 
                "count": 2
            }, 
            {
                "channel": 276, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 2
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 386, 
                "count": 1
            }, 
            {
                "channel": 391, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 2
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 434, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 2
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 2
            }, 
            {
                "channel": 461, 
                "count": 2
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 483, 
                "count": 1
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 1
            }, 
            {
                "channel": 504, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 2
            }
        ], 
        "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
        "segment_duration": 1500, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:03:36Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "33.859375", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6bfbdf05-f7ed-4410-905d-915fb73fae13", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "815d9353-8045-400e-b42b-69eb50a24980", 
            "protocols_version": "0.0.0.0", 
            "run_id": "342601433403d7a69ee8c95d381d43dfb2fd98d1", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.120080947875977, 
                "sum": 7.120080947875977
            }, 
            "read_len_events_sum_temp": 2448, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 109.75822448730469, 
                "sum": 109.75822448730469
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 16.119365692138672, 
                "sum": 16.119365692138672
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "1920", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180727_fah84534_ga20000_sequencing_run_rnaab090763_29459", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 2862.187255859375, 
        "levels_sums": {
            "count": 1, 
            "mean": 275.3914794921875, 
            "open_pore_level_sum": 275.3914794921875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 231, 
                "count": 1
            }
        ], 
        "run_id": "49bf85d2eb5678634ceae2b4726efdc30d70ca23", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-27T07:43:00Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "34.265625", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "216ee347-ae27-45ad-aa16-771990ffd98c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "a0446ef9-275b-4f76-a9a9-c5ab82535815", 
            "protocols_version": "0.0.0.0", 
            "run_id": "49bf85d2eb5678634ceae2b4726efdc30d70ca23", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "046b0ac1-525f-41db-a837-920fdd4b5ef3", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 7.120080947875977, 
                "sum": 7.120080947875977
            }, 
            "read_len_events_sum_temp": 2448, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 1, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 1, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 109.75822448730469, 
                "sum": 109.75822448730469
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 16.119365692138672, 
                "sum": 16.119365692138672
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "1920", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180727_fah84534_ga20000_sequencing_run_rnaab090763_29459", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab090763"
        }, 
        "latest_run_time": 2862.187255859375, 
        "levels_sums": {
            "count": 1, 
            "mean": 275.3914794921875, 
            "open_pore_level_sum": 275.3914794921875
        }, 
        "opts": {
            "adapter_pt_range_scale": "5.200000", 
            "additional_lamp_context_bases": "2", 
            "align_ref": "", 
            "align_type": "auto", 
            "allow_inferior_barcodes": "0", 
            "as_cpu_threads_per_scaler": "2", 
            "as_gpu_runners_per_device": "2", 
            "as_model_file": "", 
            "as_num_scalers": "4", 
            "as_reads_per_runner": "32", 
            "bam_methylation_threshold": "5.000000", 
            "bam_out": "0", 
            "barcode_kits": "", 
            "barcode_nested_output_folder": "0", 
            "beam_cut": "100.000000", 
            "beam_width": "32", 
            "bed_file": "", 
            "builtin_scripts": "1", 
            "calib_detect": "0", 
            "calib_max_sequence_length": "1550", 
            "calib_min_coverage": "0.600000", 
            "calib_min_sequence_length": "1100", 
            "calib_reference": "YHR174W.fasta", 
            "chunk_size": "2000", 
            "chunks_per_caller": "10000", 
            "chunks_per_runner": "512", 
            "client_id": "-1", 
            "compress_fastq": "0", 
            "cpu_threads_per_caller": "4", 
            "detect_adapter": "0", 
            "detect_barcodes": "0", 
            "detect_mid_strand_adapter": "0", 
            "detect_mid_strand_barcodes": "0", 
            "detect_primer": "0", 
            "device": "", 
            "disable_pings": "0", 
            "disable_qscore_filtering": "0", 
            "dmean_threshold": "10.000000", 
            "dmean_win_size": "400", 
            "do_read_splitting": "0", 
            "duplex_window_size_max": "1000", 
            "duplex_window_size_min": "200", 
            "end_gap1": "40", 
            "end_gap2": "40", 
            "extend_gap1": "40", 
            "extend_gap2": "160", 
            "fast5_out": "1", 
            "flowcell": "", 
            "front_window_size": "150", 
            "gpu_runners_per_device": "4", 
            "high_priority_threshold": "10", 
            "index": "0", 
            "input_file_list": "", 
            "int8_mode": "0", 
            "jump_threshold": "2.000000", 
            "kernel_path": "", 
            "kit": "", 
            "lamp_kit": "", 
            "log_speed_frequency": "0", 
            "max_queued_reads": "2000", 
            "max_read_split_depth": "2", 
            "max_search_len": "15000", 
            "medium_priority_threshold": "4", 
            "min_length_lamp_context": "30", 
            "min_length_lamp_target": "70", 
            "min_qscore": "7.000000", 
            "min_score_adapter": "60.000000", 
            "min_score_adapter_mid": "50.000000", 
            "min_score_barcode_front": "60.000000", 
            "min_score_barcode_mask": "40.000000", 
            "min_score_barcode_mid": "50.000000", 
            "min_score_barcode_rear": "60.000000", 
            "min_score_lamp": "80.000000", 
            "min_score_lamp_mask": "50.000000", 
            "min_score_lamp_target": "50.000000", 
            "min_score_primer": "60.000000", 
            "min_score_read_splitting": "70.000000", 
            "model_file": "template_rna_r9.4.1_70bps_hac.jsn", 
            "moves_out": "0", 
            "nested_output_folder": "0", 
            "noisiest_section_scaling_max_size": "0", 
            "num_alignment_threads": "4", 
            "num_barcode_threads": "4", 
            "num_barcoding_buffers": "24", 
            "num_base_mod_threads": "2", 
            "num_callers": "40", 
            "num_extra_bases_trim": "0", 
            "num_mid_barcoding_buffers": "96", 
            "num_read_splitting_buffers": "16", 
            "num_read_splitting_threads": "4", 
            "num_reads_per_barcoding_buffer": "4", 
            "open_gap1": "40", 
            "open_gap2": "160", 
            "overlap": "50", 
            "override_scaling": "0", 
            "ping_segment_duration": "60", 
            "ping_url": "https://ping.oxfordnanoportal.com/basecall", 
            "post_out": "0", 
            "print_workflows": "0", 
            "progress_stats_frequency": "-1.000000", 
            "pt_median_offset": "2.500000", 
            "pt_minimum_read_start_index": "30", 
            "pt_required_adapter_drop": "30.000000", 
            "pt_scaling": "0", 
            "qscore_offset": "0.420000", 
            "qscore_scale": "0.880000", 
            "quiet": "0", 
            "read_batch_size": "4000", 
            "read_id_list": "", 
            "read_splitting_arrangement_files": "", 
            "read_splitting_score_matrix_filename": "", 
            "rear_window_size": "150", 
            "records_per_fastq": "4000", 
            "recursive": "1", 
            "remora_models": "", 
            "require_barcodes_both_ends": "0", 
            "resume": "0", 
            "reverse_sequence": "1", 
            "sample_sheet": "", 
            "scaling_mad": "1.000000", 
            "scaling_med": "0.000000", 
            "score_matrix_filename": "5x5_mismatch_matrix.txt", 
            "start_gap1": "40", 
            "start_gap2": "40", 
            "stay_penalty": "1.000000", 
            "temp_bias": "1.000000", 
            "temp_weight": "1.000000", 
            "trace_categories_logs": "", 
            "trace_domains_config": "", 
            "trim_adapters": "0", 
            "trim_barcodes": "0", 
            "trim_min_events": "100", 
            "trim_primers": "0", 
            "trim_strategy": "rna", 
            "trim_threshold": "5.000000", 
            "u_substitution": "1", 
            "verbose_logs": "0"
        }, 
        "read_count": 1, 
        "reads_per_channel_dist": [
            {
                "channel": 231, 
                "count": 1
            }
        ], 
        "run_id": "49bf85d2eb5678634ceae2b4726efdc30d70ca23", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4180687227", 
            "asic_id_eeprom": "4563238", 
            "asic_temp": "29.198740", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA20000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-27T07:43:00Z", 
            "flow_cell_id": "FAH84534", 
            "heatsink_temp": "34.265625", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "49c2f958-09ed-4f3c-8d33-c39b56383dc5", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "a0446ef9-275b-4f76-a9a9-c5ab82535815", 
            "protocols_version": "0.0.0.0", 
            "run_id": "49bf85d2eb5678634ceae2b4726efdc30d70ca23", 
            "sample_id": "RNAAB090763", 
            "time_stamp": "2023-06-23T13:49:56Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }
]