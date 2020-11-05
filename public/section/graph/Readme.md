This folder provides a screenshot of every graphics of the gallery. Background is white, dim is 480 x 480. These images are then shown on the `section` pages of the gallery.

<br><br>

## How to produce a new img:  

- Screenshot of the img, more or less square

- Copy the screenshot with name : tmp.png

- Transform it to the right format with [Image magick](https://www.imagemagick.org/script/index.php):

```
./script_reformat_img.sh output_name.png
```

<br><br>

## How it works
Read the file `script_reformat_img.sh` for more details. In a nutshell it uses [Image magick](https://www.imagemagick.org/script/index.php) to add a bit of white space around the image to make it square:

```
convert tmp.png -resize 480x480 new.png
convert -size 480x480 xc:white new.png  -gravity center -composite output.png
```


<br><br><br><br>

## How to produce a new gif:  

- Make a `.mov` of the screen using `Quick Time Player`

- Copy it as `tmp.mov`.

- Transform it to the right format with [Image magick](https://www.imagemagick.org/script/index.php):

```
./script_reformat_gif.sh output_name.gif
```


<br><br>

## How it works
Read the file `script_reformat_gif.sh` for more details. In a nutshell it uses  [Image magick](https://www.imagemagick.org/script/index.php) to add a bit of white space around the image to make it square. The code comes from [here](https://gist.github.com/tskaggs/6394639).

