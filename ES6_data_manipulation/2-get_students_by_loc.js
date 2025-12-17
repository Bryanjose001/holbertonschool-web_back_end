export default function getStudentsByLocation(myStudents,city){
    if(!Array.isArray(myStudents)){
        return[];
    }
    return myStudents.filter((student) => student.location === city);
}
