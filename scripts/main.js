let g = new Game();

 document.addEventListener("DOMContentLoaded", () => {

     document.body.innerHTML = world(score() + stats() + arrowPad() + map());

     "map score stats up down left right".split(" ").forEach(cls => {
          window[cls] = document.querySelector(`.${cls}`);
      });


	MODE = "images";

     function render() { //DRAW
         //window.map.innerHTML = ""; //clear the map
         g.entities.forEach((sprite, i) => {
             let div;
             if(undefined === sprite.element){
		     if ("images" === MODE) {
			 div = document.createElement("img");
			 div.src = "images/" + sprite.name + ".png";
			 //div.setAttribute("style", 'width:1rem;height:1rem;object-fit:contain;');
			 div.style.zIndex = (-i).toString();
		     } else {
			 div = document.createElement("div");
			 div.innerHTML = sprite.symbol;
		     }
                     sprite.element = div;
                     window.map.appendChild(div); //append to map
             }else{
		div=sprite.element;
	     }
             if(sprite.removed){
		div.classList.add("removed");
             }
             div.style.left = sprite.position.x + "rem";
             div.style.top = sprite.position.y + "rem";
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
		console.log(event.keyCode)
		let CODES = {
			37: "left",
			38: "up",
			39: "right",
			40: "down",
			65: "left", //a
			87: "up",   //w
			83: "down", //s
			68: "right",//d
		};
		g.move(CODES[event.keyCode]);
		render();
	});


     render()


 });//end DCL
