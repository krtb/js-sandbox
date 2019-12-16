let fahrenheit = 50

// calc celsius and store in celsius variable
// print value
function celsiusConverter(params) {    
    let convertedTemp = (params - 32) * 5 / 9
    console.log(convertedTemp)
}

celsiusConverter(fahrenheit)

// calculate kelvin value and store in variable
//  print value
function kelvinConverter(params) {
    let convertedTemp = ((params - 32) * 5 / 9) + 273.15
    console.log(convertedTemp);
}

kelvinConverter(fahrenheit)