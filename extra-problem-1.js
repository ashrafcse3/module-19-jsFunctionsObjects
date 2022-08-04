// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function multiplicationTable(number) {
    for (i = 1; i <= 10; i++) {
        console.log(i * number);
    }
}

multiplicationTable(13);