[
    {
        "aggregation": "segment", 
        "analysis_id": "1496ce64-e65c-4241-93f7-201bb7a93d27", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5, 
                "pass": 979
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 302, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 307, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 214, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 111, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 33, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 984, 
                "mean": 7.887187957763672, 
                "sum": 7760.9931640625
            }, 
            "read_len_events_sum_temp": 2782499, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 984, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 984, 
            "seq_len_events_dist_temp": [
                {
                    "count": 39, 
                    "length": 0.0
                }, 
                {
                    "count": 307, 
                    "length": 1000.0
                }, 
                {
                    "count": 308, 
                    "length": 2000.0
                }, 
                {
                    "count": 153, 
                    "length": 3000.0
                }, 
                {
                    "count": 84, 
                    "length": 4000.0
                }, 
                {
                    "count": 43, 
                    "length": 5000.0
                }, 
                {
                    "count": 23, 
                    "length": 6000.0
                }, 
                {
                    "count": 13, 
                    "length": 7000.0
                }, 
                {
                    "count": 7, 
                    "length": 8000.0
                }, 
                {
                    "count": 5, 
                    "length": 9000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 984, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 984, 
                "mean": 79.15962982177734, 
                "sum": 77893.078125
            }, 
            "strand_sd_pa": {
                "count": 984, 
                "mean": 12.513306617736816, 
                "sum": 12313.09375
            }
        }, 
        "channel_count": 420, 
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
        "latest_run_time": 515.84625244140625, 
        "levels_sums": {
            "count": 984, 
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
        "read_count": 984, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 4
            }, 
            {
                "channel": 3, 
                "count": 5
            }, 
            {
                "channel": 4, 
                "count": 3
            }, 
            {
                "channel": 5, 
                "count": 2
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 7, 
                "count": 4
            }, 
            {
                "channel": 9, 
                "count": 3
            }, 
            {
                "channel": 10, 
                "count": 2
            }, 
            {
                "channel": 12, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 3
            }, 
            {
                "channel": 14, 
                "count": 4
            }, 
            {
                "channel": 15, 
                "count": 3
            }, 
            {
                "channel": 16, 
                "count": 2
            }, 
            {
                "channel": 17, 
                "count": 3
            }, 
            {
                "channel": 18, 
                "count": 3
            }, 
            {
                "channel": 19, 
                "count": 5
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 4
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 28, 
                "count": 3
            }, 
            {
                "channel": 29, 
                "count": 2
            }, 
            {
                "channel": 30, 
                "count": 3
            }, 
            {
                "channel": 32, 
                "count": 5
            }, 
            {
                "channel": 34, 
                "count": 4
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 3
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 3
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
                "channel": 47, 
                "count": 3
            }, 
            {
                "channel": 48, 
                "count": 3
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 50, 
                "count": 5
            }, 
            {
                "channel": 51, 
                "count": 3
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 1
            }, 
            {
                "channel": 54, 
                "count": 2
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 3
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 58, 
                "count": 2
            }, 
            {
                "channel": 59, 
                "count": 2
            }, 
            {
                "channel": 61, 
                "count": 5
            }, 
            {
                "channel": 62, 
                "count": 3
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 67, 
                "count": 2
            }, 
            {
                "channel": 68, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 3
            }, 
            {
                "channel": 70, 
                "count": 3
            }, 
            {
                "channel": 71, 
                "count": 2
            }, 
            {
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 2
            }, 
            {
                "channel": 76, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 4
            }, 
            {
                "channel": 81, 
                "count": 4
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 6
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 85, 
                "count": 3
            }, 
            {
                "channel": 86, 
                "count": 2
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 3
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 2
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 6
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 2
            }, 
            {
                "channel": 96, 
                "count": 2
            }, 
            {
                "channel": 97, 
                "count": 4
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 101, 
                "count": 5
            }, 
            {
                "channel": 102, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 5
            }, 
            {
                "channel": 104, 
                "count": 2
            }, 
            {
                "channel": 105, 
                "count": 3
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 3
            }, 
            {
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 4
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 113, 
                "count": 2
            }, 
            {
                "channel": 114, 
                "count": 2
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
                "channel": 118, 
                "count": 2
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 3
            }, 
            {
                "channel": 123, 
                "count": 4
            }, 
            {
                "channel": 124, 
                "count": 2
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 3
            }, 
            {
                "channel": 130, 
                "count": 3
            }, 
            {
                "channel": 135, 
                "count": 2
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
                "channel": 139, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 3
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 4
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 3
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 4
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 2
            }, 
            {
                "channel": 160, 
                "count": 3
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 2
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 3
            }, 
            {
                "channel": 165, 
                "count": 3
            }, 
            {
                "channel": 166, 
                "count": 4
            }, 
            {
                "channel": 168, 
                "count": 3
            }, 
            {
                "channel": 169, 
                "count": 2
            }, 
            {
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 4
            }, 
            {
                "channel": 172, 
                "count": 5
            }, 
            {
                "channel": 173, 
                "count": 7
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 3
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 2
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 2
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 4
            }, 
            {
                "channel": 183, 
                "count": 3
            }, 
            {
                "channel": 186, 
                "count": 4
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 188, 
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
                "count": 2
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 195, 
                "count": 3
            }, 
            {
                "channel": 196, 
                "count": 2
            }, 
            {
                "channel": 197, 
                "count": 2
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 2
            }, 
            {
                "channel": 202, 
                "count": 3
            }, 
            {
                "channel": 204, 
                "count": 4
            }, 
            {
                "channel": 205, 
                "count": 4
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 4
            }, 
            {
                "channel": 209, 
                "count": 3
            }, 
            {
                "channel": 210, 
                "count": 2
            }, 
            {
                "channel": 211, 
                "count": 4
            }, 
            {
                "channel": 212, 
                "count": 3
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 2
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 3
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 3
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
                "count": 3
            }, 
            {
                "channel": 226, 
                "count": 3
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 2
            }, 
            {
                "channel": 232, 
                "count": 2
            }, 
            {
                "channel": 233, 
                "count": 2
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 237, 
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
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 2
            }, 
            {
                "channel": 243, 
                "count": 2
            }, 
            {
                "channel": 244, 
                "count": 2
            }, 
            {
                "channel": 245, 
                "count": 2
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 3
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
                "count": 3
            }, 
            {
                "channel": 252, 
                "count": 4
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 3
            }, 
            {
                "channel": 256, 
                "count": 3
            }, 
            {
                "channel": 257, 
                "count": 4
            }, 
            {
                "channel": 258, 
                "count": 3
            }, 
            {
                "channel": 260, 
                "count": 5
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
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 267, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 3
            }, 
            {
                "channel": 270, 
                "count": 2
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 4
            }, 
            {
                "channel": 273, 
                "count": 3
            }, 
            {
                "channel": 274, 
                "count": 2
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 3
            }, 
            {
                "channel": 278, 
                "count": 3
            }, 
            {
                "channel": 279, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 3
            }, 
            {
                "channel": 281, 
                "count": 2
            }, 
            {
                "channel": 282, 
                "count": 3
            }, 
            {
                "channel": 283, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 3
            }, 
            {
                "channel": 289, 
                "count": 3
            }, 
            {
                "channel": 290, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 3
            }, 
            {
                "channel": 295, 
                "count": 2
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 3
            }, 
            {
                "channel": 300, 
                "count": 2
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 4
            }, 
            {
                "channel": 303, 
                "count": 2
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 305, 
                "count": 3
            }, 
            {
                "channel": 307, 
                "count": 3
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 2
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
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 3
            }, 
            {
                "channel": 317, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 4
            }, 
            {
                "channel": 320, 
                "count": 2
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 2
            }, 
            {
                "channel": 324, 
                "count": 2
            }, 
            {
                "channel": 326, 
                "count": 2
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 328, 
                "count": 2
            }, 
            {
                "channel": 329, 
                "count": 5
            }, 
            {
                "channel": 331, 
                "count": 3
            }, 
            {
                "channel": 332, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 3
            }, 
            {
                "channel": 334, 
                "count": 4
            }, 
            {
                "channel": 335, 
                "count": 2
            }, 
            {
                "channel": 338, 
                "count": 3
            }, 
            {
                "channel": 339, 
                "count": 4
            }, 
            {
                "channel": 342, 
                "count": 3
            }, 
            {
                "channel": 343, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 4
            }, 
            {
                "channel": 346, 
                "count": 3
            }, 
            {
                "channel": 347, 
                "count": 3
            }, 
            {
                "channel": 348, 
                "count": 5
            }, 
            {
                "channel": 349, 
                "count": 1
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
                "count": 4
            }, 
            {
                "channel": 353, 
                "count": 2
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 5
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 358, 
                "count": 5
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 4
            }, 
            {
                "channel": 361, 
                "count": 3
            }, 
            {
                "channel": 363, 
                "count": 3
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 3
            }, 
            {
                "channel": 366, 
                "count": 4
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
                "count": 2
            }, 
            {
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 5
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
                "count": 2
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 377, 
                "count": 5
            }, 
            {
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 379, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 2
            }, 
            {
                "channel": 383, 
                "count": 2
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 4
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 2
            }, 
            {
                "channel": 389, 
                "count": 2
            }, 
            {
                "channel": 390, 
                "count": 1
            }, 
            {
                "channel": 393, 
                "count": 1
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
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 2
            }, 
            {
                "channel": 398, 
                "count": 5
            }, 
            {
                "channel": 399, 
                "count": 5
            }, 
            {
                "channel": 400, 
                "count": 3
            }, 
            {
                "channel": 401, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 3
            }, 
            {
                "channel": 404, 
                "count": 4
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 3
            }, 
            {
                "channel": 411, 
                "count": 4
            }, 
            {
                "channel": 412, 
                "count": 3
            }, 
            {
                "channel": 413, 
                "count": 6
            }, 
            {
                "channel": 414, 
                "count": 2
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 3
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 4
            }, 
            {
                "channel": 421, 
                "count": 2
            }, 
            {
                "channel": 422, 
                "count": 4
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 4
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 3
            }, 
            {
                "channel": 428, 
                "count": 4
            }, 
            {
                "channel": 429, 
                "count": 2
            }, 
            {
                "channel": 430, 
                "count": 3
            }, 
            {
                "channel": 431, 
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
                "channel": 435, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 3
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 4
            }, 
            {
                "channel": 440, 
                "count": 4
            }, 
            {
                "channel": 443, 
                "count": 3
            }, 
            {
                "channel": 444, 
                "count": 6
            }, 
            {
                "channel": 445, 
                "count": 3
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
                "channel": 449, 
                "count": 2
            }, 
            {
                "channel": 450, 
                "count": 2
            }, 
            {
                "channel": 451, 
                "count": 2
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 4
            }, 
            {
                "channel": 454, 
                "count": 4
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 2
            }, 
            {
                "channel": 457, 
                "count": 4
            }, 
            {
                "channel": 458, 
                "count": 1
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 460, 
                "count": 2
            }, 
            {
                "channel": 461, 
                "count": 3
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 4
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 4
            }, 
            {
                "channel": 467, 
                "count": 3
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 3
            }, 
            {
                "channel": 470, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 2
            }, 
            {
                "channel": 472, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 3
            }, 
            {
                "channel": 475, 
                "count": 2
            }, 
            {
                "channel": 476, 
                "count": 2
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 5
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 483, 
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
                "channel": 487, 
                "count": 4
            }, 
            {
                "channel": 488, 
                "count": 3
            }, 
            {
                "channel": 490, 
                "count": 2
            }, 
            {
                "channel": 492, 
                "count": 3
            }, 
            {
                "channel": 493, 
                "count": 1
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
                "channel": 496, 
                "count": 4
            }, 
            {
                "channel": 498, 
                "count": 3
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 1
            }, 
            {
                "channel": 501, 
                "count": 4
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
                "count": 4
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 2
            }, 
            {
                "channel": 508, 
                "count": 4
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 510, 
                "count": 2
            }, 
            {
                "channel": 511, 
                "count": 4
            }
        ], 
        "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "682375167", 
            "asic_id_eeprom": "8257814", 
            "asic_temp": "22.240435", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "5.1.5", 
            "device_id": "X1", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "22.05.7", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2022-08-18T08:59:51.103354+00:00", 
            "flow_cell_id": "FAT76812", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "6.1.5+446c35524", 
            "heatsink_temp": "34.089844", 
            "host_product_code": "GRD-X5B004", 
            "host_product_serial_number": "GXB03017", 
            "hostname": "GXB03017", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f4a46956-9cdb-442b-a6b2-515baf927bfd", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220818", 
            "protocol_run_id": "5cfe3975-cf56-4115-a3f4-704eb8cc5aeb", 
            "protocol_start_time": "2022-08-18T08:55:25.985944+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
            "sample_id": "m6A_2nd_wyq", 
            "time_stamp": "2023-06-22T10:40:21Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "1496ce64-e65c-4241-93f7-201bb7a93d27", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 5, 
                "pass": 979
            }, 
            "qscore_dist_temp": [
                {
                    "count": 5, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 302, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 307, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 214, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 111, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 33, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 984, 
                "mean": 7.887187957763672, 
                "sum": 7760.9931640625
            }, 
            "read_len_events_sum_temp": 2782499, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 984, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 984, 
            "seq_len_events_dist_temp": [
                {
                    "count": 39, 
                    "length": 0.0
                }, 
                {
                    "count": 307, 
                    "length": 1000.0
                }, 
                {
                    "count": 308, 
                    "length": 2000.0
                }, 
                {
                    "count": 153, 
                    "length": 3000.0
                }, 
                {
                    "count": 84, 
                    "length": 4000.0
                }, 
                {
                    "count": 43, 
                    "length": 5000.0
                }, 
                {
                    "count": 23, 
                    "length": 6000.0
                }, 
                {
                    "count": 13, 
                    "length": 7000.0
                }, 
                {
                    "count": 7, 
                    "length": 8000.0
                }, 
                {
                    "count": 5, 
                    "length": 9000.0
                }, 
                {
                    "count": 2, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 984, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 984, 
                "mean": 79.15962982177734, 
                "sum": 77893.078125
            }, 
            "strand_sd_pa": {
                "count": 984, 
                "mean": 12.513306617736816, 
                "sum": 12313.09375
            }
        }, 
        "channel_count": 420, 
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
        "latest_run_time": 515.84625244140625, 
        "levels_sums": {
            "count": 984, 
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
        "read_count": 984, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 4
            }, 
            {
                "channel": 3, 
                "count": 5
            }, 
            {
                "channel": 4, 
                "count": 3
            }, 
            {
                "channel": 5, 
                "count": 2
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 7, 
                "count": 4
            }, 
            {
                "channel": 9, 
                "count": 3
            }, 
            {
                "channel": 10, 
                "count": 2
            }, 
            {
                "channel": 12, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 3
            }, 
            {
                "channel": 14, 
                "count": 4
            }, 
            {
                "channel": 15, 
                "count": 3
            }, 
            {
                "channel": 16, 
                "count": 2
            }, 
            {
                "channel": 17, 
                "count": 3
            }, 
            {
                "channel": 18, 
                "count": 3
            }, 
            {
                "channel": 19, 
                "count": 5
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 25, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 4
            }, 
            {
                "channel": 27, 
                "count": 1
            }, 
            {
                "channel": 28, 
                "count": 3
            }, 
            {
                "channel": 29, 
                "count": 2
            }, 
            {
                "channel": 30, 
                "count": 3
            }, 
            {
                "channel": 32, 
                "count": 5
            }, 
            {
                "channel": 34, 
                "count": 4
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 37, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 3
            }, 
            {
                "channel": 40, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 3
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
                "channel": 47, 
                "count": 3
            }, 
            {
                "channel": 48, 
                "count": 3
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 50, 
                "count": 5
            }, 
            {
                "channel": 51, 
                "count": 3
            }, 
            {
                "channel": 52, 
                "count": 1
            }, 
            {
                "channel": 53, 
                "count": 1
            }, 
            {
                "channel": 54, 
                "count": 2
            }, 
            {
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 3
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 58, 
                "count": 2
            }, 
            {
                "channel": 59, 
                "count": 2
            }, 
            {
                "channel": 61, 
                "count": 5
            }, 
            {
                "channel": 62, 
                "count": 3
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 2
            }, 
            {
                "channel": 67, 
                "count": 2
            }, 
            {
                "channel": 68, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 3
            }, 
            {
                "channel": 70, 
                "count": 3
            }, 
            {
                "channel": 71, 
                "count": 2
            }, 
            {
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 74, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 2
            }, 
            {
                "channel": 76, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 4
            }, 
            {
                "channel": 81, 
                "count": 4
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 6
            }, 
            {
                "channel": 84, 
                "count": 3
            }, 
            {
                "channel": 85, 
                "count": 3
            }, 
            {
                "channel": 86, 
                "count": 2
            }, 
            {
                "channel": 87, 
                "count": 3
            }, 
            {
                "channel": 88, 
                "count": 3
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 91, 
                "count": 2
            }, 
            {
                "channel": 92, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 6
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 2
            }, 
            {
                "channel": 96, 
                "count": 2
            }, 
            {
                "channel": 97, 
                "count": 4
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 101, 
                "count": 5
            }, 
            {
                "channel": 102, 
                "count": 2
            }, 
            {
                "channel": 103, 
                "count": 5
            }, 
            {
                "channel": 104, 
                "count": 2
            }, 
            {
                "channel": 105, 
                "count": 3
            }, 
            {
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 3
            }, 
            {
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 4
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 113, 
                "count": 2
            }, 
            {
                "channel": 114, 
                "count": 2
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
                "channel": 118, 
                "count": 2
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 3
            }, 
            {
                "channel": 123, 
                "count": 4
            }, 
            {
                "channel": 124, 
                "count": 2
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 3
            }, 
            {
                "channel": 130, 
                "count": 3
            }, 
            {
                "channel": 135, 
                "count": 2
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
                "channel": 139, 
                "count": 1
            }, 
            {
                "channel": 140, 
                "count": 3
            }, 
            {
                "channel": 142, 
                "count": 1
            }, 
            {
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 4
            }, 
            {
                "channel": 148, 
                "count": 1
            }, 
            {
                "channel": 150, 
                "count": 1
            }, 
            {
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 3
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 4
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 2
            }, 
            {
                "channel": 160, 
                "count": 3
            }, 
            {
                "channel": 161, 
                "count": 1
            }, 
            {
                "channel": 162, 
                "count": 2
            }, 
            {
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 3
            }, 
            {
                "channel": 165, 
                "count": 3
            }, 
            {
                "channel": 166, 
                "count": 4
            }, 
            {
                "channel": 168, 
                "count": 3
            }, 
            {
                "channel": 169, 
                "count": 2
            }, 
            {
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 4
            }, 
            {
                "channel": 172, 
                "count": 5
            }, 
            {
                "channel": 173, 
                "count": 7
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 3
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 178, 
                "count": 2
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 2
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 182, 
                "count": 4
            }, 
            {
                "channel": 183, 
                "count": 3
            }, 
            {
                "channel": 186, 
                "count": 4
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 188, 
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
                "count": 2
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 195, 
                "count": 3
            }, 
            {
                "channel": 196, 
                "count": 2
            }, 
            {
                "channel": 197, 
                "count": 2
            }, 
            {
                "channel": 198, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 201, 
                "count": 2
            }, 
            {
                "channel": 202, 
                "count": 3
            }, 
            {
                "channel": 204, 
                "count": 4
            }, 
            {
                "channel": 205, 
                "count": 4
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 207, 
                "count": 4
            }, 
            {
                "channel": 209, 
                "count": 3
            }, 
            {
                "channel": 210, 
                "count": 2
            }, 
            {
                "channel": 211, 
                "count": 4
            }, 
            {
                "channel": 212, 
                "count": 3
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 2
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 3
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 3
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
                "count": 3
            }, 
            {
                "channel": 226, 
                "count": 3
            }, 
            {
                "channel": 227, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 2
            }, 
            {
                "channel": 232, 
                "count": 2
            }, 
            {
                "channel": 233, 
                "count": 2
            }, 
            {
                "channel": 234, 
                "count": 1
            }, 
            {
                "channel": 237, 
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
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 2
            }, 
            {
                "channel": 243, 
                "count": 2
            }, 
            {
                "channel": 244, 
                "count": 2
            }, 
            {
                "channel": 245, 
                "count": 2
            }, 
            {
                "channel": 246, 
                "count": 1
            }, 
            {
                "channel": 247, 
                "count": 3
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
                "count": 3
            }, 
            {
                "channel": 252, 
                "count": 4
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 254, 
                "count": 3
            }, 
            {
                "channel": 256, 
                "count": 3
            }, 
            {
                "channel": 257, 
                "count": 4
            }, 
            {
                "channel": 258, 
                "count": 3
            }, 
            {
                "channel": 260, 
                "count": 5
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
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 267, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 2
            }, 
            {
                "channel": 269, 
                "count": 3
            }, 
            {
                "channel": 270, 
                "count": 2
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 272, 
                "count": 4
            }, 
            {
                "channel": 273, 
                "count": 3
            }, 
            {
                "channel": 274, 
                "count": 2
            }, 
            {
                "channel": 275, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 3
            }, 
            {
                "channel": 278, 
                "count": 3
            }, 
            {
                "channel": 279, 
                "count": 2
            }, 
            {
                "channel": 280, 
                "count": 3
            }, 
            {
                "channel": 281, 
                "count": 2
            }, 
            {
                "channel": 282, 
                "count": 3
            }, 
            {
                "channel": 283, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 3
            }, 
            {
                "channel": 289, 
                "count": 3
            }, 
            {
                "channel": 290, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 3
            }, 
            {
                "channel": 295, 
                "count": 2
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 3
            }, 
            {
                "channel": 300, 
                "count": 2
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 4
            }, 
            {
                "channel": 303, 
                "count": 2
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 305, 
                "count": 3
            }, 
            {
                "channel": 307, 
                "count": 3
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 310, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 2
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
                "count": 1
            }, 
            {
                "channel": 316, 
                "count": 3
            }, 
            {
                "channel": 317, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 4
            }, 
            {
                "channel": 320, 
                "count": 2
            }, 
            {
                "channel": 322, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 2
            }, 
            {
                "channel": 324, 
                "count": 2
            }, 
            {
                "channel": 326, 
                "count": 2
            }, 
            {
                "channel": 327, 
                "count": 1
            }, 
            {
                "channel": 328, 
                "count": 2
            }, 
            {
                "channel": 329, 
                "count": 5
            }, 
            {
                "channel": 331, 
                "count": 3
            }, 
            {
                "channel": 332, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 3
            }, 
            {
                "channel": 334, 
                "count": 4
            }, 
            {
                "channel": 335, 
                "count": 2
            }, 
            {
                "channel": 338, 
                "count": 3
            }, 
            {
                "channel": 339, 
                "count": 4
            }, 
            {
                "channel": 342, 
                "count": 3
            }, 
            {
                "channel": 343, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 4
            }, 
            {
                "channel": 346, 
                "count": 3
            }, 
            {
                "channel": 347, 
                "count": 3
            }, 
            {
                "channel": 348, 
                "count": 5
            }, 
            {
                "channel": 349, 
                "count": 1
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
                "count": 4
            }, 
            {
                "channel": 353, 
                "count": 2
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 5
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 358, 
                "count": 5
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 4
            }, 
            {
                "channel": 361, 
                "count": 3
            }, 
            {
                "channel": 363, 
                "count": 3
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 3
            }, 
            {
                "channel": 366, 
                "count": 4
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
                "count": 2
            }, 
            {
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 5
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
                "count": 2
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 377, 
                "count": 5
            }, 
            {
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 379, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 2
            }, 
            {
                "channel": 383, 
                "count": 2
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 4
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 388, 
                "count": 2
            }, 
            {
                "channel": 389, 
                "count": 2
            }, 
            {
                "channel": 390, 
                "count": 1
            }, 
            {
                "channel": 393, 
                "count": 1
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
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 2
            }, 
            {
                "channel": 398, 
                "count": 5
            }, 
            {
                "channel": 399, 
                "count": 5
            }, 
            {
                "channel": 400, 
                "count": 3
            }, 
            {
                "channel": 401, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 3
            }, 
            {
                "channel": 404, 
                "count": 4
            }, 
            {
                "channel": 405, 
                "count": 1
            }, 
            {
                "channel": 407, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 3
            }, 
            {
                "channel": 411, 
                "count": 4
            }, 
            {
                "channel": 412, 
                "count": 3
            }, 
            {
                "channel": 413, 
                "count": 6
            }, 
            {
                "channel": 414, 
                "count": 2
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 3
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 4
            }, 
            {
                "channel": 421, 
                "count": 2
            }, 
            {
                "channel": 422, 
                "count": 4
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 4
            }, 
            {
                "channel": 426, 
                "count": 1
            }, 
            {
                "channel": 427, 
                "count": 3
            }, 
            {
                "channel": 428, 
                "count": 4
            }, 
            {
                "channel": 429, 
                "count": 2
            }, 
            {
                "channel": 430, 
                "count": 3
            }, 
            {
                "channel": 431, 
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
                "channel": 435, 
                "count": 2
            }, 
            {
                "channel": 436, 
                "count": 1
            }, 
            {
                "channel": 437, 
                "count": 3
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 4
            }, 
            {
                "channel": 440, 
                "count": 4
            }, 
            {
                "channel": 443, 
                "count": 3
            }, 
            {
                "channel": 444, 
                "count": 6
            }, 
            {
                "channel": 445, 
                "count": 3
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
                "channel": 449, 
                "count": 2
            }, 
            {
                "channel": 450, 
                "count": 2
            }, 
            {
                "channel": 451, 
                "count": 2
            }, 
            {
                "channel": 452, 
                "count": 1
            }, 
            {
                "channel": 453, 
                "count": 4
            }, 
            {
                "channel": 454, 
                "count": 4
            }, 
            {
                "channel": 455, 
                "count": 1
            }, 
            {
                "channel": 456, 
                "count": 2
            }, 
            {
                "channel": 457, 
                "count": 4
            }, 
            {
                "channel": 458, 
                "count": 1
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 460, 
                "count": 2
            }, 
            {
                "channel": 461, 
                "count": 3
            }, 
            {
                "channel": 463, 
                "count": 1
            }, 
            {
                "channel": 464, 
                "count": 4
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 4
            }, 
            {
                "channel": 467, 
                "count": 3
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 469, 
                "count": 3
            }, 
            {
                "channel": 470, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 2
            }, 
            {
                "channel": 472, 
                "count": 1
            }, 
            {
                "channel": 473, 
                "count": 3
            }, 
            {
                "channel": 475, 
                "count": 2
            }, 
            {
                "channel": 476, 
                "count": 2
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
            }, 
            {
                "channel": 481, 
                "count": 5
            }, 
            {
                "channel": 482, 
                "count": 1
            }, 
            {
                "channel": 483, 
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
                "channel": 487, 
                "count": 4
            }, 
            {
                "channel": 488, 
                "count": 3
            }, 
            {
                "channel": 490, 
                "count": 2
            }, 
            {
                "channel": 492, 
                "count": 3
            }, 
            {
                "channel": 493, 
                "count": 1
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
                "channel": 496, 
                "count": 4
            }, 
            {
                "channel": 498, 
                "count": 3
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 1
            }, 
            {
                "channel": 501, 
                "count": 4
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
                "count": 4
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 2
            }, 
            {
                "channel": 508, 
                "count": 4
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 510, 
                "count": 2
            }, 
            {
                "channel": 511, 
                "count": 4
            }
        ], 
        "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
        "segment_duration": 60, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "682375167", 
            "asic_id_eeprom": "8257814", 
            "asic_temp": "22.240435", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "5.1.5", 
            "device_id": "X1", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "22.05.7", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2022-08-18T08:59:51.103354+00:00", 
            "flow_cell_id": "FAT76812", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "6.1.5+446c35524", 
            "heatsink_temp": "34.089844", 
            "host_product_code": "GRD-X5B004", 
            "host_product_serial_number": "GXB03017", 
            "hostname": "GXB03017", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "07ffe39b-72e2-438b-aadc-edb669301e29", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220818", 
            "protocol_run_id": "5cfe3975-cf56-4115-a3f4-704eb8cc5aeb", 
            "protocol_start_time": "2022-08-18T08:55:25.985944+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
            "sample_id": "m6A_2nd_wyq", 
            "time_stamp": "2023-06-22T10:40:21Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }
]