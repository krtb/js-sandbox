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
        console.log(name);
    }
}

if (true) {
    
}