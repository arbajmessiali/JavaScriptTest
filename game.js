var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create empty array with 4 frames
var images = [];
images.length = 4;

//fill array with images
for(var i=0; i<images.length;i++)
{
    images[i] = new Image();
    images[i].src = 'Ball_'+ (i+1).toString() +'.png';
}

//draw image on canvas
var i=0;
setInterval(function(){
    i++;
    if(i>4)
    {
        i=0;
    }
    ctx.drawImage(images[i],100,100,100,100);
},100)