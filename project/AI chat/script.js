const input = document.getElementById("input");
const chatBox = document.getElementById("chatBox");

function sendMessage() {

  const text = input.value.trim();

  if(text === "") return;

  // user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerText = text;

  chatBox.appendChild(userMsg);

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;

  // bot reply
  setTimeout(() => {

    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";

    botMsg.innerText = getBotReply(text);

    chatBox.appendChild(botMsg);

    chatBox.scrollTop = chatBox.scrollHeight;

  }, 500);
}

function getBotReply(msg) {

  msg = msg.toLowerCase();

  if(msg.includes("hello")) return "Hi there!";
  if(msg.includes("how are you")) return "I'm fine!";
  if(msg.includes("bye")) return "Goodbye!";

  return "I don't understand.";
}

// enter key support
input.addEventListener("keypress", function(e){
  if(e.key === "Enter") {
    sendMessage();
  }
});
