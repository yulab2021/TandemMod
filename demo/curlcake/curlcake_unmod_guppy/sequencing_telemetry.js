[
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
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
                "mean": 6.035806655883789, 
                "sum": 6.035806655883789
            }, 
            "read_len_events_sum_temp": 1491, 
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
                    "length": 1000.0
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
                "mean": 98.71186828613281, 
                "sum": 98.71186828613281
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.731279373168945, 
                "sum": 7.731279373168945
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_mux_scan_rnaab089716_23886", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 33.420982360839844, 
        "levels_sums": {
            "count": 1, 
            "mean": 232.38504028320312, 
            "open_pore_level_sum": 232.38504028320312
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
                "channel": 494, 
                "count": 1
            }
        ], 
        "run_id": "0a339be9845c72fb2aeeb98790e406349e3e4568", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "23.028099", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "mux_scan", 
            "exp_start_time": "2018-07-26T03:01:21Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "34.992188", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "0b51e100-835f-4efc-b024-bf513999c2f2", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0a339be9845c72fb2aeeb98790e406349e3e4568", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
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
                "mean": 6.035806655883789, 
                "sum": 6.035806655883789
            }, 
            "read_len_events_sum_temp": 1491, 
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
                    "length": 1000.0
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
                "mean": 98.71186828613281, 
                "sum": 98.71186828613281
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 7.731279373168945, 
                "sum": 7.731279373168945
            }
        }, 
        "channel_count": 1, 
        "context_tags": {
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_mux_scan_rnaab089716_23886", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 33.420982360839844, 
        "levels_sums": {
            "count": 1, 
            "mean": 232.38504028320312, 
            "open_pore_level_sum": 232.38504028320312
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
                "channel": 494, 
                "count": 1
            }
        ], 
        "run_id": "0a339be9845c72fb2aeeb98790e406349e3e4568", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "23.028099", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "mux_scan", 
            "exp_start_time": "2018-07-26T03:01:21Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "34.992188", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "c2f4a197-7242-4915-8505-f70ad4b67e33", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0a339be9845c72fb2aeeb98790e406349e3e4568", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4, 
                "pass": 21
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 25, 
                "mean": 9.140869140625, 
                "sum": 228.521728515625
            }, 
            "read_len_events_sum_temp": 116848, 
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
                    "length": 0.0
                }, 
                {
                    "count": 3, 
                    "length": 1000.0
                }, 
                {
                    "count": 5, 
                    "length": 2000.0
                }, 
                {
                    "count": 4, 
                    "length": 3000.0
                }, 
                {
                    "count": 3, 
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
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
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
                "mean": 85.54052734375, 
                "sum": 2138.51318359375
            }, 
            "strand_sd_pa": {
                "count": 25, 
                "mean": 12.20666217803955, 
                "sum": 305.16656494140625
            }
        }, 
        "channel_count": 25, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 3554.27001953125, 
        "levels_sums": {
            "count": 25, 
            "mean": 224.87989807128906, 
            "open_pore_level_sum": 5621.99755859375
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
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 58, 
                "count": 1
            }, 
            {
                "channel": 80, 
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
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 1
            }, 
            {
                "channel": 256, 
                "count": 1
            }, 
            {
                "channel": 269, 
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
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 332, 
                "count": 1
            }, 
            {
                "channel": 333, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 497, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f6136c02-7058-4bce-bc03-e7a35d4c8c72", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 15
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
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 17, 
                "mean": 9.67794418334961, 
                "sum": 164.52505493164062
            }, 
            "read_len_events_sum_temp": 83611, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 17, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 17, 
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
                    "count": 2, 
                    "length": 3000.0
                }, 
                {
                    "count": 2, 
                    "length": 4000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
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
                "mean": 89.53556060791016, 
                "sum": 1522.1044921875
            }, 
            "strand_sd_pa": {
                "count": 17, 
                "mean": 13.085530281066895, 
                "sum": 222.45401000976562
            }
        }, 
        "channel_count": 17, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 7052.658203125, 
        "levels_sums": {
            "count": 17, 
            "mean": 223.9912567138672, 
            "open_pore_level_sum": 3807.851318359375
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
                "channel": 4, 
                "count": 1
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 278, 
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
                "channel": 439, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 2, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "7572baf6-a19a-44b1-bb6b-c0b831ae0424", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 13
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 14, 
                "mean": 9.762225151062012, 
                "sum": 136.67115783691406
            }, 
            "read_len_events_sum_temp": 68737, 
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
                    "count": 2, 
                    "length": 5000.0
                }, 
                {
                    "count": 1, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
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
                "mean": 89.56746673583984, 
                "sum": 1253.944580078125
            }, 
            "strand_sd_pa": {
                "count": 14, 
                "mean": 13.147608757019043, 
                "sum": 184.0665283203125
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 10572.59765625, 
        "levels_sums": {
            "count": 14, 
            "mean": 231.9625244140625, 
            "open_pore_level_sum": 3247.475341796875
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
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 280, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 1
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 3, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "2ff17429-ba97-4449-bcc5-b2eadec53c0e", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5, 
                "pass": 14
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 19, 
                "mean": 9.0228853225708, 
                "sum": 171.434814453125
            }, 
            "read_len_events_sum_temp": 96940, 
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
                    "count": 5, 
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
                    "count": 1, 
                    "length": 4000.0
                }, 
                {
                    "count": 1, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 1, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 18, 
                    "speed": 1.0
                }, 
                {
                    "count": 1, 
                    "speed": 5.0
                }
            ], 
            "strand_median_pa": {
                "count": 19, 
                "mean": 95.01661682128906, 
                "sum": 1805.315673828125
            }, 
            "strand_sd_pa": {
                "count": 19, 
                "mean": 11.570019721984863, 
                "sum": 219.83038330078125
            }
        }, 
        "channel_count": 19, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 14097.48828125, 
        "levels_sums": {
            "count": 19, 
            "mean": 232.5943603515625, 
            "open_pore_level_sum": 4419.29296875
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
                "channel": 81, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 1
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 4, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3868c17c-741f-4760-9cb1-278e80216515", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 9
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 10, 
                "mean": 10.133077621459961, 
                "sum": 101.33077239990234
            }, 
            "read_len_events_sum_temp": 79271, 
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
                    "length": 3000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
                }, 
                {
                    "count": 4, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
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
                "mean": 89.35441589355469, 
                "sum": 893.544189453125
            }, 
            "strand_sd_pa": {
                "count": 10, 
                "mean": 12.234278678894043, 
                "sum": 122.34278869628906
            }
        }, 
        "channel_count": 10, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 17538.119140625, 
        "levels_sums": {
            "count": 10, 
            "mean": 231.07888793945312, 
            "open_pore_level_sum": 2310.788818359375
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
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 166, 
                "count": 1
            }, 
            {
                "channel": 200, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 269, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "8e7f107d-dd97-4fb1-9f5e-01475561d956", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4, 
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 11.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 8.43414306640625, 
                "sum": 75.90728759765625
            }, 
            "read_len_events_sum_temp": 64749, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
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
                    "count": 1, 
                    "length": 7000.0
                }, 
                {
                    "count": 3, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
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
                "mean": 91.84147644042969, 
                "sum": 826.57330322265625
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 11.430320739746094, 
                "sum": 102.87288665771484
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 21331.591796875, 
        "levels_sums": {
            "count": 9, 
            "mean": 272.96881103515625, 
            "open_pore_level_sum": 2456.71923828125
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
                "channel": 17, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 2
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "cc2c9d52-a9e4-489b-96e8-e0481eee132a", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 4, 
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 9, 
                "mean": 7.059505462646484, 
                "sum": 63.53554916381836
            }, 
            "read_len_events_sum_temp": 34224, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 9, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 9, 
            "seq_len_events_dist_temp": [
                {
                    "count": 3, 
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
                    "count": 1, 
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
                    "count": 8, 
                    "speed": 1.0
                }, 
                {
                    "count": 1, 
                    "speed": 5.0
                }
            ], 
            "strand_median_pa": {
                "count": 9, 
                "mean": 95.24756622314453, 
                "sum": 857.22808837890625
            }, 
            "strand_sd_pa": {
                "count": 9, 
                "mean": 9.45111083984375, 
                "sum": 85.05999755859375
            }
        }, 
        "channel_count": 9, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 25029.5703125, 
        "levels_sums": {
            "count": 9, 
            "mean": 271.91314697265625, 
            "open_pore_level_sum": 2447.21826171875
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
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "cd0f335e-4cdc-41eb-9bbb-f526b8b744bc", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 5
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 8, 
                "mean": 8.460071563720703, 
                "sum": 67.680572509765625
            }, 
            "read_len_events_sum_temp": 27758, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 8, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 8, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 1000.0
                }, 
                {
                    "count": 3, 
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
                    "length": 7000.0
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
                "mean": 94.38069915771484, 
                "sum": 755.04559326171875
            }, 
            "strand_sd_pa": {
                "count": 8, 
                "mean": 12.134167671203613, 
                "sum": 97.0733413696289
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 27898.58203125, 
        "levels_sums": {
            "count": 8, 
            "mean": 204.9188232421875, 
            "open_pore_level_sum": 1639.3505859375
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
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 282, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 375, 
                "count": 1
            }, 
            {
                "channel": 386, 
                "count": 1
            }, 
            {
                "channel": 411, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 8, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "17d5b3a2-5ae1-4a83-ad25-dadf280e2ac9", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 6
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 7, 
                "mean": 10.18347454071045, 
                "sum": 71.2843246459961
            }, 
            "read_len_events_sum_temp": 52949, 
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
                    "length": 10000.0
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
                    "count": 7, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 7, 
                "mean": 91.39215087890625, 
                "sum": 639.74505615234375
            }, 
            "strand_sd_pa": {
                "count": 7, 
                "mean": 13.17719841003418, 
                "sum": 92.240386962890625
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 31612.23046875, 
        "levels_sums": {
            "count": 7, 
            "mean": 237.9282684326172, 
            "open_pore_level_sum": 1665.4979248046875
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
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 9, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "eb0a6c22-5e62-4fa0-8538-de10202d015c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 4, 
                "mean": 5.928928375244141, 
                "sum": 23.715713500976562
            }, 
            "read_len_events_sum_temp": 12776, 
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
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 2000.0
                }, 
                {
                    "count": 1, 
                    "length": 7000.0
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
                "mean": 91.480926513671875, 
                "sum": 365.9237060546875
            }, 
            "strand_sd_pa": {
                "count": 4, 
                "mean": 16.501087188720703, 
                "sum": 66.00434875488281
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 39335.45703125, 
        "levels_sums": {
            "count": 4, 
            "mean": 241.19505310058594, 
            "open_pore_level_sum": 964.78021240234375
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
                "channel": 104, 
                "count": 2
            }, 
            {
                "channel": 160, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 11, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "6150b29a-0d4c-4dbc-9eff-02b2aa954f18", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 5.317716121673584, 
                "sum": 10.635432243347168
            }, 
            "read_len_events_sum_temp": 13609, 
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
                    "length": 0.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
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
                "mean": 91.06666564941406, 
                "sum": 182.13333129882812
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 9.873035430908203, 
                "sum": 19.746070861816406
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 42458.0625, 
        "levels_sums": {
            "count": 2, 
            "mean": 244.84091186523438, 
            "open_pore_level_sum": 489.68182373046875
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
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 491, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 12, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "91c1cea2-5068-4099-aafd-96187d486fd9", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 8.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 6.485715389251709, 
                "sum": 19.45714569091797
            }, 
            "read_len_events_sum_temp": 16000, 
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
                "mean": 94.265625, 
                "sum": 282.796875
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 14.544891357421875, 
                "sum": 43.634674072265625
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 46028.046875, 
        "levels_sums": {
            "count": 3, 
            "mean": 244.10646057128906, 
            "open_pore_level_sum": 732.31939697265625
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
                "channel": 12, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 13, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "c0ab8ead-d47b-4461-8c12-37dc2fc7ec91", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 4.3846435546875, 
                "sum": 8.769287109375
            }, 
            "read_len_events_sum_temp": 3706, 
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
                    "length": 0.0
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
                "mean": 111.57220458984375, 
                "sum": 223.1444091796875
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 5.454334259033203, 
                "sum": 10.908668518066406
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 50110.2109375, 
        "levels_sums": {
            "count": 2, 
            "mean": 264.67987060546875, 
            "open_pore_level_sum": 529.3597412109375
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
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 14, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "5a72b336-d343-434e-8d5c-923e69f13e2b", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 5.48564338684082, 
                "sum": 16.45693016052246
            }, 
            "read_len_events_sum_temp": 16237, 
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
                    "length": 0.0
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
                    "count": 2, 
                    "speed": 1.0
                }, 
                {
                    "count": 1, 
                    "speed": 3.0
                }
            ], 
            "strand_median_pa": {
                "count": 3, 
                "mean": 97.53362274169922, 
                "sum": 292.6008605957031
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 9.159599304199219, 
                "sum": 27.478797912597656
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 53942.984375, 
        "levels_sums": {
            "count": 3, 
            "mean": 171.531494140625, 
            "open_pore_level_sum": 514.594482421875
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
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 15, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "251b8867-57f1-4d10-a0f5-36e73dc5a862", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 4.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 4.871764659881592, 
                "sum": 4.871764659881592
            }, 
            "read_len_events_sum_temp": 3295, 
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
                "mean": 64.34733581542969, 
                "sum": 64.34733581542969
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 9.94207763671875, 
                "sum": 9.94207763671875
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 59293.57421875, 
        "levels_sums": {
            "count": 1, 
            "mean": 219.81324768066406, 
            "open_pore_level_sum": 219.81324768066406
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
                "channel": 485, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 17, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "c6472803-f635-471d-84ef-83c9fc42cec5", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 6.030598163604736, 
                "sum": 18.091794967651367
            }, 
            "read_len_events_sum_temp": 6027, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 3, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 3, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 1, 
                    "length": 4000.0
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
                "mean": 96.6130599975586, 
                "sum": 289.83917236328125
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 13.118019104003906, 
                "sum": 39.35405731201172
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 63782.41015625, 
        "levels_sums": {
            "count": 3, 
            "mean": 201.0140380859375, 
            "open_pore_level_sum": 603.0421142578125
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
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 18, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "49676891-47db-4d8c-bb57-a523c584e3aa", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 6.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 2, 
                "mean": 4.576055526733398, 
                "sum": 9.152111053466797
            }, 
            "read_len_events_sum_temp": 11453, 
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
                "mean": 104.59893798828125, 
                "sum": 209.1978759765625
            }, 
            "strand_sd_pa": {
                "count": 2, 
                "mean": 10.011119842529297, 
                "sum": 20.022239685058594
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 75093.6328125, 
        "levels_sums": {
            "count": 2, 
            "mean": 262.82659912109375, 
            "open_pore_level_sum": 525.6531982421875
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
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 21, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "98c14180-1c17-4f9b-bd9a-22e5dda26903", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 2.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 2.3633506298065186, 
                "sum": 2.3633506298065186
            }, 
            "read_len_events_sum_temp": 213, 
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
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 134.63229370117188, 
                "sum": 134.63229370117188
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 3.4521102905273438, 
                "sum": 3.4521102905273438
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 79067.625, 
        "levels_sums": {
            "count": 1, 
            "mean": 266.117431640625, 
            "open_pore_level_sum": 266.117431640625
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
                "channel": 441, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 22, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "987a7a59-8212-4723-b321-10d48c51072c", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 2, 
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 3, 
                "mean": 5.801097869873047, 
                "sum": 17.40329360961914
            }, 
            "read_len_events_sum_temp": 4433, 
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
                    "length": 0.0
                }, 
                {
                    "count": 1, 
                    "length": 1000.0
                }, 
                {
                    "count": 1, 
                    "length": 2000.0
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
                "mean": 93.5751953125, 
                "sum": 280.7255859375
            }, 
            "strand_sd_pa": {
                "count": 3, 
                "mean": 17.030410766601562, 
                "sum": 51.09123229980469
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 93035.59375, 
        "levels_sums": {
            "count": 3, 
            "mean": 194.02593994140625, 
            "open_pore_level_sum": 582.07781982421875
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
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 469, 
                "count": 2
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 26, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "cbecc934-b7d6-4a59-abe1-b2cb4198e7f6", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "pass": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 8.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 8.865633010864258, 
                "sum": 8.865633010864258
            }, 
            "read_len_events_sum_temp": 9127, 
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
                    "length": 9000.0
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
                "mean": 101.90629577636719, 
                "sum": 101.90629577636719
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 14.636947631835938, 
                "sum": 14.636947631835938
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
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 101860.3671875, 
        "levels_sums": {
            "count": 1, 
            "mean": 256.824462890625, 
            "open_pore_level_sum": 256.824462890625
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
                "channel": 106, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 60, 
        "segment_number": 29, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "782b5f30-93bd-40e7-95f1-684a8d425ea7", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 42, 
                "pass": 101
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 2.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 2.5
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 3.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 3.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 4.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 4.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 6, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 8, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 17, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 12, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 143, 
                "mean": 8.536176681518555, 
                "sum": 1220.6732177734375
            }, 
            "read_len_events_sum_temp": 721963, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 143, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 143, 
            "seq_len_events_dist_temp": [
                {
                    "count": 14, 
                    "length": 0.0
                }, 
                {
                    "count": 21, 
                    "length": 1000.0
                }, 
                {
                    "count": 23, 
                    "length": 2000.0
                }, 
                {
                    "count": 17, 
                    "length": 3000.0
                }, 
                {
                    "count": 10, 
                    "length": 4000.0
                }, 
                {
                    "count": 9, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 14, 
                    "length": 7000.0
                }, 
                {
                    "count": 4, 
                    "length": 8000.0
                }, 
                {
                    "count": 7, 
                    "length": 9000.0
                }, 
                {
                    "count": 7, 
                    "length": 10000.0
                }, 
                {
                    "count": 6, 
                    "length": 11000.0
                }, 
                {
                    "count": 3, 
                    "length": 12000.0
                }, 
                {
                    "count": 4, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 140, 
                    "speed": 1.0
                }, 
                {
                    "count": 1, 
                    "speed": 3.0
                }, 
                {
                    "count": 2, 
                    "speed": 5.0
                }
            ], 
            "strand_median_pa": {
                "count": 143, 
                "mean": 91.74310302734375, 
                "sum": 13119.263671875
            }, 
            "strand_sd_pa": {
                "count": 143, 
                "mean": 12.14949893951416, 
                "sum": 1737.3782958984375
            }
        }, 
        "channel_count": 117, 
        "context_tags": {
            "experiment_duration_set": "2880", 
            "experiment_type": "rna", 
            "fast5_output_fastq_in_hdf": "1", 
            "fast5_raw": "1", 
            "fast5_reads_per_folder": "4000", 
            "fastq_enabled": "1", 
            "fastq_reads_per_file": "4000", 
            "filename": "gxb01170_20180726_fah85615_ga10000_sequencing_run_rnaab089716_65817", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 101860.3671875, 
        "levels_sums": {
            "count": 143, 
            "mean": 232.87030029296875, 
            "open_pore_level_sum": 33300.453125
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
        "read_count": 143, 
        "reads_per_channel_dist": [
            {
                "channel": 4, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 12, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 17, 
                "count": 2
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 40, 
                "count": 3
            }, 
            {
                "channel": 49, 
                "count": 1
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 58, 
                "count": 1
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 81, 
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
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 2
            }, 
            {
                "channel": 104, 
                "count": 2
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 106, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 1
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 2
            }, 
            {
                "channel": 145, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 3
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
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 3
            }, 
            {
                "channel": 184, 
                "count": 2
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 198, 
                "count": 2
            }, 
            {
                "channel": 200, 
                "count": 2
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 2
            }, 
            {
                "channel": 225, 
                "count": 2
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
                "channel": 237, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 244, 
                "count": 1
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 1
            }, 
            {
                "channel": 256, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 2
            }, 
            {
                "channel": 271, 
                "count": 2
            }, 
            {
                "channel": 274, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 280, 
                "count": 1
            }, 
            {
                "channel": 282, 
                "count": 1
            }, 
            {
                "channel": 288, 
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
                "channel": 320, 
                "count": 1
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 1
            }, 
            {
                "channel": 325, 
                "count": 1
            }, 
            {
                "channel": 326, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 1
            }, 
            {
                "channel": 332, 
                "count": 1
            }, 
            {
                "channel": 333, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 375, 
                "count": 1
            }, 
            {
                "channel": 386, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 2
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 1
            }, 
            {
                "channel": 411, 
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
                "channel": 439, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 2
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 469, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 2
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 2
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 497, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
        "segment_duration": 1740, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "22.032652", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-26T03:02:51Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "33.898438", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "79f23e03-2881-43fd-9704-b11f0989a201", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "0c752d44-facb-4c65-b125-2cae69597db6", 
            "protocols_version": "0.0.0.0", 
            "run_id": "0ac8beba0653c70e1d4b40b40a6c9884702d07b5", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 3.58003568649292, 
                "sum": 3.58003568649292
            }, 
            "read_len_events_sum_temp": 104, 
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
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 125.20626068115234, 
                "sum": 125.20626068115234
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 2.208710193634033, 
                "sum": 2.208710193634033
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
            "filename": "gxb01170_20180727_fah85615_ga10000_sequencing_run_rnaab089716_77027", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 21264.896484375, 
        "levels_sums": {
            "count": 1, 
            "mean": 290.8880920410156, 
            "open_pore_level_sum": 290.8880920410156
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
                "channel": 402, 
                "count": 1
            }
        ], 
        "run_id": "711b965c4cd6704bebb7d654433bed4084a13f2f", 
        "segment_duration": 60, 
        "segment_number": 6, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "21.748238", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-27T07:44:06Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "34.191406", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3568abda-3f92-434b-b1c4-8d44248c99b0", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "8ab0ad59-1012-40c0-ad68-5acef064f383", 
            "protocols_version": "0.0.0.0", 
            "run_id": "711b965c4cd6704bebb7d654433bed4084a13f2f", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "0034c6fe-53e2-42e4-9e5c-5b3c51094eb4", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 3.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 1, 
                "mean": 3.58003568649292, 
                "sum": 3.58003568649292
            }, 
            "read_len_events_sum_temp": 104, 
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
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 1, 
                "mean": 125.20626068115234, 
                "sum": 125.20626068115234
            }, 
            "strand_sd_pa": {
                "count": 1, 
                "mean": 2.208710193634033, 
                "sum": 2.208710193634033
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
            "filename": "gxb01170_20180727_fah85615_ga10000_sequencing_run_rnaab089716_77027", 
            "flowcell_type": "flo-min106", 
            "kit_classification": "none", 
            "local_basecalling": "1", 
            "local_bc_comp_model": "", 
            "local_bc_temp_model": "template_r9.4.1_70bps_5mer_rna_raw.jsn", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna001", 
            "user_filename_input": "rnaab089716"
        }, 
        "latest_run_time": 21264.896484375, 
        "levels_sums": {
            "count": 1, 
            "mean": 290.8880920410156, 
            "open_pore_level_sum": 290.8880920410156
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
                "channel": 402, 
                "count": 1
            }
        ], 
        "run_id": "711b965c4cd6704bebb7d654433bed4084a13f2f", 
        "segment_duration": 360, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "4246004002", 
            "asic_id_eeprom": "4549593", 
            "asic_temp": "21.748238", 
            "asic_version": "IA02C", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "GA10000", 
            "device_type": "gridion", 
            "exp_script_name": "08a1e82e5c89bc477ac5756d25a86a88e680fba6-9ac881a19342ff7f47b5c217536b3a50e6b51e07", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2018-07-27T07:44:06Z", 
            "flow_cell_id": "FAH85615", 
            "heatsink_temp": "34.191406", 
            "hostname": "GXB01170", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "9d440889-d91f-4ba9-819e-52fbea0f4471", 
            "operating_system": "ubuntu 16.04", 
            "protocol_run_id": "8ab0ad59-1012-40c0-ad68-5acef064f383", 
            "protocols_version": "0.0.0.0", 
            "run_id": "711b965c4cd6704bebb7d654433bed4084a13f2f", 
            "sample_id": "RNAAB089716", 
            "time_stamp": "2023-06-23T13:50:34Z", 
            "usb_config": "firm_1.2.3_ware#rbt_4.5.6_rbt#ctrl#USB3", 
            "version": "1.14.1"
        }
    }
]