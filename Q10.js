const products = [
	{ name: "Laptop", price: 999, category: "Electronics" },
	{ name: "Headphones", price: 149, category: "Accessories" },
];

// Array destructuring extracts product names.
const [{ name: firstProductName }, { name: secondProductName }] = products;
console.log(firstProductName, secondProductName);

// Object destructuring extracts details from one product.
const { name, price, category } = products[0];
console.log(name, price, category);
