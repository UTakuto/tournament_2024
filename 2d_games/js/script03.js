const player = document.querySelector(".player");
const staff = document.querySelector(".staff");
const filed = document.querySelector(".filed");
const modalWrap = document.querySelector(".modalWrap");

//staff width height
const staffW = staff.offsetWidth;
const staffH = staff.offsetHeight;
//staff top left
const staffTop = staff.offsetTop;
const staffLeft = staff.offsetLeft;

//staff 位置計算
const x1 = staffLeft;
const x2 = staffLeft + staffW;
const y1 = staffTop;
const y2 = staffTop + staffH;
// console.log(x1, x2, y1, y2);

//filed
const filedH = filed.offsetHeight;
const filedW = filed.offsetWidth;
// console.log(filedH, filedW);

//初期値
let x = 0;
let y = 0;

function filedModal() {
    modalWrap.style.display = "block";
}

const modalClose = document.querySelector(".modalClose");
modalClose.addEventListener("click", () => {
    modalWrap.style.display = "none";
});

document.addEventListener("keydown", (event) => {
    //player top left
    const playerTop = player.offsetTop;
    const playerLeft = player.offsetLeft;

    //移動値
    let = distance = 64;

    switch (event.code) {
        case "ArrowLeft":
            if (
                playerLeft - distance >= 0 &&
                (playerTop < y1 ||
                    playerTop > y2 ||
                    playerLeft < x1 ||
                    playerLeft - distance > x2)
            ) {
                x -= distance;
                break;
            } else {
                filedModal();
                break;
            }

        case "ArrowUp":
            if (
                playerTop - distance >= 0 &&
                (playerLeft < x1 ||
                    playerLeft > x2 ||
                    playerTop < y1 ||
                    playerTop - distance > y2)
            ) {
                y -= distance;
                break;
            } else {
                filedModal();
                break;
            }

        case "ArrowRight":
            if (
                playerLeft + distance < filedW &&
                (playerTop < y1 ||
                    playerTop > y2 ||
                    playerLeft + distance < x1 ||
                    playerLeft + distance > x2)
            ) {
                x += distance;
                break;
            } else {
                filedModal();
                break;
            }

        case "ArrowDown":
            if (
                playerTop + distance < filedH &&
                (playerLeft < x1 ||
                    playerLeft > x2 ||
                    playerTop + distance < y1 ||
                    playerTop > y2)
            ) {
                y += distance;
                break;
            } else {
                filedModal();
                break;
            }
    }

    player.style.left = x + "px";
    player.style.top = y + "px";
});

const modalText = document.querySelector(".modalText");

const APIEndpoint =
    "https://click.ecc.ac.jp/ecc/sakakura/2023_jakunen/api/staff/";
fetch(APIEndpoint)
    .then((response) => {
        return response.json();
    })
    .then((promiseData) => {
        const newPromiseData = promiseData
            .filter((promise) => {
                return promise.event_type == "会話";
            })
            .sort((a, b) => {
                return a.id < b.id ? -1 : 1;
            })
            .filter((pro) => {
                return pro.staff_id == 1;
            });
        modalText.textContent = newPromiseData[0].text;
        console.log(newPromiseData);
    });
