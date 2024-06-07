const player = document.querySelector(".player");
const staff = document.querySelector(".staff");
const filed = document.querySelector(".filed");

let x = 0;
let y = 0;

function playerMove() {
    player.style.left = x + "px";
    player.style.top = y + "px";
}

// playerMove();

//filed
const filedHeight = filed.offsetHeight;
const filedWidth = filed.offsetWidth;

//staff
const staffCurrentTop = staff.offsetTop;
const staffCurrentLeft = staff.offsetLeft;
const staffWidth = staff.offsetWidth;
const staffHeight = staff.offsetHeight;
// console.log(staffWidth, staffHeight);

const x1 = staffCurrentLeft;
const x2 = staffCurrentLeft + staffWidth;
const y1 = staffCurrentTop;
const y2 = staffCurrentTop + staffHeight;
console.log(x1, x2);
// console.dir(staff);

document.addEventListener("keydown", (event) => {
    //player
    const playerCurrentTop = player.offsetTop;
    const playerCurrentLeft = player.offsetLeft;
    console.log(playerCurrentTop);
    let distance = 64;

    switch (event.code) {
        case "ArrowLeft":
            if (
                playerCurrentLeft - distance >= 0 &&
                (playerCurrentTop < y1 ||
                    playerCurrentTop > y2 ||
                    playerCurrentLeft - distance > x2 ||
                    playerCurrentTop < y1 ||
                    playerCurrentTop > y2 ||
                    playerCurrentLeft - distance < x1)
            ) {
                x -= distance;
                break;
            } else {
                break;
            }

        case "ArrowUp":
            if (
                playerCurrentTop - distance >= 0 &&
                (playerCurrentLeft < x1 ||
                    playerCurrentLeft > x2 ||
                    playerCurrentTop > y2 ||
                    playerCurrentLeft < x1 ||
                    playerCurrentLeft > x2 ||
                    playerCurrentTop < y1)
            ) {
                y -= distance;
                break;
            } else {
                break;
            }

        case "ArrowRight":
            if (
                playerCurrentLeft + distance < filedWidth &&
                (playerCurrentTop < y1 ||
                    playerCurrentTop > y2 ||
                    playerCurrentLeft + distance < x1 ||
                    playerCurrentTop < y1 ||
                    playerCurrentTop > y2 ||
                    playerCurrentLeft + distance > x2)
                // (playerCurrentTop < y1 ||
                //     playerCurrentTop > y2 ||
                //     playerCurrentLeft + distance < x1
                // ||
                // playerCurrentTop < y1 ||
                // playerCurrentTop > y2 ||
                // playerCurrentLeft - distance > x2)
            ) {
                x += distance;
                break;
            } else {
                break;
            }

        case "ArrowDown":
            if (
                playerCurrentTop + distance < filedHeight &&
                (playerCurrentLeft < x1 ||
                    playerCurrentLeft > x2 ||
                    playerCurrentTop + distance < y1 ||
                    playerCurrentLeft < x1 ||
                    playerCurrentLeft > x2 ||
                    playerCurrentTop + distance > y2)
            ) {
                y += distance;
                break;
            } else {
                break;
            }
    }
    playerMove();
});

// ||
//                     playerCurrentTop - distance >= x2
