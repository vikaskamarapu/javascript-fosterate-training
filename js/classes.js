//classes in javascript
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      console.log(this.name);
    }
  
  }
  
  // Usage:
  let user = new User("Vikas");
  user.sayHi();