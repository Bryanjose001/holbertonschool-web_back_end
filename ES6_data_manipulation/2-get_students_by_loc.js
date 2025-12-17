export default function getStudentsByLocation(city,myStudents){
    if(!Array.isArray(myStudents)){
        return[];
    }
    return myStudents.filter((myStudents) => myStudents.location === city)
}