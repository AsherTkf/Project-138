img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;

function preload()
{
	world_start = loadSound("world_start.wav");
	setSprites();
    MarioAnimation();
	img = loadImage("mario.jpg");
}

function setup()
{
	canvas = createCanvas(1240,360);
	canvas.parent('canvas');

	video = createCapture(VIDEO);
	video.size(600,300);

	instializeInSetup(mario);

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
	console.log("Model is Loaded");
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
		console.log("noseX = " + noseX + " noseY = " + noseY);
	}
}

function draw()
{
	game();
	background("#D3D3D3");

	image(img,marioX,marioY,40,70);
}