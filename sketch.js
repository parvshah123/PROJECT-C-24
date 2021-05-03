const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var element1;
var stone;
var iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    element1 = new Rubber(800,500,50);
    stone = new Stone(500,500,60,60);
    iron = new Iron(300,500,60,60);

  


}

function draw(){
    background("black");
    Engine.update(engine);


    plane.display();
    hammer.display();
    element1.display();
    stone.display();
    iron.display();

    
 
}