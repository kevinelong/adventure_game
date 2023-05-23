class Entity {
    constructor(name = "entity", position = undefined, symbol = "#") {
        this.name = name;
        this.position = position;
        this.symbol = symbol;
    }
    toString(){
        return `${this.symbol}(${this.name})`
    }
}

let e = new Entity("hep cat", undefined, "%");
console.log(e.toString())

class Wall extends Entity {
    constructor(position) {
        super("wall", position = position, "#");
    }
}

class Floor extends Entity {
    constructor(position) {
        super("floor", position, ".");
    }
}

class Character extends Entity{
    constructor(position = undefined, symbol="@", name= "dude", health= 100, attributes= {}) {
        super(name, position, symbol);
        this.health = health;
        this.attributes = attributes;
    }
}

class Hero extends Character {
    constructor(position, health=100, attributes={}) {
        super(position, "@", "hero", health, attributes);
    }
}

class Zombie extends Character {
    constructor(position) {
        super(position, "Z", "zombie", 25, {});
    }
}

class Treasure extends Entity {
    constructor(position, coins= 100) {
        super("treasure", position, "$");
        this.coins = coins;
    }
}
