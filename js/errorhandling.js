try {
    console.log("start of try block");
    hi_vikas;
    console.log("end of try block");
}
//err => error object 
catch (err) {
    console.log(`Error has occurred!`);
}

//using error object
try {
    console.log("start of try block");
    hi_vikas;
    console.log("end of try block");
}
//err => error object 
catch (err) {
    console.log(`Error has occurred!` + err);
}

//using throw operator
let user = { 'name': 'vikas', 'age': 20 };
try {
    console.log("user name :" + user.name);
    if (user.salary) {
        console.log("salary :" + user.salary);
    }
    else {
        throw new Error("Incomplete data : 'no name'");
    }
    console.log("age :" + user.age);
} catch (err) {
    console.log("DATA " + err);
}

//Rethrowing
try {
    console.log("user name :" + user.name);
    user.salary = 20000;
    if (user.salary) {
        console.log("salary :" + user.salary);
    }
    else {
        throw new Error("Incomplete data : 'no name'");
    }
    hi_vikas;
    console.log("age :" + user.age);
} catch (err) {
    if (err instanceof Error)
        console.log("DATA " + err);
    else
        throw err;
}

//finally block
try {
    console.log('try');
    const a = prompt("Make an erroe (y/n) :");
    if (a == 'y') BAD_CODE();
} catch (err) {
    console.log('catch');
} finally {
    console.log('finally');
}


//user defined exception 
class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; // (2)
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack); 
}