const fs = require('node:fs/promises');

async function readDatabase(path) {
  try {
    const data = await fs.readFile(path, 'utf-8');

    const lines = data.split('\n');
    lines.shift(); // remove header

    const students = lines.filter((line) => line.trim() !== '');

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

    return fields;
  } catch (error) {
    return Promise.reject(error);
  }
}

module.exports = readDatabase;
