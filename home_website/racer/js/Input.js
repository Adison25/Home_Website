const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
	
	player1Car.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
	player2Car.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
}

function updateMousePos(evt) {
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keySet(keyEvent, whichCar, setTo) {
	if(keyEvent.keyCode == whichCar.controlKeyLeft)
	{
		whichCar.keyHeld_TurnLeft = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyRight)
	{
		whichCar.keyHeld_TurnRight = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyUp)
	{
		whichCar.keyHeld_Gas = setTo;
	}
	if(keyEvent.keyCode == whichCar.controlKeyDown)
	{
		whichCar.keyHeld_Reverse = setTo;
	}
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt,player1Car, true);
	keySet(evt,player2Car, true);
	
	evt.preventDefault();
}

function keyReleased(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	keySet(evt,player1Car, false);
	keySet(evt,player2Car, false);
	
	evt.preventDefault();
}