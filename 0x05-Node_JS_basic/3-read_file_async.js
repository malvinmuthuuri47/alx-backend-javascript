const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter(Boolean);
        const count = lines.length - 1;

        const students = {
          CS: [],
          SWE: [],
        };

        lines.slice(1).forEach((line) => {
          const [firstname, , , field] = line.split(',');
          if (field === 'CS' || field === 'SWE') {
            students[field].push(firstname);
          }
        });

        console.log(`Number of students: ${count}`);
        console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
        console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);

        resolve(count);
      }
    });
  });
}

module.exports = countStudents;
