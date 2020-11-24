class Paper {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0.5,
          density:1.2,
          friction:0.5
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x,y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var paperpos =this.body.position;
      push();
      translate(paperpos.x,paperpos.y);
      ellipse(RADIUS);
      //ellipse(0, 0, this.r, this.r);
      imageMode(RADIUS);
      image(this.image,0,0,85,85);
      pop();
    }
  };

  