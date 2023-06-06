"use strict";

var get = function get(id) {
  return document.getElementById(id);
};

var attrs = function attrs() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(a).map(function (k) {
    return "".concat(k, "=\"").concat(a[k], "\"");
  }).join(" ");
};

var tag = function tag() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "div";
  var c = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return "<".concat(t, " ").concat(attrs(a), ">").concat(c, "</").concat(t, ">");
};

var stag = function stag() {
  var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "img";
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return "<".concat(t, " ").concat(attrs(a), "/>");
};

var div = function div(cls, c) {
  return tag("div", c, {
    "class": cls
  });
};

var img = function img() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return stag("img", attributes);
};

var str2aa = function str2aa(s) {
  return s.split("\n").map(function (r) {
    return r.split("");
  }).filter(function (a) {
    return a.length > 0;
  });
};

var aa2str = function aa2str(aa) {
  return aa.map(function (r) {
    return r.join(" ");
  }).join("\n");
};

var aa2objectList = function aa2objectList(aa) {
  var list = [];

  for (var y = 0; y < aa.length; y++) {
    for (var x = 0; x < aa[y].length; x++) {
      list.push({
        symbol: aa[y][x],
        position: {
          x: x,
          y: y
        }
      });
    }
  }

  return list;
};

var objectList2aa = function objectList2aa(list) {
  var maxRow = -1;
  var maxCol = -1;
  var output = [];
  list.forEach(function (item) {
    while (item.position.y > maxRow) {
      output.push([]);
      maxRow += 1;
    }

    while (item.position.x > maxCol) {
      output[maxRow].push([]);
      maxCol += 1;
    }

    output[item.position.y][item.position.x] = item.symbol;
  });
  return output;
}; //Tests


console.log(div("test", "testing..."));
console.log(img({
  src: "#"
}));
var aa = str2aa("\n####\n#..#\n####\n");
var s = aa2str(aa);
console.log(aa);
console.log(s);
var ol = aa2objectList(aa);
console.log(ol);
var aa2 = objectList2aa(ol);
console.log(aa2str(aa2));
//# sourceMappingURL=utils.dev.js.map
