function countStudents(){
    let fs = require('fs');
    let databasecsv1 = './database.csv'

    try{
        let data = fs.readFileSync(databasecsv1, 'utf8')

        console.log('Number of students:')
        console.log(data)
    } catch(error1){
    console.error('Cannot load the database', error.message)
    }

    console.log('This line executes after the file has been completely read.')
}