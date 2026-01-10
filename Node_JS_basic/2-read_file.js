let fs = require('fs');

function countStudents() {
  let databasecsv1 = './database.csv';

  try {
    let database = fs.readFileSync(databasecsv1, 'utf-8');
    let lines = database.trim().split('\n');
    let numberOfStudents = lines.length - 1;
    console.log(`Number of students: ${numberOfStudents}`);
    let students = lines.slice(1);
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
  } catch(error) {
    throw new Error('Cannot load the database')
  }
}

module.exports = countStudents;
