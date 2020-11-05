# The input gif must be copied in the folder as tmp.gif
FILE=$1

# Use ffmpeg to slice .mov into high quality .png's
mkdir output
ffmpeg -i tmp.mov -vf scale=320:-1 -r 10 output/ffout%3d.png

# Resize these images to 480 x 480
for i in $(ls output/) ; do
	convert output/$i -resize 480x480 output/new_${i}
	convert -size 480x480 xc:#F8F9FA output/new_${i}  -gravity center -composite output/ok_${i}
done

# Use Convert from ImageMagick : add all the png's in GIF
convert -delay 8 -loop 0 output/ok*.png output/tmp.gif

# copy with proper name
mv output/tmp.gif $FILE

# Clean repo
rm -r output tmp.mov
