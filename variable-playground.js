var person ={
    name: "Ik",
    age: 21
}

function updatePerson(obj){
    // obj ={
    //     name:"Ik",
    //     age: 24
    // }
    
    obj.age=24;
}

updatePerson(person);
console.log(person)


// Array

var grades = [15, 88];

function addGrades(gradesArr){
     gradesArr.push(55);
     debugger;
    // gradesArr = [12, 13, 24]

}

 addGrades(grades);
console.log(grades)