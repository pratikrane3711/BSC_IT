let questions = [

{
question:"HTML stands for?",
answers:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language"],
correct:0
},

{
question:"CSS used for?",
answers:["Styling","Database","Programming"],
correct:0
},

{
question:"JavaScript is?",
answers:["Programming Language","Database","Operating System"],
correct:0
}

];

let current = 0;
let score = 0;
let time = 10;
let timer;

function loadQuestion(){

if(current >= questions.length){
document.getElementById("result").innerText =
"Your Score: " + score;
return;
}

let q = questions[current];

document.getElementById("question").innerText = q.question;

let answersDiv = document.getElementById("answers");
answersDiv.innerHTML="";

q.answers.forEach((ans,index)=>{

let div = document.createElement("div");
div.classList.add("answer");
div.innerText = ans;

div.onclick = ()=>{

if(index === q.correct){
score++;
}

};

answersDiv.appendChild(div);

});

startTimer();
}

function nextQuestion(){
current++;
loadQuestion();
}

function startTimer(){

clearInterval(timer);

time = 10;

timer = setInterval(()=>{

document.getElementById("timer").innerText =
"Time: " + time;

time--;

if(time < 0){
clearInterval(timer);
nextQuestion();
}

},1000);
}

loadQuestion();
