console.log("Example with class");
class Car {
	constructor(brand) {
		this.brand = brand;
		this.speed = 0;
	}
	accelerate(amount) {
		this.speed += amount;
	}
	brake(amount) {
		if (this.speed <= amount) {
			this.speed = 0;
		}
		else {
			this.speed -= amount;
		}
	}
	status() {
		return this.brand + " running at " + this.speed + " km/h";
	}
	stop() {
		this.speed = 0;
	}

	runOrNot() {
		if (this.speed > 0) {
			return true;
		}
		else {
			return false;
		}
	}
}
var car = new Car("Ford");

console.log(car.status());
car.accelerate(50);
console.log(car.status());
car.accelerate(100);
console.log(car.status());
car.brake(25);
console.log(car.status());

var car2 = new Car("Ferrari");
car2.accelerate(200);
console.log(car2.status());

var car3 = new Car("Mondeo");
car3.accelerate(75);
console.log(car3.status());

console.log(car3.runOrNot());
car3.stop();
console.log(car3.status());
console.log(car3.runOrNot());
car3.brake(100)
console.log(car3.status());