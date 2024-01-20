var numberOfStudents=0
///
function addStudent(firstName, lastName, email, age, education){
    student=createStudent(firstName, lastName, email, age, education)
    students.push(student)
    numberOfStudents=students.length
    return student
}
////
function getNumberOfStudents(){
    return `The number of Students is ${numberOfStudents}`
}
////
var students=[]
////
function clearStudents(){
    numberOfStudents=0
    students=[]
    return `All the students has been removed.`
}
////
function createFullName(firstName, lastName) { 
    return firstName+' '+lastName
 }
/////
// function getStudentByInitials(name, initial) { 
//         if(name[0].toLowerCase()===initial.toLowerCase()
//         ){
//     return true}
//     else{
//        return false
//     }
//  }
//  
 function isFullName(name){
    var x =name.split(' ')
    if(x.length===2){
        return true
    }
    else{
        return false
    }
 }
 ////
 function getStudentsByInitials(initial){
    var arr =[]
    var i = 0
    while (i<students.length){
        if(students[i][0].toLowerCase()===initial.toLowerCase()){
            arr.push(students[i])
        }
        i++
    }
    return arr
}
////
function getStudentsByInitials(firstInitial, secondInitial) {
    var res = [];

    for (var i = 0; i < students.length; i++) {
        if (isFullName(students[i])) {
            var c = students[i].split(' ');

            if (
                c[0][0].toLowerCase() === firstInitial.toLowerCase() &&
                c[1][0].toLowerCase() === secondInitial.toLowerCase()
            ) {
                res.push(students[i]);
            } else {
                console.log(false);
            }
        } else {
            return 'students do not contain full name';
        }
    }

    return res;
}

///
function createStudent(firstName, lastName, email, age, education) {
    return {
        firstName:firstName,
        lastName:lastName,
        email:email,
        age:age,
        education:education,
        skills:[]
    }
} 
////
function addSkills(student, skills) {
    for(var i=0;i<skills.length;i++){
            if(!student.skills.includes(skills[i])){
                student['skills'].push(skills[i])
            }  
     }
    return student.skills
  }
  /////
  function removeStudent(firstName) {
    for(var i =0;i<students.length;i++){
        if(student[i].firstName===firstName){
            students=students.slice(i+1)
        }
    }
    return 'done'
  }
  ////
  function removeStudent(firstName) {
    for(var i =0;i<students.length;i++){
        if(students[i].firstName===firstName){
            students=students.slice(i+1)
            numberOfStudents=students.length

        }
    }
    return 'done'
    /// still some issues
  }
  ////
  function isStudentOlderThan(student, age) {
    if(student.age>age){
       return true
    }
else{
return false
}
}

  ////
  function doesStudentHaveSkills(student) {
        if(student.skills.length>0){
            return true
        }
        else{
            return false
        }
     }
     function isStudentQualified(student) {
        if((isStudentOlderThan(student,18)===true)&&(doesStudentHaveSkills(student)===true)){
            return true
        }
        return false
     }
     /////
     function numberOfStudentsOlderThan(age) {
        var count =0
        for(var i =0;i<students.length;i++){
            if(isStudentOlderThan(students[i],age)===true){
                count++
            }
        }
        return count
     }
     ////
     function getStudentsWithSkills() {
        var arr =[]
        for (var i =0;i<students.length;i++){
            if(doesStudentHaveSkills(students[i])===true){
                arr.push(students[i])
            }
        }
        return arr
     }
     ///
     function getAllStudentsWithSkill(skill) {
        var arr =[]
        for(var i=0;i<students.length;i++){
            if(students[i].skills.includes(skill)){
                arr.push(students[i])
            }  
     }
     return arr
    } 
    ////