[
    {
        "aggregation": "segment", 
        "analysis_id": "4c00015c-a132-49af-98b0-5596176aea65", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 261
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
                    "count": 4, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 37, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 45, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 43, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 46, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 32, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 12.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 268, 
                "mean": 9.39583683013916, 
                "sum": 2518.084228515625
            }, 
            "read_len_events_sum_temp": 960286, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 268, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 268, 
            "seq_len_events_dist_temp": [
                {
                    "count": 52, 
                    "length": 1000.0
                }, 
                {
                    "count": 68, 
                    "length": 2000.0
                }, 
                {
                    "count": 57, 
                    "length": 3000.0
                }, 
                {
                    "count": 42, 
                    "length": 4000.0
                }, 
                {
                    "count": 25, 
                    "length": 5000.0
                }, 
                {
                    "count": 11, 
                    "length": 6000.0
                }, 
                {
                    "count": 7, 
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
                    "count": 3, 
                    "length": 11000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 268, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 268, 
                "mean": 79.97657012939453, 
                "sum": 21433.720703125
            }, 
            "strand_sd_pa": {
                "count": 268, 
                "mean": 11.69084644317627, 
                "sum": 3133.146728515625
            }
        }, 
        "channel_count": 209, 
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
        "latest_run_time": 16927.10546875, 
        "levels_sums": {
            "count": 268, 
            "mean": 204.62985229492188, 
            "open_pore_level_sum": 54840.80078125
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
        "read_count": 268, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 2, 
                "count": 2
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 4, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 28, 
                "count": 1
            }, 
            {
                "channel": 38, 
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
                "channel": 47, 
                "count": 2
            }, 
            {
                "channel": 48, 
                "count": 1
            }, 
            {
                "channel": 50, 
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
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 64, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 73, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 2
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 2
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 86, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 2
            }, 
            {
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 2
            }, 
            {
                "channel": 98, 
                "count": 2
            }, 
            {
                "channel": 102, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 2
            }, 
            {
                "channel": 109, 
                "count": 1
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
                "channel": 112, 
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
                "channel": 117, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 122, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 1
            }, 
            {
                "channel": 132, 
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
                "channel": 138, 
                "count": 2
            }, 
            {
                "channel": 139, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
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
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 2
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
                "channel": 170, 
                "count": 1
            }, 
            {
                "channel": 175, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 2
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
                "channel": 181, 
                "count": 2
            }, 
            {
                "channel": 187, 
                "count": 1
            }, 
            {
                "channel": 188, 
                "count": 2
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 194, 
                "count": 1
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
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 203, 
                "count": 1
            }, 
            {
                "channel": 206, 
                "count": 2
            }, 
            {
                "channel": 210, 
                "count": 1
            }, 
            {
                "channel": 212, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 216, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 1
            }, 
            {
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 2
            }, 
            {
                "channel": 228, 
                "count": 1
            }, 
            {
                "channel": 229, 
                "count": 1
            }, 
            {
                "channel": 232, 
                "count": 1
            }, 
            {
                "channel": 234, 
                "count": 2
            }, 
            {
                "channel": 235, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 3
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 245, 
                "count": 2
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 250, 
                "count": 1
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 2
            }, 
            {
                "channel": 254, 
                "count": 2
            }, 
            {
                "channel": 255, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 2
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 2
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 1
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 269, 
                "count": 2
            }, 
            {
                "channel": 270, 
                "count": 1
            }, 
            {
                "channel": 274, 
                "count": 3
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 2
            }, 
            {
                "channel": 282, 
                "count": 1
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 3
            }, 
            {
                "channel": 289, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 2
            }, 
            {
                "channel": 298, 
                "count": 2
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 302, 
                "count": 2
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 2
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
                "channel": 311, 
                "count": 1
            }, 
            {
                "channel": 313, 
                "count": 1
            }, 
            {
                "channel": 320, 
                "count": 1
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
                "channel": 330, 
                "count": 1
            }, 
            {
                "channel": 333, 
                "count": 1
            }, 
            {
                "channel": 344, 
                "count": 2
            }, 
            {
                "channel": 345, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 1
            }, 
            {
                "channel": 359, 
                "count": 2
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 1
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
                "channel": 377, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
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
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 417, 
                "count": 2
            }, 
            {
                "channel": 418, 
                "count": 2
            }, 
            {
                "channel": 422, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 426, 
                "count": 2
            }, 
            {
                "channel": 429, 
                "count": 2
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
                "channel": 437, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 1
            }, 
            {
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 2
            }, 
            {
                "channel": 446, 
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
                "channel": 453, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 2
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 457, 
                "count": 2
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 460, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 2
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 2
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 3
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 3
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
                "channel": 485, 
                "count": 1
            }, 
            {
                "channel": 487, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 490, 
                "count": 1
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
                "channel": 500, 
                "count": 2
            }, 
            {
                "channel": 501, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 1
            }, 
            {
                "channel": 510, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "13813736", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "38.085629", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN20805", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T21:58:40Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.968750", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "3310b8e8-6216-4144-a6cf-8f94e2ac8628", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "805aad09-9baa-44f5-936d-9ae0e4e28ec7", 
            "protocols_version": "4.1.9", 
            "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
            "sample_id": "IVTnormalGandC_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:45:58Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "4c00015c-a132-49af-98b0-5596176aea65", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 3, 
                "pass": 80
            }, 
            "qscore_dist_temp": [
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 12, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 16, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 12, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.5
                }
            ], 
            "qscore_sum_temp": {
                "count": 83, 
                "mean": 9.544692039489746, 
                "sum": 792.20941162109375
            }, 
            "read_len_events_sum_temp": 299549, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 83, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 83, 
            "seq_len_events_dist_temp": [
                {
                    "count": 16, 
                    "length": 1000.0
                }, 
                {
                    "count": 28, 
                    "length": 2000.0
                }, 
                {
                    "count": 13, 
                    "length": 3000.0
                }, 
                {
                    "count": 9, 
                    "length": 4000.0
                }, 
                {
                    "count": 8, 
                    "length": 5000.0
                }, 
                {
                    "count": 4, 
                    "length": 6000.0
                }, 
                {
                    "count": 2, 
                    "length": 7000.0
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
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 83, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 83, 
                "mean": 82.16325378417969, 
                "sum": 6819.5498046875
            }, 
            "strand_sd_pa": {
                "count": 83, 
                "mean": 11.989039421081543, 
                "sum": 995.09027099609375
            }
        }, 
        "channel_count": 81, 
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
        "latest_run_time": 23386.97265625, 
        "levels_sums": {
            "count": 83, 
            "mean": 208.6425323486328, 
            "open_pore_level_sum": 17317.330078125
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
        "read_count": 83, 
        "reads_per_channel_dist": [
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 11, 
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
                "channel": 30, 
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
                "channel": 53, 
                "count": 1
            }, 
            {
                "channel": 54, 
                "count": 1
            }, 
            {
                "channel": 57, 
                "count": 1
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 72, 
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
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
                "channel": 86, 
                "count": 1
            }, 
            {
                "channel": 99, 
                "count": 1
            }, 
            {
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 118, 
                "count": 1
            }, 
            {
                "channel": 119, 
                "count": 1
            }, 
            {
                "channel": 120, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 1
            }, 
            {
                "channel": 170, 
                "count": 1
            }, 
            {
                "channel": 173, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 1
            }, 
            {
                "channel": 181, 
                "count": 1
            }, 
            {
                "channel": 199, 
                "count": 1
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 1
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
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 1
            }, 
            {
                "channel": 257, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 1
            }, 
            {
                "channel": 262, 
                "count": 1
            }, 
            {
                "channel": 281, 
                "count": 1
            }, 
            {
                "channel": 286, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 2
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 313, 
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
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 347, 
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
                "channel": 365, 
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
                "channel": 376, 
                "count": 1
            }, 
            {
                "channel": 387, 
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
                "channel": 408, 
                "count": 1
            }, 
            {
                "channel": 414, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 419, 
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
                "channel": 454, 
                "count": 1
            }, 
            {
                "channel": 459, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 485, 
                "count": 1
            }, 
            {
                "channel": 486, 
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 1
            }, 
            {
                "channel": 489, 
                "count": 1
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
                "channel": 493, 
                "count": 1
            }, 
            {
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 503, 
                "count": 1
            }
        ], 
        "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
        "segment_duration": 60, 
        "segment_number": 7, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "13813736", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "38.085629", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN20805", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T21:58:40Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.968750", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "895345ab-a32b-4e86-b261-855eda87db73", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "805aad09-9baa-44f5-936d-9ae0e4e28ec7", 
            "protocols_version": "4.1.9", 
            "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
            "sample_id": "IVTnormalGandC_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:45:58Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "segment", 
        "analysis_id": "4c00015c-a132-49af-98b0-5596176aea65", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 7, 
                "pass": 142
            }, 
            "qscore_dist_temp": [
                {
                    "count": 2, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 7, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 17, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 18, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 25, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 19, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 11, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 12, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 2, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 149, 
                "mean": 9.286760330200195, 
                "sum": 1383.727294921875
            }, 
            "read_len_events_sum_temp": 525886, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 149, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 149, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 24, 
                    "length": 1000.0
                }, 
                {
                    "count": 44, 
                    "length": 2000.0
                }, 
                {
                    "count": 34, 
                    "length": 3000.0
                }, 
                {
                    "count": 17, 
                    "length": 4000.0
                }, 
                {
                    "count": 13, 
                    "length": 5000.0
                }, 
                {
                    "count": 9, 
                    "length": 6000.0
                }, 
                {
                    "count": 3, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 9000.0
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
                    "count": 149, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 149, 
                "mean": 85.62642669677734, 
                "sum": 12758.337890625
            }, 
            "strand_sd_pa": {
                "count": 149, 
                "mean": 12.187469482421875, 
                "sum": 1815.9329833984375
            }
        }, 
        "channel_count": 126, 
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
        "latest_run_time": 75152.109375, 
        "levels_sums": {
            "count": 149, 
            "mean": 216.7442169189453, 
            "open_pore_level_sum": 32294.888671875
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
        "read_count": 149, 
        "reads_per_channel_dist": [
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 21, 
                "count": 1
            }, 
            {
                "channel": 22, 
                "count": 2
            }, 
            {
                "channel": 24, 
                "count": 1
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
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 36, 
                "count": 1
            }, 
            {
                "channel": 41, 
                "count": 2
            }, 
            {
                "channel": 47, 
                "count": 1
            }, 
            {
                "channel": 48, 
                "count": 1
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
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 1
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 71, 
                "count": 1
            }, 
            {
                "channel": 75, 
                "count": 1
            }, 
            {
                "channel": 83, 
                "count": 1
            }, 
            {
                "channel": 85, 
                "count": 1
            }, 
            {
                "channel": 87, 
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
                "channel": 97, 
                "count": 3
            }, 
            {
                "channel": 99, 
                "count": 2
            }, 
            {
                "channel": 101, 
                "count": 1
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
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 110, 
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
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 2
            }, 
            {
                "channel": 139, 
                "count": 2
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
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 2
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 1
            }, 
            {
                "channel": 164, 
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
                "count": 1
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
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 197, 
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
                "channel": 212, 
                "count": 1
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 217, 
                "count": 2
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 1
            }, 
            {
                "channel": 226, 
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
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 2
            }, 
            {
                "channel": 245, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 2
            }, 
            {
                "channel": 250, 
                "count": 1
            }, 
            {
                "channel": 263, 
                "count": 2
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 269, 
                "count": 1
            }, 
            {
                "channel": 271, 
                "count": 1
            }, 
            {
                "channel": 274, 
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
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 1
            }, 
            {
                "channel": 301, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 2
            }, 
            {
                "channel": 313, 
                "count": 2
            }, 
            {
                "channel": 319, 
                "count": 1
            }, 
            {
                "channel": 321, 
                "count": 1
            }, 
            {
                "channel": 328, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 1
            }, 
            {
                "channel": 335, 
                "count": 1
            }, 
            {
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 345, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
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
                "channel": 369, 
                "count": 1
            }, 
            {
                "channel": 370, 
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
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 2
            }, 
            {
                "channel": 393, 
                "count": 2
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 1
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 1
            }, 
            {
                "channel": 418, 
                "count": 1
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
                "channel": 441, 
                "count": 2
            }, 
            {
                "channel": 448, 
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
                "channel": 464, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 1
            }, 
            {
                "channel": 466, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 1
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
                "channel": 497, 
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
                "channel": 504, 
                "count": 1
            }, 
            {
                "channel": 506, 
                "count": 1
            }, 
            {
                "channel": 509, 
                "count": 2
            }
        ], 
        "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
        "segment_duration": 60, 
        "segment_number": 21, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "13813736", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "38.085629", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN20805", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T21:58:40Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.968750", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "f2552b1d-6186-47d5-8805-9926c6707801", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "805aad09-9baa-44f5-936d-9ae0e4e28ec7", 
            "protocols_version": "4.1.9", 
            "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
            "sample_id": "IVTnormalGandC_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:45:58Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "4c00015c-a132-49af-98b0-5596176aea65", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 17, 
                "pass": 483
            }, 
            "qscore_dist_temp": [
                {
                    "count": 4, 
                    "mean_qscore": 5.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 6.0
                }, 
                {
                    "count": 10, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 20, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 35, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 33, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 65, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 82, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 80, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 81, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 55, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 23, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 5, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 3, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 1, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 500, 
                "mean": 9.388040542602539, 
                "sum": 4694.0205078125
            }, 
            "read_len_events_sum_temp": 1785721, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 500, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 500, 
            "seq_len_events_dist_temp": [
                {
                    "count": 2, 
                    "length": 0.0
                }, 
                {
                    "count": 92, 
                    "length": 1000.0
                }, 
                {
                    "count": 140, 
                    "length": 2000.0
                }, 
                {
                    "count": 104, 
                    "length": 3000.0
                }, 
                {
                    "count": 68, 
                    "length": 4000.0
                }, 
                {
                    "count": 46, 
                    "length": 5000.0
                }, 
                {
                    "count": 24, 
                    "length": 6000.0
                }, 
                {
                    "count": 12, 
                    "length": 7000.0
                }, 
                {
                    "count": 1, 
                    "length": 8000.0
                }, 
                {
                    "count": 4, 
                    "length": 9000.0
                }, 
                {
                    "count": 1, 
                    "length": 10000.0
                }, 
                {
                    "count": 3, 
                    "length": 11000.0
                }, 
                {
                    "count": 1, 
                    "length": 12000.0
                }, 
                {
                    "count": 1, 
                    "length": 13000.0
                }, 
                {
                    "count": 1, 
                    "length": 15000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 500, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 500, 
                "mean": 82.02323150634766, 
                "sum": 41011.6171875
            }, 
            "strand_sd_pa": {
                "count": 500, 
                "mean": 11.88833999633789, 
                "sum": 5944.169921875
            }
        }, 
        "channel_count": 320, 
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
        "latest_run_time": 75152.109375, 
        "levels_sums": {
            "count": 500, 
            "mean": 208.90609741210938, 
            "open_pore_level_sum": 104453.046875
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
        "read_count": 500, 
        "reads_per_channel_dist": [
            {
                "channel": 1, 
                "count": 1
            }, 
            {
                "channel": 2, 
                "count": 2
            }, 
            {
                "channel": 3, 
                "count": 1
            }, 
            {
                "channel": 4, 
                "count": 1
            }, 
            {
                "channel": 5, 
                "count": 2
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 1
            }, 
            {
                "channel": 11, 
                "count": 1
            }, 
            {
                "channel": 13, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 1
            }, 
            {
                "channel": 18, 
                "count": 2
            }, 
            {
                "channel": 20, 
                "count": 2
            }, 
            {
                "channel": 21, 
                "count": 3
            }, 
            {
                "channel": 22, 
                "count": 2
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 2
            }, 
            {
                "channel": 28, 
                "count": 2
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
                "channel": 34, 
                "count": 1
            }, 
            {
                "channel": 36, 
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
                "channel": 41, 
                "count": 2
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
                "channel": 47, 
                "count": 3
            }, 
            {
                "channel": 48, 
                "count": 2
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
                "channel": 55, 
                "count": 1
            }, 
            {
                "channel": 56, 
                "count": 2
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
                "channel": 60, 
                "count": 3
            }, 
            {
                "channel": 62, 
                "count": 1
            }, 
            {
                "channel": 64, 
                "count": 1
            }, 
            {
                "channel": 65, 
                "count": 1
            }, 
            {
                "channel": 69, 
                "count": 1
            }, 
            {
                "channel": 71, 
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
                "count": 1
            }, 
            {
                "channel": 76, 
                "count": 1
            }, 
            {
                "channel": 77, 
                "count": 2
            }, 
            {
                "channel": 78, 
                "count": 1
            }, 
            {
                "channel": 82, 
                "count": 3
            }, 
            {
                "channel": 83, 
                "count": 3
            }, 
            {
                "channel": 84, 
                "count": 1
            }, 
            {
                "channel": 85, 
                "count": 1
            }, 
            {
                "channel": 86, 
                "count": 2
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 89, 
                "count": 2
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
                "channel": 94, 
                "count": 1
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 5
            }, 
            {
                "channel": 98, 
                "count": 2
            }, 
            {
                "channel": 99, 
                "count": 3
            }, 
            {
                "channel": 101, 
                "count": 1
            }, 
            {
                "channel": 102, 
                "count": 1
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
                "channel": 107, 
                "count": 1
            }, 
            {
                "channel": 108, 
                "count": 2
            }, 
            {
                "channel": 109, 
                "count": 1
            }, 
            {
                "channel": 110, 
                "count": 2
            }, 
            {
                "channel": 111, 
                "count": 1
            }, 
            {
                "channel": 112, 
                "count": 1
            }, 
            {
                "channel": 113, 
                "count": 1
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
                "channel": 117, 
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
                "channel": 120, 
                "count": 1
            }, 
            {
                "channel": 121, 
                "count": 1
            }, 
            {
                "channel": 122, 
                "count": 1
            }, 
            {
                "channel": 123, 
                "count": 1
            }, 
            {
                "channel": 127, 
                "count": 1
            }, 
            {
                "channel": 128, 
                "count": 1
            }, 
            {
                "channel": 129, 
                "count": 1
            }, 
            {
                "channel": 132, 
                "count": 1
            }, 
            {
                "channel": 133, 
                "count": 2
            }, 
            {
                "channel": 135, 
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
                "channel": 138, 
                "count": 4
            }, 
            {
                "channel": 139, 
                "count": 3
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
                "channel": 144, 
                "count": 1
            }, 
            {
                "channel": 146, 
                "count": 2
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 149, 
                "count": 1
            }, 
            {
                "channel": 152, 
                "count": 1
            }, 
            {
                "channel": 154, 
                "count": 1
            }, 
            {
                "channel": 155, 
                "count": 2
            }, 
            {
                "channel": 156, 
                "count": 1
            }, 
            {
                "channel": 157, 
                "count": 1
            }, 
            {
                "channel": 158, 
                "count": 2
            }, 
            {
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 1
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
                "channel": 163, 
                "count": 1
            }, 
            {
                "channel": 164, 
                "count": 4
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
                "channel": 170, 
                "count": 2
            }, 
            {
                "channel": 173, 
                "count": 2
            }, 
            {
                "channel": 175, 
                "count": 2
            }, 
            {
                "channel": 176, 
                "count": 1
            }, 
            {
                "channel": 177, 
                "count": 3
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
                "channel": 181, 
                "count": 3
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
                "count": 2
            }, 
            {
                "channel": 189, 
                "count": 1
            }, 
            {
                "channel": 190, 
                "count": 1
            }, 
            {
                "channel": 191, 
                "count": 1
            }, 
            {
                "channel": 192, 
                "count": 1
            }, 
            {
                "channel": 193, 
                "count": 1
            }, 
            {
                "channel": 194, 
                "count": 1
            }, 
            {
                "channel": 197, 
                "count": 1
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
                "channel": 202, 
                "count": 2
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
                "count": 3
            }, 
            {
                "channel": 210, 
                "count": 2
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 212, 
                "count": 2
            }, 
            {
                "channel": 213, 
                "count": 1
            }, 
            {
                "channel": 214, 
                "count": 1
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
                "channel": 218, 
                "count": 1
            }, 
            {
                "channel": 219, 
                "count": 1
            }, 
            {
                "channel": 220, 
                "count": 1
            }, 
            {
                "channel": 221, 
                "count": 1
            }, 
            {
                "channel": 222, 
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 2
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 227, 
                "count": 4
            }, 
            {
                "channel": 228, 
                "count": 1
            }, 
            {
                "channel": 229, 
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
                "channel": 234, 
                "count": 2
            }, 
            {
                "channel": 235, 
                "count": 2
            }, 
            {
                "channel": 240, 
                "count": 1
            }, 
            {
                "channel": 241, 
                "count": 3
            }, 
            {
                "channel": 242, 
                "count": 3
            }, 
            {
                "channel": 243, 
                "count": 4
            }, 
            {
                "channel": 245, 
                "count": 3
            }, 
            {
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 248, 
                "count": 2
            }, 
            {
                "channel": 250, 
                "count": 2
            }, 
            {
                "channel": 251, 
                "count": 1
            }, 
            {
                "channel": 252, 
                "count": 1
            }, 
            {
                "channel": 253, 
                "count": 3
            }, 
            {
                "channel": 254, 
                "count": 2
            }, 
            {
                "channel": 255, 
                "count": 1
            }, 
            {
                "channel": 257, 
                "count": 1
            }, 
            {
                "channel": 259, 
                "count": 3
            }, 
            {
                "channel": 260, 
                "count": 1
            }, 
            {
                "channel": 261, 
                "count": 2
            }, 
            {
                "channel": 262, 
                "count": 2
            }, 
            {
                "channel": 263, 
                "count": 3
            }, 
            {
                "channel": 265, 
                "count": 1
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 269, 
                "count": 3
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
                "channel": 274, 
                "count": 4
            }, 
            {
                "channel": 277, 
                "count": 1
            }, 
            {
                "channel": 278, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 2
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
                "channel": 286, 
                "count": 2
            }, 
            {
                "channel": 287, 
                "count": 1
            }, 
            {
                "channel": 288, 
                "count": 4
            }, 
            {
                "channel": 289, 
                "count": 1
            }, 
            {
                "channel": 291, 
                "count": 2
            }, 
            {
                "channel": 293, 
                "count": 1
            }, 
            {
                "channel": 294, 
                "count": 3
            }, 
            {
                "channel": 297, 
                "count": 1
            }, 
            {
                "channel": 298, 
                "count": 4
            }, 
            {
                "channel": 301, 
                "count": 4
            }, 
            {
                "channel": 302, 
                "count": 2
            }, 
            {
                "channel": 303, 
                "count": 1
            }, 
            {
                "channel": 306, 
                "count": 4
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
                "channel": 311, 
                "count": 3
            }, 
            {
                "channel": 313, 
                "count": 4
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
                "channel": 321, 
                "count": 1
            }, 
            {
                "channel": 323, 
                "count": 1
            }, 
            {
                "channel": 324, 
                "count": 3
            }, 
            {
                "channel": 326, 
                "count": 2
            }, 
            {
                "channel": 328, 
                "count": 1
            }, 
            {
                "channel": 330, 
                "count": 2
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
                "channel": 336, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 1
            }, 
            {
                "channel": 344, 
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
                "channel": 348, 
                "count": 1
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 351, 
                "count": 1
            }, 
            {
                "channel": 353, 
                "count": 1
            }, 
            {
                "channel": 354, 
                "count": 1
            }, 
            {
                "channel": 356, 
                "count": 1
            }, 
            {
                "channel": 357, 
                "count": 2
            }, 
            {
                "channel": 359, 
                "count": 2
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 364, 
                "count": 1
            }, 
            {
                "channel": 365, 
                "count": 1
            }, 
            {
                "channel": 367, 
                "count": 2
            }, 
            {
                "channel": 369, 
                "count": 1
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
                "channel": 373, 
                "count": 1
            }, 
            {
                "channel": 376, 
                "count": 2
            }, 
            {
                "channel": 377, 
                "count": 2
            }, 
            {
                "channel": 380, 
                "count": 1
            }, 
            {
                "channel": 382, 
                "count": 1
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 387, 
                "count": 1
            }, 
            {
                "channel": 389, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 3
            }, 
            {
                "channel": 393, 
                "count": 4
            }, 
            {
                "channel": 396, 
                "count": 1
            }, 
            {
                "channel": 397, 
                "count": 1
            }, 
            {
                "channel": 400, 
                "count": 2
            }, 
            {
                "channel": 408, 
                "count": 2
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 414, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 2
            }, 
            {
                "channel": 417, 
                "count": 2
            }, 
            {
                "channel": 418, 
                "count": 3
            }, 
            {
                "channel": 419, 
                "count": 1
            }, 
            {
                "channel": 422, 
                "count": 2
            }, 
            {
                "channel": 424, 
                "count": 1
            }, 
            {
                "channel": 426, 
                "count": 3
            }, 
            {
                "channel": 428, 
                "count": 1
            }, 
            {
                "channel": 429, 
                "count": 3
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
                "channel": 437, 
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
                "channel": 442, 
                "count": 1
            }, 
            {
                "channel": 445, 
                "count": 2
            }, 
            {
                "channel": 446, 
                "count": 2
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
                "count": 1
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
                "count": 2
            }, 
            {
                "channel": 453, 
                "count": 1
            }, 
            {
                "channel": 454, 
                "count": 1
            }, 
            {
                "channel": 455, 
                "count": 2
            }, 
            {
                "channel": 456, 
                "count": 1
            }, 
            {
                "channel": 457, 
                "count": 2
            }, 
            {
                "channel": 459, 
                "count": 2
            }, 
            {
                "channel": 460, 
                "count": 1
            }, 
            {
                "channel": 461, 
                "count": 1
            }, 
            {
                "channel": 463, 
                "count": 2
            }, 
            {
                "channel": 464, 
                "count": 1
            }, 
            {
                "channel": 465, 
                "count": 2
            }, 
            {
                "channel": 466, 
                "count": 3
            }, 
            {
                "channel": 467, 
                "count": 1
            }, 
            {
                "channel": 468, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 3
            }, 
            {
                "channel": 473, 
                "count": 1
            }, 
            {
                "channel": 478, 
                "count": 1
            }, 
            {
                "channel": 479, 
                "count": 3
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
                "channel": 484, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 488, 
                "count": 2
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
                "count": 2
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
                "channel": 499, 
                "count": 1
            }, 
            {
                "channel": 500, 
                "count": 2
            }, 
            {
                "channel": 501, 
                "count": 2
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
                "count": 1
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
                "channel": 509, 
                "count": 3
            }, 
            {
                "channel": 510, 
                "count": 1
            }, 
            {
                "channel": 511, 
                "count": 1
            }
        ], 
        "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
        "segment_duration": 1260, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "13813736", 
            "asic_id_eeprom": "5342148", 
            "asic_temp": "38.085629", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "device_id": "MN20805", 
            "device_type": "minion", 
            "distribution_status": "stable", 
            "distribution_version": "19.06.8", 
            "exp_script_name": "d3c117665490154a01acf707216a68ffbcde2e9a", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2019-10-23T21:58:40Z", 
            "flow_cell_id": "FAK87025", 
            "guppy_version": "3.0.7+427b5a1", 
            "heatsink_temp": "33.968750", 
            "hostname": "nanodev", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "4e8e1a52-5b7e-4985-81a5-6ee0f0121bec", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "Chicago_and_IVT", 
            "protocol_run_id": "805aad09-9baa-44f5-936d-9ae0e4e28ec7", 
            "protocols_version": "4.1.9", 
            "run_id": "3e6f7bccdb8bc5761e0574bad185b91c40fec5e3", 
            "sample_id": "IVTnormalGandC_106_RNA002_linux", 
            "time_stamp": "2023-06-23T15:45:58Z", 
            "usb_config": "MinION_fx3_1.1.1_ONT#MinION_fpga_1.1.0#ctrl#Auto", 
            "version": "3.4.8"
        }
    }
]