#!/bin/bash
FILE_PATH="Projects/Wallpapers/scripts/screenshot.py"

while true; do
  source Projects/Wallpapers/.venv/bin/activate
  python "$FILE_PATH"
  variety --set /usr/share/backgrounds/code.png
done