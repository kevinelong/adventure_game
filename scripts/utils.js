const get = (id) => document.getElementById(id);

const attrs = (a = {}) =>
  Object.keys(a)
    .map((k) => `${k}="${a[k]}"`)
    .join(" ");

const tag = (t = "div", c = "", a = {}) => `<${t} ${attrs(a)}>${c}</${t}>`;
const stag = (t = "img", a = {}) => `<${t} ${attrs(a)}/>`;
const div = (cls, c) => tag("div", c, { class: cls });
const img = (attributes = {}) => stag("img", attributes);

const str2aa = (s) =>
    s.split("\n")
    .map((r) => r.split(""))
    .filter((a) => a.length > 0);

const aa2str = (aa) => aa.map((r) => r.join(" ")).join("\n");

const aa2objectList = (aa) => {
  let list = [];
  for (let y = 0; y < aa.length; y++) {
    for (let x = 0; x < aa[y].length; x++) {
      list.push({ symbol: aa[y][x], position: { x: x, y: y } });
    }
  }
  return list;
};

const objectList2aa = (list) => {
    let maxRow = -1;
    let maxCol = -1;
    let output = [];
    list.forEach(item=>{
        while(item.position.y > maxRow){
            output.push([]);
            maxRow += 1;
        }
        while(item.position.x > maxCol){
            output[maxRow].push([]);
            maxCol += 1;
        }
        output[item.position.y][item.position.x] = item.symbol;
    });
    return output;
}
//Tests

console.log(div("test", "testing..."));
console.log(img({ src: "#" }));

let aa = str2aa(`
####
#..#
####
`);
let s = aa2str(aa);
console.log(aa);
console.log(s);
let ol =  aa2objectList(aa);
console.log(ol);
let aa2 = objectList2aa(ol);
console.log(aa2str(aa2))