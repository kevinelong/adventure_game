class Map {
  constructor(game) {
    this.game = game;
  }

  isWall(r,c){
    return r === 0 || r === this.game.height - 1 || c === 0 || c === this.game.width - 1;
  }

  room() {
    for (let r = 0; r < this.game.height; r++) {
      for (let c = 0; c < this.game.width; c++) {
        let p = new Position(c, r);
        this.game.entities.push( this.isWall(r,c) ? new Wall(p) : new Floor(p));
      }
    }
  }
}
