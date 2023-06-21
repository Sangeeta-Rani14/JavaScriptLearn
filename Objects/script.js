// Property      Description
// value         The value to assign to the property.
// writable      Whether the value of the property can be changed or not.
// enumerable    Whether the property will be enumerated in for in loops or not.
// configurable  Whether it will be possible to redefine the property descriptor or not.
// get           A function to be called that will return the value of the property.
// set           A function to be called when the property is assigned a value


// Shallow cloning
// Object.assign() function can be used to copy all of the enumerable properties from an existing Object
// instance to a new one

const existing = { a: 1, b: 2, c: 3 };

const clone = Object.assign({}, existing);

console.log(clone); //{ a: 1, b: 2, c: 3 };

// Object rest/spread destructuring which is currently a stage 3 proposal provides an even simpler way to create
// shallow clones of Object instances:


var a = {
    a: 3,
    b: 5,
    c: 6
}

var { ...duplicate } = a;
console.log(duplicate);

// : Object.freeze

// Object.freeze makes an object immutable by preventing the addition of new properties, the removal of existing
// properties, and the modification of the enumerability, configurability, and writability of existing properties. It also
// prevents the value of existing properties from being changed. However, it does not work recursively which means
// that child objects are not automatically frozen and are subject to change.

var obj = {
    foo: 'foo',
    bar: [1, 2, 3],
    baz: {
        foo: 'nested-foo'
}
};
Object.freeze(obj);

console.log(obj);
// Cannot add new properties
obj.newProperty = true;
// Cannot modify existing values or their descriptors
obj.foo = 'not foo';
// Object.defineProperty(obj, 'foo', {
//     writable: true
// });
// Cannot delete existing properties
delete obj.foo;
// Nested objects are not frozen
obj.bar.push(4);
obj.baz.foo = 'new foo';

// Object cloning
// When you want a complete copy of an object (i.e. the object properties and the values inside those properties,
// etc...), that is called deep cloning. not possible

// Object properties iteration

// You can access each property that belongs to an object with this loop --for in

var aa = {
    a: 5,
    b: 6,
    c: 55,
    d: 8,
    e:7
}
for (var value in aa) {
 // always check if an object has a property
    console.log(value); //old pratice

}

// You can also use Object.keys function which return an Array containing all properties of an object and then you
// can loop through this array with Array.map or Array.forEach function


var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.keys(obj).map((key) =>{
    console.log(key);
});
// outputs: 0, 1, 2


// Object.assign
// The Object.assign() method is used to copy the values of all enumerable own properties from one or more source
// objects to a target object. It will return the target object

// Use it to assign values to an existing object

var user = {
    firstName: "John"
    
};
Object.assign(user, {lastName: "Doe", age:39});
console.log(user); // Logs: {firstName: "John", lastName: "Doe", age: 39}


// Or to create a shallow copy of an object

var obj = Object.assign({}, user);
console.log(obj); // Logs: {firstName: "John", lastName: "Doe", age: 39}

// Or merge many properties from multiple objects to one:

var obj1 = {
 a: 1
};
var obj2 = {
 b: 2
};
var obj3 = {
 c: 3
};
var obj = Object.assign(obj1, obj2, obj3);
console.log(obj); // Logs: { a: 1, b: 2, c: 3 }
console.log(obj1); // Logs: { a: 1, b: 2, c: 3 }, target object itself is change


// Primitives will be wrapped, null and undefined will be ignored:

var var_1 = 'abc';
var var_2 = true;
var var_3 = 10;
var var_4 = Symbol('foo');

var obj = Object.assign({}, var_1, null, var_2, undefined, var_3, var_4);
console.log(obj); // Logs: { "0": "a", "1": "b", "2": "c"}

// Object rest/spread (...)
// Object spreading is just syntactic sugar for Object.assign({}, obj1, ..., objn);

var obj = { a: 1 };
var obj2 = { ...obj, b: 2, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 };

//  Object.defineProperty

// It allows us to define a property in an existing object using a property descriptor.


var obj = { };
Object.defineProperty(obj, 'doo', { value: 'foo' });
console.log(obj.doo);
// doo is the property


// Object.defineProperties allows you to define multiple properties at a time
var obj = {};
Object.defineProperties(obj, {
 property1: {
 value: 'hye',
 writable: true
 },
 property2: {
 value: 'Hello',
 writable: false
 } 
})

console.log(obj);


// Accesor properties (get and set)
// Treat a property as a combination of two functions, one to get the value from it, and another one to set the value in
// it.
// The get property of the property descriptor is a function that will be called to retrieve the value from the property.
// The set property is also a function, it will be called when the property has been assigned a value, and the new value
// will be passed as an argument.
// You cannot assign a value or writable to a descriptor that has get or set


var person = { name: "John", surname: "Doe" }
Object.defineProperty(person, 'fullName', {
 get: function () {
 return this.name + " " + this.surname;
 },
 set: function (value) {
 [this.name, this.surname] = value.split(" ");
 }
});
console.log(person.fullName); // -> "John Doe"
person.surname = "Hill";
console.log(person.fullName); // -> "John Hill"
person.fullName = "Mary Jones";
console.log(person.name) // -> "Mary"

//  Dynamic / variable property names
var dictionary = {
 lettuce: 'a veggie',
 banana: 'a fruit',
 tomato: 'it depends on who you ask',
 apple: 'a fruit',
 Apple: 'Steve Jobs rocks!' // properties are case-sensitive
}
// var word = prompt('What word would you like to look up today?')
// var definition = dictionary[word]

// alert(word + '\n\n' + definition)

// console.log(dictionary.word) // doesn't work because word is taken literally and dictionary has no
// // field named `word`
// console.log(dictionary.apple) // it works! because apple is taken literally
// console.log(dictionary[word]) // it works! because word is a variable, and the user perfectly typed
// // in one of the words from our dictionary when prompted
// console.log(dictionary[apple]) // error! apple is not defined (as a variable)

// : Object.seal
// Object.seal prevents the addition or removal of properties from an object. Once an object has been sealed its
// property descriptors can't be converted to another type. Unlike Object.freeze it does allow properties to be
// edited.

var obj = { foo: 'foo', bar: function () { return 'bar'; } };
Object.seal(obj)
obj.newFoo = 'newFoo';
obj.bar = function () { return 'foo' };
obj.newFoo; // undefined
obj.bar(); // 'foo'
// Can't make foo an accessor property
// Object.defineProperty(obj, 'foo', {
//  get: function () { return 'newFoo'; }
// }); // TypeError
// But you can make it read only
Object.defineProperty(obj, 'foo', {
writable: false
}); // TypeError
obj.foo = 'newFoo';
obj.foo; // 'foo'


// Convert object's values to array

var obj = {
 a: "hello",
 b: "this is",
 c: "javascript!",
};

var array = Object.keys(obj)
 .map(function(key) {
 return obj[key];
 });
console.log(array); // ["hello", "this is", "javascript!"]


// Retrieving properties from an object

// . Object.keys() function
var x = { a : 10 , b : 3} , props;
props = Object.keys(x);
console.log(props); //["a","b"]


// Read-Only property
// Using property descriptors we can make a property read only, and any attempt to change its value will fail silently,
// the value will not be changed and no error will be thrown.

var a = { };
Object.defineProperty(a, 'foo', { value: 'original', writable: false });
a.foo = 'new';
console.log(a.foo);


// The enumerable property of the property descriptor tells whether that property will be enumerated while looping
// through the object's properties.

var obj = { };
Object.defineProperty(obj, "foo", { value: 'show', enumerable: true });
Object.defineProperty(obj, "bar", { value: 'hide', enumerable: false });
for (var prop in obj) {
 console.log(obj[prop]);
}

// : Object.keys
// Object.keys(obj) returns an array of a given object's key

var obj = {
 a: "hello",
 b: "this is",
 c: "javascript!"
};
var keys = Object.keys(obj);
console.log(keys); // ["a", "b", "c"]



var a = [2, 4, 5, 6, 7, ];
var b = a.map((c) => {
    return c * 2;
})

console.log(
    b
);

var a = [2, 4, 5, 6, 7, 8];
var b = a.map((a) => {
    if (a % 2 == 0) {
        return a;
    }
})

console.log(b);


var foo; // → Hoisted variable declaration
console.log(foo); // → undefined
foo = 42; // → variable assignment remains in the same place
console.log(foo); // → 42

const fo;
console.log(fo);
f0 = 50;
console.log(fo);