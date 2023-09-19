const fs = require('fs');

function countStudents(path) {
  try {
    // Read the DB file syncronously
    const data = fs.readFileSync(path, 'utf-8');
    // Parse the CSV data
    const lines = data.split('\n');

    // Count no. of lines excluding headers
    let count = 0;

    // Initialize counters and lists for CS and SWE students
    let csCount = 0;
    let sweCount = 0;
    const csStudents = [];
    const sweStudents = [];

    // Process each line(skip the header)
    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i].trim();
      if (line) {
        count += 1;
        const [firstname, lastname, , field] = line.split(',');
        if (field === 'CS') {
          csCount += 1;
          csStudents.push(`${firstname} ${lastname}`);
        } else if (field === 'SWE') {
          sweCount += 1;
          sweStudents.push(`${firstname} ${lastname}`);
        }
      }
    }

    console.log(`Number of students: ${count}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csStudents}`);
    console.log(`Number of students in CS: ${sweCount}. List: ${sweStudents}`);
  } catch (error) {
    // Handle errors, including the case when the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
