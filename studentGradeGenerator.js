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
console.log(toyProblem(67));

