const mainImage = document.getElementById("main-image");
const innerImages = document.querySelectorAll(".inner-image");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btns = document.querySelectorAll(".btns .btns");
let state = 0;



nextBtn.addEventListener('click',() =>{
    state = state + 1;
    nextClick()
})


prevBtn.addEventListener('click',()=>{
    state = state - 1;
    prevClick()
}) 



btns.forEach((ele) => {
    ele.addEventListener("click", function () {
        let targetelement = document.getElementById(ele.dataset.target);
        mainImage.src = targetelement.src;
    });
});


clickToSlide ()

function clickToSlide (){
    for (let i = 0; i < innerImages.length; i++) {
        innerImages[i].onclick = function () {
            let imageReplaceSrc = innerImages[i].src;
            mainImage.src = imageReplaceSrc;
        };
    }
}


function nextClick(){
    if (state < innerImages.length) {
        mainImage.src = innerImages[state].src;
    } else {
        state = 0;
        mainImage.src = innerImages[state].src;
    }
}


function prevClick() {
    if (state >= 0) {
        mainImage.src = innerImages[state].src;
    } else {
        state = innerImages.length - 1;
        mainImage.src = innerImages[state].src;
    }
}
