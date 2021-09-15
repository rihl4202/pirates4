class Boat{
    constructor(x,y,w,h){
      var prop = {
       restitution:0.1
      }
      this.body = Bodies.rectangle(x,y,w,h,prop)
      this.w = w
      this.h = h
      World.add(world,this.body)
      this.img = loadImage("assets/boat.png")
    }
    display(){
      push()
      imageMode(CENTER)
      image(this.img,this.body.position.x,this.body.position.y,this.w,this.h)
      pop()
    }
    remove(index){
        World.remove(world,boats[index].body)
        delete boats[index]
    }
  }