document.addEventListener("DOMContentLoaded", () => {
     "map score stats up down left right".split(" ").forEach(cls => {
         window[cls] = document.querySelector(`.${cls}`);
     });

    let lives = 3;

    window.sprites = [
        {
            name: "hero",
            attributes: [],
            position: {
                x: 10,
                y: 10
            },
            symbol: "@",
            score: 0
        },
        {
            name: "zombie",
            attributes: [],
            position: {
                x: 15,
                y: 15
            },
            symbol: "Z",
            points: 200
        },
        {
            name: "treasure",
            attributes: [],
            position: {
                x: 18,
                y: 18
            },
            symbol: "$",
            points: 100
        }
    ];

    function wall(x, y) {
        return {name: "wall", position: {x: x, y: y}, symbol: "#"};
    }

    function floor(x, y) {
        return {name: "floor", position: {x: x, y: y}, symbol: "."};
    }

    const WIDTH = 30
    const HEIGHT = 20

    for (let r = 0; r < HEIGHT; r++) {
        for (let c = 0; c < WIDTH; c++) {
            if (r === 0 || r === (HEIGHT - 1) || c === 0 || c === WIDTH - 1) {
                sprites.push(wall(c, r));
            } else {
                sprites.push(floor(c, r));
            }
        }
    }

    function look(position) {
        let result = null
        sprites.forEach(s => {
            if (s.position.x === position.x && s.position.y === position.y) {
                if (null == result) {
                    result = s;
                }
            }
        })
        return result;
    }

    function remove(what) {
        sprites.forEach((s, i) => {
            if (s === what) {
                sprites.splice(i, 1); //DELETE 1 at the current index i
            }
        })
    }

    const MODE = "images"

    function render() { //DRAW
        map.innerHTML = ""; //clear the map
        sprites.forEach((sprite, i) => {
            let div;
            if ("images" === MODE) {
                div = document.createElement("img");
                div.src = "images/" + sprite.name + ".png";
                div.setAttribute("style", 'width:1rem;height:1rem;object-fit:contain;');
                div.style.zIndex = (-i).toString();
            } else {
                div = document.createElement("div");
                div.innerHTML = sprite.symbol;
            }
            div.style.position = 'absolute';
            div.style.left = sprite.position.x + "rem";
            div.style.top = sprite.position.y + "rem";
            map.appendChild(div); //append to map
        })
        score.innerHTML = sprites[0].score

        let output = ""
        for (let life = 0; life < lives; life++) {
            output += "@ "
        }
        stats.innerHTML = output

    }

    function arrowClick(e) {
        console.log(e.target.id)
        let id = e.target.id;

        const current = sprites[0].position;
        let destination = {x: current.x, y: current.y}

        if ("up" === id) {
            destination.y--;
        } else if ("down" === id) {
            destination.y++;
        } else if ("left" === id) {
            destination.x--;
        } else if ("right" === id) {
            destination.x++;
        }

        let what = look(destination)
        if (what === null || what.name === "floor") {
            //GOOD TO GO!
            sprites[0].position = destination; // x and y at once
        } else if ("treasure" === what.name) {
            sprites[0].score += what.points
            remove(what)
        } else if ("zombie" === what.name) {
            //FIGHT!
            let zombie_role = Math.round(Math.random() * 6)
            let hero_role = Math.round(Math.random() * 6)
            if (hero_role >= zombie_role) {
                sprites[0].score += what.points
                remove(what)
            } else {
                lives -= 1
            }
        }
        render();
    }

    get("up").addEventListener("click", arrowClick)
    get("down").addEventListener("click", arrowClick)
    get("left").addEventListener("click", arrowClick)
    get("right").addEventListener("click", arrowClick)

    render()


})//end DCL
