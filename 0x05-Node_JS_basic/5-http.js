const fs = require('fs');
const http = require('http');

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
        resolve(
          {
            count, students,
          },
        );
      }
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];

    if (!databasePath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database\n');
    } else {
      countStudents(databasePath)
        .then((result) => {
          const { count, students } = result;

          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.write('This is the list of our students\n');
          res.write(`Number of students: ${count}\n`);

          for (const field of ['CS', 'SWE']) {
            res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
          }
          res.end();
        })
        .catch((error) => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(`${error.message}\n`);
        });
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
