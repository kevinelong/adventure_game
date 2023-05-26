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


