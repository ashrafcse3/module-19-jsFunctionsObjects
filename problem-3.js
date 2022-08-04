// 3) Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(intArray, arraySize) {
    let average = 0;
    for (var i = 0; i < arraySize; i++) {
        average = average + intArray[i];
    }
    return average / arraySize;
}

var randomArray = [3, 6, 2, 9];

var arrayAverage = make_avg(randomArray, randomArray.length);

console.log(arrayAverage);