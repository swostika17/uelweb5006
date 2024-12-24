const dateofbirth="28/08/2005"
const getstudentName=()=>{
    return "swostika lama"
}
const getcampusname=()=>{
    return"UEL"
}
exports.getName=getstudentName
exports.location=getcampusname
exports.dob=dateofbirth
exports.studentGrade=(marks)=>{
    if(marks>50&& marks<70)return "b grade"
    else return"A grade"
}