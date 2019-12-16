// scope tree

// Global
    //local
        //local
    //local   

let name = "me"

if (true) { 
    // variable shadowing
    let name = "not me"
    if (true) {
        console.log(name);
    }
}

if (true) {
    
}