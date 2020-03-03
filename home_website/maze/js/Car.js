const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;


//having class in the name doesn't do anything but what we do to what's inside it will make it a class
function carClass() {
	
	this.TURN_RATE = 0.1;
	this.MIN_SPEED_TO_TURN = 0.5;
	this.x = 75;
	this.y = 75;
	this.ang = 0;
	this.speed = 0;
	this.myCarPic;
	this.name = "Untitled Car";
	
	this.keyHeld_Gas = false;
	this.keyHeld_Reverse = false;
	this.keyHeld_TurnLeft = false;
	this.keyHeld_TurnRight = false;
	
	//dont really need to define them here but just to help understand whats happening we defined them here
	this.controlKeyUp; 
	this.controlKeyRight;
	this.controlKeyDown;
	this.controlKeyLeft;
	
	this.setupInput = function(upKey,rightKey,downKey,leftKey) 
	{
		this.controlKeyUp = upKey;
		this.controlKeyRight = rightKey;
		this.controlKeyDown = downKey;
		this.controlKeyLeft = leftKey;
	}
	
	//reset is a key word but sense we're declaring it as a function it's fine (but bad programming habits, dont name functions from keywords (also named reserved words)
	this.reset = function(whichImage, carName) {
		this.name = carName;
		this.myCarPic = whichImage; //its going to take whichever car we send it
		this.speed = 0;
		for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
			for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
				var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
				if(trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
					trackGrid[arrayIndex] = TRACK_ROAD;
					this.ang = -Math.PI/2;
					this.x = eachCol * TRACK_W + TRACK_W/2;
					this.y = eachRow * TRACK_H + TRACK_H/2;
					return;
				}
			}
		}
	}

	this.move = function() {
		this.speed *= GROUNDSPEED_DECAY_MULT;

		if(this.keyHeld_Gas) {
			this.speed += DRIVE_POWER;
		}
		if(this.keyHeld_Reverse) {
			this.speed -= REVERSE_POWER;
		}
		if(Math.abs(this.speed) > this.MIN_SPEED_TO_TURN && this.keyHeld_TurnLeft) {
			this.ang -= this.TURN_RATE;
		}
		if(Math.abs(this.speed) > this.MIN_SPEED_TO_TURN && this.keyHeld_TurnRight) {
			this.ang += this.TURN_RATE;
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;
		carTrackHandling(this);
	}

	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y,this.ang);
	}
}