
//Function Declaration --> ouderwetse manier --> hij herkent numberA en numberB niet in deze functie, waarom? 
function sum(numberA, numberB) {
    const multiplyA = numberA * numberA;
    const multiplyB = numberB * numberB;
    const add = multiplyA + multiplyB;
    const sumSquared = add * add;
    return sumSquared;
}


//Function Expression - moderne manier 
//Logischerwijs wordt const add = multiplyA + multiplyB (want dat zijn de resultaten), en dus niet numberA + numberB. 
const sum = function (numberA, numberB) {
    const multiplyA = numberA * numberA;
    const multiplyB = numberB * numberB;
    const add = multiplyA + multiplyB;
    const sumSquared = add * add;
    return sumSquared;
}

//Arrow function - moderne manier, korter
const sum = (numberA, numberB) => {
    const multiplyA = numberA * numberA;
    const multiplyB = numberB * numberB;
    const add = multiplyA + multiplyB;
    const sumSquared = add * add;
    return sumSquared;
}

const numbers = sum(2, 3);
console.log(numbers);


//Voorbeeld van een functie vullen met waardes - want dat snap ik vaak niet. 
const add = function (numberA, numberB) {
    return numberA + numberB;
};

//bovenstaande is de functie definitie - hieronder volgen waardes. Vanwege de 'producerende' functie, heb je hiervoor de console.log nodig 
const eight = add(3, 5);
console.log(eight);