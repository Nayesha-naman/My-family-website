video="";
status="";

function setup(){
    canvas=createCanvas(350,350);
    canvas.center();
    video.hide();
}
function preload() {
  video=createVideo("video.mp4")  
  
  
}

function draw() {
    image(video,0,0,350,350)
    //console.log("video loaded")

}
function start() {
    objectdetecter=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML=" Status : detecting objects";
    
}
function modelLoaded() {
    console.log("Model has been loaded successfully.");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
    
}