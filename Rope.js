class Rope {
    constructor(body1,body2,xOffset,yOffset){
        var options={
            bodyA : body1,
            bodyB : body2
           
            
        }
        this.x=xOffset;
        this.y=yOffset;
        this.chain=Constraint.create(options);
World.add(world,this.chain);
    }
    display(){
        var posA=this.chain.bodyA.position;
        var posB=this.chain.bodyB.position;

        strokeWeight(4);
    line(posA.x,posA.y,posB.x+this.x,posB.y+this.y);
    }
};