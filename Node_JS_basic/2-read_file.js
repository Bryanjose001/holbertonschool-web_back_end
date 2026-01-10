let fs = require('fs');
function countStudents(path) {
  if (!path) {
    throw new Error('Cannot load the database');
  }
  try {
    let database = fs.readFileSync(path, 'utf-8');
    let lines = database.split('\n');
    lines.shift();
    let students = lines.filter((line) => line.trim() !== '');
    console.log(`Number of students: ${students.length}`);
    let fields = {};
    students.forEach((line) => {
      let parts = line.split(',');
      let firstName = parts[0];
      let field = parts[parts.length - 1];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    });
    for (let field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
