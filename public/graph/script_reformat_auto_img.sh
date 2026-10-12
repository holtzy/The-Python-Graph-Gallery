

FILE=$1
FILENAME=$(basename -- "$FILE")
EXTENSION="${FILENAME##*.}"
FILENAME="${FILENAME%.*}"
NEWFILE="${FILENAME}-square.${EXTENSION}"
convert "$FILE" -resize 480x480 -background white -gravity center -extent 480x480 "$NEWFILE"

echo "Processed image saved as $NEWFILE"




# HOW TO USE

# When a new notebook is created, ensure there is a .png file in the static/graph folder
# Run the following command in the terminal to reformat the image:
# 1 - Navigate to the static/graph folder
# 2 - Run the following command:
#     ./script_reformat_auto_img.sh FILENAME.png