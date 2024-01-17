interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mduduzi',
  lastName: 'Buthelezi',
  age: 35,
  location: 'Enkonjeni',
};

const student2: Student = {
  firstName: 'Sibusiso',
  lastName: 'Buthelezi',
  age: 34,
  location: 'Enkonjeni',
};

const studentList: Student[] = [student1, student2];

const table = document.createElement('table');

const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
headerCell1.textContent = 'First Name';
const headerCell2 = headerRow.insertCell(1);
headerCell2.textContent = 'Location';

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  cell1.textContent = student.firstName;
  const cell2 = row.insertCell(1);
  cell2.textContent = student.location;
});
