#!/bin/bash

# GitHub Pages Deployment Script for GlobalForm Static Website

echo "🚀 GlobalForm - GitHub Pages Deployment Helper"
echo "=============================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install git first."
    exit 1
fi

echo "📝 This script will help you deploy to GitHub Pages"
echo ""
echo "Prerequisites:"
echo "1. You have a GitHub account"
echo "2. You have created a new repository on GitHub"
echo "3. You have the repository URL ready"
echo ""

read -p "Do you want to continue? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

# Get repository URL
echo ""
echo "Enter your GitHub repository URL (e.g., https://github.com/username/repo-name.git):"
read REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "❌ Repository URL cannot be empty"
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo ""
    echo "📦 Initializing git repository..."
    git init
    echo "✓ Git initialized"
fi

# Add all files
echo ""
echo "📦 Adding files to git..."
git add .
echo "✓ Files added"

# Commit
echo ""
echo "📦 Creating commit..."
git commit -m "Initial commit: GlobalForm static website"
echo "✓ Commit created"

# Set main branch
echo ""
echo "📦 Setting main branch..."
git branch -M main
echo "✓ Branch set to main"

# Add remote
echo ""
echo "📦 Adding remote repository..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"
echo "✓ Remote added"

# Push to GitHub
echo ""
echo "📦 Pushing to GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "📌 Next Steps:"
    echo "1. Go to your repository on GitHub"
    echo "2. Click on 'Settings' → 'Pages'"
    echo "3. Under 'Source', select 'main' branch and '/ (root)' folder"
    echo "4. Click 'Save'"
    echo "5. Wait a few minutes for deployment"
    echo ""
    echo "Your site will be available at:"
    echo "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
    echo ""
    echo "🎉 Deployment process complete!"
else
    echo ""
    echo "❌ Error pushing to GitHub. Please check:"
    echo "1. Your repository URL is correct"
    echo "2. You have permission to push to this repository"
    echo "3. You are logged in to GitHub (git config)"
fi
