// higher order function

// 1- map

const container = document.querySelector(".container");
const numbers = [10, 20, 30, 40, 50, 60];

let newArr = numbers.map(function (ele) {
    return `<h1>${ele}</h1>`;
});
container.innerHTML = newArr.join("");


// 2- filter

let newArray = numbers.filter((item) => {
    return item > 20;
});

console.log(newArray);


// 3- reduce


let sum = numbers.reduce(function (accumulator, item) {
    return accumulator + item;
});

console.log(sum);

// manual reduce example

console.log(sum (numbers))
function sum (arr){
    let num = 0;
    for(let i =0; i< arr.length ; i++){
        num += arr[i]
    }
    return num;
}