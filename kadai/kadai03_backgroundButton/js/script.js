const btn = document.getElementById("toggle");

let count = false;
// let count = 0;

btn.addEventListener("click", () => {
    // count = count + 1;
    console.log(count % 2);
    if (!count) {
        document.body.style.backgroundColor = "#008080";
        count = true;
    } else {
        document.body.style.backgroundColor = "#00bfff";
        count = false;
    }
    // if (count % 2 == 1) {
    //     document.body.style.backgroundColor = "#008080";
    //     count = true;
    // } else {
    //     document.body.style.backgroundColor = "#00bfff";
    //     count = false;
    // }
    // document.body.style.backgroundColor = "#008080";
});
