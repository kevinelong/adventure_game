class Hero extends Character {
    constructor(position, health = 100, attributes = {}) {
        super(position, "@", "hero", health, attributes);
        this.score = 0;
    }
}
