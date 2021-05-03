class Rubber{
	constructor(x,y,r){
		var options = {
			'restitution' : 0.3,
			'friction' : 5,
			'density' : 1
		}
	    this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(800, 590, (120-20)/2, options)
		World.add(world, this.body);
	}
	display()
	{
			var rubberpos = this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			fill("green");
			ellipseMode(RADIUS);
			ellipse(0, 0, this.r, this.r)
			pop()
	}

}