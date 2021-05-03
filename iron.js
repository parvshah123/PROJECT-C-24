class Iron{
    constructor(x, y) {
      var options = {
          'restitution': 0.8,
          'friction': 3,
          'density': 30
      }
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
	  fill("blue");
      rect(0,0,this.width,this.height);
      pop();
    }
  }
  