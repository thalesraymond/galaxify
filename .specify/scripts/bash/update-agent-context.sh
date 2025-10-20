#!/bin/bash

agent_name=$1
context_file=".specify/memory/${agent_name}-context.md"

# Create the file if it doesn't exist
touch "$context_file"

# The new technologies to add
technologies=(
  "pnpm workspaces"
  "Express.js"
  "Next.js"
  "Vite"
  "Vitest"
  "helmet"
  "express-mongo-sanitize"
  "express-rate-limit"
  "morgan"
)

# Add the technologies to the context file
for tech in "${technologies[@]}"; do
  # Check if the technology is already in the file
  if ! grep -q "$tech" "$context_file"; then
    echo "- $tech" >> "$context_file"
  fi
done
