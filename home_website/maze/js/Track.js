const TRACK_W = 30;
const TRACK_H = 30;
const TRACK_COLS = 45;
const TRACK_ROWS = 20;                                                               
var levelOne =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
				 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
				 1, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
				 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 1,
				 1, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 1,
				 1, 0, 0, 1, 4, 0, 0, 0, 4, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 1,
				 1, 0, 0, 1, 4, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1,
				 1, 0, 0, 1, 4, 4, 4, 4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 
				 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 
				 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
				 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 1, 3, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 0, 1, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 3, 1, 3, 1, 3, 1, 0, 0, 1, 
				 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
				 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 
				 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
				 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1,
				 1, 2, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 1, 
				 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var trackGrid = [];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

var sectionPlayerOne = 1;
var sectionPlayerTwo = 1;

function returnTileTypeAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) 
	{
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return trackGrid[trackIndexUnderCoord];
	} 
	else 
	{
		return TRACK_WALL;
	}
}

function carTrackHandling(whichCar) {
	var carTrackCol = Math.floor(whichCar.x / TRACK_W);
	var carTrackRow = Math.floor(whichCar.y / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
	
	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

		var tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow);
		
		console.log(trackIndexUnderCar);
		if(tileHere == TRACK_TREE)
		{
			loadLevel(levelOne);
		}
		if(tileHere == TRACK_GOAL) 
		{
			if (whichCar == player1Car) //player one
			{
				if(sectionPlayerOne == 1)
				{
					whichCar.speed = 0;
					whichCar.ang = 0;
					whichCar.x = 315;
					whichCar.y = 525;
					sectionPlayerOne++;
				}
				else if(sectionPlayerOne == 2)
				{
					whichCar.speed = 0;
					whichCar.ang = -Math.PI/2;
					whichCar.x = 880;
					whichCar.y = 240;
					sectionPlayerOne++;
				}
				else if(sectionPlayerOne == 3)
				{	
					if (trackIndexUnderCar == 206)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 211)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 526)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 521)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 700;
						whichCar.y = 435;
						sectionPlayerOne++;
					}
					/*console.log(whichCar.name + " wins!");
					sectionPlayerOne = 1;
					loadLevel(levelOne)
					*/
				}
				else if (sectionPlayerOne == 4)
				{
					//for 2
					if (trackIndexUnderCar == 193) 
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 150) 
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 242) // top of the middle of the left 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 287) // middle of the middle of the left 2
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 332) // bottom of the middle of the left 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 310;
						whichCar.y = 460;
					}
					else if (trackIndexUnderCar == 420) //  2
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 508) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 870;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 552) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 870;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 554) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 556) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					} 
					// for 1
					else if (trackIndexUnderCar == 156) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 246) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 336) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 426) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 516) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					//for 0
					else if (trackIndexUnderCar == 565) // 0
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 160) // 0
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 167) // 0 top left
					{
						whichCar.speed = 0;
						whichCar.MIN_SPEED_TO_TURN = 0.0;
						whichCar.TURN_RATE = 2.0;
						whichCar.x = 200;
						whichCar.y = 175;
						console.log(whichCar.name + " You found the secret entrace! You win!");
					}
					else if (trackIndexUnderCar == 572) // 0
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					
					//for the right 2
					else if (trackIndexUnderCar == 217) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 174) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 266) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 311) // 2
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 356) // 2
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 444) // 2
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 532) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 576) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 578) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 580) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
				}
			}
			
			
			
			if (whichCar == player2Car) //player two
			{
				if(sectionPlayerTwo == 1)
				{
					whichCar.speed = 0;
					whichCar.ang = 0;
					whichCar.x = 315;
					whichCar.y = 525;
					sectionPlayerTwo++;
				}
				else if(sectionPlayerTwo == 2)
				{
					whichCar.speed = 0;
					whichCar.ang = -Math.PI/2;
					whichCar.x = 880;
					whichCar.y = 240;
					sectionPlayerTwo++;
				}
				else if(sectionPlayerTwo == 3)
				{	
					if (trackIndexUnderCar == 206)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 211)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 526)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 521)
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 700;
						whichCar.y = 435;
						sectionPlayerTwo++;
					}
					/*console.log(whichCar.name + " wins!");
					sectionPlayerOne = 1;
					loadLevel(levelOne)
					*/
				}
				else if (sectionPlayerTwo == 4)
				{
					//for 2
					if (trackIndexUnderCar == 193) 
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 150) 
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 242) // top of the middle of the left 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 287) // middle of the middle of the left 2
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 332) // bottom of the middle of the left 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 310;
						whichCar.y = 460;
					}
					else if (trackIndexUnderCar == 420) //  2
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					}
					else if (trackIndexUnderCar == 508) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 870;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 552) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 870;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 554) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					}
					else if (trackIndexUnderCar == 556) //  2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 320;
						whichCar.y = 50;
					} 
					// for 1
					else if (trackIndexUnderCar == 156) // 1
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 246) // 1
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 336) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 426) // 1
					{
						sectionPlayerOne--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					else if (trackIndexUnderCar == 516) // 1
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240;
					} 
					//for 0
					else if (trackIndexUnderCar == 565) // 0
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 160) // 0
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 167) // 0 top left
					{
						whichCar.speed = 0;
						whichCar.MIN_SPEED_TO_TURN = 0.0;
						whichCar.TURN_RATE = 2.0;
						whichCar.x = 200;
						whichCar.y = 175;
						console.log(whichCar.name + " You found the secret entrace! You win!");
					}
					else if (trackIndexUnderCar == 572) // 0
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					
					//for the right 2
					else if (trackIndexUnderCar == 217) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 174) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 266) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 50
					}
					else if (trackIndexUnderCar == 311) // 2
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 356) // 2
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 444) // 2
					{
						sectionPlayerTwo--;
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 880;
						whichCar.y = 240
					}
					else if (trackIndexUnderCar == 532) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 576) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 578) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
					else if (trackIndexUnderCar == 580) // 2
					{
						whichCar.speed = 0;
						whichCar.ang = -Math.PI/2;
						whichCar.x = 1280;
						whichCar.y = 440
					}
				}
			}
		}
		else if (tileHere != TRACK_ROAD)
		{			
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
		
			whichCar.speed *= -0.5;
		}
		 // end of track found
	} // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {

	var arrayIndex = 0;
	var drawTileX = 0;
	var drawTileY = 0;
	for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
		for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {
			
			var tileTypeHere = trackGrid[arrayIndex];
			var useImg = trackPics[tileTypeHere];
			
			canvasContext.drawImage(useImg,drawTileX,drawTileY);
			
			drawTileX+= TRACK_W;
			arrayIndex ++;
		} // end of for each col
		drawTileX = 0;
		drawTileY += TRACK_H;
	} // end of for each row

} // end of drawTracks func