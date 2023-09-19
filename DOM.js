const btn = document.querySelector("button");
const textp = document.body.querySelectorAll(".ptext")

function random(number) {
    return Math.floor(Math.random()*(number + 1));
}

btn.addEventListener("click", () => {
    const rndcolor = `rgb(${random(255)},${random(255)},${random(255)})`;
    textp.style.color = rndcolor;
});