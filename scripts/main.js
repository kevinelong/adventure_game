document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let view = new DOMView(game);

  function arrowClick(e) {
    game.move(e.target.id);
    view.render();
  }

  "up down left right".split(" ").forEach(d => get(d).addEventListener("click", arrowClick));
  

  view.render();
}); //end DCL
