document.addEventListener("DOMContentLoaded", loadEntries);

function saveEntry() {
  const date = document.getElementById("journalDate").value;
  const text = document.getElementById("journalText").value;

  if (date === "" || text === "") {
    alert("Please select a date and write something!");
    return;
  }

  const entry = { date, text };
  let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.push(entry);
  localStorage.setItem("journalEntries", JSON.stringify(entries));

  document.getElementById("journalText").value = "";
  displayEntries();
}

function loadEntries() {
  displayEntries();
}

function displayEntries() {
  const entriesDiv = document.getElementById("entries");
  entriesDiv.innerHTML = "";

  let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];

  entries.reverse().forEach((entry, index) => {
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <div class="entry-date">${entry.date}</div>
      <div>${entry.text}</div>
      <button onclick="deleteEntry(${entries.length - 1 - index})">Delete</button>
    `;
    entriesDiv.appendChild(div);
  });
}

function deleteEntry(index) {
  let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.splice(index, 1);
  localStorage.setItem("journalEntries", JSON.stringify(entries));
  displayEntries();
}
