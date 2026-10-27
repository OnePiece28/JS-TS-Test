// Employee CRUD operations. IDs are generated automatically and are unique.
const employees = [];
let nextEmployeeId = 1;

function createEmployee(name, salary, dept) {
	if (typeof name !== 'string' || name.trim().length === 0 || name.length > 30) {
		throw new Error('Name must be between 1 and 30 characters.');
	}
	if (!Number.isFinite(salary) || salary < 0) {
		throw new Error('Salary must be a non-negative number.');
	}
	if (typeof dept !== 'string' || dept.trim().length === 0) {
		throw new Error('Department is required.');
	}

	const employee = {
		id: nextEmployeeId++,
		name: name.trim(),
		salary,
		dept: dept.trim(),
	};
	employees.push(employee);
	return { ...employee };
}

function getEmployees() {
	return employees.map((employee) => ({ ...employee }));
}

function getEmployeeById(id) {
	const employee = employees.find((item) => item.id === id);
	return employee ? { ...employee } : null;
}

function updateEmployee(id, changes) {
	const employee = employees.find((item) => item.id === id);
	if (!employee) return null;

	const updated = { ...employee, ...changes };
	if (typeof updated.name !== 'string' || updated.name.trim().length === 0 || updated.name.length > 30) {
		throw new Error('Name must be between 1 and 30 characters.');
	}
	if (!Number.isFinite(updated.salary) || updated.salary < 0) {
		throw new Error('Salary must be a non-negative number.');
	}
	if (typeof updated.dept !== 'string' || updated.dept.trim().length === 0) {
		throw new Error('Department is required.');
	}

	Object.assign(employee, {
		name: updated.name.trim(),
		salary: updated.salary,
		dept: updated.dept.trim(),
	});
	return { ...employee };
}

function deleteEmployee(id) {
	const index = employees.findIndex((employee) => employee.id === id);
	if (index === -1) return false;
	employees.splice(index, 1);
	return true;
}

// Example usage:
const employee = createEmployee('Alex', 50000, 'Engineering');
console.log('Created:', employee);
console.log('All employees:', getEmployees());
console.log('Updated:', updateEmployee(employee.id, { salary: 55000 }));
console.log('Deleted:', deleteEmployee(employee.id));
