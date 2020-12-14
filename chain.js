class Chain
{
    constructor(bodyA, point)
    {
        var options =
        {
            bodyA: bodyA,
            pointB: point,
            length: 10,
            stiffness: 0.05
        }
        this.chain = Matter.Constraint.create(options);
        this.pointB = point;
        World.add(world, this.chain);
    }
    fly()
    {
        this.chain.bodyA = null;
    }
    display()
    {   
        if(this.chain.bodyA)
        {
            strokeWeight(3);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, 
            this.pointB.x, this.pointB.y);
        }
    }
}