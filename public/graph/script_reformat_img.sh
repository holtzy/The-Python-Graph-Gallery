FILE=$1
convert Screenshot*.png -resize 480x480 new.png
convert -size 480x480 xc:white new.png  -gravity center -composite output.png
mv output.png $FILE
rm Screenshot*.png new.png
