export default function getStudentIdsSum(myStudents){
    return myStudents.reduce((suma,obj) => suma +  obj.id, 0);
}