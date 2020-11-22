class Tree {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
        this.image = loadImage("tree.png");

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        this.image(this.image, this.position.x, this.position.y);
        rect(pos.x, pos.y, this.width, this.height);
    }
}