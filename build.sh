#!/bin/bash

# Change directory to your Jekyll site
cd /home/Chaingateway/web/demo.tokengateway.io/public_html

# Pull the latest changes from the Bitbucket repository
git pull origin main

# Run Jekyll build
bundle exec jekyll build