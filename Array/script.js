// What are Array-like Objects?
// JavaScript has "Array-like Objects", which are Object representations of Arrays with a length property. For example:
// var realArray = ['a', 'b', 'c'];
// var arrayLike = {
//  0: 'a',
//  1: 'b',
//  2: 'c',
//  length: 3
// };


// However, one key difference between Arrays and Array-like Objects is that Array-like objects inherit from
// Object.prototype instead of Array.prototype. This means that Array-like Objects can't access common Array
// prototype methods like forEach(), push(), map(), filter(), and slice():


// Convert Array-like Objects to Arrays in ES6
// 1. Array.from:

const arrayLike = {
    0: 'Value 0',
    1: 'Value 1',
    length: 2
};

var realArray = Array.from(arrayLike);
console.log(realArray);

realArray.forEach(value => {
    console.log(value);
});


// for...of

// var realArray = [];
// for(const value of arrayLike) {
//     realArray.append(value);
// }


// Reducing values

// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to
// reduce it to a single value.

var a = [1, 4, 7, 8];
console.log(a.reduce((a,b) => {
    return a + b;
}));

// reduce needs a call back function

// Optional second parameter can be passed to reduce(). Its value will be used as the first argument (specified as a)
// for the first call to the callback (specified as function(a, b))

var a = [2, 5, 6, 7];

var b = a.reduce((a,b) => {
    console.log(a, b);
    return a + b;
}, 1)

console.log(b);

// Flatten Array of Objects
// The example below shows how to flatten an array of objects into a single object

var array = [{
    key: 'one',
    value: 1
}, {
    key: 'two',
    value: 2
}, {
    key: 'three',
    value: 3
    }];

console.log(array);
    // [{...},{...},{...}]
    // 0:{key: 'one', value:1}

var c=array.reduce(function(obj, current) {
    obj[current.key] = current.value;
    return obj;
}, {});

console.log(c);
// {one:1 ,two:2, three:3 }

// : Mapping values

// It is often necessary to generate a new array based on the values of an existing array.
// For example, to generate an array of string lengths from an array of strings:

var a = ['one', 'two', 'three', 'four']
var b = a.map(value => value.length);
console.log(b);// → [3, 3, 5, 4]


// In this example, an anonymous function is provided to the map() function, and the map function will call it for every
// element in the array, providing the following parameters, in this order:
// The element itself
// The index of the element (0, 1...)
// The entire array



// Filtering Object Arrays
// The filter() method accepts a test function, and returns a new array containing only the elements of the original
// array that pass the test provided


// Suppose we want to get all odd number in an array:


var numbers = [5, 32, 43, 4];

let odd = numbers.filter(n => n % 2 !== 0);

console.log(odd); //5 43


//also work on arrays of object
var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
    }];

let young = people.filter(person => person.age < 35)
console.log(young);
    
// Sorting Array

// The .sort() method sorts the elements of an array. The default method will sort the array according to string
// Unicode code points. To sort an array numerically the .sort() method needs to have a compareFunction passed to
// it.


var a=['s', 't', 'a', 34, 'K', 'o', 'v', 'E', 'r', '2', '4', 'o', 'W', -1, '-4'].sort();
// default order according to unicode
console.log(a);

//[-1, '-4', '2', 34, '4', 'E', 'K', 'W', 'a', 'l', 'o', 'o', 'r', 's', 't', 'v']

// alphabetical order we need to pass a campareFunction

var b = a.sort((a,b) => {
    return a.toString().localeCompare(b);

})

console.log(b);


// String sorting by length (longest first)
var a=["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
        return b.length - a.length;
});

console.log(a); // ["elephants", "penguins", "zebras", "dogs"];
// String sorting by length (shortest first)
var a=["zebras", "dogs", "elephants", "penguins"].sort(function(a, b) {
        return a.length - b.length;
});

console.log(a);
// ["dogs", "zebras", "penguins", "elephants"]


//Iteration

// A traditional for-loop

for (var i = 0, length = 10; i < length; i++) {
    console.log(i);
}
// 0,1,2,3,4,5,6,7,8,9,10

// for in

var myArray = [1, 4, 6, 8];

for (i in myArray) {
    let b=i*2
    console.log(myArray[i]); //1,4,6,8
    console.log(b);//0 , 2, 4, 6

}

// for of
// the for-of loop is the recommended way of iterating over a the values of an array:
// 

var myArray = [1, 2, 3, 4];

for (let value of myArray) {
 let twoValue = value * 2;
 console.log("2 * value is:", twoValue);
}
// The forEach() method executes a provided function once for each array element.

myArray.forEach(a => {
    console.log(a);
});

// Destructuring an array

// An array can be destructured when being assigned to a new variable

const triangle = [3, 4, 5];
const [len, height, hypotenuse] = triangle;
len === 3; // → true
height === 4; // → true
hypotenuse === 5; // → true

// Elements can be skipped

var [,b,,c] = [1, 2, 3, 4];
console.log(b, c); // → 2, 4
// using rest operator
// rest operator used to put rest of the values into the array
var [b,c, ...xs] = [2, 3, 4, 5];
console.log(b, c, xs);


// An array can also be destructured if it's an argument to a function.


function area([l, h]) {
    return (l* h) / 2;
}

const triangle2 = [3, 4, 5];
area(triangle2); // 6

// Removing duplicate elements

var uniqueArray = ['a', 1, 'a', 2, '1', 1];
var v = [... new Set(uniqueArray)];

console.log(v);

// : Array Reversing

// .reverse is used to reverse the order of items inside an array.

console.log(triangle2.reverse());// 5,4,3


// Concatenating Arrays
//concat()

var array1 = [1, 2];
var array2 = [3, 4, 5];

var array3 = array1.concat(array2); 
console.log(array3); //[1, 2, 3, 4, 5]

var array3 = [...array1, ...array2]
console.log(array3); //[1, 2, 3, 4, 5]


// Without Copying the First Array

var longArray = [1, 2, 3, 4, 5, 6, 7, 8] ;
var shortArray = [9, 10];
longArray.push(...shortArray);

console.log(longArray);


// Searching an Array
// The recommended way (Since ES5) is to use Array.prototype.find

var people = [
    { name: "bob" },
    { name: "john" }
];
var bo = people.find(person => person.name === "bob");
console.log(bo);

// The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing
//function. Otherwise -1 is returned.

console.log(longArray.findIndex(item => item === 3));

// Convert a String to an Array

// The .split() method splits a string into an array of substrings. By default .split() will break the string into
// substrings on spaces (" "), which is equivalent to calling .split(" ").


var strArray = "StackOverflow".split("");
console.log(strArray);
// strArray = ["s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]

// Removing items from an array

// Use .shift to remove the first item of an array.

var array = [1, 2, 3, 4];
array.shift();
console.log(array); //[2, 3, 4]
// removes from first

// Further .pop is used to remove the last item from an array

var array = [1, 2, 3];
array.pop();

console.log(array);//[1,2]
//remove from last

// Use .splice() to remove a series of elements from an array. .splice() accepts two parameters, the starting
// index, and an optional number of elements to delete. If the second parameter is left out .splice() will remove all
// elements from the starting index through the end of the array.


var array = [1, 2, 3, 4];
array.splice(1, 2);

console.log(array); //[1, 4]

// Use delete to remove item from array without changing the length of array:

var array = [1, 2, 3, 4, 5];
console.log(array.length); // 5
delete array[2];
console.log(array); // [1, 2, undefined, 4, 5]
console.log(array.length); // 5

// Finding the minimum or maximum element

// If your array or array-like object is numeric, that is, if all its elements are numbers, then you can use Math.min.apply
// or Math.max.apply by passing null as the first argument, and your array as the second.

var myArray = [1, 2, 3, 4];
console.log(Math.min.apply(null, myArray)); //1
console.log(Math.max.apply(null, myArray));//4

var myArray = [1, 2, 3, 4, 99, 20];
var maxValue = Math.max(...myArray);
console.log(maxValue);// 99
var minValue = Math.min(...myArray);
console.log(minValue); // 1

// Joining array elements in a string

// To join all of an array's elements into a string, you can use the join method:

console.log(["Hello", " ", "world"].join("")); // "Hello world"

console.log([1, 800, 555, 1234].join("-")); // "1-800-555-1234"


//  Append / Prepend items to Array
// Use .unshift to add one or more items in the beginning of an array

var array = [3, 4, 5, 6];
array.unshift(1, 2);

console.log(array); //[1, 2, 3, 4, 5, 6]

// Further .push is used to add items after the last currently existent item


var array = [1, 2, 3];
array.push(4, 5, 6);
console.log(array); //[1, 2, 3, 4, 5, 6]


// Insert an item into an array at a specific index

// Simple item insertion can be done with Array.prototype.splice method:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// we can pass negative index
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
