FILE=$1
convert tmp.png -resize 480x480 new.png
convert -size 480x480 xc:#F8F9FA new.png  -gravity center -composite output.png
mv output.png $FILE
rm tmp.png new.png
