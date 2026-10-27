abstract class Person {
	protected name: string;
	protected age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	abstract getDetails(): string;
	abstract getRole(): string;
}

class Q4Student extends Person {
	private studentId: string;

	constructor(name: string, age: number, studentId: string) {
		super(name, age);
		this.studentId = studentId;
	}

	getDetails(): string {
		return `Student: ${this.name}, Age: ${this.age}, ID: ${this.studentId}`;
	}

	getRole(): string {
		return "Student";
	}
}

class Teacher extends Person {
	private subject: string;

	constructor(name: string, age: number, subject: string) {
		super(name, age);
		this.subject = subject;
	}

	getDetails(): string {
		return `Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
	}

	getRole(): string {
		return "Teacher";
	}
}

// Instantiation and usage
const q4Student = new Q4Student("Rohit", 22, "ASC1");
console.log(q4Student.getDetails());
console.log(q4Student.getRole());

const q4Teacher = new Teacher("Vishal", 32, "ZXC2");
console.log(q4Teacher.getDetails());
console.log(q4Teacher.getRole());
