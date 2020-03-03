const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.7;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.09;
const MIN_SPEED_TO_TURN = 0.5;

const OFFSET = 7; //may need to change if change size of car

//having class in the name doesn't do anything but what we do to what's inside it will make it a class
function carClass() {

	this.lap = 0;
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
					this.ang = 0;
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
		if(Math.abs(this.speed) > MIN_SPEED_TO_TURN && this.keyHeld_TurnLeft) {
			this.ang -= TURN_RATE;
		}
		if(Math.abs(this.speed) > MIN_SPEED_TO_TURN && this.keyHeld_TurnRight) {
			this.ang += TURN_RATE;
		}

		this.x += Math.cos(this.ang) * this.speed;
		this.y += Math.sin(this.ang) * this.speed;
		carTrackHandling(this);
	}
	
	this.carCollisionHandling = function(other) {
		this.leftX = this.x - OFFSET;
		this.topY = this.y - OFFSET;
		this.rightX = this.x + OFFSET;
		this.bottomY = this.y + OFFSET;
		
		other.leftX = other.x - OFFSET;
		other.topY = other.y - OFFSET;
		other.rightX = other.x + OFFSET;
		other.bottomY = other.y + OFFSET;
		
	/*	if(other.rightX >= this.leftX && other.topY <= this.topY && other.bottomY >= this.bottomY) //basic test, at starting point when other car is behind this car and just nudges it forward
		{
			other.x -= Math.cos(other.ang) * other.speed;
			other.speed *= -1.25;
			if(this.speed >= 0 && this.speed < 1)
			{
				this.x += 1;
			}
			else if (this.speed < 0) {
				
				this.x -= Math.cos(this.ang) * this.speed;
				this.speed *= -1.25;
				if(other.speed > 0 && other.speed < 1 || other.speed == 0)
				{
					other.x -= 1;
				}
			}
		}
		
		else if (other.rightX >= this.leftX && (other.topY <= this.bottomY || other.bottomY >= this.topY)) //dont do two tests at once 
		{
			this.x +=1;
			other.x -= Math.cos(other.ang) * other.speed;
			other.speed *= -1.25;
			console.log("joejoe");
		}
	*/
	}
	
	this.draw = function() {
		drawBitmapCenteredWithRotation(this.myCarPic, this.x,this.y,this.ang);
	}
}