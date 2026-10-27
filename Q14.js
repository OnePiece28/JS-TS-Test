// Simulate fetching product details from an online store's server.
function fetchProductDetails(productId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (productId !== 101) {
				reject(new Error("Product not found"));
				return;
			}

			resolve({
				id: productId,
				name: "Wireless Headphones",
				price: 79.99,
				availability: "In stock",
			});
		}, 1000);
	});
}

fetchProductDetails(101)
	.then((product) => console.log("Product details:", product))
	.catch((error) => console.error("Fetch failed:", error.message));
