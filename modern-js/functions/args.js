// mutliple args
// let add = function (a,b,c) {
//     return a + b + c
// }

// let result = add(10,1,5)
// console.log(result);

// DEFAULT ARGUMENTS
// let getScoreText = function (name = 'anonymous', score = 0) {
//     return 'Name: ' + name + '- Score: ' + score
// }

// getScoreText() => by default if no argument value, undefined is result
// provide default value, which WAS undefined, not provided in function
// let scoreText = getScoreText()
// return console.log(scoreText);

// func with multiple/default args
// calculator for tip
// 2 args, total/percentage to tip
// default tip as decimal point
// return value

let getTip = function (total = 0, tipPercent = .20) {
    console.log(total, tipPercent);
    //toFixed method = number of digits after decimal point
    return (total * tipPercent).toFixed(2)
    // return null = if not null, returns undefined by default
}

let tipResult = getTip(30)
console.log(tipResult);
