const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var platform1, platform2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10,
block11, block12, block13, block14, block15, block16, block17, block18, block19, block20,
block21, block22, block23, block24, block25, block26, block27, block28, block29, block30,
block31, block32;
var polygon;
var constraint;

function preload()
{

}

function setup()
{
    createCanvas(1200, 530);
    engine = Engine.create();
    world = engine.world;

    // platforms
    platform1 = new Ground(520, 490, 280, 20);
    platform2 = new Ground(880, 310, 280, 20);

    // blocks
    // pyramid 1
    // tier 1
    block1 = new Block(400, 460, 40, 40);
    block2 = new Block(440, 460, 40, 40);
    block3 = new Block(480, 460, 40, 40);
    block4 = new Block(520, 460, 40, 40);
    block5 = new Block(560, 460, 40, 40);
    block6 = new Block(600, 460, 40, 40);
    block7 = new Block(640, 460, 40, 40);
    // tier 2
    block8 = new Block(440, 420, 40, 40);
    block9 = new Block(480, 420, 40, 40);
    block10 = new Block(520, 420, 40, 40);
    block11 = new Block(560, 420, 40, 40);
    block12 = new Block(600, 420, 40, 40);
    // tier 3
    block13 = new Block(480, 380, 40, 40);
    block14 = new Block(520, 380, 40, 40);
    block15 = new Block(560, 380, 40, 40);
    // tier 4
    block16 = new Block(520, 340, 40, 40);
    // pyramid 2
    // tier 1
    block17 = new Block(760, 280, 40, 40);
    block18 = new Block(800, 280, 40, 40);
    block19 = new Block(840, 280, 40, 40);
    block20 = new Block(880, 280, 40, 40);
    block21 = new Block(920, 280, 40, 40);
    block22 = new Block(960, 280, 40, 40);
    block23 = new Block(1000, 280, 40, 40);
    // tier 2
    block24 = new Block(800, 240, 40, 40);
    block25 = new Block(840, 240, 40, 40);
    block26 = new Block(880, 240, 40, 40);
    block27 = new Block(920, 240, 40, 40);
    block28 = new Block(960, 240, 40, 40);
    // tier 3
    block29 = new Block(840, 200, 40, 40);
    block30 = new Block(880, 200, 40, 40);
    block31 = new Block(920, 200, 40, 40);
    // tier 4
    block32 = new Block(880, 160, 40, 40);

    // polygon
    polygon = new Polygon(200, 400, 30);

    // constraint
    constraint = new Chain(polygon.body, {x: 200, y:400})

}

function draw()
{
    background(45);
    Engine.update(engine);

    platform1.display();
    platform2.display();


    block1.display(rgb(23, 236, 236));
    block2.display(rgb(23, 236, 236));
    block3.display(rgb(23, 236, 236));
    block4.display(rgb(23, 236, 236));
    block5.display(rgb(23, 236, 236));
    block6.display(rgb(23, 236, 236));
    block7.display(rgb(23, 236, 236));

    block8.display(rgb(160, 255, 47));
    block9.display(rgb(160, 255, 47));
    block10.display(rgb(160, 255, 47));
    block11.display(rgb(160, 255, 47));
    block12.display(rgb(160, 255, 47));

    block13.display(rgb(255, 173, 47));
    block14.display(rgb(255, 173, 47));
    block15.display(rgb(255, 173, 47));

    block16.display(rgb(255, 47, 154));


    block17.display(rgb(23, 236, 236));
    block18.display(rgb(23, 236, 236));
    block19.display(rgb(23, 236, 236));
    block20.display(rgb(23, 236, 236));
    block21.display(rgb(23, 236, 236));
    block22.display(rgb(23, 236, 236));
    block23.display(rgb(23, 236, 236));

    block24.display(rgb(160, 255, 47));
    block25.display(rgb(160, 255, 47));
    block26.display(rgb(160, 255, 47));
    block27.display(rgb(160, 255, 47));
    block28.display(rgb(160, 255, 47));

    block29.display(rgb(255, 173, 47));
    block30.display(rgb(255, 173, 47));
    block31.display(rgb(255, 173, 47));

    block32.display(rgb(255, 47, 154));

    polygon.display();
    constraint.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    constraint.fly();
}