// scope tree

// Global
    //local
        //local
    //local   

// let name = "me"

if (true) { 
    // variable shadowing
    // local variable value (shadowing) over parent above
    // let name = "not me"  

    if (true) {
        // changes name var to not found,
        // stops at 'not me', changes to 'not found'
        // doesn't change the global scope variable 

        //leaked variable, wasn't explicitly defined, 
        // JS creates a new global variable 
        name = "not found"

        // scope tree traversed upwards to find first definition of variable
        console.log(name, 'nested child'); // result = "not me"
    }
}

if (true) {
    console.log(name, 'looking in global scope'); // result = "me"
}