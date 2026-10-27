class Product {
	constructor(name, productId, price) {
		this.name = name;
		this.productId = productId;
		this.price = price;
	}

	displayDetails() {
		console.log(`Name: ${this.name}`);
		console.log(`Product ID: ${this.productId}`);
		console.log(`Price: $${this.price}`);
	}
}

const product = new Product("Notebook", "P001", 4.99);

// Access the product details
console.log(product.name);
console.log(product.productId);
console.log(product.price);

// Display all details
product.displayDetails();
