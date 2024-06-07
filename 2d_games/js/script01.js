const player = document.querySelector(".player");
const staff = document.querySelector(".staff");

let x = 0;
let y = 0;

// const hight = window.outerHeight;
// // console.log(staffHight, staffWidth);
// console.log(hight - staffHight);

document.addEventListener("keydown", (event) => {
    const playerCurrentTop = player.offsetTop;
    const playerCurrentLeft = player.offsetLeft;
    // const staffCurrentTop = staff.offsetTop;
    // const staffCurrentLeft = staff.offsetLeft;
    // const staffHight = staff.clientHeight;
    // const staffWidth = staff.clientWidth;
    // console.log(staffCurrentTop, staffCurrentLeft);
    // //left
    // console.log(staffCurrentLeft);
    // //top
    // console.log(staffCurrentTop);
    // //bottom
    // console.log(staffCurrentTop + staffHight);
    // //right
    // console.log(staffCurrentLeft + staffWidth);

    //player
    let distance = 64;
    switch (event.code) {
        case "ArrowLeft":
            if (playerCurrentLeft - distance >= 0) {
                x -= distance;
                break;
            } else {
                break;
            }

        case "ArrowUp":
            if (playerCurrentTop - distance >= 0) {
                y -= distance;
                break;
            } else {
                break;
            }

        case "ArrowRight":
            if (playerCurrentLeft + distance < 1024) {
                x += distance;
                break;
            } else {
                break;
            }

        case "ArrowDown":
            if (playerCurrentTop + distance < 768) {
                y += distance;
                break;
            } else {
                break;
            }
    }
    player.style.left = x + "px";
    player.style.top = y + "px";
});
