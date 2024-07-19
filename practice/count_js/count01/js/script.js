const btn = document.querySelector("#toggle");
let count = 0;

btn.addEventListener("click", () => {
    count += 1;
    console.log(count);
    if (count % 2 == 1) {
        document.body.style.backgroundColor = "#008080";
    } else {
        document.body.style.backgroundColor = "#00bfff";
    }
});
