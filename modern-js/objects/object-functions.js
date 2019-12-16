let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'the lantern',
    author: 'some guy',
    pageCount: 100
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pagecount: `${book.pageCount}`
    }
}

// let bookSummary = getSummary(myBook)
// console.log(bookSummary.pagecount);

let convertToFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: ((fahrenheit + 459.67 ) * (5/9)).toFixed(2) ,
        celsius: ((fahrenheit - 32 ) * ( 5 / 9 )).toFixed(2)
    }
}

let result = convertToFahrenheit(74)
console.log(result);

