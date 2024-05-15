U59555732

// Define the Car class
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to accelerate the car's speed by 10 km/h
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} accelerated. New speed: ${this.speed} km/h`);
    }

    // Method to brake the car's speed by 5 km/h
    brake() {
        this.speed -= 5;
        console.log(`${this.make} slowed down. New speed: ${this.speed} km/h`);
    }
}

// Test Data
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

// Test accelerate and brake methods
console.log("Initial Speeds:");
console.log(`${car1.make} speed: ${car1.speed} km/h`);
console.log(`${car2.make} speed: ${car2.speed} km/h`);

console.log("\nAccelerating and Braking:");
car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.brake();
