FILE=$1
convert Screen*.mov -resize 480x480 new.gif
convert -size 480x480 xc:white new.gif  -gravity center -composite output.gif
mv output.gif $FILE
rm Screen*.mov new.gif
