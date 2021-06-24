class Rope{

   constructor(body1,body2,offetX,offsetY){
       this.offsetX = offsetX;
       this.offset = offsetY;
       var opyipns = {
           bodyA:body1,
           body:body2,
           pointB: {x:this.offsetX , y:this.offsetY}
       }
       
    this.rope=Matter.Constraint.create(options);
    World.add(world,this.rope);
    }
    
    display(){
      var point=this.rope.bodyA.position;
      var point=this.rope.bodyB.position;
      
      strokeWeight(2);

      var Anchor1X=point1.x;
      var Anchor1y=point1.y;

      var Anchor2X=point2.x + this.offsetX;
      var Anchor2Y=point2.y + this.offsetY;

      line(Anchor1X,Anchor1y,Anchor2X,Anchor2Y);

    }

}

