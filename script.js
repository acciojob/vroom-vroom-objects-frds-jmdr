// Car class
class Car {
    constructor(make, model) { // Fixed typo in constructor
        this.make = make;
        this.model = model;
    }

    getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

// SportsCar class extending Car
class SportsCar extends Car {
    constructor(make, model, topSpeed) {
        super(make, model);
        this.topSpeed = topSpeed;
    }

    getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
