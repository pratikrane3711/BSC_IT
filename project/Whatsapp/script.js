let currentChat = "";

const chatHeader = document.getElementById("chatHeader");
const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");

function openChat(name) {
  currentChat = name;
  chatHeader.innerText = name;
  messages.innerHTML = "";
}

function sendMessage() {

  if(currentChat === "") {
    alert("Select a chat first!");
    return;
  }

  const text = messageInput.value.trim();
  if(text === "") return;

  const msg = document.createElement("div");
  msg.className = "user-message";
  msg.innerText = text;

  messages.appendChild(msg);

  messageInput.value = "";
  messages.scrollTop = messages.scrollHeight;
}
