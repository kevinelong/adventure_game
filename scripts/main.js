let g = new Game();

g.move(Direction.RIGHT)

let status = g.status()
console.log(status.hero.position.x)

let sprites = g.entities;

 document.addEventListener("DOMContentLoaded", () => {

     document.body.innerHTML = world(score() + stats() + arrowPad() + map());

     "map score stats up down left right".split(" ").forEach(cls => {
          window[cls] = document.querySelector(`.${cls}`);
      });


	MODE = "images";

     function render() { //DRAW
         window.map.innerHTML = ""; //clear the map
         sprites.forEach((sprite, i) => {
             let div;
             if ("images" === MODE) {
                 div = document.createElement("img");
                 div.src = "images/" + sprite.name + ".png";
                 div.setAttribute("style", 'width:1rem;height:1rem;object-fit:contain;');
                 div.style.zIndex = (-i).toString();
             } else {
                 div = document.createElement("div");
                 div.innerHTML = sprite.symbol;
             }
             div.style.position = 'absolute';
             div.style.left = sprite.position.x + "rem";
             div.style.top = sprite.position.y + "rem";
             window.map.appendChild(div); //append to map
         })
         window.score.innerHTML = g.hero.score;

         let output = "";
         for (let life = 0; life < g.lives; life++) {
             output += "@ ";
         }
         window.stats.innerHTML = output;

     }

     function arrowClick(e) {
         let id = e.target.id;
	 g.move(id)
         render();
     }

     get("up").addEventListener("click", arrowClick)
     get("down").addEventListener("click", arrowClick)
     get("left").addEventListener("click", arrowClick)
     get("right").addEventListener("click", arrowClick)

	document.addEventListener("keydown",(event) => {
		let CODES = {
			37: "left",
			38: "up",
			39: "right",
			40: "down"
		};
		g.move(CODES[event.keyCode]);
		render();
	});


     render()


 });//end DCL
