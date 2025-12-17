export default function getListStudentIds(){
    let obj = {id:1}
    let obj1 = {id:2}
    let obj2 = {id:5}
    let studentIds = [obj,obj1,obj2];
    let myMap = new Map(studentIds);
    return myMap
}