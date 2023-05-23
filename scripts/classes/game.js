class Direction{
    static UP = 1
    static RIGHT = 2
    static DOWN = 3
    static LEFT = 4
}

class Game {
    constructor() {

        this.width = 40;
        this.height = 25;

        this.hero = new Hero(new Position(8,8));

        this.entities = [
            this.hero,
            new Zombie(new Position(12,12)),
            new Treasure(new Position(18,18), 300)
        ];
    }

    move(direction){
        if(Direction.RIGHT == direction){
            this.hero.position.x += 1;
        }
    }

    status(){
        return {
            hero: this.hero,
            entities: this.entities,
            width: this.width,
            height: this.height
        }
    }
}
