const fs = require('fs');

function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }

  try {
    const database = fs.readFileSync(path, 'utf-8');

    const lines = database.split('\n');
    lines.shift();

    const students = lines.filter((line) => line.trim() !== '');

    console.log(`Number of students: ${students.length}`);

    const fields = {};

    students.forEach((line) => {
      const parts = line.split(',');
      const firstName = parts[0];
      const field = parts[parts.length - 1];

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName);
    });

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
        );
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
