const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

// Fungsi respon sederhana
function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hai") || input.includes("halo")) {
    return "Hai juga! 😊";
  } else if (input.includes("apa kabar")) {
    return "Saya baik, terima kasih! Kamu sendiri?";
  } else if (input.includes("siapa kamu")) {
    return "Saya chatbot sederhana buatan Python dan JavaScript.";
  } else if (input.includes("ngapain")) {
    return "Lagi nunggu kamu ngobrol 😄";
  } else if (input.includes("terima kasih")) {
    return "Sama-sama! 😁";
  } else if (input.includes("bye")) {
    return "Sampai jumpa! 👋";
  } else {
    return "Maaf, aku belum mengerti maksudmu 😅";
  }
}

// Kirim pesan
function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatBox.appendChild(userMsg);

  userInput.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.textContent = getBotResponse(message);
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
