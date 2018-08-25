
var fingers;
var video1;
var videos;
var estado = false;

function setup() {

  
  createCanvas(710, 400);
  // specify multiple formats for different browsers
  img = loadImage("assets/descarga.jpg");
  video1 = createVideo(['assets/video1.webm']);
  fingers = createVideo(['assets/video3.webm']);
  fingers.hide();
  video1.hide();
 
}

function draw() {
  background(150); // draw the video frame to canvas
  image(img, 0, 0);
  if(key == '1'){
    image(fingers,10,10);
    fingers.play();
    video1.pause();
  }else{
  if (key == '2'){
     image(video1,10,10);
     video1.play();
     fingers.pause();
  }
  }
  
  
}

function mousePressed() {
  
  
  if(estado == false){
    fingers.play(); // set the video to loop and start playing
    
    estado = true;
  }else{
   fingers.pause(); // set the video to loop and start playing
  estado = false;
  }
    
}
