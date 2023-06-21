var hello = "Hello";
var world = 'world';
var helloW = `Hello World`;

console.log(hello);
console.log(world);
console.log(helloW);


// Strings can be created from other types using the String() function.


var intString = String(32); // "32"
var booleanString = String(true); // "true"
var nullString = String(null); // "null"

console.log(intString);
console.log(booleanString);
console.log(nullString);


// String concatenation can be done with the + concatenation operator, or with the built-in concat() method on the
// String object prototype

var foo = "Foo";
var bar = "Bar";
console.log(foo + bar); // => "FooBar"
console.log(foo + " " + bar); // => "Foo Bar"
console.log(foo.concat(bar) )// => "FooBar"
console.log("a".concat("b", " ", "d")) // => "ab d"

// Strings can be concatenated with non-string variables but will type-convert the non-string variables into strings.


var string = "string";
var number = 32;
var boolean = true;
console.log(string +" "+ number + boolean); // "string 32true"


// Strings can be created using template literals (backticks) `hello`
var greeting = `Hello`;

// With template literals, you can do string interpolation using ${variable} inside template literals:

var place = `World`;
var greet = `Hello ${place}!`
console.log(greet); // "Hello World!"


// You can use String.raw to get backslashes to be in the string without modification.
console.log(`a\\b`);
console.log(String.raw`a\\b`);

// reversing a string

function reverseString(str) {
return str.split('').reverse().join('');
}
var reverse = reverseString('@#123456'); 
console.log(reverse);  //fails for sarrogate pair


// better method

function reverseString(str) {
return [...String(str)].reverse().join(''); 
}
console.log(reverseString('stackoverflow')); // "wolfrevokcats"
console.log(reverseString(1337)); // "7331"
console.log(reverseString([1, 2, 3])); // "3,2,1"

// spread operator allow to copy existing array or objrct into Another array or object

// Custom reverse() function

function reverse2(string) {
var strRev = "";
for (var i = string.length - 1; i >= 0; i--) {
strRev += string[i];
}
return strRev;
}
var fo = reverse2("zebra");
console.log(fo); // "arbez"


// Comparing Strings Lexicographically

// To compare strings alphabetically, use localeCompare(). This returns a negative value if the reference string is
// lexicographically (alphabetically) before the compared string (the parameter), a positive value if it comes
// afterwards, and a value of 0 if they are equal.

var a = "hello";
var b = "world";
console.log(a.localeCompare(b));//-1


// The > and < operators can also be used to compare strings lexicographically, but they cannot return a value of zero
// (this can be tested with the == equality operator). As a result, a form of the localeCompare() function can be
// written like so:


function strcmp(a, b) {
    if(a === b) {
        return 0;
    }
    if (a > b) {
        return 1;
    }
        return -1;
}
console.log(strcmp("hello", "world")); // -1
console.log(strcmp("hello", "hello")); // 0
console.log(strcmp("world", "hello")); // 1



// This is especially useful when using a sorting function that compares based on the sign of the return value (such as
// sort).


var arr = ["bananas", "cranberries", "apples"];

function arrysort (a, b) {
    return a.localeCompare(b);
}
arr.sort(arrysort);
console.log(arr); // [ "apples", "bananas", "cranberries" ]


// Access character at index in string


// Use charAt() to get a character at the specified index in the string

var string = "Hello, World!";
console.log(string.charAt(4)); // "o"

// Alternatively, because strings can be treated like arrays, use the index via bracket notation.

console.log(string[4]);


// To get the character code of the character at a specified index, use charCodeAt().

var string = "Hello, World!";
console.log(string.charCodeAt(4)); // 111

// Note that these methods are all getter methods (return a value). Strings in JavaScript are immutable. In other
// words, none of them can be used to set a character at a position in the string.


// Word Counter
// Characters (total)
// Characters (no spaces)
// Words
// Lines


var word = `Note that these methods are all. getter methods (return a value). Strings in JavaScript are immutable. In other   `
// length tells character with with space
console.log(word.length);//112
// white space is removed
console.log(word.replace(/\s+/g, '').length); //94
// lines
console.log(word.split(/\r*\n/).length);//2
// words
console.log(word.match(/\S+/g).length); //18


// : Trim whitespace

//To trim whitespace from the edges of a string, use String.prototype.trim:

var whitespace=`  words, none of them can be used to set a character at a position in the string     `
console.log(whitespace.trim());

// remove white space from front and end

var whitespace2 = `  "this is me"    `
console.log(whitespace2.trimStart());//remove white space from start
console.log(whitespace2.trimEnd()); //form end

console.log(whitespace.trimEnd() + whitespace2.trimStart());

// // Non-standard methods, but currently implemented by most engines
// " this is me ".trimLeft(); // "this is me "
// " this is me ".trimRight(); // " this is me"

// Splitting a string into an array

// Use .split to go from strings to an array of the split substrings


var SPLIT = 'hiii'
console.log(SPLIT.split("")); //['h','i','i','i']

// Use the array method .join to go back to a string:
console.log(SPLIT.split("").join(""));

// Strings are unicode

var s = "some ∆≈ƒ unicode ¡™£¢¢¢";
console.log(s.charCodeAt(5)); // 8710
console.log(s[5]);

//  Detecting a string

//To detect whether a parameter is a primitive string, use typeof:



var aString = "my string";
var anInt = 5;
var anObj = {};
console.log(typeof aString);// tells datatype
console.log(typeof aString === "string"); // true
console.log(typeof anInt === "string"); // false
console.log(typeof anObj === "string"); // false

// Substrings with slice
// Use .slice() to extract substrings given two indices:

var s = "0123456789abcdefg";
console.log(s.slice(1, 5)); // "01234"
console.log(s.slice(5, 6)); // "5"

// Given one index, it will take from that index to the end of the string:
console.log(s.slice(10)); // "abcdefg"


// String Find and Replace Functions
// To search for a string inside a string, there are several functions:
// indexOf( searchString ) and lastIndexOf( searchString )
// indexOf() will return the index of the first occurrence of searchString in the string. If searchString is not found,
// then -1 is returned.

var string = "Hello, World!";
console.log( string.indexOf("o") ); // 4
console.log(string.indexOf("foo")); // -1

// Similarly, lastIndexOf() will return the index of the last occurrence of searchstring or -1 if not found.

var string = "Hello, World!";
console.log( string.lastIndexOf("o") ); // 8
console.log(string.lastIndexOf("foo")); // -1


// includes( searchString, start )
// includes() will return a boolean that tells whether searchString exists in the string, starting from index start
// (defaults to 0). This is better than indexOf() if you simply need to test for existence of a substring.

var string = "Hello, World!";
console.log( string.includes("Hello") ); // true
console.log(string.includes("foo")); // false


// replace( regexp|substring, replacement|replaceFunction )
// replace() will return a string that has all occurrences of substrings matching the RegExp regexp or string
// substring with a string replacement or the returned value of replaceFunction.
// Note that this does not modify the string in place, but returns the string with replacements


var string = "Hello, World!";
string = string.replace( "Hello", "Bye" );
console.log( string ); // "Bye, World!"
string = string.replace( /W.{3}d/g, "Universe" );
console.log(string); // "Bye, Universe!"


//  Find the index of a substring inside a string
// The .indexOf method returns the index of a substring inside another string (if exists, or -1 if otherwise)


console.log('Hellow World'.indexOf('Wor'));//7

// .indexOf also accepts an additional numeric argument that indicates on what index should the function start
// looking

console.log("harr dee harr dee harr".indexOf("dee", 10)); // 14
// You should note that .indexOf is case sensitive

console.log('Hellow World'.indexOf('WOR')); // -1


// String to Upper Case
// String.prototype.toUpperCase():
console.log('qwerty'.toUpperCase()); // 'QWERTy

//  String to Lower Case
// String.prototype.toLowerCase()

console.log('QWERTY'.toLowerCase()); // 'qwerty


// Repeat a String

// this can be done using the .repeat() method:
console.log("abc".repeat(3)); // Returns "abcabcabc"
console.log("abc".repeat(0)); // Returns ""
console.log("abc".repeat(-1)) ; // Throws a RangeError