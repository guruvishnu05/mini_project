function applyGradient() {
    const color1 = document.getElementById("color1").value;
    const color2 = document.getElementById("color2").value;
    const direction = document.getElementById("direction").value;
    document.getElementById("gradient-preview").style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomGradient() {
    document.getElementById("color1").value = randomColor();
    document.getElementById("color2").value = randomColor();
    applyGradient();
}
