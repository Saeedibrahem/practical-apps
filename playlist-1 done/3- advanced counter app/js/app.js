

const btns = document.querySelectorAll(".btn");
const colors = ["blue", "green", "yellow", "black", "red", "teal"];

btns.forEach(function (item) {
    item.addEventListener("click", changeStyle);
});


function changeStyle() {
    const rand = parseInt(Math.random() * 5);
    const card = this.closest(".card");
    card.style.backgroundColor = colors[rand];
    const para = card.querySelector("p");
    let content = parseInt(para.textContent);
    para.textContent = content + 1;
    para.style.color = "white";
}
