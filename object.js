var x = 5;
var y = 2;
var z = x + y;

var javaScript = {
    name: 'javascript',
    founder: 'bredan eich',
    estd: 1995,
    ranking: 1,
    x,
    y,
    z
};


// console.log(javaScript.x);


// keys
var keys = Object.keys(javaScript);
// console.log(keys);

// values
var values = Object.values(javaScript);
// console.log(values);

// entries
var entries = Object.entries(javaScript);
console.log(entries);

// accessing the entries
// find the founder name
// console.log(entries[1][1]);

// find the founder name by using object 
// console.log(javaScript.founder);