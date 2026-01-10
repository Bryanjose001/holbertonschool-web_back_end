let fs = require('fs');

function countStudents(){
    let databasecsv1 = './database.csv'

    try{
        let database = fs.readFileSync(databasecsv1, 'utf-8')

        let lines = database.trim().split('\n')
        
        let numerofStudents = lines.length - 1

        console.log(`Number of students: ${numerofStudents}`)
        
    } catch(error1){
    throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
