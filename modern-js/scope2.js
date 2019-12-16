// scope tree

// Global
    //local
        //local
    //local   

let name = "me"

if (true) { 
    // variable shadowing
    // local variable value (shadowing) over parent above
    let name = "not me"

    if (true) {
        // scope tree traversed upwards to find first definition of variable
        console.log(name);
    }
}

if (true) {
    
}