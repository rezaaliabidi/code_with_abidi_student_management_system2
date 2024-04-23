//Students Management System
class School {
    name;
    student = [];
    teacher = [];
    addStudent(stdobj) {
        this.student.push(stdobj);
    }
    addTeacher(teobj) {
        this.teacher.push(teobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    schoolName;
    constructor(name, age, schoolName) {
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
class Teacher extends Student {
}
//School
let school1 = new School("The City School");
let school2 = new School("Beacon House School");
let school3 = new School("Little Hearts School");
//Student
let s1 = new Student("Ahsan", 10, school1.name);
let s2 = new Student("Sara", 15, school2.name);
let s3 = new Student("Bilal", 12, school3.name);
//teacher
let t1 = new Teacher("Ms Anum", 26, school1.name);
let t2 = new Teacher("Ms Sehrish", 28, school2.name);
let t3 = new Teacher("Ms Bushra", 24, school3.name);
//add student
school1.addStudent(s1);
school2.addStudent(s2);
school3.addStudent(s3);
//add teacher
school1.addTeacher(t1);
school2.addTeacher(t2);
school3.addTeacher(t3);
console.log(t1);
console.log(t2);
console.log(t3);
//school
console.log(school1);
console.log(school2);
console.log(school3);
export {};
