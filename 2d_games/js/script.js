const player = document.querySelector(".player");
const staff = document.querySelector(".staff");

let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    const currentTop = player.offsetTop;
    const currentLeft = player.offsetLeft;
    let distance = 64;

    switch (event.code) {
        case "ArrowLeft":
            if (currentLeft - distance >= 0) {
                x -= distance;
                break;
            } else {
                break;
            }

        case "ArrowUp":
            if (currentTop - distance >= 0) {
                y -= distance;
                break;
            } else {
                break;
            }

        case "ArrowRight":
            if (currentLeft + distance < 1024) {
                x += distance;
                break;
            } else {
                break;
            }

        case "ArrowDown":
            if (currentTop + distance < 768) {
                y += distance;
                break;
            } else {
                break;
            }
    }
    player.style.left = x + "px";
    player.style.top = y + "px";
});

// function moveSet(event) {
//     switch (event.code) {
//         case "ArrowLeft":
//             x -= distance;
//             break;
//         case "ArrowUp":
//             y -= distance;
//             break;
//         case "ArrowRight":
//             x += distance;
//             break;
//         case "ArrowDown":
//             y += distance;
//             break;
//     }
// }
