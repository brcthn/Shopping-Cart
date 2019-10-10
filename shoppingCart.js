class Product {
    constructor(name, price, count) {
        this.name = name;
        this.count = count;
        this.price = price;
    }
}
let p1 = new Product("pen", "250", 1);
let p2 = new Product("pencil", "100", 1);

class ShoppingCart {
    constructor() {
        this.products = [];
        this.productsName = [];  
    }
    addProduct(product) {
        this.products.push(product);
    }
    totalPrice() {
        let total = 0;
        for (var i = 0; i < this.products.length; i++) {
            total += parseInt(this.products[i].price)
        }
        this.discount(total);
        this.discountsecond();
        return total;
    }
    discount(total) {
        if (this.products.length >= 5) {
            let discount = 0;
            discount = total / 10;
            total = total - discount;
            console.log('----------------->' + total)
        }
        else {
            total = total;

        }
    }
    addProductName(product) {
        this.productsName.push(product);
    }
    discountsecond() {
        var counts = new Map();
        for (var i = 0; i < this.products.length; i++) {
            if (!counts.has(this.products[i].name)) {
                counts.set(this.products[i].name, this.products[i])
            } else {
                var p = counts.get(this.products[i].name);
                p.count += 1;
                counts.set(this.products[i].name, p)
            }
        }
        var toplam = 0;
        for (var [key, value] of counts) {
            toplam = toplam + (value.count - Math.floor((value.count / 4))) * value.price
        }
        console.log(toplam)
    }
    //replace("pen", p2)
    change(str,newProduct){
        for (var i = 0; i <this.products.length; i++) {
            if (this.products[i].name == str) {
                this.products[i] = newProduct
            }
        }
        console.log(this.products)
    }
}
let cart = new ShoppingCart();
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p1);
cart.addProduct(p2);
cart.addProduct(p2);
cart.totalPrice();
cart.change('pen',p2);