const { error } = require('console');

function countStudents(path){
    let fs = require('fs');
    let databasecsv1 = './database.csv'

    try{
        let data = fs.readFileSync(databasecsv1, 'utf8')

        console.log('Database file read successfully:')
        console.log(data)
    } catch(error1){
    console.error('Error reading the database file:', error.message)
    }
    
    console.log('This line executes after the file has been completely read.')
}