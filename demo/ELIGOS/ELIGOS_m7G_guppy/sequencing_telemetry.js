[
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 8, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 10, 
                "mean": 6.429570198059082, 
                "sum": 64.29570007324219
            }, 
            "read_len_events_sum_temp": 34515, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 10, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 10, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 5, 
                    "length": 3000.0
                }, 
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
                    "count": 10, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 10, 
                "mean": 70.29771423339844, 
                "sum": 702.9771728515625
            }, 
            "strand_sd_pa": {
                "count": 10, 
                "mean": 10.24168586730957, 
                "sum": 102.41686248779297
            }
        }, 
        "channel_count": 10, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 3462.5537109375, 
        "levels_sums": {
            "count": 10, 
            "mean": 210.6768341064453, 
            "open_pore_level_sum": 2106.768310546875
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
        "read_count": 10, 
        "reads_per_channel_dist": [
            {
                "channel": 45, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 369, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "dc95ad92-8834-46d9-a4a2-dd96ce189d7c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 18
            }, 
            "qscore_dist_temp": [
                {
                    "count": 10, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 18, 
                "mean": 6.039122581481934, 
                "sum": 108.70420837402344
            }, 
            "read_len_events_sum_temp": 76570, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 18, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 18, 
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
                    "count": 3, 
                    "length": 3000.0
                }, 
                {
                    "count": 8, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 18, 
                "mean": 68.17822265625, 
                "sum": 1227.2080078125
            }, 
            "strand_sd_pa": {
                "count": 18, 
                "mean": 9.753987312316895, 
                "sum": 175.57177734375
            }
        }, 
        "channel_count": 17, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 5177.10009765625, 
        "levels_sums": {
            "count": 18, 
            "mean": 203.63221740722656, 
            "open_pore_level_sum": 3665.3798828125
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
        "read_count": 18, 
        "reads_per_channel_dist": [
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 67, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 1
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 369, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 2, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4de14eb5-c9f6-4099-8d38-42a45bc55b5a", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 23, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 25, 
                "mean": 6.124358654022217, 
                "sum": 153.1089630126953
            }, 
            "read_len_events_sum_temp": 109551, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 25, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 25, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 5, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 6, 
                    "length": 4000.0
                }, 
                {
                    "count": 4, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 25, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 25, 
                "mean": 68.89810943603516, 
                "sum": 1722.4527587890625
            }, 
            "strand_sd_pa": {
                "count": 25, 
                "mean": 10.512221336364746, 
                "sum": 262.8055419921875
            }
        }, 
        "channel_count": 25, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 10038.7890625, 
        "levels_sums": {
            "count": 25, 
            "mean": 202.1889190673828, 
            "open_pore_level_sum": 5054.72314453125
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
        "read_count": 25, 
        "reads_per_channel_dist": [
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 1
            }, 
            {
                "channel": 67, 
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
                "channel": 102, 
                "count": 1
            }, 
            {
                "channel": 113, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 316, 
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
                "channel": 392, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "eb3167fc-33e7-4eda-ae36-6c568ebc85c0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 33, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 34, 
                "mean": 6.110019207000732, 
                "sum": 207.7406463623047
            }, 
            "read_len_events_sum_temp": 152775, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 34, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 34, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 10, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 6, 
                    "length": 4000.0
                }, 
                {
                    "count": 4, 
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
                    "count": 2, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 34, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 34, 
                "mean": 68.84355926513672, 
                "sum": 2340.680908203125
            }, 
            "strand_sd_pa": {
                "count": 34, 
                "mean": 10.088232040405273, 
                "sum": 342.9998779296875
            }
        }, 
        "channel_count": 31, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 14357.4931640625, 
        "levels_sums": {
            "count": 34, 
            "mean": null, 
            "open_pore_level_sum": null
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
        "read_count": 34, 
        "reads_per_channel_dist": [
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 2
            }, 
            {
                "channel": 106, 
                "count": 1
            }, 
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 208, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 1
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 2
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 384, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 391, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 1
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "77927aab-c37c-4082-97ef-301f249b8614", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 12, 
                "pass": 3
            }, 
            "qscore_dist_temp": [
                {
                    "count": 6, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 15, 
                "mean": 6.213494300842285, 
                "sum": 93.2024154663086
            }, 
            "read_len_events_sum_temp": 63014, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 15, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 15, 
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
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 6, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 15, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 15, 
                "mean": 71.58138275146484, 
                "sum": 1073.720703125
            }, 
            "strand_sd_pa": {
                "count": 15, 
                "mean": 10.416521072387695, 
                "sum": 156.24781799316406
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 21235.69921875, 
        "levels_sums": {
            "count": 15, 
            "mean": 210.39328002929688, 
            "open_pore_level_sum": 3155.899169921875
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
        "read_count": 15, 
        "reads_per_channel_dist": [
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 134, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 250, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "5b3711fa-aa54-4023-8ab2-553955a72b73", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 30, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 15, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 31, 
                "mean": 6.107254981994629, 
                "sum": 189.3249053955078
            }, 
            "read_len_events_sum_temp": 124381, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 31, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 31, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 11, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 4000.0
                }, 
                {
                    "count": 4, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 2, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 31, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 31, 
                "mean": 71.38725280761719, 
                "sum": 2213.0048828125
            }, 
            "strand_sd_pa": {
                "count": 31, 
                "mean": 10.979913711547852, 
                "sum": 340.3773193359375
            }
        }, 
        "channel_count": 30, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 25164.99609375, 
        "levels_sums": {
            "count": 31, 
            "mean": 206.1337432861328, 
            "open_pore_level_sum": 6390.14599609375
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
        "read_count": 31, 
        "reads_per_channel_dist": [
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 58, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 228, 
                "count": 1
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 2
            }, 
            {
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 451, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "33cbe233-df39-42e2-9a16-1a2ef2c33c48", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 23
            }, 
            "qscore_dist_temp": [
                {
                    "count": 10, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 23, 
                "mean": 6.101186275482178, 
                "sum": 140.32728576660156
            }, 
            "read_len_events_sum_temp": 84777, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 23, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 23, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 6, 
                    "length": 2000.0
                }, 
                {
                    "count": 5, 
                    "length": 3000.0
                }, 
                {
                    "count": 7, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 23, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 23, 
                "mean": 71.17449188232422, 
                "sum": 1637.0133056640625
            }, 
            "strand_sd_pa": {
                "count": 23, 
                "mean": 11.150272369384766, 
                "sum": 256.4562683105469
            }
        }, 
        "channel_count": 22, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 28269.69140625, 
        "levels_sums": {
            "count": 23, 
            "mean": 208.16064453125, 
            "open_pore_level_sum": 4787.69482421875
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
        "read_count": 23, 
        "reads_per_channel_dist": [
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 391, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 2
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 8, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4d9f97a0-9942-432e-ba1e-319145cc94f0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
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
                "mean": 6.127825736999512, 
                "sum": 6.127825736999512
            }, 
            "read_len_events_sum_temp": 4961, 
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
                    "length": 4000.0
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
                "mean": 78.676025390625, 
                "sum": 78.676025390625
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 9.799996376037598, 
                "sum": 9.799996376037598
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 32370.189453125, 
        "levels_sums": {
            "count": 1, 
            "mean": 230.41493225097656, 
            "open_pore_level_sum": 230.41493225097656
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
                "channel": 254, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "40d53df4-6db5-430c-b32a-b6426a39c7b0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 33, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 35, 
                "mean": 6.180526256561279, 
                "sum": 216.31842041015625
            }, 
            "read_len_events_sum_temp": 157639, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 35, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 35, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 5, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 11, 
                    "length": 4000.0
                }, 
                {
                    "count": 5, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 35, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 35, 
                "mean": 69.11658477783203, 
                "sum": 2419.08056640625
            }, 
            "strand_sd_pa": {
                "count": 35, 
                "mean": 9.630417823791504, 
                "sum": 337.06463623046875
            }
        }, 
        "channel_count": 33, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 35979.92578125, 
        "levels_sums": {
            "count": 35, 
            "mean": 203.8708953857422, 
            "open_pore_level_sum": 7135.4814453125
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
        "read_count": 35, 
        "reads_per_channel_dist": [
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 186, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 2
            }, 
            {
                "channel": 321, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 450, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 10, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "e08619f9-027a-40e6-90e8-1108ece3f062", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 15, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 16, 
                "mean": 6.099102973937988, 
                "sum": 97.58564758300781
            }, 
            "read_len_events_sum_temp": 77103, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 16, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 16, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 5, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 16, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 16, 
                "mean": 70.14415740966797, 
                "sum": 1122.3065185546875
            }, 
            "strand_sd_pa": {
                "count": 16, 
                "mean": 9.938024520874023, 
                "sum": 159.00839233398438
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 39535.5234375, 
        "levels_sums": {
            "count": 16, 
            "mean": 206.68284606933594, 
            "open_pore_level_sum": 3306.925537109375
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
        "read_count": 16, 
        "reads_per_channel_dist": [
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 2
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 2
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 11, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d780bd59-0a4e-4d28-8a37-826c3a6e148f", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 18, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 10, 
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
                "count": 20, 
                "mean": 6.288477420806885, 
                "sum": 125.76954650878906
            }, 
            "read_len_events_sum_temp": 70591, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 20, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 20, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
                    "length": 1000.0
                }, 
                {
                    "count": 5, 
                    "length": 2000.0
                }, 
                {
                    "count": 8, 
                    "length": 3000.0
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
                    "count": 2, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 20, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 20, 
                "mean": 69.55927276611328, 
                "sum": 1391.1854248046875
            }, 
            "strand_sd_pa": {
                "count": 20, 
                "mean": 10.434925079345703, 
                "sum": 208.69850158691406
            }
        }, 
        "channel_count": 19, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 43194.2578125, 
        "levels_sums": {
            "count": 20, 
            "mean": 200.62623596191406, 
            "open_pore_level_sum": 4012.524658203125
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
        "read_count": 20, 
        "reads_per_channel_dist": [
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 2
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 1
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 504, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "eef577d6-d731-4f74-b6e0-dd4567769364", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 6.186217308044434, 
                "sum": 55.67595672607422
            }, 
            "read_len_events_sum_temp": 44797, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 69.79621124267578, 
                "sum": 628.1658935546875
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 9.8613433837890625, 
                "sum": 88.75209045410156
            }
        }, 
        "channel_count": 9, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 44313.09765625, 
        "levels_sums": {
            "count": 9, 
            "mean": 206.42144775390625, 
            "open_pore_level_sum": 1857.79296875
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
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 208, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 250, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 13, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8df45b1b-f824-45b2-81f3-634a1b6ab2d2", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 31
            }, 
            "qscore_dist_temp": [
                {
                    "count": 13, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 31, 
                "mean": 6.146467685699463, 
                "sum": 190.54049682617188
            }, 
            "read_len_events_sum_temp": 126434, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 31, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 31, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 1000.0
                }, 
                {
                    "count": 8, 
                    "length": 2000.0
                }, 
                {
                    "count": 6, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 5, 
                    "length": 5000.0
                }, 
                {
                    "count": 5, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 31, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 31, 
                "mean": 71.10674285888672, 
                "sum": 2204.30908203125
            }, 
            "strand_sd_pa": {
                "count": 31, 
                "mean": 10.361014366149902, 
                "sum": 321.1914367675781
            }
        }, 
        "channel_count": 28, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 50180.265625, 
        "levels_sums": {
            "count": 31, 
            "mean": 206.62213134765625, 
            "open_pore_level_sum": 6405.2861328125
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
        "read_count": 31, 
        "reads_per_channel_dist": [
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 20, 
                "count": 2
            }, 
            {
                "channel": 50, 
                "count": 1
            }, 
            {
                "channel": 61, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 2
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 14, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "a6ed369a-7077-4b31-8015-bc447e8bad0b", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 13, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 6.261858940124512, 
                "sum": 87.66602325439453
            }, 
            "read_len_events_sum_temp": 50077, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 6, 
                    "length": 4000.0
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
                "mean": 69.90137481689453, 
                "sum": 978.6192626953125
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 11.1309814453125, 
                "sum": 155.833740234375
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 53989.46484375, 
        "levels_sums": {
            "count": 14, 
            "mean": 202.0542755126953, 
            "open_pore_level_sum": 2828.759765625
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
                "channel": 63, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 2
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 1
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 495, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 15, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "08b8f8a4-ae47-49f1-94a1-f9dcc561c145", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4
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
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 6.25161075592041, 
                "sum": 25.00644302368164
            }, 
            "read_len_events_sum_temp": 15686, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 4, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 4, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
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
                "mean": 69.91123962402344, 
                "sum": 279.64495849609375
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.972532272338867, 
                "sum": 39.89012908935547
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 56529.37109375, 
        "levels_sums": {
            "count": 4, 
            "mean": 206.93118286132812, 
            "open_pore_level_sum": 827.7247314453125
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
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 16, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "a8817903-1715-46da-8771-dc5857872081", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 11
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 11, 
                "mean": 6.107076644897461, 
                "sum": 67.17784118652344
            }, 
            "read_len_events_sum_temp": 46069, 
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
                    "count": 4, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
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
                "mean": 72.16361236572266, 
                "sum": 793.79974365234375
            }, 
            "strand_sd_pa": {
                "count": 11, 
                "mean": 10.828932762145996, 
                "sum": 119.1182632446289
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 61115.8515625, 
        "levels_sums": {
            "count": 11, 
            "mean": 209.92303466796875, 
            "open_pore_level_sum": 2309.1533203125
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
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 228, 
                "count": 1
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 17, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f6c2066b-a34f-43b6-a6fd-e935267f2140", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 13
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 13, 
                "mean": 6.111746788024902, 
                "sum": 79.45270538330078
            }, 
            "read_len_events_sum_temp": 46334, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 13, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 13, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 5, 
                    "length": 4000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 13, 
                "mean": 73.28231048583984, 
                "sum": 952.6700439453125
            }, 
            "strand_sd_pa": {
                "count": 13, 
                "mean": 9.916788101196289, 
                "sum": 128.91824340820312
            }
        }, 
        "channel_count": 12, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 64064.1171875, 
        "levels_sums": {
            "count": 13, 
            "mean": 212.79623413085938, 
            "open_pore_level_sum": 2766.35107421875
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
        "read_count": 13, 
        "reads_per_channel_dist": [
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 88, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 233, 
                "count": 1
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 338, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 2
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 18, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4dbd68a5-1a1a-4506-b15d-5db982557385", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 16
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 16, 
                "mean": 6.060062885284424, 
                "sum": 96.96100616455078
            }, 
            "read_len_events_sum_temp": 70556, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 16, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 16, 
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
                    "count": 3, 
                    "length": 3000.0
                }, 
                {
                    "count": 5, 
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
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 16, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 16, 
                "mean": 70.01475524902344, 
                "sum": 1120.236083984375
            }, 
            "strand_sd_pa": {
                "count": 16, 
                "mean": 9.894891738891602, 
                "sum": 158.31826782226562
            }
        }, 
        "channel_count": 16, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 68159.171875, 
        "levels_sums": {
            "count": 16, 
            "mean": 204.2301483154297, 
            "open_pore_level_sum": 3267.682373046875
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
        "read_count": 16, 
        "reads_per_channel_dist": [
            {
                "channel": 77, 
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
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 497, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 19, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "ae5cbfbc-6d2c-4614-98c2-7c28b374c4f4", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 6.047578811645508, 
                "sum": 54.4282112121582
            }, 
            "read_len_events_sum_temp": 51619, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 4, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 68.87602233886719, 
                "sum": 619.88421630859375
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 9.477931022644043, 
                "sum": 85.30137634277344
            }
        }, 
        "channel_count": 9, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 71783.1484375, 
        "levels_sums": {
            "count": 9, 
            "mean": 204.29837036132812, 
            "open_pore_level_sum": 1838.685302734375
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
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 166, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 20, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "05654b44-f360-4210-802a-ebe9feed42ef", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 14, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 15, 
                "mean": 6.293485641479492, 
                "sum": 94.40228271484375
            }, 
            "read_len_events_sum_temp": 58277, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 15, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 15, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 4, 
                    "length": 2000.0
                }, 
                {
                    "count": 3, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 15, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 15, 
                "mean": 68.60916900634766, 
                "sum": 1029.1375732421875
            }, 
            "strand_sd_pa": {
                "count": 15, 
                "mean": 10.140466690063477, 
                "sum": 152.10699462890625
            }
        }, 
        "channel_count": 15, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 79014.71875, 
        "levels_sums": {
            "count": 15, 
            "mean": 190.81675720214844, 
            "open_pore_level_sum": 2862.25146484375
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
        "read_count": 15, 
        "reads_per_channel_dist": [
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 207, 
                "count": 1
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 450, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 495, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 22, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8bf217ff-c6ec-455d-a7f3-1e3d4e656c18", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 15, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 17, 
                "mean": 6.075256824493408, 
                "sum": 103.27936553955078
            }, 
            "read_len_events_sum_temp": 66000, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 17, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 17, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 6, 
                    "length": 2000.0
                }, 
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 4000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 17, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 17, 
                "mean": 74.259124755859375, 
                "sum": 1262.4051513671875
            }, 
            "strand_sd_pa": {
                "count": 17, 
                "mean": 10.400825500488281, 
                "sum": 176.81402587890625
            }
        }, 
        "channel_count": 16, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 82524.953125, 
        "levels_sums": {
            "count": 17, 
            "mean": 210.14370727539062, 
            "open_pore_level_sum": 3572.443115234375
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
        "read_count": 17, 
        "reads_per_channel_dist": [
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 134, 
                "count": 1
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 446, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 2
            }, 
            {
                "channel": 493, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 23, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "143ff438-cea3-4c2f-920d-1bcfe053088e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 6.112829208374023, 
                "sum": 55.015464782714844
            }, 
            "read_len_events_sum_temp": 43874, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 2000.0
                }, 
                {
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 9, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 70.80842590332031, 
                "sum": 637.27581787109375
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 10.1834077835083, 
                "sum": 91.65067291259766
            }
        }, 
        "channel_count": 9, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 86315.09375, 
        "levels_sums": {
            "count": 9, 
            "mean": 207.23013305664062, 
            "open_pore_level_sum": 1865.0711669921875
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
        "read_count": 9, 
        "reads_per_channel_dist": [
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 24, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "fdbbeeab-bfcd-43c0-8d0d-4292419be99b", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 17, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 18, 
                "mean": 6.022740840911865, 
                "sum": 108.40933227539062
            }, 
            "read_len_events_sum_temp": 78113, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 18, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 18, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
                    "length": 1000.0
                }, 
                {
                    "count": 3, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 18, 
                "mean": 72.36507415771484, 
                "sum": 1302.5712890625
            }, 
            "strand_sd_pa": {
                "count": 18, 
                "mean": 9.9303560256958, 
                "sum": 178.7464141845703
            }
        }, 
        "channel_count": 16, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 89964.3359375, 
        "levels_sums": {
            "count": 18, 
            "mean": 211.46075439453125, 
            "open_pore_level_sum": 3806.293701171875
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
        "read_count": 18, 
        "reads_per_channel_dist": [
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 2
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 346, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 60, 
        "segment_number": 25, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "d1e10733-40b2-4325-98f1-3c3c3731732e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 375, 
                "pass": 19
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 15, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 136, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 180, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 43, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 394, 
                "mean": 6.143451690673828, 
                "sum": 2420.52001953125
            }, 
            "read_len_events_sum_temp": 1653713, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 394, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 394, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 0.0
                }, 
                {
                    "count": 25, 
                    "length": 1000.0
                }, 
                {
                    "count": 87, 
                    "length": 2000.0
                }, 
                {
                    "count": 87, 
                    "length": 3000.0
                }, 
                {
                    "count": 90, 
                    "length": 4000.0
                }, 
                {
                    "count": 49, 
                    "length": 5000.0
                }, 
                {
                    "count": 25, 
                    "length": 6000.0
                }, 
                {
                    "count": 15, 
                    "length": 7000.0
                }, 
                {
                    "count": 9, 
                    "length": 8000.0
                }, 
                {
                    "count": 3, 
                    "length": 9000.0
                }, 
                {
                    "count": 2, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 16000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 394, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 394, 
                "mean": 70.3985595703125, 
                "sum": 27737.03125
            }, 
            "strand_sd_pa": {
                "count": 394, 
                "mean": 10.274340629577637, 
                "sum": 4048.09033203125
            }
        }, 
        "channel_count": 230, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 89964.3359375, 
        "levels_sums": {
            "count": 394, 
            "mean": null, 
            "open_pore_level_sum": null
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
        "read_count": 394, 
        "reads_per_channel_dist": [
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 10, 
                "count": 2
            }, 
            {
                "channel": 19, 
                "count": 1
            }, 
            {
                "channel": 20, 
                "count": 2
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 37, 
                "count": 2
            }, 
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 2
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 45, 
                "count": 2
            }, 
            {
                "channel": 47, 
                "count": 3
            }, 
            {
                "channel": 48, 
                "count": 4
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 50, 
                "count": 1
            }, 
            {
                "channel": 51, 
                "count": 2
            }, 
            {
                "channel": 53, 
                "count": 2
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 55, 
                "count": 2
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 58, 
                "count": 1
            }, 
            {
                "channel": 61, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 1
            }, 
            {
                "channel": 67, 
                "count": 2
            }, 
            {
                "channel": 71, 
                "count": 5
            }, 
            {
                "channel": 72, 
                "count": 3
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 2
            }, 
            {
                "channel": 78, 
                "count": 3
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 2
            }, 
            {
                "channel": 84, 
                "count": 2
            }, 
            {
                "channel": 88, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 4
            }, 
            {
                "channel": 90, 
                "count": 2
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 2
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 4
            }, 
            {
                "channel": 105, 
                "count": 4
            }, 
            {
                "channel": 106, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 113, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 1
            }, 
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 134, 
                "count": 2
            }, 
            {
                "channel": 135, 
                "count": 2
            }, 
            {
                "channel": 136, 
                "count": 4
            }, 
            {
                "channel": 141, 
                "count": 2
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 2
            }, 
            {
                "channel": 147, 
                "count": 2
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 2
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 2
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 166, 
                "count": 1
            }, 
            {
                "channel": 167, 
                "count": 2
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 3
            }, 
            {
                "channel": 172, 
                "count": 2
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 1
            }, 
            {
                "channel": 176, 
                "count": 2
            }, 
            {
                "channel": 177, 
                "count": 2
            }, 
            {
                "channel": 179, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 183, 
                "count": 2
            }, 
            {
                "channel": 186, 
                "count": 1
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 2
            }, 
            {
                "channel": 191, 
                "count": 3
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 198, 
                "count": 2
            }, 
            {
                "channel": 199, 
                "count": 2
            }, 
            {
                "channel": 200, 
                "count": 2
            }, 
            {
                "channel": 201, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 3
            }, 
            {
                "channel": 207, 
                "count": 1
            }, 
            {
                "channel": 208, 
                "count": 2
            }, 
            {
                "channel": 210, 
                "count": 3
            }, 
            {
                "channel": 216, 
                "count": 3
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 2
            }, 
            {
                "channel": 225, 
                "count": 2
            }, 
            {
                "channel": 226, 
                "count": 3
            }, 
            {
                "channel": 228, 
                "count": 2
            }, 
            {
                "channel": 229, 
                "count": 3
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 4
            }, 
            {
                "channel": 233, 
                "count": 1
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 4
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 2
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 4
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 266, 
                "count": 3
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 2
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 3
            }, 
            {
                "channel": 286, 
                "count": 3
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 295, 
                "count": 2
            }, 
            {
                "channel": 297, 
                "count": 3
            }, 
            {
                "channel": 298, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 3
            }, 
            {
                "channel": 301, 
                "count": 2
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 1
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 315, 
                "count": 2
            }, 
            {
                "channel": 316, 
                "count": 1
            }, 
            {
                "channel": 317, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 2
            }, 
            {
                "channel": 320, 
                "count": 3
            }, 
            {
                "channel": 321, 
                "count": 1
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 329, 
                "count": 3
            }, 
            {
                "channel": 336, 
                "count": 2
            }, 
            {
                "channel": 338, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 5
            }, 
            {
                "channel": 346, 
                "count": 3
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 3
            }, 
            {
                "channel": 352, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 2
            }, 
            {
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 368, 
                "count": 1
            }, 
            {
                "channel": 369, 
                "count": 2
            }, 
            {
                "channel": 370, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 2
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 377, 
                "count": 3
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 2
            }, 
            {
                "channel": 382, 
                "count": 3
            }, 
            {
                "channel": 383, 
                "count": 3
            }, 
            {
                "channel": 384, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 391, 
                "count": 2
            }, 
            {
                "channel": 392, 
                "count": 1
            }, 
            {
                "channel": 393, 
                "count": 1
            }, 
            {
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 410, 
                "count": 2
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 420, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 3
            }, 
            {
                "channel": 426, 
                "count": 2
            }, 
            {
                "channel": 427, 
                "count": 2
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 435, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 2
            }, 
            {
                "channel": 443, 
                "count": 3
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 2
            }, 
            {
                "channel": 446, 
                "count": 4
            }, 
            {
                "channel": 447, 
                "count": 2
            }, 
            {
                "channel": 450, 
                "count": 2
            }, 
            {
                "channel": 451, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 1
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 4
            }, 
            {
                "channel": 476, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 2
            }, 
            {
                "channel": 484, 
                "count": 2
            }, 
            {
                "channel": 485, 
                "count": 2
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 6
            }, 
            {
                "channel": 489, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 2
            }, 
            {
                "channel": 494, 
                "count": 1
            }, 
            {
                "channel": 495, 
                "count": 2
            }, 
            {
                "channel": 497, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 2
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 504, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 4
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 2
            }
        ], 
        "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
        "segment_duration": 1500, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "2144788459", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "37.937935", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN23366", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-31T20:40:16Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.972656", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "33c04994-356c-421a-9dec-d82611f685a6", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "ba2020e7-fde8-4db3-81b4-e2ee0934597d", 
            "protocols_version": "4.1.9", 
            "run_id": "4eecb8e7044ab5a782712697cf6d36f62ab75011", 
            "sample_id": "m7GIVT_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 6.157131671905518, 
                "sum": 86.19984436035156
            }, 
            "read_len_events_sum_temp": 58813, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 14, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 4, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
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
                "mean": 77.64068603515625, 
                "sum": 1086.9696044921875
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 10.542017936706543, 
                "sum": 147.5882568359375
            }
        }, 
        "channel_count": 14, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 3351.9853515625, 
        "levels_sums": {
            "count": 14, 
            "mean": 219.93130493164062, 
            "open_pore_level_sum": 3079.038330078125
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
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2bf6916e-22e0-4774-84ea-04a5ea59458f", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 21, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 22, 
                "mean": 6.433770656585693, 
                "sum": 141.54295349121094
            }, 
            "read_len_events_sum_temp": 86891, 
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
                    "count": 6, 
                    "length": 2000.0
                }, 
                {
                    "count": 7, 
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
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 2, 
                    "length": 8000.0
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
                "mean": 76.19612884521484, 
                "sum": 1676.3148193359375
            }, 
            "strand_sd_pa": {
                "count": 22, 
                "mean": 9.935210227966309, 
                "sum": 218.5746307373047
            }
        }, 
        "channel_count": 21, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 6971.47802734375, 
        "levels_sums": {
            "count": 22, 
            "mean": 214.8525390625, 
            "open_pore_level_sum": 4726.755859375
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
                "channel": 9, 
                "count": 2
            }, 
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 219, 
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
                "channel": 257, 
                "count": 1
            }, 
            {
                "channel": 264, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 2, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "37884583-49e5-458f-b2f1-cb4fa00ddc15", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 12
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 12, 
                "mean": 6.10230827331543, 
                "sum": 73.22769927978516
            }, 
            "read_len_events_sum_temp": 41014, 
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
                    "count": 4, 
                    "length": 2000.0
                }, 
                {
                    "count": 3, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
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
                "mean": 76.09794616699219, 
                "sum": 913.17535400390625
            }, 
            "strand_sd_pa": {
                "count": 12, 
                "mean": 9.791221618652344, 
                "sum": 117.49465942382812
            }
        }, 
        "channel_count": 11, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 9893.1513671875, 
        "levels_sums": {
            "count": 12, 
            "mean": 217.70265197753906, 
            "open_pore_level_sum": 2612.431884765625
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
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 207, 
                "count": 2
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 411, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "168e1c22-dba8-41be-9caa-b2d47d72678e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 13
            }, 
            "qscore_dist_temp": [
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 13, 
                "mean": 6.06714391708374, 
                "sum": 78.87287139892578
            }, 
            "read_len_events_sum_temp": 57098, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 13, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 13, 
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
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 13, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 13, 
                "mean": 76.35823822021484, 
                "sum": 992.6571044921875
            }, 
            "strand_sd_pa": {
                "count": 13, 
                "mean": 10.123502731323242, 
                "sum": 131.60552978515625
            }
        }, 
        "channel_count": 13, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 14272.6689453125, 
        "levels_sums": {
            "count": 13, 
            "mean": 198.38973999023438, 
            "open_pore_level_sum": 2579.066650390625
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
        "read_count": 13, 
        "reads_per_channel_dist": [
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 105, 
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
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4ab3df7f-6987-4e63-aedc-bb1301fe777f", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 6.0224080085754395, 
                "sum": 42.156856536865234
            }, 
            "read_len_events_sum_temp": 36262, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
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
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
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
                "mean": 74.35980224609375, 
                "sum": 520.51861572265625
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 10.346606254577637, 
                "sum": 72.4262466430664
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 17904.912109375, 
        "levels_sums": {
            "count": 7, 
            "mean": 210.5079803466797, 
            "open_pore_level_sum": 1473.555908203125
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
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 257, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 429, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "842e2565-3b85-4cff-9499-cfd1eb261682", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 8
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 5.9080634117126465, 
                "sum": 47.26450729370117
            }, 
            "read_len_events_sum_temp": 49807, 
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
                    "count": 2, 
                    "length": 6000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
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
                "mean": 76.88988494873047, 
                "sum": 615.11907958984375
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 9.611235618591309, 
                "sum": 76.88988494873047
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 21131.826171875, 
        "levels_sums": {
            "count": 8, 
            "mean": 211.45529174804688, 
            "open_pore_level_sum": 1691.642333984375
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
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 2
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "5fb96917-bc32-44f1-8131-115d3a761ad3", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 5, 
                "mean": 6.346653461456299, 
                "sum": 31.733266830444336
            }, 
            "read_len_events_sum_temp": 24499, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 5, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 5, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
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
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 5, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 5, 
                "mean": 76.34272766113281, 
                "sum": 381.7136535644531
            }, 
            "strand_sd_pa": {
                "count": 5, 
                "mean": 9.301660537719727, 
                "sum": 46.50830078125
            }
        }, 
        "channel_count": 5, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 24090.341796875, 
        "levels_sums": {
            "count": 5, 
            "mean": 215.65054321289062, 
            "open_pore_level_sum": 1078.252685546875
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
        "read_count": 5, 
        "reads_per_channel_dist": [
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 411, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "59ede4e5-2777-4307-b329-a146927b8e13", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 6.094202995300293, 
                "sum": 42.659420013427734
            }, 
            "read_len_events_sum_temp": 33752, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 7, 
            "seq_len_events_dist_temp": [
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 3, 
                    "length": 3000.0
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
                    "length": 10000.0
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
                "mean": 74.462646484375, 
                "sum": 521.238525390625
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 9.606093406677246, 
                "sum": 67.2426528930664
            }
        }, 
        "channel_count": 7, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 28573.646484375, 
        "levels_sums": {
            "count": 7, 
            "mean": 209.56800842285156, 
            "open_pore_level_sum": 1466.97607421875
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
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 8, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "274b4a2f-e28c-4a71-bc1b-eaf8f3042e59", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 6.492542743682861, 
                "sum": 25.970170974731445
            }, 
            "read_len_events_sum_temp": 22398, 
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
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
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
                "mean": 75.018035888671875, 
                "sum": 300.0721435546875
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 9.755224227905273, 
                "sum": 39.020896911621094
            }
        }, 
        "channel_count": 4, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 31546.40625, 
        "levels_sums": {
            "count": 4, 
            "mean": 210.65231323242188, 
            "open_pore_level_sum": 842.6092529296875
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
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "a8c89647-4c0a-43bc-88ff-5c7ebbc17a16", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 5.793128967285156, 
                "sum": 11.586257934570312
            }, 
            "read_len_events_sum_temp": 15787, 
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
                    "length": 6000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
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
                "mean": 79.91365051269531, 
                "sum": 159.82730102539062
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 9.791221618652344, 
                "sum": 19.582443237304688
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 35186.32421875, 
        "levels_sums": {
            "count": 2, 
            "mean": 219.98220825195312, 
            "open_pore_level_sum": 439.96441650390625
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
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 10, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "33d7a4d0-7fc9-4c2e-af34-cc785d262646", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 6, 
                "mean": 6.277163982391357, 
                "sum": 37.66298294067383
            }, 
            "read_len_events_sum_temp": 28396, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 6, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 6, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
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
                    "count": 1, 
                    "length": 7000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 6, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 6, 
                "mean": 77.65782928466797, 
                "sum": 465.94696044921875
            }, 
            "strand_sd_pa": {
                "count": 6, 
                "mean": 9.215267181396484, 
                "sum": 55.291603088378906
            }
        }, 
        "channel_count": 6, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 39501.20703125, 
        "levels_sums": {
            "count": 6, 
            "mean": 216.6432647705078, 
            "open_pore_level_sum": 1299.859619140625
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
        "read_count": 6, 
        "reads_per_channel_dist": [
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 332, 
                "count": 1
            }, 
            {
                "channel": 382, 
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
                "channel": 474, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 11, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "aff8a597-0e86-4e4c-99b7-169137028638", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 6.075589179992676, 
                "sum": 12.151178359985352
            }, 
            "read_len_events_sum_temp": 5380, 
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
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 3000.0
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
                "mean": 80.70558166503906, 
                "sum": 161.41116333007812
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 10.583158493041992, 
                "sum": 21.166316986083984
            }
        }, 
        "channel_count": 2, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 41159.078125, 
        "levels_sums": {
            "count": 2, 
            "mean": 219.1630859375, 
            "open_pore_level_sum": 438.326171875
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
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6854f3e9-e4f5-4c4c-9e47-7e8cea0fcb38", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 5.917973518371582, 
                "sum": 5.917973518371582
            }, 
            "read_len_events_sum_temp": 3460, 
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
                    "length": 3000.0
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
                "mean": 87.54503631591797, 
                "sum": 87.54503631591797
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 11.231106758117676, 
                "sum": 11.231106758117676
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 44383.22265625, 
        "levels_sums": {
            "count": 1, 
            "mean": 235.29383850097656, 
            "open_pore_level_sum": 235.29383850097656
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
                "channel": 374, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 13, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f8162b06-5dac-4f60-adb5-9ee9917e0f6c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
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
                "mean": 6.149996280670166, 
                "sum": 6.149996280670166
            }, 
            "read_len_events_sum_temp": 4588, 
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
                    "length": 4000.0
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
                "mean": 86.24913787841797, 
                "sum": 86.24913787841797
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 10.799140930175781, 
                "sum": 10.799140930175781
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 49739.9375, 
        "levels_sums": {
            "count": 1, 
            "mean": 230.5470733642578, 
            "open_pore_level_sum": 230.5470733642578
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
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 14, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7f113191-efdd-4db4-a9f3-9492dfb20ceb", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 5.887304306030273, 
                "sum": 5.887304306030273
            }, 
            "read_len_events_sum_temp": 5873, 
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
                    "length": 5000.0
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
                "mean": 77.32185363769531, 
                "sum": 77.32185363769531
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 8.927289962768555, 
                "sum": 8.927289962768555
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 50842.56640625, 
        "levels_sums": {
            "count": 1, 
            "mean": 216.19017028808594, 
            "open_pore_level_sum": 216.19017028808594
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
                "channel": 334, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 15, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "20d65ced-0410-4d46-bc64-e8150039e944", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 5.689967632293701, 
                "sum": 5.689967632293701
            }, 
            "read_len_events_sum_temp": 4315, 
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
                    "length": 4000.0
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
                "mean": 79.7696533203125, 
                "sum": 79.7696533203125
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 9.215267181396484, 
                "sum": 9.215267181396484
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 55818.5234375, 
        "levels_sums": {
            "count": 1, 
            "mean": 224.25440979003906, 
            "open_pore_level_sum": 224.25440979003906
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
                "channel": 189, 
                "count": 1
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 60, 
        "segment_number": 16, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "eb2a4940-19d7-47d0-a8f3-c6d28282e3c0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "b927035a-a329-43a7-a840-9f7cfdc37a5d", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 105, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 39, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 49, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 15, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 106, 
                "mean": 6.176163196563721, 
                "sum": 654.67327880859375
            }, 
            "read_len_events_sum_temp": 478333, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 106, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 106, 
            "seq_len_events_dist_temp": [
                {
                    "count": 6, 
                    "length": 1000.0
                }, 
                {
                    "count": 22, 
                    "length": 2000.0
                }, 
                {
                    "count": 27, 
                    "length": 3000.0
                }, 
                {
                    "count": 17, 
                    "length": 4000.0
                }, 
                {
                    "count": 10, 
                    "length": 5000.0
                }, 
                {
                    "count": 10, 
                    "length": 6000.0
                }, 
                {
                    "count": 4, 
                    "length": 7000.0
                }, 
                {
                    "count": 5, 
                    "length": 8000.0
                }, 
                {
                    "count": 2, 
                    "length": 9000.0
                }, 
                {
                    "count": 2, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 106, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 106, 
                "mean": 76.65897369384766, 
                "sum": 8125.85107421875
            }, 
            "strand_sd_pa": {
                "count": 106, 
                "mean": 9.9392852783203125, 
                "sum": 1053.564208984375
            }
        }, 
        "channel_count": 84, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "flow_cell_product_code": "flo-min106", 
            "local_basecalling": "0", 
            "package": "bream4", 
            "package_version": "4.1.9", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 55818.5234375, 
        "levels_sums": {
            "count": 106, 
            "mean": 213.53553771972656, 
            "open_pore_level_sum": 22634.767578125
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
        "read_count": 106, 
        "reads_per_channel_dist": [
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 9, 
                "count": 2
            }, 
            {
                "channel": 23, 
                "count": 2
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 31, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 48, 
                "count": 3
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 2
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 2
            }, 
            {
                "channel": 178, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 2
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 207, 
                "count": 2
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 3
            }, 
            {
                "channel": 223, 
                "count": 2
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 2
            }, 
            {
                "channel": 230, 
                "count": 1
            }, 
            {
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 264, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 2
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 290, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 299, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 318, 
                "count": 1
            }, 
            {
                "channel": 319, 
                "count": 2
            }, 
            {
                "channel": 320, 
                "count": 2
            }, 
            {
                "channel": 323, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 332, 
                "count": 1
            }, 
            {
                "channel": 334, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 3
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 411, 
                "count": 2
            }, 
            {
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 429, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 1
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 2
            }, 
            {
                "channel": 457, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 484, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 2
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 2
            }
        ], 
        "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
        "segment_duration": 960, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "615945214", 
            "asic_id_eeprom": "2109406", 
            "asic_temp": "25.011330", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN24001", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T22:02:41Z", 
            "flow_cell_id": "FAK86949", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "34.054688", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "333f10d3-6051-468f-b6b9-d28a988167f5", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "e20b31d9-2df0-4fe5-8037-4e89643235ad", 
            "protocols_version": "4.1.9", 
            "run_id": "e31820057d0048413e4eb2c2a958129c518efdd2", 
            "sample_id": "IVTm7G_m1A_h5C_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:43:00Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }
]