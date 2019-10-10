
console.log("Objects containing other objects");
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
	toString() {
		return this.name + " " + this.price + "€";
	}
}
let p1 = new Product("vacuum cleaner", 100);
let p2 = new Product("pencil", 3);
let p3 = new Product("bike", 300);
class ShoppingCart {
	constructor() {
		this.products = []; // empty at first
	}
	addProduct(product) {
		this.products.push(product);
	}
	toString() {
		return "cart with: " + this.products;
	}
}
let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p3);
console.log("We have a " + cart);