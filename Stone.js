class Stone {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
        
        
        
        
        
        
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     this.image = loadImage("stone.png");


     //this.body.scale = 0.00001;
     
      World.add(world, this.body);
      
    }
    display(){
      imageMode(CENTER);
      //imageMode(RADIUS);
      image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);

      
      
    }
  }