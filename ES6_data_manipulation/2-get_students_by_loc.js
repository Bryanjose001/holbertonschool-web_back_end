export default function getStudentsByLocation(city,myStudents){
    if(!Array.isArray(myStudents)){
        return[];
    }
    return myStudents.filter((student) => student.location === city);
}
