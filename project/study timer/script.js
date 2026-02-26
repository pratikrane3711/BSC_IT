let time = 1500;
let timer;
let running = false;

function updateDisplay(){
    let minutes = Math.floor(time/60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        `${minutes}:${seconds < 10 ? "0"+seconds : seconds}`;
}

function startTimer(){
    if(running) return;

    running = true;
    timer = setInterval(()=>{
        if(time > 0){
            time--;
            updateDisplay();
        }else{
            alert("Time's Up!");
            clearInterval(timer);
        }
    },1000);
}

function pauseTimer(){
    running = false;
    clearInterval(timer);
}

function resetTimer(){
    running = false;
    clearInterval(timer);
    time = 1500;
    updateDisplay();
}

function addTask(){
    let input = document.getElementById("taskInput");
    let li = document.createElement("li");

    li.innerText = input.value;
    li.onclick = () => li.remove();

    document.getElementById("taskList").appendChild(li);
    input.value="";
}

updateDisplay();
