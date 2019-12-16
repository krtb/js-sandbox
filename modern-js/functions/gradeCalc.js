// student score, total possible score
// ex: 15/20 => "you got a C (75%)"
// A 90-100 / B 80-89 / C 70-79 / D 60-69 / F 0-59

let gradeCalculator =  function (studentScore, totalPossible = 20) {
    let percentCorrect = (studentScore / totalPossible) * 100    
    let theLetter = ""    


    if (percentCorrect >= 101) {
        return "too high, fo sho"
    } else if (percentCorrect < 50){
        return "too low, fo sho"
    } else if( percentCorrect >= 90) {
        theLetter = "an A"
    } else if (percentCorrect >= 80) {
        theLetter = "a B"
    } else if (percentCorrect >= 70) {
        theLetter = "an C"
    } else if (percentCorrect >= 60) {
        theLetter = "an D"
    } else if (percentCorrect >= 50) {
        theLetter = "an F"
    }

    // return must go below due to JS engine first storing variables, then executing
    return theFinalGrade = `You got ${theLetter} with ${percentCorrect}%`
}

let result = gradeCalculator(0)
console.log(result);
