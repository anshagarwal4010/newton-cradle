class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution : 1.0,
            friction : 0.3,
            density : 0.8
        }
    //Use Bodies.circle to create the ball body
    //radius = 50
    this.bodies=Bodies.circle(x,y,20,options)
    World.add(world, this.bodies)
    }
    display(){
        //display using ellipse()
        var pos=this.bodies.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,20,20)
    }
}

