const fs = require('node:fs/promises');

async function countStudents(path) {
  try {
    const database = await fs.readFile(path, 'utf-8');
    const lines = database.trim().split('\n');
    lines.shift();

    const students = lines.filter((line) => line);
    let output = `Number of students: ${students.length}`;

    const fields = {};

    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    });

    for (const field in fields) {
      output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
