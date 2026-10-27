class Student
 {
         name: string
		 studentId: string
		 grade: string
		 address: string

         constructor(name: string, studentId: string, grade: string,address: string ) {
            this.name = name;
            this.studentId = studentId;
            this.grade = grade;
            this.address = address;
        }

        displayInfo(): void {
            console.log(`ID: ${this.studentId} | Name: ${this.name} | Grade: ${this.grade} | Address: ${this.address}`);
         }
}

const p1 = new Student("Rohit", "AXD", "S", "Mumbai");
const p2 = new Student("Rohit", "AXD", "S", "Mumbai");
const p3 = new Student("Rohit", "AXD", "S", "Mumbai");

p1.displayInfo();
p2.displayInfo();
p3.displayInfo();