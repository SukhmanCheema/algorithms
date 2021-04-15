var rectangle1,rectangle2;

function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400,200,50,100);
  rectangle2=createSprite(200,40,50,100);
  rectangle1.shapeColor="red";
  rectangle2.shapeColor="blue";
  rectangle1.debug=true;
  rectangle2.debug=true;
}

function draw() {
  background(0); 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY; 
  if(rectangle2.x-rectangle1.x<=rectangle1.width/2+rectangle2.width/2&&
    rectangle1.x-rectangle2.x<=rectangle2.width/2+rectangle1.width/2&&
    rectangle1.y-rectangle2.y<=rectangle2.height/2+rectangle1.height/2&&
    rectangle2.y-rectangle1.y<=rectangle1.height/2+rectangle2.height/2){
    rectangle2.shapeColor="green";
    rectangle1.shapeColor="pink";
  }else {
  rectangle2.shapeColor="blue";
  rectangle1.shapeColor="red";
  }
  drawSprites();
}