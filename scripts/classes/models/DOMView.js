class DOMView {
  constructor(game) {
    this.game = game;
    document.body.innerHTML = world(score() + stats() + arrowPad() + map());

    "map score stats up down left right".split(" ").forEach((cls) => {
      window[cls] = document.querySelector(`.${cls}`);
    });
    get("up").addEventListener("click", this.arrowClick);
    get("down").addEventListener("click", this.arrowClick);
    get("left").addEventListener("click", this.arrowClick);
    get("right").addEventListener("click", this.arrowClick);

    document.addEventListener("keydown", (event) => {
      console.log(event.keyCode);
      let CODES = {
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        65: "left", //a
        87: "up", //w
        83: "down", //s
        68: "right", //d
      };
      this.game.move(CODES[event.keyCode]);
      this.render();
    });
  }
  
  render() {
    //DRAW
    //window.map.innerHTML = ""; //clear the map
    this.game.entities.forEach((sprite, i) => {
      let div;
      if (undefined === sprite.element) {
        div = document.createElement("img");
        div.src = "images/" + sprite.name + ".png";
        //div.setAttribute("style", 'width:1rem;height:1rem;object-fit:contain;');
        div.style.zIndex = (-i).toString();
        
        sprite.element = div;
        window.map.appendChild(div); //append to map
      } else {
        div = sprite.element;
      }
      if (sprite.removed) {
        div.classList.add("removed");
      }
      div.style.left = sprite.position.x + "rem";
      div.style.top = sprite.position.y + "rem";
    });
    window.score.innerHTML = this.game.hero.score;

    let output = "";
    for (let life = 0; life < this.game.lives; life++) {
      output += "@ ";
    }
    window.stats.innerHTML = output;
  }
}
