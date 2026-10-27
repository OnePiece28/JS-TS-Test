class School {
	static totalStudents = 0;
	studentList: Record<string, unknown>[] = [];

	static incrementTotalStudents(): void {
		School.totalStudents++;
	}

	addStudent(studentDetails: Record<string, unknown>): void {
		this.studentList.push(studentDetails);
		School.incrementTotalStudents();
	}
}
const s1 = new School();
s1.addStudent({ name: "Rohit" });
console.log(School.totalStudents)
console.log(s1.studentList)