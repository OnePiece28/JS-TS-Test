// Simulate retrieving a customer's order history from an online store.
function fetchOrderHistory(customerId) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve([
				{ orderId: "ORD-1001", item: "Wireless Mouse", date: "2025-01-12", total: 24.99 },
				{ orderId: "ORD-1002", item: "Keyboard", date: "2025-02-03", total: 49.99 },
			]);
		}, 1000);
	});
}

async function displayOrderHistory(customerId) {
	console.log(`Loading order history for customer ${customerId}...`);

	try {
		const orders = await fetchOrderHistory(customerId);

		console.log("Order history:");
		orders.forEach((order) => {
			console.log(
				`${order.orderId}: ${order.item} — ${order.date} — $${order.total.toFixed(2)}`
			);
		});
	} catch (error) {
		console.error("Could not load order history:", error);
	}
}

displayOrderHistory("CUST-42");
