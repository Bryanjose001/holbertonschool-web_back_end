export default function updateStudentGradeByCity(myStudents,city,newGrades){    
    return myStudents.filter((student) => student.location === city).map((student) =>{
        let mystudnetsgrades = newGrades.find((myvar) => myvar.id === student.id)
    return {...student,mystudnetsgrades}
    } )
}