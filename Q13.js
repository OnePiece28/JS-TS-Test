function checkInventory(product, quantity) {
	if (quantity < 5) {
		throw new Error(`${product} inventory is below 5 units`);
	}

	return `${product} inventory is sufficient`;
}

try {
	console.log(checkInventory("Widget", 9));
} catch (error) {
	console.error(error.message);
}
