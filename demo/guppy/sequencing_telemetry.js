[
    {
        "aggregation": "segment", 
        "analysis_id": "a36944b4-83e9-4eaf-b610-a2a759dfc3f6", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6, 
                "pass": 476
            }, 
            "qscore_dist_temp": [
                {
                    "count": 6, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 142, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 179, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 85, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 54, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 482, 
                "mean": 7.839198589324951, 
                "sum": 3778.49365234375
            }, 
            "read_len_events_sum_temp": 1339429, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 482, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 482, 
            "seq_len_events_dist_temp": [
                {
                    "count": 20, 
                    "length": 0.0
                }, 
                {
                    "count": 157, 
                    "length": 1000.0
                }, 
                {
                    "count": 146, 
                    "length": 2000.0
                }, 
                {
                    "count": 70, 
                    "length": 3000.0
                }, 
                {
                    "count": 43, 
                    "length": 4000.0
                }, 
                {
                    "count": 21, 
                    "length": 5000.0
                }, 
                {
                    "count": 15, 
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
                    "count": 1, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 482, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 482, 
                "mean": 79.447265625, 
                "sum": 38293.58203125
            }, 
            "strand_sd_pa": {
                "count": 482, 
                "mean": 12.54477596282959, 
                "sum": 6046.58203125
            }
        }, 
        "channel_count": 307, 
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
        "latest_run_time": 515.82965087890625, 
        "levels_sums": {
            "count": 482, 
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
        "read_count": 482, 
        "reads_per_channel_dist": [
            {
                "channel": 3, 
                "count": 3
            }, 
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 12, 
                "count": 2
            }, 
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 2
            }, 
            {
                "channel": 17, 
                "count": 1
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
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 2
            }, 
            {
                "channel": 25, 
                "count": 2
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 1
            }, 
            {
                "channel": 29, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 32, 
                "count": 2
            }, 
            {
                "channel": 34, 
                "count": 2
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
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 3
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 50, 
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
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 2
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 58, 
                "count": 3
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 1
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
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 2
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 2
            }, 
            {
                "channel": 81, 
                "count": 2
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 2
            }, 
            {
                "channel": 85, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 2
            }, 
            {
                "channel": 88, 
                "count": 2
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 91, 
                "count": 1
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
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 101, 
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
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 111, 
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
                "channel": 118, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 2
            }, 
            {
                "channel": 123, 
                "count": 4
            }, 
            {
                "channel": 124, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 2
            }, 
            {
                "channel": 135, 
                "count": 3
            }, 
            {
                "channel": 136, 
                "count": 2
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 139, 
                "count": 2
            }, 
            {
                "channel": 140, 
                "count": 2
            }, 
            {
                "channel": 143, 
                "count": 1
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
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 2
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
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 2
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 165, 
                "count": 3
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 3
            }, 
            {
                "channel": 173, 
                "count": 4
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 4
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
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 186, 
                "count": 1
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
                "channel": 191, 
                "count": 2
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 197, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 3
            }, 
            {
                "channel": 205, 
                "count": 2
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
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 2
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
                "channel": 217, 
                "count": 4
            }, 
            {
                "channel": 219, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 3
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 233, 
                "count": 2
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
                "channel": 239, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
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
                "channel": 248, 
                "count": 2
            }, 
            {
                "channel": 249, 
                "count": 2
            }, 
            {
                "channel": 251, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 253, 
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
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 2
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 3
            }, 
            {
                "channel": 269, 
                "count": 2
            }, 
            {
                "channel": 270, 
                "count": 2
            }, 
            {
                "channel": 271, 
                "count": 2
            }, 
            {
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 273, 
                "count": 2
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
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 289, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 3
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 305, 
                "count": 2
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
                "count": 3
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
                "channel": 315, 
                "count": 2
            }, 
            {
                "channel": 317, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 319, 
                "count": 1
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
                "channel": 329, 
                "count": 3
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 2
            }, 
            {
                "channel": 334, 
                "count": 3
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 338, 
                "count": 2
            }, 
            {
                "channel": 339, 
                "count": 3
            }, 
            {
                "channel": 340, 
                "count": 2
            }, 
            {
                "channel": 342, 
                "count": 2
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 345, 
                "count": 2
            }, 
            {
                "channel": 346, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 352, 
                "count": 2
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 2
            }, 
            {
                "channel": 358, 
                "count": 1
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 366, 
                "count": 2
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
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 2
            }, 
            {
                "channel": 375, 
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
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 2
            }, 
            {
                "channel": 388, 
                "count": 4
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
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 2
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
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 421, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 2
            }, 
            {
                "channel": 426, 
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
                "channel": 430, 
                "count": 1
            }, 
            {
                "channel": 431, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 433, 
                "count": 2
            }, 
            {
                "channel": 435, 
                "count": 1
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
                "channel": 442, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }, 
            {
                "channel": 450, 
                "count": 2
            }, 
            {
                "channel": 451, 
                "count": 3
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
                "channel": 454, 
                "count": 3
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
                "count": 2
            }, 
            {
                "channel": 458, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 3
            }, 
            {
                "channel": 466, 
                "count": 2
            }, 
            {
                "channel": 467, 
                "count": 3
            }, 
            {
                "channel": 468, 
                "count": 1
            }, 
            {
                "channel": 469, 
                "count": 3
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
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 3
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 487, 
                "count": 4
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 1
            }, 
            {
                "channel": 492, 
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
                "channel": 496, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 504, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
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
            "msg_id": "46b38b82-43ba-4f02-825a-0c887d2f7baa", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220818", 
            "protocol_run_id": "5cfe3975-cf56-4115-a3f4-704eb8cc5aeb", 
            "protocol_start_time": "2022-08-18T08:55:25.985944+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
            "sample_id": "m6A_2nd_wyq", 
            "time_stamp": "2023-06-06T01:58:56Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "a36944b4-83e9-4eaf-b610-a2a759dfc3f6", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 6, 
                "pass": 476
            }, 
            "qscore_dist_temp": [
                {
                    "count": 6, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 142, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 179, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 85, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 54, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 13, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 10.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 482, 
                "mean": 7.839198589324951, 
                "sum": 3778.49365234375
            }, 
            "read_len_events_sum_temp": 1339429, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 482, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 482, 
            "seq_len_events_dist_temp": [
                {
                    "count": 20, 
                    "length": 0.0
                }, 
                {
                    "count": 157, 
                    "length": 1000.0
                }, 
                {
                    "count": 146, 
                    "length": 2000.0
                }, 
                {
                    "count": 70, 
                    "length": 3000.0
                }, 
                {
                    "count": 43, 
                    "length": 4000.0
                }, 
                {
                    "count": 21, 
                    "length": 5000.0
                }, 
                {
                    "count": 15, 
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
                    "count": 1, 
                    "length": 9000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 482, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 482, 
                "mean": 79.447265625, 
                "sum": 38293.58203125
            }, 
            "strand_sd_pa": {
                "count": 482, 
                "mean": 12.54477596282959, 
                "sum": 6046.58203125
            }
        }, 
        "channel_count": 307, 
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
        "latest_run_time": 515.82965087890625, 
        "levels_sums": {
            "count": 482, 
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
        "read_count": 482, 
        "reads_per_channel_dist": [
            {
                "channel": 3, 
                "count": 3
            }, 
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 6, 
                "count": 2
            }, 
            {
                "channel": 9, 
                "count": 1
            }, 
            {
                "channel": 12, 
                "count": 2
            }, 
            {
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 2
            }, 
            {
                "channel": 17, 
                "count": 1
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
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 2
            }, 
            {
                "channel": 25, 
                "count": 2
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 1
            }, 
            {
                "channel": 29, 
                "count": 1
            }, 
            {
                "channel": 30, 
                "count": 1
            }, 
            {
                "channel": 32, 
                "count": 2
            }, 
            {
                "channel": 34, 
                "count": 2
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
                "channel": 38, 
                "count": 1
            }, 
            {
                "channel": 39, 
                "count": 1
            }, 
            {
                "channel": 42, 
                "count": 3
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 1
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 50, 
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
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 2
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 58, 
                "count": 3
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 1
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
                "channel": 72, 
                "count": 2
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 2
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 80, 
                "count": 2
            }, 
            {
                "channel": 81, 
                "count": 2
            }, 
            {
                "channel": 82, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 2
            }, 
            {
                "channel": 85, 
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 2
            }, 
            {
                "channel": 88, 
                "count": 2
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 91, 
                "count": 1
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
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 96, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 101, 
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
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 1
            }, 
            {
                "channel": 111, 
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
                "channel": 118, 
                "count": 2
            }, 
            {
                "channel": 122, 
                "count": 2
            }, 
            {
                "channel": 123, 
                "count": 4
            }, 
            {
                "channel": 124, 
                "count": 1
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 2
            }, 
            {
                "channel": 135, 
                "count": 3
            }, 
            {
                "channel": 136, 
                "count": 2
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 139, 
                "count": 2
            }, 
            {
                "channel": 140, 
                "count": 2
            }, 
            {
                "channel": 143, 
                "count": 1
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
                "channel": 151, 
                "count": 1
            }, 
            {
                "channel": 153, 
                "count": 2
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
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 2
            }, 
            {
                "channel": 161, 
                "count": 2
            }, 
            {
                "channel": 162, 
                "count": 1
            }, 
            {
                "channel": 165, 
                "count": 3
            }, 
            {
                "channel": 167, 
                "count": 1
            }, 
            {
                "channel": 168, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 171, 
                "count": 1
            }, 
            {
                "channel": 172, 
                "count": 3
            }, 
            {
                "channel": 173, 
                "count": 4
            }, 
            {
                "channel": 174, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 4
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
                "count": 1
            }, 
            {
                "channel": 179, 
                "count": 1
            }, 
            {
                "channel": 180, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 186, 
                "count": 1
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
                "channel": 191, 
                "count": 2
            }, 
            {
                "channel": 195, 
                "count": 1
            }, 
            {
                "channel": 197, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 3
            }, 
            {
                "channel": 205, 
                "count": 2
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
                "channel": 209, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 211, 
                "count": 2
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
                "channel": 217, 
                "count": 4
            }, 
            {
                "channel": 219, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 3
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 2
            }, 
            {
                "channel": 231, 
                "count": 1
            }, 
            {
                "channel": 233, 
                "count": 2
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
                "channel": 239, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
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
                "channel": 248, 
                "count": 2
            }, 
            {
                "channel": 249, 
                "count": 2
            }, 
            {
                "channel": 251, 
                "count": 2
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 253, 
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
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
                "count": 2
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 265, 
                "count": 2
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 268, 
                "count": 3
            }, 
            {
                "channel": 269, 
                "count": 2
            }, 
            {
                "channel": 270, 
                "count": 2
            }, 
            {
                "channel": 271, 
                "count": 2
            }, 
            {
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 273, 
                "count": 2
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
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 285, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 1
            }, 
            {
                "channel": 289, 
                "count": 2
            }, 
            {
                "channel": 291, 
                "count": 1
            }, 
            {
                "channel": 300, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 3
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 305, 
                "count": 2
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
                "count": 3
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
                "channel": 315, 
                "count": 2
            }, 
            {
                "channel": 317, 
                "count": 2
            }, 
            {
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 319, 
                "count": 1
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
                "channel": 329, 
                "count": 3
            }, 
            {
                "channel": 331, 
                "count": 2
            }, 
            {
                "channel": 333, 
                "count": 2
            }, 
            {
                "channel": 334, 
                "count": 3
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 338, 
                "count": 2
            }, 
            {
                "channel": 339, 
                "count": 3
            }, 
            {
                "channel": 340, 
                "count": 2
            }, 
            {
                "channel": 342, 
                "count": 2
            }, 
            {
                "channel": 343, 
                "count": 1
            }, 
            {
                "channel": 345, 
                "count": 2
            }, 
            {
                "channel": 346, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 2
            }, 
            {
                "channel": 352, 
                "count": 2
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 355, 
                "count": 2
            }, 
            {
                "channel": 358, 
                "count": 1
            }, 
            {
                "channel": 359, 
                "count": 1
            }, 
            {
                "channel": 360, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 366, 
                "count": 2
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
                "channel": 371, 
                "count": 1
            }, 
            {
                "channel": 372, 
                "count": 2
            }, 
            {
                "channel": 375, 
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
                "channel": 378, 
                "count": 1
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 381, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 2
            }, 
            {
                "channel": 386, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 2
            }, 
            {
                "channel": 388, 
                "count": 4
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
                "channel": 399, 
                "count": 1
            }, 
            {
                "channel": 402, 
                "count": 1
            }, 
            {
                "channel": 403, 
                "count": 1
            }, 
            {
                "channel": 404, 
                "count": 1
            }, 
            {
                "channel": 405, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 2
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
                "channel": 412, 
                "count": 1
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 421, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 1
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 425, 
                "count": 2
            }, 
            {
                "channel": 426, 
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
                "channel": 430, 
                "count": 1
            }, 
            {
                "channel": 431, 
                "count": 1
            }, 
            {
                "channel": 432, 
                "count": 1
            }, 
            {
                "channel": 433, 
                "count": 2
            }, 
            {
                "channel": 435, 
                "count": 1
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
                "channel": 442, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 447, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 1
            }, 
            {
                "channel": 450, 
                "count": 2
            }, 
            {
                "channel": 451, 
                "count": 3
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
                "channel": 454, 
                "count": 3
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
                "count": 2
            }, 
            {
                "channel": 458, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 3
            }, 
            {
                "channel": 466, 
                "count": 2
            }, 
            {
                "channel": 467, 
                "count": 3
            }, 
            {
                "channel": 468, 
                "count": 1
            }, 
            {
                "channel": 469, 
                "count": 3
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
                "count": 1
            }, 
            {
                "channel": 474, 
                "count": 1
            }, 
            {
                "channel": 476, 
                "count": 3
            }, 
            {
                "channel": 477, 
                "count": 1
            }, 
            {
                "channel": 480, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 487, 
                "count": 4
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 490, 
                "count": 1
            }, 
            {
                "channel": 492, 
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
                "channel": 496, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 2
            }, 
            {
                "channel": 504, 
                "count": 2
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
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
            "msg_id": "76d27052-cc99-4519-be24-219ca6dee046", 
            "operating_system": "ubuntu 20.04", 
            "protocol_group_id": "20220818", 
            "protocol_run_id": "5cfe3975-cf56-4115-a3f4-704eb8cc5aeb", 
            "protocol_start_time": "2022-08-18T08:55:25.985944+00:00", 
            "protocols_version": "7.1.3", 
            "run_id": "71d544d3bd9e1fe7886a5d176c756a576d30ed50", 
            "sample_id": "m6A_2nd_wyq", 
            "time_stamp": "2023-06-06T01:58:56Z", 
            "usb_config": "fx3_1.2.4#fpga_1.2.1#bulk#USB300", 
            "version": "5.1.0"
        }
    }
]