/**
 * Test description. See the difference of var vs. let vs. const [here](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).
 */
var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input, index) {
    console.log("index = " + index);
    console.log(input);
});
var age = 30;
var isBlackBelt = false;
var exampleValue = calculateCircumference(2);
console.log(exampleValue);
function calculateCircumference(diameter) {
    return diameter * Math.PI;
}
var names = ["luigi", "mario", "yoshi"];
names.push("Toad");
console.log(names);
names.splice(2, 1); //Removes 1 element at index 2 ("yoshi")
console.log(names);
var numbers = [10, 20, 30, 40, 50, 60];
var mixed = ["Ken", 4, "Some data", true];
mixed.push("Some data");
mixed.push(10);
mixed[2] = false;
var ninja = {
    name: "Ryu",
    belt: "black",
    age: 30
};
ninja.age = 40;
ninja.age = parseInt("30");
//Can't add new properties to it!
// ninja.skills = []; 
//MUST MATCH initial object structure!!
ninja = {
    name: "Ken",
    belt: "orange",
    age: 34
};
console.log(ninja);
console.log(JSON.stringify(ninja));
var emptyArray = [];
var mixedArray = [];
var unionMixedArray = [];
unionMixedArray.push("David");
unionMixedArray.push(20);
console.log(unionMixedArray);
var uid = "123";
var objExample;
objExample = { "name": "Test" };
objExample = { "poof": "Hello?" };
objExample = [];
var explicitObjExample;
// explicitObjExample = {}
