//  CONSTRUCTOR FUNCTION
// this basicly defins a constructor function
function Car(brand, color) {// both brand and color are parameters 
    this.brand = brand;//that will receve their value
    this.color = color;//When you call the constructor with new, this refers to the new object being created.

    this.drive = function() {//this is basicly a method in constructor function
        console.log(this.brand + " is driving!");
    };
}

const car1 = new Car("Toyota", "Red");// new does four things but what u need to know is that it creates a new object
const car2 = new Car("BMW", "Black");

car1.drive();//to call method you need to use (.) then method name
car2.drive();
