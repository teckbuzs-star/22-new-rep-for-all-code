// FACTORY FUNCTION
// function createstudent(name, age) { // function that creates and returns an object
//     return {
//          name,// property shorthand
//         age,// property shorthand
//         greet() { // method
//           console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//         }
//     };
// }
// const student1 = createstudent('Alice', 20);
// const student2 = createstudent('Bob', 22);
// student1.greet();// to call method you need to use (.) then method name
// student2.greet();





// CONSTRUCTOR FUNCTION
//this basicly defins a constructor function
// function Car(brand, color) {// both brand and color are parameters 
//     this.brand = brand;//that will receve their value
//     this.color = color;//When you call the constructor with new, this refers to the new object being created.

//     this.drive = function() {//this is basicly a method in constructor function
//         console.log(this.brand + " is driving!");
//     };
// }

// const car1 = new Car("Toyota", "Red");// new does four things but what u need to know is that it creates a new object
// const car2 = new Car("BMW", "Black");

// car1.drive();//to call method you need to use (.) then method name
// car2.drive();




//class syntax ES6

// class Player {//class is a blueprint for creating objects
//     constructor(name, health) {// the constructor() is a spectial method for creating  a new object using new 
//         this.name = name;
//         this.health = health;//remember that this refers to the particular object being initialized
//     }

//     attack() {
//         console.log(this.name + " attacks!"); // method with class syntax
//     }
// }

// const player1 = new Player("Alex", 100);

// console.log(player1.name);
// console.log(player1.health);

// player1.attack();






// //property
// const animal = {
//     eat() {// step 1 The animal object has a method called eat().
//         console.log("This animal is eating.");
//     }
// };

// const dog = Object.create(animal); //step 2 his creates a new object called dog whose prototype is animal.
// //The dog object can use properties and methods from animal through this prototype relationship.
// dog.bark = function() {
//     console.log("Woof!");
// };

// dog.bark();
// dog.eat();
// //1 Does dog have its own eat property? No.
// //2 Does its prototype, animal, have eat? Yes!
// //3 JavaScript uses that method.



////What happens when both objects have the same property?
// const animal = {
//     sound: "Some animal sound"
// };

// const dog = Object.create(animal);

// dog.sound = "Woof!";

// console.log(dog.sound);
// console.log(animal.sound);

//// When JavaScript looks for sound on dog, it finds the property's value directly on dog.

//// It doesn't need to look at the prototype.

//// This behavior is called property shadowing: an object's own property takes precedence over a property with the same name on its prototype.



//// prototype + constructor function
// function Animal(name) {//This function initializes each new animal's name property.
//     this.name = name;
// }

// Animal.prototype.speak = function() {//This adds a method named speak to the object referenced by Animal.prototype.
//     console.log(this.name + " makes a sound.");
// };
// //Notice the difference:
//  //Animal is the constructor function.
//  //Animal.prototype is an object associated with that constructor.
// //speak is a method stored on that prototype object.



// const dog = new Animal("Buddy");
// const cat = new Animal("Whiskers");

// dog.speak();
// cat.speak();














//abstract 

// class BankAccount {
//     #balance = 5000;

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         if (amount <= 0) {
//             console.log("Deposit must be positive.");
//             return;
//         }

//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= 0 || amount > this.#balance) {
//             console.log("Invalid withdrawal.");
//             return;
//         }

//         this.#balance -= amount;
//     }
// }

// const account = new BankAccount();

// console.log(account.getBalance());

// account.deposit(1000);

// console.log(account.getBalance());

// account.withdraw(2000);

// console.log(account.getBalance());












// encapulation or also called private fields in js



// class BankAccount {   //1  class is a blueprint for creating objects
//     #balance = 5000;// 2 The # makes balance a private field.This means code outside the class cannot directly access or modify that field.

//     getBalance() {          // Create a method to check the balance
//         return this.#balance;// this methos returns the balance 
//                              // The method can access #balance because it belongs to the class.
//     }

//     deposit(amount) {//This method checks that the deposit amount is positive before adding it to the balance.
//         if (amount <= 0) {
//             console.log("Deposit must be positive.");
//             return;
//         }

//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= 0 || amount > this.#balance) {//The withdrawal amount is positive.
//                                                     //The withdrawal amount does not exceed the balance.
//             console.log("Invalid withdrawal.");
//             return;
//         }

//         this.#balance -= amount;
//     }
// }

// const account = new BankAccount();//2 This causes a SyntaxError because private fields cannot be accessed this way from outside their declaring class.
//                                  //
// console.log(account.getBalance());//2 Instead, the class provides methods to interact with the balance.

// account.deposit(1000);

// console.log(account.getBalance());

// account.withdraw(2000);

// console.log(account.getBalance());





//INHERITANCE 
// class Animal {// create the parent class
//     eat() {
//         console.log("The animal is eating");
//     }
// }
// //use extends
// class Dog extends Animal { //extends means that Dog inherits from Animal.
//     bark() {
//         console.log("Woof!");//Dog also has its own method, bark().
//     }
// }

// const myDog = new Dog();

// myDog.eat();
// myDog.bark();












////What is the super keyword?
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log("Woof!");
    }
}

const dog = new Dog("Buddy", "Labrador");

dog.eat();
dog.bark();

console.log(dog.breed);