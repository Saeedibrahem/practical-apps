const counter = document.querySelector('h1')
const increaseBtn = document.querySelector('.btn-increase')
const decreaseBtn = document.querySelector('.btn-decrease')
const colors = ['blue' , 'green', 'yellow','black','red','teal'];


increaseBtn.onclick = function(){
    counter.textContent = parseInt(counter.textContent) + 1;
    counter.parentElement.style.backgroundColor = getRandomColor()
};
decreaseBtn.onclick = function () {
    if (parseInt(counter.textContent) > 0){
        counter.textContent = parseInt(counter.textContent) - 1
        counter.parentElement.style.backgroundColor = getRandomColor()
    }
};

function getRandomColor() {
    let randomNumber = parseInt(Math.random() * 6);
    return colors[randomNumber]
    
}