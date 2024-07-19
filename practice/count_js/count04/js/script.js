const btn = document.querySelector("#toggle");

let count = 0;

btn.addEventListener("click", () => {
    count += 1;
    if (count <= 10) {
        if (count % 2 == 1) {
            document.body.style.backgroundColor = "#008080";
        } else {
            document.body.style.backgroundColor = "#00bfff";
        }
    } else {
        if (count % 2 == 1) {
            document.body.style.backgroundColor = "#808000";
        } else {
            document.body.style.backgroundColor = "#fffb00";
        }
    }
});
