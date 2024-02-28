const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} path The path to the CSV data file.
 * @returns {Promise} A promise that resolves with the student counts or rejects with an error.
 */
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n').filter((line) => line.trim() !== '');

        const studentGroups = {};
        const fieldNames = lines.shift().split(',');

        lines.forEach((line) => {
          const [firstName, lastName, age, field] = line.split(',');
          if (!(firstName === 'firstname' || lastName === 'lastname' || age === 'age' || field === 'field')) {
            studentGroups[field] = studentGroups[field] || { count: 0, names: [] };
            studentGroups[field].count++;
            studentGroups[field].names.push(firstName);
          }
        });

        const totalCount = lines.length;
        const result = {
          totalCount,
          studentGroups,
        };
        resolve(result);
      }
    });
  });
};

module.exports = countStudents;
