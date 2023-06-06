"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.lives = 3;
    this.width = 12;
    this.height = 8;
    this.entities = [];
    this.map = new Map(this);
    this.map.roomFromText("\n    ############\n    #....Z.....#\n    #.@..#..$..#\n    #....#######\n    ######\n    "); // this.map.room();
  }

  _createClass(Game, [{
    key: "look",
    value: function look(position) {
      var result = null;
      this.entities.forEach(function (s) {
        if (s.position.x === position.x && s.position.y === position.y) {
          if (null == result) {
            result = s;
          }
        }
      });
      return result;
    }
  }, {
    key: "remove",
    value: function remove(what) {
      this.entities.forEach(function (s, i) {
        if (s === what) {
          s.removed = true; //this.entities.splice(i, 1); //DELETE 1 at the current index i
        }
      });
    }
  }, {
    key: "move",
    value: function move(direction) {
      var destination = new Position(this.hero.position.x, this.hero.position.y);

      if (Direction.UP == direction) {
        destination.y -= 1;
      } else if (Direction.RIGHT == direction) {
        destination.x += 1;
      } else if (Direction.DOWN == direction) {
        destination.y += 1;
      } else if (Direction.LEFT == direction) {
        destination.x -= 1;
      }

      var what = this.look(destination);

      if (null === what || what.name === "floor" || what.removed) {
        this.hero.position = destination;
      } else if ("treasure" === what.name) {
        this.hero.score += what.coins;
        this.remove(what);
      } else if ("zombie" === what.name) {
        //FIGHT!
        var zombie_roll = Math.round(Math.random() * 6);
        var hero_roll = Math.round(Math.random() * 6);

        if (hero_roll >= zombie_roll) {
          this.hero.score += what.coins;
          this.remove(what);
        } else {
          this.lives -= 1;
        }
      }
    }
  }, {
    key: "status",
    value: function status() {
      return {
        hero: this.hero,
        entities: this.entities,
        width: this.width,
        height: this.height
      };
    }
  }]);

  return Game;
}();
//# sourceMappingURL=Game.dev.js.map
