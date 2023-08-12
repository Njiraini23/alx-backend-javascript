interface Student {
  firstName: string, 
  lastName: string,
  age: number,
  location: string
}

const student1: Student = {
  firstName: 'Ken',
  lastName: 'Peters',
  age: 29,
  location: 'Nakuru'
}

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Rogers',
  age: 31,
  location: 'Nairobi'
}

//the students array
const studentsList: Student[] = [student, student2];

//rendering tables and appending the rows for the students
const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "lightgrey";
table.appendChild(tbody);

studentslist.forEach((student)) => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  firstNameCell.style.border = "2px solid white";
  locationCell.style.border = "2px solid white";
  firstNameCell.style.padding "4px";
  locationCell.style.padding = "4px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

document.body.appendChild(table);
