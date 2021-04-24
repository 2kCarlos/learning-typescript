/**
 * Test description.
 */
const character : string = 'mario';

console.log(character);

const inputs : NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
console.log(inputs);

inputs.forEach((input : HTMLInputElement, index : number) => {
    console.log("index = " + index);
    console.log(input);
})
