/**
 * Test description. See the difference of var vs. let vs. const [here](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/).
 */
const character : string = 'mario';

console.log(character);

const inputs : NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input : HTMLInputElement, index : number) => {
    console.log("index = " + index);
    console.log(input);
})

let age : number = 30;
let isBlackBelt : boolean = false;

let exampleValue : number = calculateCircumference(2);
console.log(exampleValue);

function calculateCircumference(diameter : number) : number {
    return diameter * Math.PI;
}

let names : string[] = ["luigi", "mario", "yoshi"];
names.push("Toad");

console.log(names);
names.splice(2, 1); //Removes 1 element at index 2 ("yoshi")
console.log(names);

let numbers : number[] = [10, 20, 30, 40, 50, 60];

let mixed = ["Ken", 4, "Some data", true];
mixed.push("Some data");
mixed.push(10);
mixed[2] = false;

let ninja = {
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
    age: 34,
    // skills: [] //CANNOT add/remove/change fields!
};
console.log(ninja);
console.log(JSON.stringify(ninja));

let emptyArray : string[] = [];
let mixedArray : [] = [];
let unionMixedArray : (string | number) [] = [];
unionMixedArray.push("David");
unionMixedArray.push(20);
console.log(unionMixedArray);

let uid : string | number = "123";

let objExample : object;
objExample = { "name": "Test" };
objExample = { "poof": "Hello?" };
objExample = [];

let explicitObjExample : {
    name: string,
    age: number,
    beltColor: string
};
// explicitObjExample = {}


