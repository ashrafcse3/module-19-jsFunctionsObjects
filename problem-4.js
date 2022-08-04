// 4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd.You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter

// No return + has parameter
function odd_even(value) {
    if (value % 2 == 0) {
        console.log('even');
    }
    else {
        console.log('odd');
    }
}

// odd_even(4);


// has return + has parameter
function odd_even2(value) {
    let result;
    if (value % 2 == 0) {
        result = 'even';
    }
    else {
        result = 'odd';
    }

    return result;
}

console.log(odd_even2(3));
