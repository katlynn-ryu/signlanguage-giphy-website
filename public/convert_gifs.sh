#!/bin/bash

# Directory containing the GIFs
gif_dir="public"

# Find all GIF files in the directory and convert them to WebP
find "$gif_dir" -type f -name "*.gif" | while read gif; do
    # Get the base name of the file (without extension)
    base_name=$(basename "$gif" .gif)
    # Get the directory of the file
    dir_name=$(dirname "$gif")
    # Convert GIF to WebP
    convert "$gif" -quality 80 "$dir_name/$base_name.webp"
    echo "Converted $gif to $dir_name/$base_name.webp"
done
