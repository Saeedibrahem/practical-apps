const numberContainer = document.querySelectorAll(".number-container h2");
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

numberContainer.forEach((ele) => {
    let number = +ele.textContent;
    let increasePercentage = parseInt((10 / 100) * number);
    ele.textContent = 0;

    let counter = setInterval(function () {
        ele.textContent = +ele.textContent + increasePercentage;
        if (+ele.textContent == number) {
            ele.textContent = number;
            let color = genrateColors();
            ele.parentElement.style.backgroundColor = color;
            clearInterval(counter);
        }
    }, 70);
});

function genrateColors() {
    let color = "";
    for (let i = 0; i <= 5; i++) {
        let randIndex = parseInt(Math.random() * hexCode.length);
        color += hexCode[randIndex];
    }
    return "#" + color;
}