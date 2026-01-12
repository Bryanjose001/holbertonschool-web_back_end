const fs = require('node:fs/promises');

async function countStudents(path) {
  try {
    const database = await fs.readFile(path, 'utf-8');

    const lines = database.split('\n');
    lines.shift();

    const students = lines.filter((line) => line.trim() !== '');

    let output = `Number of students: ${students.length}\n`;

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
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
    }

    return output.trim();
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
