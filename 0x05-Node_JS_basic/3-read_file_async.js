const fs = require('fs');
const { promisify } = require('util');

// Promisify the readFile Function
const readFileAsync = promisify(fs.readFile);

async function countStudents(path) {
  try {
    const data = await readFileAsync(path, 'utf-8');

    // Split CSV data, filter out empty lines, and skip the header
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Initialize counters for CS and SWE students
    let csCount = 0;
    let sweCount = 0;
    const csList = [];
    const sweList = [];

    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      // Check if the field is CS or SWE and update respectively
      if (field === 'CS') {
        csCount += 1;
        csList.push(firstname);
      } else if (field === 'SWE') {
        sweCount += 1;
        sweList.push(firstname);
      }
    });

    // Log the number of students and lists
    console.log(`Number of students: ${lines.length - 1}`);
    console.log(`Number of students in CS: ${csCount}. List: ${csList.join(', ')}`);
    console.log(`Number of students in SWE: ${sweCount}. List: ${sweList.join(', ')}`);

    // Return an object with the counts and lists
    return {
      count: lines.length - 1,
      CSCount: csCount,
      CSList: csList,
      SWECount: sweCount,
      SWEList: sweList,
    };
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { countStudents };
