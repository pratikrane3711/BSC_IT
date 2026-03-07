let notes =
JSON.parse(localStorage.getItem("notes")) || [];

function showNotes(){

let notesDiv =
document.getElementById("notes");

notesDiv.innerHTML="";

notes.forEach((note,index)=>{

let div = document.createElement("div");
div.className="note";

div.innerHTML =
`<span class="delete" onclick="deleteNote(${index})">X</span>
${note}`;

notesDiv.appendChild(div);

});

localStorage.setItem(
"notes",
JSON.stringify(notes)
);

}

function addNote(){

let input =
document.getElementById("noteInput");

if(input.value=="") return;

notes.push(input.value);

input.value="";

showNotes();
}

function deleteNote(index){

notes.splice(index,1);

showNotes();
}

showNotes();

let notes =
JSON.parse(localStorage.getItem("notes")) || [];

function showNotes(){

let notesDiv =
document.getElementById("notes");

notesDiv.innerHTML="";

notes.forEach((note,index)=>{

let div = document.createElement("div");
div.className="note";

div.innerHTML =
`<span class="delete" onclick="deleteNote(${index})">X</span>
${note}`;

notesDiv.appendChild(div);

});

localStorage.setItem(
"notes",
JSON.stringify(notes)
);

}

function addNote(){

let input =
document.getElementById("noteInput");

if(input.value=="") return;

notes.push(input.value);

input.value="";

showNotes();
}

function deleteNote(index){

notes.splice(index,1);

showNotes();
}

showNotes();

