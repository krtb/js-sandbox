// mutliple args
let add = function (a,b,c) {
    return a + b + c
}

let result = add(10,1,5)
console.log(result);

// DEFAULT ARGUMENTS
let getScoreText = function (name = 'anonymous', score = 0) {
    return 'Name: ' + name + '- Score: ' + score
}

// getScoreText() => by default if no argument value, undefined is result
// provide default value, which WAS undefined, not provided in function
let scoreText = getScoreText()
return console.log(scoreText);
