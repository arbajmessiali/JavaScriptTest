var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//create empty array
var images = [];
images.player = new Image();
images.player.src = 'src/spritesheet.png';
const playerWidth = 96.1;
const playerHeight = 104;
let playerFrameX = 0;
let playerFrameY = 7;
let playerX = 0;
let playerY = 0;
const playerSpeed = 5;

/*fill array with images
for (var i = 0; i < images.length; i++) {
	images[i] = new Image();
	images[i].src = 'src/spritesheet.png';
}*/

/*//Image initial position
var imageX = 0;
var imageY = 0;*/

//Keyboard Input
document.addEventListener('keydown', function(event) {
	if (event.key === 'd'){
		if(playerX < canvas.width + playerWidth)
			playerX = playerX + playerSpeed;
		else
			playerX = 0 - playerWidth;
		}
})

//draw function
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
	ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

//draw image on canvas
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawSprite(images.player, playerWidth * playerFrameX, playerHeight * playerFrameY, playerWidth, playerHeight, playerX, playerY, playerWidth, playerHeight);
	if(playerFrameX < 9) 
		playerFrameX++;
	else
		playerFrameX = 1;
}

//animation
window.onload = setInterval(animate, 1000/20);

//fix window resize
window.addEventListener('resize', function(){
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
})