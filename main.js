function setup(){
    canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tintcolor="";
}

function draw(){
    image(video,0,0,600,400);
    tint(tintcolor);
}  
function take_snapshot(){
    save("student.png");
} 

function filter(){
    tintcolor=document.getElementById("colorname").value;
}