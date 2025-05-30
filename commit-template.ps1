# Get list of changed files
$changedFiles = git diff --cached --name-only

# Create a summary of changes
$fileSummary = ""
if ($changedFiles) {
    $fileSummary = "`n`nChanged files:`n"
    foreach ($file in $changedFiles) {
        $fileSummary += "- $file`n"
    }
}

# Read the template file
$template = Get-Content .gitmessage

# Extract the first non-comment line as the default message
$defaultMessage = $template | Where-Object { $_ -notmatch '^#' -and $_ -notmatch '^$' } | Select-Object -First 1

# If no default message found, use a generic one
if (-not $defaultMessage) {
    $defaultMessage = "feat: Update code"
}

# Combine message with file summary
$commitMessage = $defaultMessage + $fileSummary

# Execute git commit with the detailed message
git commit -m $commitMessage 