document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let view = new DOMView(game);

  function arrowClick(e) {
    game.move(e.target.id);
    view.render();
  }

  get("up").addEventListener("click", arrowClick)
  get("down").addEventListener("click", arrowClick)
  get("left").addEventListener("click", arrowClick)
  get("right").addEventListener("click", arrowClick)
  

  view.render();
}); //end DCL
