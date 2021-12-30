var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//create empty array with 4 frames
var images = [];
images.length = 4;

//fill array with images
for(var i=1; i<=images.length;i++)
{
    images[i] = new Image();
    images[i].src = 'Ball_'+ i.toString() +'.png';
}

//draw image on canvas
var i=1;
setInterval(function(){
    i++;
    if(i>4)
    {
        i=1;
    }
    ctx.drawImage(images[i],100,100,100,100);
},100)