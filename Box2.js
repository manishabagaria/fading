  class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.4,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity=255;
      World.add(world, this.body);
    }
    display(){
     console.log(this.body.speed);
      if (this.body.speed<7){
       var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop(); 
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        pop();
        }
  
  
    }
  };