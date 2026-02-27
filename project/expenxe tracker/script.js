let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function updateUI(){
    let list = document.getElementById("list");
    list.innerHTML="";

    let total = 0;

    expenses.forEach((exp,index)=>{
        total += Number(exp.amount);

        let li = document.createElement("li");
        li.innerHTML =
        `${exp.text} ₹${exp.amount}
        <button onclick="deleteExpense(${index})">X</button>`;

        list.appendChild(li);
    });

    document.getElementById("balance").innerText = total;

    localStorage.setItem("expenses",JSON.stringify(expenses));
}

function addExpense(){
    let text = document.getElementById("text").value;
    let amount = document.getElementById("amount").value;

    if(text=="" || amount=="") return;

    expenses.push({text,amount});
    updateUI();

    document.getElementById("text").value="";
    document.getElementById("amount").value="";
}

function deleteExpense(index){
    expenses.splice(index,1);
    updateUI();
}

updateUI();
