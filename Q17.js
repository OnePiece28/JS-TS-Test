const students = [
	{ name: "Student 1", marks: 85 },
	{ name: "Student 2", marks: 92 },
	{ name: "Student 3", marks: 78 },
];

const totalMarks = students.reduce((total, student) => total + student.marks, 0);

console.log(`Total marks scored by all students: ${totalMarks}`);
