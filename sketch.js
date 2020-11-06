var tower,towerImage;
var doors,doorsImage,dg;
var climber,climberI,climberG;
var ig,igp;
var ghost,ghostImage;
var gameState="play";

function preload(){
    towerImage=loadImage("tower.png");
   doorsImage=loadImage("door.png");
climberI=loadImage("climber.png");
ghostImage=loadImage("ghost-standing.png");

}


function setup(){
    createCanvas(600,600);
    tower=createSprite(300,300,10,10);
    tower.addImage("Tower1",towerImage);
    tower.velocityY=1;
    tower.y=tower.width/2;
    dg=createGroup();
    climberG=createGroup();
    igp=createGroup();
    ghost=createSprite(300,300,10,10);
    ghost.addImage("gh",ghostImage);
ghost.scale=0.4;
 



}


function draw(){

    if(gameState==="play"){
if(tower.y>600){
    tower.y=300;
}



if(keyDown("space")){
    ghost.velocityY=-10;
}
if(keyDown("right")){
    ghost.x=ghost.x+3;
}
if(keyDown("left")){
    ghost.x=ghost.x-3;
}



if(ghost.isTouching(climberG)){
    ghost.velocityY=0;
}
spawnDoors();
drawSprites();

if(ghost.y>600||ghost.isTouching(igp)){
    gameState="end";
}
if(gameState==="end"){
ghost.destroy();
background("black");
fill("yellow");
textSize(20);
text("G A M E  O V E R",200,200);

}

ghost.velocityY=ghost.velocityY+0.8;

}}

function spawnDoors(){
if(frameCount%200===0){
doors=createSprite(200,-30,10,10);
doors.addImage("door",doorsImage);
doors.x=Math.round(random(150,500));
doors.velocityY=1;
doors.lifetime=600/1;
dg.add(doors);
 climber=createSprite(200,-30,10,10);
climber.x=doors.x;
climber.y=doors.y+60;
climber.velocityY=1;
climber.addImage("cl",climberI);
climber.lifetime=600/1;
climberG.add(climber);
ig=createSprite(200,-30,10,10);
ig.x=climber.x;
ig.y=climber.y+10;
ig.width=climber.width;
ig.velocityY=1;
ig.lifetime=600/1;
ig.visible=false;
igp.add(ig);}
}
