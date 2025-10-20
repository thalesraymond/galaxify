#!/bin/bash

# Default values
json_input=""
short_name=""

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --json) json_input="$2"; shift ;;
        --short-name) short_name="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; exit 1 ;;
    esac
    shift
done

if [ -z "$short_name" ]; then
  echo "Error: --short-name is required."
  exit 1
fi

# Generate branch name
branch_name="feature/$short_name"

# Create and checkout the new branch
git checkout -b "$branch_name"

# Create feature directory
feature_dir=".specify/features/$short_name"
mkdir -p "$feature_dir"

# Create spec file
spec_file="$feature_dir/spec.md"
touch "$spec_file"

# Output JSON
echo "{\"BRANCH_NAME\": \"$branch_name\", \"SPEC_FILE\": \"$spec_file\"}"
