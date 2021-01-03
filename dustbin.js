class Dustbin {
    constructor(x,y,width,height)
    {
        var options={
        isStatic : true,
        depth : 0.5,
        density : 1
       
        }
        //this.dustbin = loadImage("sprites/PRO-25_3.PNG")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        //image(this.dustbin,760,510)
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill(255)
        rect(0,0,this.width,this.height)
        pop();
    }
}