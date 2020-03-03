var canvas, canvasContext;

var player1Car = new carClass();
var player2Car = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width,canvas.height, 'black');
	colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	setupInput();
	loadLevel(levelOne);
}
function loadLevel(whichLevel) {
	trackGrid = whichLevel.slice();
	player2Car.reset(otherCarPic, "White Lightning");
	player1Car.reset(carPic, "Batmobile");
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	player1Car.move();
	player2Car.move();
	player1Car.carCollisionHandling(player2Car);
}

function drawAll() {
	drawTracks();
	player1Car.draw();
	player2Car.draw();
	//colorText(mouseX+","+mouseY, mouseX, mouseY, "yellow");
} 