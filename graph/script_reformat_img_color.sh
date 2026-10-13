# Script that takes a screenshot, make it 480x480 and put
# a chosen color around it if the original screenshot wasn't perfectly square
FILE=$1

# IMPORTANT: do not put the # for the hex code
COLOR=$2

convert Screenshot*.png -resize 480x480 new.png

# Image magick make me stuggle to provide a color. It needs to have a '' around
# the color name. The only way I found was to build the string and eval it later on
myComand="convert -size 480x480 xc:'#"${COLOR}"' new.png  -gravity center -composite output.png"
eval $myComand

mv output.png $FILE
rm Screenshot*.png new.png
