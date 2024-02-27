const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(path, 'utf-8').trim();
  const lines = content.split('\n');

  const studentGroups = {};
  const fieldNames = lines[0].split(',');
  const names = fieldNames.slice(0, -1);

  for (const line of lines.slice(1)) {
    const studentData = line.split(',').map((str) => str.trim());
    if (studentData.length < names.length + 1) continue;
    const field = studentData.pop();
    if (!studentGroups[field]) {
      studentGroups[field] = [];
    }
    const studentEntries = names.map((propName, idx) => [
      propName,
      studentData[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const studTotal = Object.values(studentGroups)
    .reduce((prev, curr) => (prev || []).length + curr.length);
  console.log(`Number of students: ${studTotal}`);

  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${
      group.length}. List: ${studentNames}`);
  }
};

module.exports = countStudents;
