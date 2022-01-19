// To get the dimensions of an image

const img = new Image();

//get the image
img.src = '//cdn.programiz.com/sites/tutorial2program/files/cover-artwork.png';

//get height and width
img.onload = function () {
    console.log('Width ' + this.width);
    console.log('Height ' + this.height);
}