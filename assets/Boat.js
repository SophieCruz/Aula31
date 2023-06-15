class Boat {
  constructor(x, y, width, height, boatPos) {
    // Altere o valor da opção (option) dentro da classe Boat.
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

//     Adicione a variável this.boatPosition para obter as posições aleatórias do navio a partir
// do código.
    this.boatPosition = boatPos;
    this.image = loadImage("assets/boat.png");
    World.add(world, this.body);
  }

//to remove ships from the world
  remove(index) {
    Matter.World.remove(world, boats[index].body);
    boats.splice(index, 1);

  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
  
    // Na função display(), use push() e pop() 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    noTint();
    pop();
  }
}
