function setup(){
 video=createCapture(VIDEO);
  video.size(480,480);  
  canvas=createCanvas(500,500);
canvas.position(600,200);
poseNet=ml5.poseNet(video,ModelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
background("#7a7676");document.getElementById("square_sides").innerHTML="Width and Height of a square:  "+difference+"px";
fill('#fc86c7');
    stroke('#051440');
    square(noseX,noseY,difference);
}
function ModelLoaded(){
console.log("PoseNet Is Initialized");
}
function gotPoses(results){
if (results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.X;
    noseY=results[0].pose.nose.Y;
    console.log("noseX= "+noseX+"noseY= "+noseY);
    leftwristX=results[0].pose.leftwrist.x;
    rightwristY=results[0].pose.rightwrist.x;
    difference=floor(leftwristX - rightwristX);
    
    
   

}
}
noseX=0;
noseY=0;
difference=0;
rightwrist=0;
leftwrist=0;





