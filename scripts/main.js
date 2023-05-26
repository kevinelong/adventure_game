document.addEventListener("DOMContentLoaded", () => {
  let game = new Game();

  let view = new DOMView(game);

  function arrowClick(e) {
    game.move(e.target.id);
    view.render();
  }

  document.getElementById("up").addEventListener("click", arrowClick)
  document.getElementById("down").addEventListener("click", arrowClick)
  document.getElementById("left").addEventListener("click", arrowClick)
  document.getElementById("right").addEventListener("click", arrowClick)
  

  view.render();
}); //end DCL
