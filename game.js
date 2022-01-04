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

//Image initial position
var imageX = 0;
var imageY = 0;

//Keyboard Input
document.addEventListener('keydown', function (event) {
	if(event.key === 'd')
		imageX = imageX + 5;
	if(event.key === 's')
		imageY = imageY + 5;
	if(event.key === 'a')
		imageY = imageX - 5;
	if(event.key === 'w')
		imageY = imageY - 5;
})

//draw image on canvas
var i=0;
setInterval(function(){
    i++;
    if(i>4)
    {
        i=0;
    }
	ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(images[i], imageX, imageY, 100, 100);
},100)