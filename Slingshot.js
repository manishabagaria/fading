class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }
    attach(body){
        this.sling.bodyA=body;
    }
    fly(){
        this.Slingshot.bodyA=null;
    }
    display(){
        if (this.Slingshot.bodyA){
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("maroon");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}
