import '../assets/css/style.css';

//===> QUERYING DOM THROUGH THIS REFERENCE BACK TO HTML
const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';


//===>
const condition = true;

if(condition){
    console.log('yes')
} else {
    console.log('was not')
}

const number = 994;
let result;

if(number === 1){
    result = "changed to One string"
} else if (number === 99){
    result = "No Match"
} else if (number === 5) {
    result = "FIVE!"
} else {
    result = "nothing good!"
}

console.log(result)
