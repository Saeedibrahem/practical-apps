const colorItems = document.querySelectorAll(".color");
const inputColor = document.querySelector('input[name="color"]')
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];



colorItems.forEach(function (item) {
    let sqarecolor = genrateColors();
    item.style.backgroundColor = sqarecolor;
    item.addEventListener('click', function () {
        changeBodyBg(sqarecolor);
        removeSelectedColor();
        item.classList.add('selected-color');
        addColorToLocalStorage(sqarecolor);
    })
});



function removeSelectedColor() {
    colorItems.forEach(function (item) {
        item.classList.remove('selected-color')
    })
}


function genrateColors() {
    let color = "";
    for (let i = 0; i <= 5; i++) {
        let randIndex = parseInt(Math.random() * hexCode.length);
        color += hexCode[randIndex];
    }
    return "#" + color;
}


window.onload = function () {
    let localStorageColor = localStorage.getItem('bg-color') ?? 'red';
    changeBodyBg(localStorageColor) 

}


inputColor.addEventListener('change' , function(){
    changeBodyBg(inputColor.value);
    addColorToLocalStorage(inputColor.value);
})


function addColorToLocalStorage(sqarecolor) {
    localStorage.setItem('bg-color', sqarecolor)
    
}


function changeBodyBg(sqarecolor) {
    document.body.style.backgroundColor = sqarecolor;
}