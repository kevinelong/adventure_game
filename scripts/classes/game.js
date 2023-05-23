class Direction{
    static UP = 'up'
    static RIGHT = 'right'
    static DOWN = 'down'
    static LEFT = 'left'
}

class Game {
    constructor() {
	this.loves = 3;
        this.width = 30;
        this.height = 20;

        this.hero = new Hero(new Position(8,8));

        this.entities = [
            this.hero,
            new Zombie(new Position(12,12)),
            new Treasure(new Position(18,18), 300)
        ];
	this.room();
    }

    room(){
	     for (let r = 0; r < this.height; r++) {
		 for (let c = 0; c < this.width; c++) {
		     if (r === 0 || r === (this.height - 1) || c === 0 || c === this.width - 1) {
			 this.entities.push(new Wall(new Position(c, r)));
		     } else {
			 this.entities.push(new Floor(new Position(c, r)));
		     }
		 }
	     }
    }

    look(position) {
         let result = null
         this.entities.forEach(s => {
             if (s.position.x === position.x && s.position.y === position.y) {
                 if (null == result) {
                     result = s;
                 }
             }
         })
         return result;
     }

    remove(what) {
 	this.entities.forEach((s, i) => {
             if (s === what) {
		s.removed = true;
                 //this.entities.splice(i, 1); //DELETE 1 at the current index i
             }
         })
     }

    move(direction){
	let destination = new Position(this.hero.position.x, this.hero.position.y);

    	if(Direction.UP == direction){
            destination.y -= 1;
        }else if(Direction.RIGHT == direction){
            destination.x += 1;
        }else if(Direction.DOWN == direction){
            destination.y += 1;
        }else if(Direction.LEFT == direction){
            destination.x -= 1;
        }
	
	let what = this.look(destination);

	if(null=== what || what.name === "floor" || what.removed){
		this.hero.position = destination;
         } else if ("treasure" === what.name) {
             this.hero.score += what.coins;
             this.remove(what);
         } else if ("zombie" === what.name) {
             //FIGHT!
             let zombie_roll = Math.round(Math.random() * 6)
             let hero_roll = Math.round(Math.random() * 6)
             if (hero_roll >= zombie_roll) {
                 this.hero.score += what.coins;
                 this.remove(what);
             } else {
                 this.lives -= 1;
             }
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
