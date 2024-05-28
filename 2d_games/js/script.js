const player = document.querySelector(".player");

let y = 0;
let x = 0;

console.log(player.getBoundingClientRect());

document.addEventListener("keydown", (event) => {
    const distance = 64;
    // if(){}
    player.style.top = y + "px";
    player.style.left = x + "px";
});

function moveSet(event) {
    switch (event.code) {
        case "ArrowLeft":
            x -= distance;
            break;
        case "ArrowUp":
            y -= distance;
            break;
        case "ArrowRight":
            x += distance;
            break;
        case "ArrowDown":
            y += distance;
            break;
    }
}
