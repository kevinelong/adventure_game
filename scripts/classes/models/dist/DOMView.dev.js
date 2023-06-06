"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DOMView =
/*#__PURE__*/
function () {
  function DOMView(game) {
    var _this = this;

    _classCallCheck(this, DOMView);

    this.game = game;
    document.body.innerHTML = world(score() + stats() + arrowPad() + map());
    "map score stats up down left right".split(" ").forEach(function (cls) {
      window[cls] = document.querySelector(".".concat(cls));
    });
    document.addEventListener("keydown", function (event) {
      console.log(event.keyCode);
      var CODES = {
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        65: "left",
        //a
        87: "up",
        //w
        83: "down",
        //s
        68: "right" //d

      };

      _this.game.move(CODES[event.keyCode]);

      _this.render();
    });
  }

  _createClass(DOMView, [{
    key: "render",
    value: function render() {
      //DRAW
      //window.map.innerHTML = ""; //clear the map
      this.game.entities.forEach(function (sprite, i) {
        var div;

        if (undefined === sprite.element) {
          div = document.createElement("img");
          div.src = "images/" + sprite.name + ".png"; //div.setAttribute("style", 'width:1rem;height:1rem;object-fit:contain;');

          if (sprite.symbol === ".") {
            div.style.zIndex = 100;
          } else {
            div.style.zIndex = 200;
          }

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
      var output = "";

      for (var life = 0; life < this.game.lives; life++) {
        output += "@ ";
      }

      window.stats.innerHTML = output;
    }
  }]);

  return DOMView;
}();
//# sourceMappingURL=DOMView.dev.js.map
