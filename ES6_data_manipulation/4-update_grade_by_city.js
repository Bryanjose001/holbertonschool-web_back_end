export default function updateStudentGradeByCity(myStudents,city,newGrades){    
    return myStudents.filter((student) => student.location === city).map((student) =>{
        let mystudentstsgrades = newGrades.find((grade) => grade.id === student.id)
    return {...student,mystudentstsgrades:97}
    } )
}