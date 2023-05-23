
const get = id => document.getElementById(id);

const attrs = (a = {}) => Object.keys(a).map(k=>`${k}=${a[k]}`).join(" ");
const tag = (t = div, c = "", a = {}) => `<${t} ${attrs(a)}>${c}</${t}>`;
const div = (cls, c) => tag("div", c, {"class":cls});
