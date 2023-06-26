import random
import argparse

def split_feature_file(input_file, train_ratio):
    # Initialize output files
    train_file = args.train_file
    test_file = args.test_file
    train_writer = open(train_file, 'w')
    test_writer = open(test_file, 'w')

    # Read the input file and split into training and testing sets
    with open(input_file, 'r') as f:
        for line in f:
            # Randomly decide whether to write the line to training or testing set
            if random.random() < train_ratio:
                train_writer.write(line)
            else:
                test_writer.write(line)

    # Close the output file writers
    train_writer.close()
    test_writer.close()

    # Print the summary
    print(f"Feature file split into training and testing sets.")
    print(f"Training set saved to: {train_file}")
    print(f"Testing set saved to: {test_file}")

if __name__ == '__main__':
    # Create the argument parser
    parser = argparse.ArgumentParser(description='Split a feature file into training and testing sets.')

    # Add the command-line arguments
    parser.add_argument('--input_file', type=str, help='Path to the input feature file')
    parser.add_argument('--train_file', type=str, help='Path to the train feature file')
    parser.add_argument('--test_file', type=str, help='Path to the test feature file')
    parser.add_argument('--train_ratio', type=float, default=0.8, help='Ratio of instances to use for training (default: 0.8)')

    # Parse the arguments
    args = parser.parse_args()

    # Split the feature file into training and testing sets
    split_feature_file(args.input_file, args.train_ratio)
