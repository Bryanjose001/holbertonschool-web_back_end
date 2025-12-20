export default function updateStudentGradeByCity(myStudents,city,newGrades){    
    return myStudents.filter((student) => student.location === city).map((student) =>{
        let mystudentstsgrades = newGrades.find((grade) => grade.studentId === student.id)
    return {...student,grade: mystudentstsgrades ? mystudentstsgrades.grade : 'N/A'}
    } )
}