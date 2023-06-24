[
    {
        "aggregation": "segment", 
        "analysis_id": "383295bf-30ab-494f-8e97-85ca3f06a66f", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 990
            }, 
            "qscore_dist_temp": [
                {
                    "count": 7, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 72, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 76, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 118, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 110, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 112, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 130, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 131, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 98, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 73, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 41, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 997, 
                "mean": 9.487198829650879, 
                "sum": 9458.7373046875
            }, 
            "read_len_events_sum_temp": 2007856, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 997, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 997, 
            "seq_len_events_dist_temp": [
                {
                    "count": 112, 
                    "length": 0.0
                }, 
                {
                    "count": 495, 
                    "length": 1000.0
                }, 
                {
                    "count": 241, 
                    "length": 2000.0
                }, 
                {
                    "count": 88, 
                    "length": 3000.0
                }, 
                {
                    "count": 38, 
                    "length": 4000.0
                }, 
                {
                    "count": 15, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 4, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 997, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 997, 
                "mean": 81.91878509521484, 
                "sum": 81673.03125
            }, 
            "strand_sd_pa": {
                "count": 997, 
                "mean": 11.440206527709961, 
                "sum": 11405.8857421875
            }
        }, 
        "channel_count": 419, 
        "context_tags": {
            "barcoding_enabled": "0", 
            "basecall_config_filename": "rna_r9.4.1_70bps_hac.cfg", 
            "experiment_duration_set": "4320", 
            "experiment_type": "rna", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "7.1.3", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 444.6029357910156, 
        "levels_sums": {
            "count": 997, 
            "mean": 199.9139404296875, 
            "open_pore_level_sum": 199314.203125
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
        "read_count": 997, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 2, 
                "count": 3
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 4, 
                "count": 2
            }, 
            {
                "channel": 5, 
                "count": 3
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 2
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 9, 
                "count": 2
            }, 
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 11, 
                "count": 5
            }, 
            {
                "channel": 12, 
                "count": 2
            }, 
            {
                "channel": 14, 
                "count": 2
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 17, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 19, 
                "count": 2
            }, 
            {
                "channel": 20, 
                "count": 4
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 5
            }, 
            {
                "channel": 25, 
                "count": 3
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 27, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 3
            }, 
            {
                "channel": 29, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 2
            }, 
            {
                "channel": 31, 
                "count": 3
            }, 
            {
                "channel": 32, 
                "count": 1
            }, 
            {
                "channel": 33, 
                "count": 4
            }, 
            {
                "channel": 34, 
                "count": 2
            }, 
            {
                "channel": 37, 
                "count": 4
            }, 
            {
                "channel": 39, 
                "count": 2
            }, 
            {
                "channel": 40, 
                "count": 4
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 43, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 2
            }, 
            {
                "channel": 45, 
                "count": 4
            }, 
            {
                "channel": 46, 
                "count": 3
            }, 
            {
                "channel": 47, 
                "count": 6
            }, 
            {
                "channel": 49, 
                "count": 4
            }, 
            {
                "channel": 50, 
                "count": 2
            }, 
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 3
            }, 
            {
                "channel": 54, 
                "count": 4
            }, 
            {
                "channel": 55, 
                "count": 2
            }, 
            {
                "channel": 56, 
                "count": 5
            }, 
            {
                "channel": 57, 
                "count": 3
            }, 
            {
                "channel": 58, 
                "count": 3
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 64, 
                "count": 4
            }, 
            {
                "channel": 65, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 68, 
                "count": 2
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 70, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 3
            }, 
            {
                "channel": 72, 
                "count": 3
            }, 
            {
                "channel": 73, 
                "count": 3
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 6
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 2
            }, 
            {
                "channel": 79, 
                "count": 2
            }, 
            {
                "channel": 80, 
                "count": 2
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 85, 
                "count": 2
            }, 
            {
                "channel": 86, 
                "count": 3
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 5
            }, 
            {
                "channel": 90, 
                "count": 2
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 2
            }, 
            {
                "channel": 94, 
                "count": 5
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 3
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 5
            }, 
            {
                "channel": 101, 
                "count": 2
            }, 
            {
                "channel": 102, 
                "count": 5
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 104, 
                "count": 4
            }, 
            {
                "channel": 105, 
                "count": 5
            }, 
            {
                "channel": 106, 
                "count": 1
            }, 
            {
                "channel": 107, 
                "count": 3
            }, 
            {
                "channel": 108, 
                "count": 5
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 3
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
                "count": 2
            }, 
            {
                "channel": 116, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 120, 
                "count": 2
            }, 
            {
                "channel": 121, 
                "count": 4
            }, 
            {
                "channel": 122, 
                "count": 1
            }, 
            {
                "channel": 124, 
                "count": 3
            }, 
            {
                "channel": 126, 
                "count": 2
            }, 
            {
                "channel": 127, 
                "count": 4
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 2
            }, 
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 4
            }, 
            {
                "channel": 132, 
                "count": 5
            }, 
            {
                "channel": 134, 
                "count": 2
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 3
            }, 
            {
                "channel": 137, 
                "count": 2
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 139, 
                "count": 2
            }, 
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 143, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 4
            }, 
            {
                "channel": 146, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 2
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 2
            }, 
            {
                "channel": 150, 
                "count": 3
            }, 
            {
                "channel": 151, 
                "count": 2
            }, 
            {
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 2
            }, 
            {
                "channel": 155, 
                "count": 5
            }, 
            {
                "channel": 156, 
                "count": 2
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 4
            }, 
            {
                "channel": 159, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 3
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 2
            }, 
            {
                "channel": 166, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 3
            }, 
            {
                "channel": 168, 
                "count": 2
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 2
            }, 
            {
                "channel": 172, 
                "count": 2
            }, 
            {
                "channel": 173, 
                "count": 3
            }, 
            {
                "channel": 174, 
                "count": 2
            }, 
            {
                "channel": 175, 
                "count": 8
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
                "channel": 178, 
                "count": 4
            }, 
            {
                "channel": 179, 
                "count": 2
            }, 
            {
                "channel": 180, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 2
            }, 
            {
                "channel": 183, 
                "count": 3
            }, 
            {
                "channel": 184, 
                "count": 3
            }, 
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 2
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 189, 
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 2
            }, 
            {
                "channel": 191, 
                "count": 2
            }, 
            {
                "channel": 192, 
                "count": 3
            }, 
            {
                "channel": 193, 
                "count": 4
            }, 
            {
                "channel": 194, 
                "count": 4
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 196, 
                "count": 7
            }, 
            {
                "channel": 197, 
                "count": 1
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
                "count": 5
            }, 
            {
                "channel": 202, 
                "count": 2
            }, 
            {
                "channel": 203, 
                "count": 2
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 7
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 2
            }, 
            {
                "channel": 208, 
                "count": 3
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 5
            }, 
            {
                "channel": 211, 
                "count": 5
            }, 
            {
                "channel": 212, 
                "count": 4
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 4
            }, 
            {
                "channel": 216, 
                "count": 4
            }, 
            {
                "channel": 217, 
                "count": 2
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 2
            }, 
            {
                "channel": 220, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 4
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 3
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 4
            }, 
            {
                "channel": 232, 
                "count": 3
            }, 
            {
                "channel": 233, 
                "count": 2
            }, 
            {
                "channel": 236, 
                "count": 3
            }, 
            {
                "channel": 237, 
                "count": 2
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 2
            }, 
            {
                "channel": 244, 
                "count": 3
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 2
            }, 
            {
                "channel": 248, 
                "count": 3
            }, 
            {
                "channel": 249, 
                "count": 4
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 251, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 3
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 5
            }, 
            {
                "channel": 256, 
                "count": 2
            }, 
            {
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 3
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 4
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 3
            }, 
            {
                "channel": 263, 
                "count": 5
            }, 
            {
                "channel": 264, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 4
            }, 
            {
                "channel": 266, 
                "count": 3
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 4
            }, 
            {
                "channel": 271, 
                "count": 4
            }, 
            {
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 274, 
                "count": 3
            }, 
            {
                "channel": 275, 
                "count": 4
            }, 
            {
                "channel": 276, 
                "count": 2
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 282, 
                "count": 1
            }, 
            {
                "channel": 283, 
                "count": 3
            }, 
            {
                "channel": 284, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 2
            }, 
            {
                "channel": 287, 
                "count": 3
            }, 
            {
                "channel": 289, 
                "count": 2
            }, 
            {
                "channel": 290, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 2
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
                "channel": 296, 
                "count": 2
            }, 
            {
                "channel": 297, 
                "count": 2
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 2
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 3
            }, 
            {
                "channel": 305, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 2
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 4
            }, 
            {
                "channel": 317, 
                "count": 4
            }, 
            {
                "channel": 318, 
                "count": 5
            }, 
            {
                "channel": 320, 
                "count": 4
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 8
            }, 
            {
                "channel": 324, 
                "count": 2
            }, 
            {
                "channel": 325, 
                "count": 2
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 328, 
                "count": 3
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 5
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 332, 
                "count": 2
            }, 
            {
                "channel": 334, 
                "count": 3
            }, 
            {
                "channel": 335, 
                "count": 3
            }, 
            {
                "channel": 336, 
                "count": 4
            }, 
            {
                "channel": 338, 
                "count": 4
            }, 
            {
                "channel": 339, 
                "count": 2
            }, 
            {
                "channel": 340, 
                "count": 2
            }, 
            {
                "channel": 341, 
                "count": 1
            }, 
            {
                "channel": 342, 
                "count": 2
            }, 
            {
                "channel": 343, 
                "count": 3
            }, 
            {
                "channel": 344, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 3
            }, 
            {
                "channel": 346, 
                "count": 3
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 4
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 351, 
                "count": 5
            }, 
            {
                "channel": 352, 
                "count": 2
            }, 
            {
                "channel": 353, 
                "count": 2
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 2
            }, 
            {
                "channel": 357, 
                "count": 3
            }, 
            {
                "channel": 358, 
                "count": 2
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 4
            }, 
            {
                "channel": 362, 
                "count": 2
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 366, 
                "count": 5
            }, 
            {
                "channel": 368, 
                "count": 2
            }, 
            {
                "channel": 369, 
                "count": 1
            }, 
            {
                "channel": 371, 
                "count": 2
            }, 
            {
                "channel": 372, 
                "count": 2
            }, 
            {
                "channel": 373, 
                "count": 2
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 375, 
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
                "channel": 379, 
                "count": 4
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 3
            }, 
            {
                "channel": 382, 
                "count": 4
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 384, 
                "count": 3
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 6
            }, 
            {
                "channel": 388, 
                "count": 2
            }, 
            {
                "channel": 390, 
                "count": 2
            }, 
            {
                "channel": 391, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 2
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 4
            }, 
            {
                "channel": 397, 
                "count": 3
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 2
            }, 
            {
                "channel": 401, 
                "count": 2
            }, 
            {
                "channel": 402, 
                "count": 3
            }, 
            {
                "channel": 403, 
                "count": 2
            }, 
            {
                "channel": 404, 
                "count": 2
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 406, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 3
            }, 
            {
                "channel": 408, 
                "count": 3
            }, 
            {
                "channel": 409, 
                "count": 2
            }, 
            {
                "channel": 411, 
                "count": 1
            }, 
            {
                "channel": 412, 
                "count": 5
            }, 
            {
                "channel": 413, 
                "count": 2
            }, 
            {
                "channel": 414, 
                "count": 3
            }, 
            {
                "channel": 415, 
                "count": 2
            }, 
            {
                "channel": 416, 
                "count": 3
            }, 
            {
                "channel": 417, 
                "count": 3
            }, 
            {
                "channel": 419, 
                "count": 3
            }, 
            {
                "channel": 420, 
                "count": 2
            }, 
            {
                "channel": 421, 
                "count": 5
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 2
            }, 
            {
                "channel": 426, 
                "count": 2
            }, 
            {
                "channel": 428, 
                "count": 3
            }, 
            {
                "channel": 430, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 2
            }, 
            {
                "channel": 433, 
                "count": 2
            }, 
            {
                "channel": 434, 
                "count": 2
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
                "count": 2
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
                "channel": 440, 
                "count": 2
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 3
            }, 
            {
                "channel": 444, 
                "count": 5
            }, 
            {
                "channel": 445, 
                "count": 2
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
                "channel": 448, 
                "count": 2
            }, 
            {
                "channel": 449, 
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
                "count": 2
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 3
            }, 
            {
                "channel": 459, 
                "count": 3
            }, 
            {
                "channel": 460, 
                "count": 3
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 2
            }, 
            {
                "channel": 465, 
                "count": 3
            }, 
            {
                "channel": 466, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 470, 
                "count": 3
            }, 
            {
                "channel": 471, 
                "count": 2
            }, 
            {
                "channel": 473, 
                "count": 2
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 3
            }, 
            {
                "channel": 477, 
                "count": 3
            }, 
            {
                "channel": 478, 
                "count": 2
            }, 
            {
                "channel": 480, 
                "count": 3
            }, 
            {
                "channel": 481, 
                "count": 2
            }, 
            {
                "channel": 484, 
                "count": 3
            }, 
            {
                "channel": 485, 
                "count": 2
            }, 
            {
                "channel": 487, 
                "count": 5
            }, 
            {
                "channel": 488, 
                "count": 3
            }, 
            {
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 2
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 3
            }, 
            {
                "channel": 494, 
                "count": 2
            }, 
            {
                "channel": 495, 
                "count": 4
            }, 
            {
                "channel": 499, 
                "count": 4
            }, 
            {
                "channel": 500, 
                "count": 4
            }, 
            {
                "channel": 501, 
                "count": 3
            }, 
            {
                "channel": 502, 
                "count": 4
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 2
            }, 
            {
                "channel": 506, 
                "count": 4
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 2
            }, 
            {
                "channel": 510, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 4
            }
        ], 
        "run_id": "d7aa9ef564648dae26e0d0184efc1aee3e004e5f", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "544368865", 
            "asic_id_eeprom": "8223128", 
            "asic_temp": "26.639854", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "5.1.5", 
            "device_id": "X5", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "22.05.7", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2022-08-17T12:14:46.302509+00:00", 
            "flow_cell_id": "FAT90943", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "6.1.5+446c35524", 
            "heatsink_temp": "34.074219", 
            "host_product_code": "GRD-X5B004", 
            "host_product_serial_number": "GXB03017", 
            "hostname": "GXB03017", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3cbb6529-3589-427f-bb46-fc32df3c3b70", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220817", 
            "protocol_run_id": "7d665892-a669-4348-a030-2869b50077e9", 
            "protocol_start_time": "2022-08-17T12:10:34.689494+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "d7aa9ef564648dae26e0d0184efc1aee3e004e5f", 
            "sample_id": "CK_ymx", 
            "time_stamp": "2023-06-22T10:42:05Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "383295bf-30ab-494f-8e97-85ca3f06a66f", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 990
            }, 
            "qscore_dist_temp": [
                {
                    "count": 7, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 72, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 76, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 118, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 110, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 112, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 130, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 131, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 98, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 73, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 41, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 997, 
                "mean": 9.487198829650879, 
                "sum": 9458.7373046875
            }, 
            "read_len_events_sum_temp": 2007856, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 997, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 997, 
            "seq_len_events_dist_temp": [
                {
                    "count": 112, 
                    "length": 0.0
                }, 
                {
                    "count": 495, 
                    "length": 1000.0
                }, 
                {
                    "count": 241, 
                    "length": 2000.0
                }, 
                {
                    "count": 88, 
                    "length": 3000.0
                }, 
                {
                    "count": 38, 
                    "length": 4000.0
                }, 
                {
                    "count": 15, 
                    "length": 5000.0
                }, 
                {
                    "count": 3, 
                    "length": 6000.0
                }, 
                {
                    "count": 4, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 997, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 997, 
                "mean": 81.91878509521484, 
                "sum": 81673.03125
            }, 
            "strand_sd_pa": {
                "count": 997, 
                "mean": 11.440206527709961, 
                "sum": 11405.8857421875
            }
        }, 
        "channel_count": 419, 
        "context_tags": {
            "barcoding_enabled": "0", 
            "basecall_config_filename": "rna_r9.4.1_70bps_hac.cfg", 
            "experiment_duration_set": "4320", 
            "experiment_type": "rna", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "7.1.3", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 444.6029357910156, 
        "levels_sums": {
            "count": 997, 
            "mean": 199.9139404296875, 
            "open_pore_level_sum": 199314.203125
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
        "read_count": 997, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 2, 
                "count": 3
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 4, 
                "count": 2
            }, 
            {
                "channel": 5, 
                "count": 3
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 2
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 9, 
                "count": 2
            }, 
            {
                "channel": 10, 
                "count": 1
            }, 
            {
                "channel": 11, 
                "count": 5
            }, 
            {
                "channel": 12, 
                "count": 2
            }, 
            {
                "channel": 14, 
                "count": 2
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 17, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 19, 
                "count": 2
            }, 
            {
                "channel": 20, 
                "count": 4
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 5
            }, 
            {
                "channel": 25, 
                "count": 3
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 27, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 3
            }, 
            {
                "channel": 29, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 2
            }, 
            {
                "channel": 31, 
                "count": 3
            }, 
            {
                "channel": 32, 
                "count": 1
            }, 
            {
                "channel": 33, 
                "count": 4
            }, 
            {
                "channel": 34, 
                "count": 2
            }, 
            {
                "channel": 37, 
                "count": 4
            }, 
            {
                "channel": 39, 
                "count": 2
            }, 
            {
                "channel": 40, 
                "count": 4
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 43, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 2
            }, 
            {
                "channel": 45, 
                "count": 4
            }, 
            {
                "channel": 46, 
                "count": 3
            }, 
            {
                "channel": 47, 
                "count": 6
            }, 
            {
                "channel": 49, 
                "count": 4
            }, 
            {
                "channel": 50, 
                "count": 2
            }, 
            {
                "channel": 51, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 3
            }, 
            {
                "channel": 54, 
                "count": 4
            }, 
            {
                "channel": 55, 
                "count": 2
            }, 
            {
                "channel": 56, 
                "count": 5
            }, 
            {
                "channel": 57, 
                "count": 3
            }, 
            {
                "channel": 58, 
                "count": 3
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 64, 
                "count": 4
            }, 
            {
                "channel": 65, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 68, 
                "count": 2
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 70, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 3
            }, 
            {
                "channel": 72, 
                "count": 3
            }, 
            {
                "channel": 73, 
                "count": 3
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 6
            }, 
            {
                "channel": 77, 
                "count": 1
            }, 
            {
                "channel": 78, 
                "count": 2
            }, 
            {
                "channel": 79, 
                "count": 2
            }, 
            {
                "channel": 80, 
                "count": 2
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 85, 
                "count": 2
            }, 
            {
                "channel": 86, 
                "count": 3
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 5
            }, 
            {
                "channel": 90, 
                "count": 2
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 2
            }, 
            {
                "channel": 94, 
                "count": 5
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 98, 
                "count": 3
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 100, 
                "count": 5
            }, 
            {
                "channel": 101, 
                "count": 2
            }, 
            {
                "channel": 102, 
                "count": 5
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 104, 
                "count": 4
            }, 
            {
                "channel": 105, 
                "count": 5
            }, 
            {
                "channel": 106, 
                "count": 1
            }, 
            {
                "channel": 107, 
                "count": 3
            }, 
            {
                "channel": 108, 
                "count": 5
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 111, 
                "count": 3
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
                "count": 2
            }, 
            {
                "channel": 116, 
                "count": 1
            }, 
            {
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 120, 
                "count": 2
            }, 
            {
                "channel": 121, 
                "count": 4
            }, 
            {
                "channel": 122, 
                "count": 1
            }, 
            {
                "channel": 124, 
                "count": 3
            }, 
            {
                "channel": 126, 
                "count": 2
            }, 
            {
                "channel": 127, 
                "count": 4
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 2
            }, 
            {
                "channel": 130, 
                "count": 1
            }, 
            {
                "channel": 131, 
                "count": 4
            }, 
            {
                "channel": 132, 
                "count": 5
            }, 
            {
                "channel": 134, 
                "count": 2
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 3
            }, 
            {
                "channel": 137, 
                "count": 2
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 139, 
                "count": 2
            }, 
            {
                "channel": 140, 
                "count": 1
            }, 
            {
                "channel": 141, 
                "count": 1
            }, 
            {
                "channel": 142, 
                "count": 2
            }, 
            {
                "channel": 143, 
                "count": 2
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 4
            }, 
            {
                "channel": 146, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 2
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 2
            }, 
            {
                "channel": 150, 
                "count": 3
            }, 
            {
                "channel": 151, 
                "count": 2
            }, 
            {
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 2
            }, 
            {
                "channel": 155, 
                "count": 5
            }, 
            {
                "channel": 156, 
                "count": 2
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 4
            }, 
            {
                "channel": 159, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 3
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 2
            }, 
            {
                "channel": 166, 
                "count": 2
            }, 
            {
                "channel": 167, 
                "count": 3
            }, 
            {
                "channel": 168, 
                "count": 2
            }, 
            {
                "channel": 169, 
                "count": 1
            }, 
            {
                "channel": 171, 
                "count": 2
            }, 
            {
                "channel": 172, 
                "count": 2
            }, 
            {
                "channel": 173, 
                "count": 3
            }, 
            {
                "channel": 174, 
                "count": 2
            }, 
            {
                "channel": 175, 
                "count": 8
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
                "channel": 178, 
                "count": 4
            }, 
            {
                "channel": 179, 
                "count": 2
            }, 
            {
                "channel": 180, 
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 2
            }, 
            {
                "channel": 183, 
                "count": 3
            }, 
            {
                "channel": 184, 
                "count": 3
            }, 
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 187, 
                "count": 2
            }, 
            {
                "channel": 188, 
                "count": 1
            }, 
            {
                "channel": 189, 
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 2
            }, 
            {
                "channel": 191, 
                "count": 2
            }, 
            {
                "channel": 192, 
                "count": 3
            }, 
            {
                "channel": 193, 
                "count": 4
            }, 
            {
                "channel": 194, 
                "count": 4
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 196, 
                "count": 7
            }, 
            {
                "channel": 197, 
                "count": 1
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
                "count": 5
            }, 
            {
                "channel": 202, 
                "count": 2
            }, 
            {
                "channel": 203, 
                "count": 2
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 7
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 2
            }, 
            {
                "channel": 208, 
                "count": 3
            }, 
            {
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 5
            }, 
            {
                "channel": 211, 
                "count": 5
            }, 
            {
                "channel": 212, 
                "count": 4
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 4
            }, 
            {
                "channel": 216, 
                "count": 4
            }, 
            {
                "channel": 217, 
                "count": 2
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 2
            }, 
            {
                "channel": 220, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 4
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 225, 
                "count": 3
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 230, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 4
            }, 
            {
                "channel": 232, 
                "count": 3
            }, 
            {
                "channel": 233, 
                "count": 2
            }, 
            {
                "channel": 236, 
                "count": 3
            }, 
            {
                "channel": 237, 
                "count": 2
            }, 
            {
                "channel": 238, 
                "count": 1
            }, 
            {
                "channel": 239, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 2
            }, 
            {
                "channel": 244, 
                "count": 3
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 2
            }, 
            {
                "channel": 248, 
                "count": 3
            }, 
            {
                "channel": 249, 
                "count": 4
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 251, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 3
            }, 
            {
                "channel": 254, 
                "count": 1
            }, 
            {
                "channel": 255, 
                "count": 5
            }, 
            {
                "channel": 256, 
                "count": 2
            }, 
            {
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 3
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 260, 
                "count": 4
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 3
            }, 
            {
                "channel": 263, 
                "count": 5
            }, 
            {
                "channel": 264, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 4
            }, 
            {
                "channel": 266, 
                "count": 3
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 270, 
                "count": 4
            }, 
            {
                "channel": 271, 
                "count": 4
            }, 
            {
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 274, 
                "count": 3
            }, 
            {
                "channel": 275, 
                "count": 4
            }, 
            {
                "channel": 276, 
                "count": 2
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 278, 
                "count": 1
            }, 
            {
                "channel": 279, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 282, 
                "count": 1
            }, 
            {
                "channel": 283, 
                "count": 3
            }, 
            {
                "channel": 284, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 2
            }, 
            {
                "channel": 287, 
                "count": 3
            }, 
            {
                "channel": 289, 
                "count": 2
            }, 
            {
                "channel": 290, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 292, 
                "count": 2
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
                "channel": 296, 
                "count": 2
            }, 
            {
                "channel": 297, 
                "count": 2
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 2
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 3
            }, 
            {
                "channel": 305, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 1
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 1
            }, 
            {
                "channel": 312, 
                "count": 2
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 4
            }, 
            {
                "channel": 317, 
                "count": 4
            }, 
            {
                "channel": 318, 
                "count": 5
            }, 
            {
                "channel": 320, 
                "count": 4
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 8
            }, 
            {
                "channel": 324, 
                "count": 2
            }, 
            {
                "channel": 325, 
                "count": 2
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 328, 
                "count": 3
            }, 
            {
                "channel": 329, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 5
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 332, 
                "count": 2
            }, 
            {
                "channel": 334, 
                "count": 3
            }, 
            {
                "channel": 335, 
                "count": 3
            }, 
            {
                "channel": 336, 
                "count": 4
            }, 
            {
                "channel": 338, 
                "count": 4
            }, 
            {
                "channel": 339, 
                "count": 2
            }, 
            {
                "channel": 340, 
                "count": 2
            }, 
            {
                "channel": 341, 
                "count": 1
            }, 
            {
                "channel": 342, 
                "count": 2
            }, 
            {
                "channel": 343, 
                "count": 3
            }, 
            {
                "channel": 344, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 3
            }, 
            {
                "channel": 346, 
                "count": 3
            }, 
            {
                "channel": 347, 
                "count": 1
            }, 
            {
                "channel": 348, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 4
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 351, 
                "count": 5
            }, 
            {
                "channel": 352, 
                "count": 2
            }, 
            {
                "channel": 353, 
                "count": 2
            }, 
            {
                "channel": 355, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 2
            }, 
            {
                "channel": 357, 
                "count": 3
            }, 
            {
                "channel": 358, 
                "count": 2
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 361, 
                "count": 4
            }, 
            {
                "channel": 362, 
                "count": 2
            }, 
            {
                "channel": 363, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 366, 
                "count": 5
            }, 
            {
                "channel": 368, 
                "count": 2
            }, 
            {
                "channel": 369, 
                "count": 1
            }, 
            {
                "channel": 371, 
                "count": 2
            }, 
            {
                "channel": 372, 
                "count": 2
            }, 
            {
                "channel": 373, 
                "count": 2
            }, 
            {
                "channel": 374, 
                "count": 1
            }, 
            {
                "channel": 375, 
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
                "channel": 379, 
                "count": 4
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 3
            }, 
            {
                "channel": 382, 
                "count": 4
            }, 
            {
                "channel": 383, 
                "count": 1
            }, 
            {
                "channel": 384, 
                "count": 3
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 6
            }, 
            {
                "channel": 388, 
                "count": 2
            }, 
            {
                "channel": 390, 
                "count": 2
            }, 
            {
                "channel": 391, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 2
            }, 
            {
                "channel": 394, 
                "count": 1
            }, 
            {
                "channel": 395, 
                "count": 4
            }, 
            {
                "channel": 397, 
                "count": 3
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 2
            }, 
            {
                "channel": 401, 
                "count": 2
            }, 
            {
                "channel": 402, 
                "count": 3
            }, 
            {
                "channel": 403, 
                "count": 2
            }, 
            {
                "channel": 404, 
                "count": 2
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 406, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 3
            }, 
            {
                "channel": 408, 
                "count": 3
            }, 
            {
                "channel": 409, 
                "count": 2
            }, 
            {
                "channel": 411, 
                "count": 1
            }, 
            {
                "channel": 412, 
                "count": 5
            }, 
            {
                "channel": 413, 
                "count": 2
            }, 
            {
                "channel": 414, 
                "count": 3
            }, 
            {
                "channel": 415, 
                "count": 2
            }, 
            {
                "channel": 416, 
                "count": 3
            }, 
            {
                "channel": 417, 
                "count": 3
            }, 
            {
                "channel": 419, 
                "count": 3
            }, 
            {
                "channel": 420, 
                "count": 2
            }, 
            {
                "channel": 421, 
                "count": 5
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 423, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 2
            }, 
            {
                "channel": 426, 
                "count": 2
            }, 
            {
                "channel": 428, 
                "count": 3
            }, 
            {
                "channel": 430, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 2
            }, 
            {
                "channel": 433, 
                "count": 2
            }, 
            {
                "channel": 434, 
                "count": 2
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
                "count": 2
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
                "channel": 440, 
                "count": 2
            }, 
            {
                "channel": 441, 
                "count": 1
            }, 
            {
                "channel": 443, 
                "count": 3
            }, 
            {
                "channel": 444, 
                "count": 5
            }, 
            {
                "channel": 445, 
                "count": 2
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
                "channel": 448, 
                "count": 2
            }, 
            {
                "channel": 449, 
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
                "count": 2
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 458, 
                "count": 3
            }, 
            {
                "channel": 459, 
                "count": 3
            }, 
            {
                "channel": 460, 
                "count": 3
            }, 
            {
                "channel": 462, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 2
            }, 
            {
                "channel": 465, 
                "count": 3
            }, 
            {
                "channel": 466, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 470, 
                "count": 3
            }, 
            {
                "channel": 471, 
                "count": 2
            }, 
            {
                "channel": 473, 
                "count": 2
            }, 
            {
                "channel": 475, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 3
            }, 
            {
                "channel": 477, 
                "count": 3
            }, 
            {
                "channel": 478, 
                "count": 2
            }, 
            {
                "channel": 480, 
                "count": 3
            }, 
            {
                "channel": 481, 
                "count": 2
            }, 
            {
                "channel": 484, 
                "count": 3
            }, 
            {
                "channel": 485, 
                "count": 2
            }, 
            {
                "channel": 487, 
                "count": 5
            }, 
            {
                "channel": 488, 
                "count": 3
            }, 
            {
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 2
            }, 
            {
                "channel": 491, 
                "count": 1
            }, 
            {
                "channel": 492, 
                "count": 1
            }, 
            {
                "channel": 493, 
                "count": 3
            }, 
            {
                "channel": 494, 
                "count": 2
            }, 
            {
                "channel": 495, 
                "count": 4
            }, 
            {
                "channel": 499, 
                "count": 4
            }, 
            {
                "channel": 500, 
                "count": 4
            }, 
            {
                "channel": 501, 
                "count": 3
            }, 
            {
                "channel": 502, 
                "count": 4
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 2
            }, 
            {
                "channel": 506, 
                "count": 4
            }, 
            {
                "channel": 507, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 2
            }, 
            {
                "channel": 510, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 4
            }
        ], 
        "run_id": "d7aa9ef564648dae26e0d0184efc1aee3e004e5f", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "544368865", 
            "asic_id_eeprom": "8223128", 
            "asic_temp": "26.639854", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "5.1.5", 
            "device_id": "X5", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "22.05.7", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2022-08-17T12:14:46.302509+00:00", 
            "flow_cell_id": "FAT90943", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "6.1.5+446c35524", 
            "heatsink_temp": "34.074219", 
            "host_product_code": "GRD-X5B004", 
            "host_product_serial_number": "GXB03017", 
            "hostname": "GXB03017", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4769df93-94fe-47ce-9742-3f6a9733883e", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220817", 
            "protocol_run_id": "7d665892-a669-4348-a030-2869b50077e9", 
            "protocol_start_time": "2022-08-17T12:10:34.689494+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "d7aa9ef564648dae26e0d0184efc1aee3e004e5f", 
            "sample_id": "CK_ymx", 
            "time_stamp": "2023-06-22T10:42:05Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }
]