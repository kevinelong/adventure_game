class Character extends Entity {
    constructor(position = undefined, symbol = "@", name = "dude", health = 100, attributes = {}) {
        super(name, position, symbol);
        this.health = health;
        this.attributes = attributes;
    }
}
