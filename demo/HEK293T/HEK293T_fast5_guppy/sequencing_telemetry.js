[
    {
        "aggregation": "segment", 
        "analysis_id": "ee25d256-5c01-41d1-a452-4bfd9e6615df", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 599
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 18, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 45, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 59, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 64, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 89, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 101, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 70, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 73, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 32, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 600, 
                "mean": 10.317293167114258, 
                "sum": 6190.3759765625
            }, 
            "read_len_events_sum_temp": 3417703, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 600, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 600, 
            "seq_len_events_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }, 
                {
                    "count": 42, 
                    "length": 1000.0
                }, 
                {
                    "count": 110, 
                    "length": 2000.0
                }, 
                {
                    "count": 113, 
                    "length": 3000.0
                }, 
                {
                    "count": 69, 
                    "length": 4000.0
                }, 
                {
                    "count": 57, 
                    "length": 5000.0
                }, 
                {
                    "count": 39, 
                    "length": 6000.0
                }, 
                {
                    "count": 44, 
                    "length": 7000.0
                }, 
                {
                    "count": 26, 
                    "length": 8000.0
                }, 
                {
                    "count": 16, 
                    "length": 9000.0
                }, 
                {
                    "count": 17, 
                    "length": 10000.0
                }, 
                {
                    "count": 10, 
                    "length": 11000.0
                }, 
                {
                    "count": 9, 
                    "length": 12000.0
                }, 
                {
                    "count": 9, 
                    "length": 13000.0
                }, 
                {
                    "count": 6, 
                    "length": 14000.0
                }, 
                {
                    "count": 3, 
                    "length": 15000.0
                }, 
                {
                    "count": 6, 
                    "length": 16000.0
                }, 
                {
                    "count": 3, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }, 
                {
                    "count": 4, 
                    "length": 19000.0
                }, 
                {
                    "count": 3, 
                    "length": 20000.0
                }, 
                {
                    "count": 2, 
                    "length": 21000.0
                }, 
                {
                    "count": 2, 
                    "length": 22000.0
                }, 
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 600, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 600, 
                "mean": 87.569671630859375, 
                "sum": 52541.8046875
            }, 
            "strand_sd_pa": {
                "count": 600, 
                "mean": 13.077374458312988, 
                "sum": 7846.4248046875
            }
        }, 
        "channel_count": 333, 
        "context_tags": {
            "barcoding_enabled": "0", 
            "basecall_config_filename": "rna_r9.4.1_70bps_hac.cfg", 
            "experiment_duration_set": "4320", 
            "experiment_type": "rna", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "6.0.7", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 15540.48046875, 
        "levels_sums": {
            "count": 600, 
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
        "read_count": 600, 
        "reads_per_channel_dist": [
            {
                "channel": 2, 
                "count": 1
            }, 
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 3
            }, 
            {
                "channel": 9, 
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
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 2
            }, 
            {
                "channel": 22, 
                "count": 2
            }, 
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 4
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
                "count": 4
            }, 
            {
                "channel": 31, 
                "count": 2
            }, 
            {
                "channel": 32, 
                "count": 2
            }, 
            {
                "channel": 35, 
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
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 3
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 50, 
                "count": 2
            }, 
            {
                "channel": 51, 
                "count": 3
            }, 
            {
                "channel": 52, 
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
                "channel": 56, 
                "count": 3
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 61, 
                "count": 2
            }, 
            {
                "channel": 62, 
                "count": 2
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 3
            }, 
            {
                "channel": 69, 
                "count": 3
            }, 
            {
                "channel": 70, 
                "count": 1
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
                "count": 2
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
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 83, 
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
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 88, 
                "count": 2
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 94, 
                "count": 2
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 3
            }, 
            {
                "channel": 98, 
                "count": 1
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
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 104, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 106, 
                "count": 2
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
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 2
            }, 
            {
                "channel": 113, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 3
            }, 
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 116, 
                "count": 2
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
                "channel": 119, 
                "count": 2
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
                "count": 3
            }, 
            {
                "channel": 124, 
                "count": 3
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 2
            }, 
            {
                "channel": 128, 
                "count": 2
            }, 
            {
                "channel": 132, 
                "count": 3
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 134, 
                "count": 3
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 4
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 2
            }, 
            {
                "channel": 146, 
                "count": 3
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 3
            }, 
            {
                "channel": 149, 
                "count": 1
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
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 154, 
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
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 5
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
                "channel": 165, 
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
                "channel": 171, 
                "count": 3
            }, 
            {
                "channel": 172, 
                "count": 2
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
                "count": 2
            }, 
            {
                "channel": 176, 
                "count": 2
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
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 2
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
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 186, 
                "count": 2
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
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 7
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 195, 
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
                "channel": 201, 
                "count": 2
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 3
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 3
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 213, 
                "count": 3
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 4
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 228, 
                "count": 3
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
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 240, 
                "count": 2
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 4
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
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 249, 
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
                "count": 3
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
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
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
                "channel": 264, 
                "count": 3
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 267, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 269, 
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
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 274, 
                "count": 2
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 3
            }, 
            {
                "channel": 280, 
                "count": 2
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
                "channel": 288, 
                "count": 2
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
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 2
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 3
            }, 
            {
                "channel": 298, 
                "count": 3
            }, 
            {
                "channel": 300, 
                "count": 3
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 2
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 2
            }, 
            {
                "channel": 313, 
                "count": 3
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
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 319, 
                "count": 3
            }, 
            {
                "channel": 322, 
                "count": 4
            }, 
            {
                "channel": 324, 
                "count": 1
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
                "channel": 330, 
                "count": 1
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
                "channel": 333, 
                "count": 4
            }, 
            {
                "channel": 334, 
                "count": 2
            }, 
            {
                "channel": 335, 
                "count": 2
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
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 3
            }, 
            {
                "channel": 341, 
                "count": 2
            }, 
            {
                "channel": 342, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 2
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
                "channel": 346, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 3
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 353, 
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
                "channel": 358, 
                "count": 2
            }, 
            {
                "channel": 359, 
                "count": 3
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 363, 
                "count": 2
            }, 
            {
                "channel": 364, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 367, 
                "count": 3
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 3
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
                "channel": 378, 
                "count": 2
            }, 
            {
                "channel": 381, 
                "count": 2
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 3
            }, 
            {
                "channel": 391, 
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
                "channel": 396, 
                "count": 2
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 3
            }, 
            {
                "channel": 400, 
                "count": 4
            }, 
            {
                "channel": 402, 
                "count": 4
            }, 
            {
                "channel": 403, 
                "count": 4
            }, 
            {
                "channel": 405, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 3
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 2
            }, 
            {
                "channel": 416, 
                "count": 2
            }, 
            {
                "channel": 417, 
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
                "channel": 423, 
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
                "channel": 427, 
                "count": 4
            }, 
            {
                "channel": 428, 
                "count": 2
            }, 
            {
                "channel": 429, 
                "count": 2
            }, 
            {
                "channel": 431, 
                "count": 3
            }, 
            {
                "channel": 432, 
                "count": 3
            }, 
            {
                "channel": 433, 
                "count": 1
            }, 
            {
                "channel": 434, 
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
                "count": 3
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 2
            }, 
            {
                "channel": 440, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 3
            }, 
            {
                "channel": 442, 
                "count": 3
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 3
            }, 
            {
                "channel": 445, 
                "count": 3
            }, 
            {
                "channel": 446, 
                "count": 2
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 2
            }, 
            {
                "channel": 450, 
                "count": 1
            }, 
            {
                "channel": 451, 
                "count": 2
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 454, 
                "count": 2
            }, 
            {
                "channel": 458, 
                "count": 2
            }, 
            {
                "channel": 459, 
                "count": 2
            }, 
            {
                "channel": 460, 
                "count": 2
            }, 
            {
                "channel": 461, 
                "count": 2
            }, 
            {
                "channel": 462, 
                "count": 2
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
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
                "channel": 481, 
                "count": 1
            }, 
            {
                "channel": 483, 
                "count": 1
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
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 492, 
                "count": 4
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
                "channel": 501, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 3
            }, 
            {
                "channel": 504, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 3
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 4
            }, 
            {
                "channel": 510, 
                "count": 2
            }, 
            {
                "channel": 511, 
                "count": 2
            }
        ], 
        "run_id": "8d72848056ffc07081c9c470d3e3fe996c609c2b", 
        "segment_duration": 60, 
        "segment_number": 5, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "416725177", 
            "asic_id_eeprom": "5186153", 
            "asic_temp": "26.612993", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "4.0.13", 
            "device_id": "X1", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "20.06.9", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2020-09-07T08:22:28Z", 
            "flow_cell_id": "FAM94315", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "4.0.11+f1071ce", 
            "heatsink_temp": "34.007812", 
            "hostname": "GXB01498", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "90ed9a44-2b5d-4379-9827-66622163cb32", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "ON001-RNA-R00088", 
            "protocol_run_id": "b567b539-8209-4d6b-a5bf-e49ad9906c37", 
            "protocols_version": "6.0.7", 
            "run_id": "8d72848056ffc07081c9c470d3e3fe996c609c2b", 
            "sample_id": "RHX237-T1", 
            "time_stamp": "2023-06-24T02:32:15Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#bulk#Auto", 
            "version": "4.0.3"
        }
    }, 
    {
        "aggregation": "cumulative", 
        "analysis_id": "ee25d256-5c01-41d1-a452-4bfd9e6615df", 
        "basecall_1d": {
            "exit_status_dist": {
                "fail:qscore_filter": 1, 
                "pass": 599
            }, 
            "qscore_dist_temp": [
                {
                    "count": 1, 
                    "mean_qscore": 6.5
                }, 
                {
                    "count": 14, 
                    "mean_qscore": 7.0
                }, 
                {
                    "count": 18, 
                    "mean_qscore": 7.5
                }, 
                {
                    "count": 21, 
                    "mean_qscore": 8.0
                }, 
                {
                    "count": 45, 
                    "mean_qscore": 8.5
                }, 
                {
                    "count": 59, 
                    "mean_qscore": 9.0
                }, 
                {
                    "count": 64, 
                    "mean_qscore": 9.5
                }, 
                {
                    "count": 89, 
                    "mean_qscore": 10.0
                }, 
                {
                    "count": 101, 
                    "mean_qscore": 10.5
                }, 
                {
                    "count": 70, 
                    "mean_qscore": 11.0
                }, 
                {
                    "count": 73, 
                    "mean_qscore": 11.5
                }, 
                {
                    "count": 32, 
                    "mean_qscore": 12.0
                }, 
                {
                    "count": 9, 
                    "mean_qscore": 12.5
                }, 
                {
                    "count": 4, 
                    "mean_qscore": 13.0
                }
            ], 
            "qscore_sum_temp": {
                "count": 600, 
                "mean": 10.317293167114258, 
                "sum": 6190.3759765625
            }, 
            "read_len_events_sum_temp": 3417703, 
            "seq_len_bases_dist_temp": [
                {
                    "count": 600, 
                    "length": 0.0
                }
            ], 
            "seq_len_bases_sum_temp": 600, 
            "seq_len_events_dist_temp": [
                {
                    "count": 7, 
                    "length": 0.0
                }, 
                {
                    "count": 42, 
                    "length": 1000.0
                }, 
                {
                    "count": 110, 
                    "length": 2000.0
                }, 
                {
                    "count": 113, 
                    "length": 3000.0
                }, 
                {
                    "count": 69, 
                    "length": 4000.0
                }, 
                {
                    "count": 57, 
                    "length": 5000.0
                }, 
                {
                    "count": 39, 
                    "length": 6000.0
                }, 
                {
                    "count": 44, 
                    "length": 7000.0
                }, 
                {
                    "count": 26, 
                    "length": 8000.0
                }, 
                {
                    "count": 16, 
                    "length": 9000.0
                }, 
                {
                    "count": 17, 
                    "length": 10000.0
                }, 
                {
                    "count": 10, 
                    "length": 11000.0
                }, 
                {
                    "count": 9, 
                    "length": 12000.0
                }, 
                {
                    "count": 9, 
                    "length": 13000.0
                }, 
                {
                    "count": 6, 
                    "length": 14000.0
                }, 
                {
                    "count": 3, 
                    "length": 15000.0
                }, 
                {
                    "count": 6, 
                    "length": 16000.0
                }, 
                {
                    "count": 3, 
                    "length": 17000.0
                }, 
                {
                    "count": 1, 
                    "length": 18000.0
                }, 
                {
                    "count": 4, 
                    "length": 19000.0
                }, 
                {
                    "count": 3, 
                    "length": 20000.0
                }, 
                {
                    "count": 2, 
                    "length": 21000.0
                }, 
                {
                    "count": 2, 
                    "length": 22000.0
                }, 
                {
                    "count": 1, 
                    "length": 24000.0
                }, 
                {
                    "count": 1, 
                    "length": 25000.0
                }
            ], 
            "speed_bases_per_second_dist_temp": [
                {
                    "count": 600, 
                    "speed": 1.0
                }
            ], 
            "strand_median_pa": {
                "count": 600, 
                "mean": 87.569671630859375, 
                "sum": 52541.8046875
            }, 
            "strand_sd_pa": {
                "count": 600, 
                "mean": 13.077374458312988, 
                "sum": 7846.4248046875
            }
        }, 
        "channel_count": 333, 
        "context_tags": {
            "barcoding_enabled": "0", 
            "basecall_config_filename": "rna_r9.4.1_70bps_hac.cfg", 
            "experiment_duration_set": "4320", 
            "experiment_type": "rna", 
            "local_basecalling": "1", 
            "package": "bream4", 
            "package_version": "6.0.7", 
            "sample_frequency": "3012", 
            "sequencing_kit": "sqk-rna002"
        }, 
        "latest_run_time": 15540.48046875, 
        "levels_sums": {
            "count": 600, 
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
        "read_count": 600, 
        "reads_per_channel_dist": [
            {
                "channel": 2, 
                "count": 1
            }, 
            {
                "channel": 5, 
                "count": 1
            }, 
            {
                "channel": 6, 
                "count": 1
            }, 
            {
                "channel": 7, 
                "count": 1
            }, 
            {
                "channel": 8, 
                "count": 3
            }, 
            {
                "channel": 9, 
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
                "channel": 14, 
                "count": 1
            }, 
            {
                "channel": 15, 
                "count": 2
            }, 
            {
                "channel": 16, 
                "count": 4
            }, 
            {
                "channel": 18, 
                "count": 1
            }, 
            {
                "channel": 21, 
                "count": 2
            }, 
            {
                "channel": 22, 
                "count": 2
            }, 
            {
                "channel": 23, 
                "count": 1
            }, 
            {
                "channel": 24, 
                "count": 1
            }, 
            {
                "channel": 26, 
                "count": 1
            }, 
            {
                "channel": 27, 
                "count": 4
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
                "count": 4
            }, 
            {
                "channel": 31, 
                "count": 2
            }, 
            {
                "channel": 32, 
                "count": 2
            }, 
            {
                "channel": 35, 
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
                "channel": 42, 
                "count": 1
            }, 
            {
                "channel": 44, 
                "count": 1
            }, 
            {
                "channel": 45, 
                "count": 3
            }, 
            {
                "channel": 46, 
                "count": 1
            }, 
            {
                "channel": 49, 
                "count": 2
            }, 
            {
                "channel": 50, 
                "count": 2
            }, 
            {
                "channel": 51, 
                "count": 3
            }, 
            {
                "channel": 52, 
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
                "channel": 56, 
                "count": 3
            }, 
            {
                "channel": 57, 
                "count": 2
            }, 
            {
                "channel": 60, 
                "count": 1
            }, 
            {
                "channel": 61, 
                "count": 2
            }, 
            {
                "channel": 62, 
                "count": 2
            }, 
            {
                "channel": 63, 
                "count": 2
            }, 
            {
                "channel": 66, 
                "count": 3
            }, 
            {
                "channel": 69, 
                "count": 3
            }, 
            {
                "channel": 70, 
                "count": 1
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
                "count": 2
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
                "channel": 80, 
                "count": 1
            }, 
            {
                "channel": 83, 
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
                "count": 1
            }, 
            {
                "channel": 87, 
                "count": 1
            }, 
            {
                "channel": 88, 
                "count": 2
            }, 
            {
                "channel": 89, 
                "count": 1
            }, 
            {
                "channel": 90, 
                "count": 1
            }, 
            {
                "channel": 93, 
                "count": 1
            }, 
            {
                "channel": 94, 
                "count": 2
            }, 
            {
                "channel": 95, 
                "count": 1
            }, 
            {
                "channel": 97, 
                "count": 3
            }, 
            {
                "channel": 98, 
                "count": 1
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
                "channel": 103, 
                "count": 1
            }, 
            {
                "channel": 104, 
                "count": 1
            }, 
            {
                "channel": 105, 
                "count": 1
            }, 
            {
                "channel": 106, 
                "count": 2
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
                "channel": 109, 
                "count": 2
            }, 
            {
                "channel": 110, 
                "count": 2
            }, 
            {
                "channel": 113, 
                "count": 1
            }, 
            {
                "channel": 114, 
                "count": 3
            }, 
            {
                "channel": 115, 
                "count": 1
            }, 
            {
                "channel": 116, 
                "count": 2
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
                "channel": 119, 
                "count": 2
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
                "count": 3
            }, 
            {
                "channel": 124, 
                "count": 3
            }, 
            {
                "channel": 125, 
                "count": 1
            }, 
            {
                "channel": 126, 
                "count": 2
            }, 
            {
                "channel": 128, 
                "count": 2
            }, 
            {
                "channel": 132, 
                "count": 3
            }, 
            {
                "channel": 133, 
                "count": 1
            }, 
            {
                "channel": 134, 
                "count": 3
            }, 
            {
                "channel": 135, 
                "count": 1
            }, 
            {
                "channel": 136, 
                "count": 4
            }, 
            {
                "channel": 137, 
                "count": 1
            }, 
            {
                "channel": 138, 
                "count": 1
            }, 
            {
                "channel": 143, 
                "count": 1
            }, 
            {
                "channel": 145, 
                "count": 2
            }, 
            {
                "channel": 146, 
                "count": 3
            }, 
            {
                "channel": 147, 
                "count": 1
            }, 
            {
                "channel": 148, 
                "count": 3
            }, 
            {
                "channel": 149, 
                "count": 1
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
                "channel": 153, 
                "count": 1
            }, 
            {
                "channel": 154, 
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
                "channel": 159, 
                "count": 1
            }, 
            {
                "channel": 160, 
                "count": 5
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
                "channel": 165, 
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
                "channel": 171, 
                "count": 3
            }, 
            {
                "channel": 172, 
                "count": 2
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
                "count": 2
            }, 
            {
                "channel": 176, 
                "count": 2
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
                "count": 3
            }, 
            {
                "channel": 181, 
                "count": 2
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
                "channel": 184, 
                "count": 1
            }, 
            {
                "channel": 185, 
                "count": 1
            }, 
            {
                "channel": 186, 
                "count": 2
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
                "count": 2
            }, 
            {
                "channel": 190, 
                "count": 7
            }, 
            {
                "channel": 193, 
                "count": 2
            }, 
            {
                "channel": 195, 
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
                "channel": 201, 
                "count": 2
            }, 
            {
                "channel": 202, 
                "count": 1
            }, 
            {
                "channel": 204, 
                "count": 1
            }, 
            {
                "channel": 205, 
                "count": 3
            }, 
            {
                "channel": 206, 
                "count": 1
            }, 
            {
                "channel": 210, 
                "count": 3
            }, 
            {
                "channel": 211, 
                "count": 1
            }, 
            {
                "channel": 213, 
                "count": 3
            }, 
            {
                "channel": 214, 
                "count": 1
            }, 
            {
                "channel": 215, 
                "count": 1
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
                "count": 1
            }, 
            {
                "channel": 223, 
                "count": 4
            }, 
            {
                "channel": 224, 
                "count": 1
            }, 
            {
                "channel": 226, 
                "count": 1
            }, 
            {
                "channel": 228, 
                "count": 3
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
                "channel": 235, 
                "count": 1
            }, 
            {
                "channel": 237, 
                "count": 1
            }, 
            {
                "channel": 240, 
                "count": 2
            }, 
            {
                "channel": 241, 
                "count": 1
            }, 
            {
                "channel": 242, 
                "count": 1
            }, 
            {
                "channel": 243, 
                "count": 4
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
                "channel": 247, 
                "count": 1
            }, 
            {
                "channel": 249, 
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
                "count": 3
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
                "channel": 257, 
                "count": 2
            }, 
            {
                "channel": 258, 
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
                "channel": 264, 
                "count": 3
            }, 
            {
                "channel": 266, 
                "count": 1
            }, 
            {
                "channel": 267, 
                "count": 2
            }, 
            {
                "channel": 268, 
                "count": 1
            }, 
            {
                "channel": 269, 
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
                "channel": 272, 
                "count": 2
            }, 
            {
                "channel": 274, 
                "count": 2
            }, 
            {
                "channel": 276, 
                "count": 1
            }, 
            {
                "channel": 277, 
                "count": 2
            }, 
            {
                "channel": 279, 
                "count": 3
            }, 
            {
                "channel": 280, 
                "count": 2
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
                "channel": 288, 
                "count": 2
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
                "channel": 292, 
                "count": 1
            }, 
            {
                "channel": 293, 
                "count": 2
            }, 
            {
                "channel": 295, 
                "count": 1
            }, 
            {
                "channel": 296, 
                "count": 3
            }, 
            {
                "channel": 298, 
                "count": 3
            }, 
            {
                "channel": 300, 
                "count": 3
            }, 
            {
                "channel": 302, 
                "count": 1
            }, 
            {
                "channel": 304, 
                "count": 1
            }, 
            {
                "channel": 307, 
                "count": 1
            }, 
            {
                "channel": 308, 
                "count": 2
            }, 
            {
                "channel": 309, 
                "count": 1
            }, 
            {
                "channel": 311, 
                "count": 2
            }, 
            {
                "channel": 313, 
                "count": 3
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
                "channel": 318, 
                "count": 3
            }, 
            {
                "channel": 319, 
                "count": 3
            }, 
            {
                "channel": 322, 
                "count": 4
            }, 
            {
                "channel": 324, 
                "count": 1
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
                "channel": 330, 
                "count": 1
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
                "channel": 333, 
                "count": 4
            }, 
            {
                "channel": 334, 
                "count": 2
            }, 
            {
                "channel": 335, 
                "count": 2
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
                "channel": 339, 
                "count": 1
            }, 
            {
                "channel": 340, 
                "count": 3
            }, 
            {
                "channel": 341, 
                "count": 2
            }, 
            {
                "channel": 342, 
                "count": 1
            }, 
            {
                "channel": 343, 
                "count": 2
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
                "channel": 346, 
                "count": 2
            }, 
            {
                "channel": 349, 
                "count": 3
            }, 
            {
                "channel": 350, 
                "count": 1
            }, 
            {
                "channel": 353, 
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
                "channel": 358, 
                "count": 2
            }, 
            {
                "channel": 359, 
                "count": 3
            }, 
            {
                "channel": 361, 
                "count": 1
            }, 
            {
                "channel": 362, 
                "count": 1
            }, 
            {
                "channel": 363, 
                "count": 2
            }, 
            {
                "channel": 364, 
                "count": 2
            }, 
            {
                "channel": 365, 
                "count": 2
            }, 
            {
                "channel": 367, 
                "count": 3
            }, 
            {
                "channel": 372, 
                "count": 1
            }, 
            {
                "channel": 373, 
                "count": 3
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
                "channel": 378, 
                "count": 2
            }, 
            {
                "channel": 381, 
                "count": 2
            }, 
            {
                "channel": 385, 
                "count": 1
            }, 
            {
                "channel": 390, 
                "count": 3
            }, 
            {
                "channel": 391, 
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
                "channel": 396, 
                "count": 2
            }, 
            {
                "channel": 398, 
                "count": 1
            }, 
            {
                "channel": 399, 
                "count": 3
            }, 
            {
                "channel": 400, 
                "count": 4
            }, 
            {
                "channel": 402, 
                "count": 4
            }, 
            {
                "channel": 403, 
                "count": 4
            }, 
            {
                "channel": 405, 
                "count": 3
            }, 
            {
                "channel": 407, 
                "count": 1
            }, 
            {
                "channel": 409, 
                "count": 3
            }, 
            {
                "channel": 413, 
                "count": 1
            }, 
            {
                "channel": 415, 
                "count": 2
            }, 
            {
                "channel": 416, 
                "count": 2
            }, 
            {
                "channel": 417, 
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
                "channel": 423, 
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
                "channel": 427, 
                "count": 4
            }, 
            {
                "channel": 428, 
                "count": 2
            }, 
            {
                "channel": 429, 
                "count": 2
            }, 
            {
                "channel": 431, 
                "count": 3
            }, 
            {
                "channel": 432, 
                "count": 3
            }, 
            {
                "channel": 433, 
                "count": 1
            }, 
            {
                "channel": 434, 
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
                "count": 3
            }, 
            {
                "channel": 438, 
                "count": 1
            }, 
            {
                "channel": 439, 
                "count": 2
            }, 
            {
                "channel": 440, 
                "count": 1
            }, 
            {
                "channel": 441, 
                "count": 3
            }, 
            {
                "channel": 442, 
                "count": 3
            }, 
            {
                "channel": 443, 
                "count": 1
            }, 
            {
                "channel": 444, 
                "count": 3
            }, 
            {
                "channel": 445, 
                "count": 3
            }, 
            {
                "channel": 446, 
                "count": 2
            }, 
            {
                "channel": 448, 
                "count": 1
            }, 
            {
                "channel": 449, 
                "count": 2
            }, 
            {
                "channel": 450, 
                "count": 1
            }, 
            {
                "channel": 451, 
                "count": 2
            }, 
            {
                "channel": 453, 
                "count": 3
            }, 
            {
                "channel": 454, 
                "count": 2
            }, 
            {
                "channel": 458, 
                "count": 2
            }, 
            {
                "channel": 459, 
                "count": 2
            }, 
            {
                "channel": 460, 
                "count": 2
            }, 
            {
                "channel": 461, 
                "count": 2
            }, 
            {
                "channel": 462, 
                "count": 2
            }, 
            {
                "channel": 468, 
                "count": 2
            }, 
            {
                "channel": 471, 
                "count": 1
            }, 
            {
                "channel": 472, 
                "count": 1
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
                "channel": 481, 
                "count": 1
            }, 
            {
                "channel": 483, 
                "count": 1
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
                "channel": 489, 
                "count": 2
            }, 
            {
                "channel": 492, 
                "count": 4
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
                "channel": 501, 
                "count": 1
            }, 
            {
                "channel": 502, 
                "count": 3
            }, 
            {
                "channel": 504, 
                "count": 1
            }, 
            {
                "channel": 505, 
                "count": 3
            }, 
            {
                "channel": 508, 
                "count": 2
            }, 
            {
                "channel": 509, 
                "count": 4
            }, 
            {
                "channel": 510, 
                "count": 2
            }, 
            {
                "channel": 511, 
                "count": 2
            }
        ], 
        "run_id": "8d72848056ffc07081c9c470d3e3fe996c609c2b", 
        "segment_duration": 300, 
        "segment_number": 1, 
        "segment_type": "guppy-acquisition", 
        "software": {
            "analysis": "1d_basecalling", 
            "name": "guppy-basecalling", 
            "version": "6.1.5+446c355"
        }, 
        "tracking_id": {
            "asic_id": "416725177", 
            "asic_id_eeprom": "5186153", 
            "asic_temp": "26.612993", 
            "asic_version": "IA02D", 
            "auto_update": "0", 
            "auto_update_source": "https://mirror.oxfordnanoportal.com/software/MinKNOW/", 
            "bream_is_standard": "0", 
            "configuration_version": "4.0.13", 
            "device_id": "X1", 
            "device_type": "gridion", 
            "distribution_status": "stable", 
            "distribution_version": "20.06.9", 
            "exp_script_name": "sequencing_MIN106_RNA:FLO-MIN106:SQK-RNA002", 
            "exp_script_purpose": "sequencing_run", 
            "exp_start_time": "2020-09-07T08:22:28Z", 
            "flow_cell_id": "FAM94315", 
            "flow_cell_product_code": "FLO-MIN106", 
            "guppy_version": "4.0.11+f1071ce", 
            "heatsink_temp": "34.007812", 
            "hostname": "GXB01498", 
            "installation_type": "nc", 
            "local_firmware_file": "1", 
            "msg_id": "47d8e7c8-f829-4c4d-92fa-b75bd72ebdc9", 
            "operating_system": "ubuntu 16.04", 
            "protocol_group_id": "ON001-RNA-R00088", 
            "protocol_run_id": "b567b539-8209-4d6b-a5bf-e49ad9906c37", 
            "protocols_version": "6.0.7", 
            "run_id": "8d72848056ffc07081c9c470d3e3fe996c609c2b", 
            "sample_id": "RHX237-T1", 
            "time_stamp": "2023-06-24T02:32:15Z", 
            "usb_config": "GridX5_fx3_1.1.3_ONT#MinION_fpga_1.1.1#bulk#Auto", 
            "version": "4.0.3"
        }
    }
]