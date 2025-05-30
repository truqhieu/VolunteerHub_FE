#!/bin/bash

# Function to show usage
show_usage() {
    echo "Usage: ./commit.sh <type> <message>"
    echo "Types:"
    echo "  feat     - new feature"
    echo "  fix      - bug fix"
    echo "  refactor - refactoring code"
    echo "  style    - formatting, no code change"
    echo "  doc      - documentation changes"
    echo "  test     - adding/refactoring tests"
    echo "  chore    - updating tasks, no code change"
    echo ""
    echo "Example: ./commit.sh feat 'Add user authentication'"
}

# Check if type and message are provided
if [ $# -lt 2 ]; then
    show_usage
    exit 1
fi

TYPE=$1
MESSAGE=$2

# Validate commit type
case $TYPE in
    feat|fix|refactor|style|doc|test|chore)
        ;;
    *)
        echo "Error: Invalid commit type '$TYPE'"
        show_usage
        exit 1
        ;;
esac

# Create commit message
COMMIT_MSG="$TYPE: $MESSAGE"

# Execute git commit
git commit -m "$COMMIT_MSG" 