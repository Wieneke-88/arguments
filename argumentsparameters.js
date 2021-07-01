//INHOUD: FUNCTIONS MET IF/ELSE STATEMENT 
//          FUNCTIONS DECLERATION - FUNCTION EXPRESSION - FUNCTION ARROW 
//          GEBRUIK FUNCTIES MET MEERDERE ARGUMENTS (ZIE FUNCTIE getBouncerReaction) 
//          GEBRUIK FUNCTIES VOOR BEREKENINGEN 
//          GEBRUIK VAN VERWIJZING NAAR FUNCTIE IN EEN ANDERE FUNCTIE 
//          REDELIJK BEGREPEN 

//This function produces something, it does not use console.log 
const numberIsBig = function (number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));

const result = numberIsBig(101);
console.log(result);

/*
//Shortcut, number < 100 alreay returns true or false, we can immetiately return to that 
const numberIsBig = function (number) {
    return number > 100;
};
*/
const getBouncerReaction = function (maxVisitors, currentVisitors, ageOfPotentialVisitor) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }
    if (currentVisitors >= maxVisitors) {
        return "It's too busy now, come back later";
    } else {
        return "come in"
    }
};

console.log(getBouncerReaction(2000, 0, 15));
console.log(getBouncerReaction(2000, 1999, 50));
console.log(getBouncerReaction(2000, 2000, 40));
console.log(getBouncerReaction(2000, 2999, 30));

/*
//It's possible to skip the curly braces for an if statement if you only want one statement to be run after the if. Be careful with this as it can make your code less readable.
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};

//We can also use a temporary response variable, put a value into it and then return that variable at the end of the function. This can sometimes be a better pattern.
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};
*/

const calculateAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};

console.log(calculateAverage(1, 1, 1, 1, 1));
console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(-10000, 0, 0, 0, 5000));

/*
//Function Declaration --> ouderwetse manier 
function sum(numberA, numberB) {
    const sum = function (numberA, numberB) {
        const multiplyA = numberA * numberA;
        const multiplyB = numberB * numberB;
        const add = multiplyA + multiplyB;
        const sumSquared = add * add;
        return sumSquared;
    }
*/

//Function Expression - moderne manier 
//Logischerwijs wordt const add = multiplyA + multiplyB (want dat zijn de resultaten), en dus niet numberA + numberB. 
const sum = function (numberA, numberB) {
    const multiplyA = numberA * numberA;
    const multiplyB = numberB * numberB;
    const add = multiplyA + multiplyB;
    const sumSquared = add * add;
    return sumSquared;
};

/*
//Arrow function - moderne manier, korter
const sum = (numberA, numberB) => {
    const multiplyA = numberA * numberA;
    const multiplyB = numberB * numberB;
    const add = multiplyA + multiplyB;
    const sumSquared = add * add;
    return sumSquared;
}
*/

/*
//Voorbeeld van een functie vullen met waardes - want dat snap ik vaak niet. 
const add = function (numberA, numberB) {
    return numberA + numberB;
};
//bovenstaande is de functie definitie - hieronder volgen waardes 
const eight = add(3, 5);
console.log(eight);
*/

/*
//Functie die een functie aanroept, vb hieronder - onderstaande functies doen (nog) niets 
const add = function (numberA, numberB) {
    return numberA + numberB;
};

const doCalculation = function () {
    const six = add(2, 4);
    console.log(six);
};
//onderstaande code calls de function 'doCalculation', die vervolgens weer een call maakt naar de function 'add' 
doCalculation();
*/

//Voorbeeld van 4 function definitions, waar door de call onderaan de eigenlijke berekening begint 
const makePositive = function (number) {
    console.log("Entering makePositive..");
    if (number < 0) {
        return Math.abs(number);
    }
    return number;
};

const makeBigger = function (number) {
    console.log("Entering makeBigger..");
    if (number < 10) {
        return 10 + number;
    }
    return number;
};

const square = function (number) {
    console.log("Entering square..");
    return number * number;
};

const doComplexCalculation = function (number) {
    console.log("Entering doComplexCalculation..");
    const positiveNumber = makePositive(number);
    const bigNumber = makeBigger(positiveNumber);
    const squaredNumber = square(bigNumber);
    return squaredNumber;
};

console.log(doComplexCalculation(-1));