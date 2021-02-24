FILE=$1
convert Screenshot*.png -resize 200x200 new.png
convert -size 200x200 xc:white new.png  -gravity center -composite output.png
mv output.png $FILE
rm Screenshot*.png new.png
