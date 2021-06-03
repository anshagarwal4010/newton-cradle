class Roof{
    constructor()
    {
        var options = {
           isStatic:true
            
        }
       this.bodies = Bodies.rectangle(400,100,300,10,options)
       World.add(world, this.bodies)
    }
    display(){
       //Use rect()
       var pos =this.bodies.position;
     
       rect(pos.x,pos.y,300,10)
    }
}