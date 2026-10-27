const students = [
	{ name: "Student 1", marks: 85 },
	{ name: "Student 2", marks: 92 },
	{ name: "Student 3", marks: 78 },
];
function filterStudentsAbove80(student) {
	return student.filter((student) => student.marks > 80);
}
let result = filterStudentsAbove80(students)
console.log(result)