let students =
JSON.parse(localStorage.getItem("students")) || [];

function showStudents(){

let list = document.getElementById("studentList");
list.innerHTML="";

students.forEach((stu,index)=>{

let row = `
<tr>
<td>${stu.name}</td>
<td>${stu.course}</td>
<td>${stu.age}</td>
<td>
<button onclick="deleteStudent(${index})">
Delete
</button>
</td>
</tr>
`;

list.innerHTML += row;

});

localStorage.setItem(
"students",
JSON.stringify(students)
);
}

function addStudent(){

let name =
document.getElementById("name").value;

let course =
document.getElementById("course").value;

let age =
document.getElementById("age").value;

if(name=="" || course=="" || age=="")
return;

students.push({name,course,age});

showStudents();

document.getElementById("name").value="";
document.getElementById("course").value="";
document.getElementById("age").value="";
}

function deleteStudent(index){
students.splice(index,1);
showStudents();
}

showStudents();
