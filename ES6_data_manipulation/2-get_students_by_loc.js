import getListStudents from "./0-get_list_students"

export default function getStudentsByLocation(city,myStudents){
    let myarray = myStudents
    myStudents = getListStudents();
    return myStudents
}