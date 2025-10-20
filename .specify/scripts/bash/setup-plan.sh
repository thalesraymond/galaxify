#!/bin/bash

# Get the current branch name
branch_name=$(git rev-parse --abbrev-ref HEAD)

# Extract the short name from the branch name (e.g., feature/my-feature -> my-feature)
short_name=$(echo "$branch_name" | sed 's/feature\///')

# Define paths
specs_dir=".specify/features/$short_name"
feature_spec="$specs_dir/spec.md"
impl_plan="$specs_dir/implementation-plan.md"
template=".specify/templates/implementation-plan-template.md"

# Create the implementation plan from the template
cp "$template" "$impl_plan"

# Output JSON
echo "{\"FEATURE_SPEC\": \"$feature_spec\", \"IMPL_PLAN\": \"$impl_plan\", \"SPECS_DIR\": \"$specs_dir\", \"BRANCH\": \"$branch_name\"}"
