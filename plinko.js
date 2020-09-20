class Plinko{
    constructor(x,y){
       var options = {
           isStatic:true
       }
       this.body = Bodies.circle(x,y,10,options);
       this.radius = 10;
       World.add(world,this.body);
    }

    display(){

      push();
      ellipseMode(RADIUS);
      fill("white");
      stroke("red");
      ellipse(this.body.position.x,this.body.position.y,10);
      pop();
      
    }
}