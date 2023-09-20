const http = require('http');
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

        resolve({ count, ...students });
      }
    });
  });
}

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databasePath = 'database.csv'; // Change this to your database file path

    countStudents(databasePath)
      .then((countStudentsData) => {
        const response = `This is the list of our students\nNumber of students: ${countStudentsData.count}\nNumber of students in CS: ${countStudentsData.CSCount}. List: ${countStudentsData.CSList.join(', ')}\nNumber of students in SWE: ${countStudentsData.SWECount}. List: ${countStudentsData.SWEList.join(', ')}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(response);
      })
      .catch((error) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
}).listen(port);

module.exports = app;
