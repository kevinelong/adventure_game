class Treasure extends Entity {
    constructor(position, coins = 100) {
        super("treasure", position, "$");
        this.coins = coins;
    }
}
