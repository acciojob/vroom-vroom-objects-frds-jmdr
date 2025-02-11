// Complete the js code
// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

	class Car{
		constroctor(make, model){
			this.make= make;
			this.model= model;
		}
	}
// Car.prototype.getMakeModel() = function(){
// 	return`${this.make} ${this.model}`;
		 getMakeModel() {
        return `${this.make} ${this.model}`;
    }
}

class SportsCar extends Car{
	constructor(make, model, topSpeed) {
		super(make, model);
		this.topSpeed=topSpeed;
		
	}
  getTopSpeed() {
        return this.topSpeed;
    }
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
