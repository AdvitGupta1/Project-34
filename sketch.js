const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var engine,world,bodies,body,hero,heroImg,background,backImg;
function preload() {
backImg=loadImage("GamingBackground.png");
heroImg=loadImage("Superhero-01.png");
}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;

background=createSprite(1500,400,3000,800);
background.addImage(backImg);

hero=createSprite(400,300,200,300);
hero.addImage(heroImg);
hero.scale=0.4

}

function draw() {
  drawSprites();
  Engine.update(engine);

}
