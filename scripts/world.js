
const get = id=>document.getElementById(id);

const attrs = (a = {}) => Object.keys(a).map(k=>`${k}=${a[k]}`).join(" ");
const tag = (t = div, c = "", a = {}) => `<${t} ${attrs(a)}>${c}</${t}>`;
const div = (cls, c) => tag("div", c, {"class":cls});

document.addEventListener("DOMContentLoaded", () => {
    const world = (c) => div("world", c);
    const score = () => div("score");
    const stats = () => div("stats");
    const map = () => div("map");

    document.body.innerHTML = world(score() + stats() + arrowPad() + map());
});//loaded
