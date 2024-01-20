function StudentManagementSystem() {
    var instance = {
        numberOfStudents: 0,
        students: [],
        getNumberOfStudents: getNumberOfStudents,
        clearStudents: clearStudents,
        createFullName: createFullName,
        isFullName: isFullName,
        getStudentsByInitials: getStudentsByInitials,
        addSkills: addSkills,
        removeStudent: removeStudent,
        isStudentOlderThan: isStudentOlderThan,
        doesStudentHaveSkills: doesStudentHaveSkills,
        isStudentQualified: isStudentQualified,
        numberOfstudentsOlderThan: numberOfstudentsOlderThan,
        getstudentsWithSkills: getstudentsWithSkills,
        getAllstudentsWithSkill: getAllstudentsWithSkill
    };

    return instance;
}








///
function addStudent(firstName, lastName, email, age, education){
    student=createStudent(firstName, lastName, email, age, education)
    this.students.push(student)
    numberOfStudents=this.students.length
    return student
}
////
function getNumberOfStudents(){
    return `The number of Students is ${this.numberOfStudents}`
}
////

////
function clearStudents(){
    this.numberOfStudents=0
    this.students=[]
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
    while (i<this.students.length){
        if(this.students[i][0].toLowerCase()===initial.toLowerCase()){
            arr.push(this.students[i])
        }
        i++
    }
    return arr
}
////
function getStudentsByInitials(firstInitial, secondInitial) {
    var res = [];

    for (var i = 0; i < this.students.length; i++) {
        if (isFullName(this.students[i])) {
            var c = this.students[i].split(' ');

            if (
                c[0][0].toLowerCase() === firstInitial.toLowerCase() &&
                c[1][0].toLowerCase() === secondInitial.toLowerCase()
            ) {
                res.push(this.students[i]);
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
//   function removeStudent(firstName) {
//     for(var i =0;i<this.students.length;i++){
//         if(student[i].firstName===firstName){
//             this.students=this.students.slice(i+1)
//         }
//     }
//     return 'done'
//   }
  ////
  function removeStudent(firstName) {
    for(var i =0;i<this.students.length;i++){
        if(this.students[i].firstName===firstName){
            this.students=this.students.splice(i,1)
            numberOfstudents=this.students.length

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
     function numberOfstudentsOlderThan(age) {
        var count =0
        for(var i =0;i<this.students.length;i++){
            if(isStudentOlderThan(this.students[i],age)===true){
                count++
            }
        }
        return count
     }
     ////
     function getstudentsWithSkills() {
        var arr =[]
        for (var i =0;i<this.students.length;i++){
            if(doesStudentHaveSkills(this.students[i])===true){
                arr.push(this.students[i])
            }
        }
        return arr
     }
     ///
     function getAllstudentsWithSkill(skill) {
        var arr =[]
        for(var i=0;i<this.students.length;i++){
            if(this.students[i].skills.includes(skill)){
                arr.push(this.students[i])
            }  
     }
     return arr
    } 
    ////
