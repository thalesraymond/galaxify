#!/bin/bash

# Get the current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Extract the short name from the branch name
short_name=$(echo "$branch_name" | sed 's/feature\///')

# Define feature directory
feature_dir=".specify/features/$short_name"

# Find available design documents
available_docs=()
for doc in "$feature_dir"/* "$feature_dir"/contracts/*; do
  if [ -f "$doc" ]; then
    available_docs+=("\"$doc\"")
  fi
done

# Convert array to JSON string
docs_json=$(printf ",%s" "${available_docs[@]}")
docs_json="[${docs_json:1}]"

# Output JSON
echo "{\"FEATURE_DIR\": \"$feature_dir\", \"AVAILABLE_DOCS\": $docs_json}"
