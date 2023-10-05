//This simple grade generator uses the logical operators to obtain boolean values from  to convert raw numerical values to grades!

function toyProblem(rawScore) {
    if (rawScore >= 0 && rawScore < 40 === true) {
        return "E-";
} else if (rawScore >= 40 && rawScore <= 49 === true) {
    return "D-";
} else if (rawScore >= 49 && rawScore <= 59 === true) {
    return "C-";
} else if (rawScore >= 60 && rawScore <= 79 === true) {
    return "B-"; 
} else if (rawScore > 79 === true) {
    return "A";
}
}
//To call the toyProblem function please input number values in the parentheses.
console.log(toyProblem(86));

