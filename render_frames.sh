#!/bin/bash

module load ffmpeg/4.0.2
ffmpeg -r "$FRAMES_PER_SEC" -y -i "$FRAMES_DIR/render_%04d.png" -vsync vfr -b:v 16M -pix_fmt yuv420p "$FRAMES_DIR/video.mp4"

set -euo pipefail
IFS=$'\n\t'

function frames_range()
{
    (
        set +u
        echo "$FRAMES_RANGE"| perl -pe 's[.+/][]'
    )
}

module load blender
(
    cd "$OUTPUT_DIR"
    env | grep -P '^[A-Z]'| sort
    blender \
        -b "$BLEND_FILE_PATH" \
        -F PNG \
        -o "$OUTPUT_DIR/render_" \
        -x 1 \
        -t 0 \
        -E CYCLES \
        -f "$(frames_range)"
)