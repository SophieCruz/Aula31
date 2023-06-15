class CannonBall {
  constructor(x, y) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    this.tower = loadImage("./assets/gray.jpg");
    this.trajectory = [];
    World.add(world, this.body);
  }

  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

//     Adicione a condição para verificar se a velocidade da bala é maior que 0 e a posição é
// maior que 300
    if (this.body.velocity.x > 0 && this.body.position.x > 300 ) {
    // adicione a matriz de posição (position) e coloque a posição dentro dela.
     var position=[this.body.position.x,this.body.position.y];
      // Crie uma matriz vazia chamada trajectory.Use a operação push para adicionar posições à matriz trajectory.
     this.trajectory.push(position);
    }

    // Adicione a imagem às posições armazenadas na matriz trajectory.
    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image,this.trajectory[i][0], this.trajectory[i][1],5,5);
    }
  }
}
