const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

// Middleware for handling JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Function to count students
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

        resolve({
          count,
          students,
        });
      }
    });
  });
}

// Route for the root path '/'
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Route for '/students' with database file path as a query parameter
app.get('/students', async (req, res) => {
  const databasePath = process.argv[2];

  if (!databasePath) {
    res.status(500).send('Cannot load the database');
  } else {
    try {
      const result = await countStudents(databasePath);
      const { count, students } = result;

      let response = 'This is the list of our students\n';
      response += `Number of students: ${count}\n`;

      for (const field of ['CS', 'SWE']) {
        response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
