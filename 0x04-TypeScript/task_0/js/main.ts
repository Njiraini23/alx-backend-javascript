interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: 'Ken';
  lastName: 'Peters';
  age: 30,
  location: 'Nairobi';
}

const student2: Student = {
  firstName: 'Bob';
  lastName: 'Rogers';
  age: 29,
  location: 'Nakuru';
}

//construct the student array
const studentList: Student[] = [student1, student2];

//render the table using vanilla javascript for each student
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background =
