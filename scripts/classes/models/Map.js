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
  roomFromText(text){
    let aa = str2aa(text);
    let ol =  aa2objectList(aa);
    ol.forEach(item=>{
      let p = new Position(item.position.x, item.position.y);
      if("." === item.symbol){
        this.game.entities.push(new Floor(p));
      } else if("#" === item.symbol){
        this.game.entities.push(new Wall(p));
      } else if("@" === item.symbol){
        this.game.hero = new Hero(p);
        this.game.entities.push(this.game.hero);
        this.game.entities.push(new Floor(p));
      } else if("Z" === item.symbol){
        this.game.entities.push(new Zombie(p));
        this.game.entities.push(new Floor(p));
      } else if("$" === item.symbol){
        this.game.entities.push(new Treasure(p, 300));
        this.game.entities.push(new Floor(p));
      }

    });
  }
}
