let bt = document.querySelector(".btn");
let bd = document.querySelector('body');
bt.addEventListener("click", () => (
    bd.style.background = generateColor()
));
function generateColor() {
    let green = Math.floor(Math.random() * 255) + 1;
    let red = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}