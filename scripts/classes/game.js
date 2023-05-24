class Direction {
  static UP = "up";
  static RIGHT = "right";
  static DOWN = "down";
  static LEFT = "left";
}

class Game {
  constructor() {
    this.lives = 3;
    this.width = 12;
    this.height = 8;

    this.hero = new Hero(new Position(this.width - 2, this.height - 2));

    this.entities = [
      this.hero,
      new Zombie(new Position(this.width - 2, 2)),
      new Treasure(new Position(this.width - 2, 1), 300),
    ];
    this.map = new Map(this);
    debugger;
    this.map.room();
  }

  look(position) {
    let result = null;
    this.entities.forEach((s) => {
      if (s.position.x === position.x && s.position.y === position.y) {
        if (null == result) {
          result = s;
        }
      }
    });
    return result;
  }

  remove(what) {
    this.entities.forEach((s, i) => {
      if (s === what) {
        s.removed = true;
        //this.entities.splice(i, 1); //DELETE 1 at the current index i
      }
    });
  }

  move(direction) {
    let destination = new Position(this.hero.position.x, this.hero.position.y);

    if (Direction.UP == direction) {
      destination.y -= 1;
    } else if (Direction.RIGHT == direction) {
      destination.x += 1;
    } else if (Direction.DOWN == direction) {
      destination.y += 1;
    } else if (Direction.LEFT == direction) {
      destination.x -= 1;
    }

    let what = this.look(destination);

    if (null === what || what.name === "floor" || what.removed) {
      this.hero.position = destination;
    } else if ("treasure" === what.name) {
      this.hero.score += what.coins;
      this.remove(what);
    } else if ("zombie" === what.name) {
      //FIGHT!
      let zombie_roll = Math.round(Math.random() * 6);
      let hero_roll = Math.round(Math.random() * 6);
      if (hero_roll >= zombie_roll) {
        this.hero.score += what.coins;
        this.remove(what);
      } else {
        this.lives -= 1;
      }
    }
  }

  status() {
    return {
      hero: this.hero,
      entities: this.entities,
      width: this.width,
      height: this.height,
    };
  }
}
