"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map =
/*#__PURE__*/
function () {
  function Map(game) {
    _classCallCheck(this, Map);

    this.game = game;
  }

  _createClass(Map, [{
    key: "isWall",
    value: function isWall(r, c) {
      return r === 0 || r === this.game.height - 1 || c === 0 || c === this.game.width - 1;
    }
  }, {
    key: "room",
    value: function room() {
      for (var r = 0; r < this.game.height; r++) {
        for (var c = 0; c < this.game.width; c++) {
          var p = new Position(c, r);
          this.game.entities.push(this.isWall(r, c) ? new Wall(p) : new Floor(p));
        }
      }
    }
  }, {
    key: "roomFromText",
    value: function roomFromText(text) {
      var _this = this;

      var aa = str2aa(text);
      var ol = aa2objectList(aa);
      ol.forEach(function (item) {
        var p = new Position(item.position.x, item.position.y);

        if ("." === item.symbol) {
          _this.game.entities.push(new Floor(p));
        } else if ("#" === item.symbol) {
          _this.game.entities.push(new Wall(p));
        } else if ("@" === item.symbol) {
          _this.game.hero = new Hero(p);

          _this.game.entities.push(_this.game.hero);

          _this.game.entities.push(new Floor(p));
        } else if ("Z" === item.symbol) {
          _this.game.entities.push(new Zombie(p));

          _this.game.entities.push(new Floor(p));
        } else if ("$" === item.symbol) {
          _this.game.entities.push(new Treasure(p, 300));

          _this.game.entities.push(new Floor(p));
        }
      });
    }
  }]);

  return Map;
}();
//# sourceMappingURL=Map.dev.js.map
