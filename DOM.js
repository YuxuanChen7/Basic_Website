const btn = document.querySelector("button");
const textp = document.body.querySelector("#ptext")

function random(number) {
    return math.floor(math.random()*(number + 1));
}

btn.addEventListener("click", () => {
    const rndcolor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.color = rndcolor;
});