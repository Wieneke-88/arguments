console.log('hello');

const paintWalls = function (sides, color) {
    console.log("The " + sides + " wall has been painted " + color);
};

paintWalls("yellow");
paintWalls("blue");
paintWalls();
paintWalls("north", "blue");

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

//This is a shortcut, because number < 100 already returns true or false we can immediately return to that 
/*
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

