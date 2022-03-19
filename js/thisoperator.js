let user1 = {
    name: "prerna",
    age: 30,
  
    sayHi() {
      console.log(user1.name); //user is used in the user object itself
    }
  
  };
user1.sayHi();

  let user2 = {
    name: "aditya",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      console.log(this.name);
    }
  
  };
  
  user2.sayHi(); 
  //this alse used to differentiate the local variable and class variable if they poses the same name