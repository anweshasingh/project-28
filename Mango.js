class Mango {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution: 0.8,
            fraction: 1,
        }
        this.body = Bodies.rectangle(x,y,10,10, options);
        this.image = loadImage("mango.js");
        World.add(world, this.body);
    }

    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        pop();
    }
}