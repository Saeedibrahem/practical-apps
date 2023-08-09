


    // higher order function as a callback function


    // ex-1


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function filterData(callback, arr) {
    const filterdArray = [];
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]) ? filterdArray.push(arr[i]) : null;
    }
    return filterdArray ;
    }


    
    
    function isEven(item) {
        return (item % 2 ) == 0 ? item : false
    }
    function isOdd(item) {
        return (item % 2 ) !== 0 ? item : false
    }
    function greaterThanFive(item) {
        return item > 5  ? item : false
    }
    
    
    console.log(filterData(isEven,numbers));
    console.log(filterData(isOdd,numbers));
    console.log(filterData(greaterThanFive,numbers));

    // ex-2

    Array.prototype.filterData = function(callback){
        const filterdArray = [];
    for (let i = 0; i < this.length; i++) {
        callback(this[i]) ? filterdArray.push(this[i]) : null;
    }
    return filterdArray ;
    }
    console.log(numbers.filterData(isEven));
    console.log(numbers.filterData(isOdd));
    console.log(numbers.filterData(greaterThanFive));


// how to call function into another function


    function calculator (operation){
        switch (operation) {
            case "ADD":
                return function (a,b) {
                    console.log(`${a} , ${b} => ${a+b} `);
                }
            case "SUBTRACT":
                return function(a,b){
                    console.log(`${a} , ${b} =>${a-b}`);
                }
            
        }
    }
    calculator("ADD")(10,20)
    let calc = calculator("SUBTRACT")
    calc(5,10);