// alpaca.js — Frontend logic for ALPACA WAR ZONE

// === Face Flicker Madness ===
const faces = document.querySelectorAll(".alpaca-face");

function flashFaces() {
  faces.forEach(f => f.classList.remove("active"));
  const randomFace = faces[Math.floor(Math.random() * faces.length)];
  randomFace.classList.add("active");
  const nextFlash = Math.random() * 4000 + 1000; // 1s–5s
  setTimeout(flashFaces, nextFlash);
}

window.addEventListener("load", flashFaces);

// === Chat Logic ===
const form = document.getElementById("chatForm");
const messagesDiv = document.getElementById("messages");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("userInput");
  const userMsg = input.value.trim();
  if (!userMsg) return;

  appendMessage("YOU", userMsg);
  input.value = "";

  try {
    const res = await fetch("/api/alpaca", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userMsg })
    });

    const data = await res.json();
    if (data.reply) {
      appendMessage("ALPACA", data.reply);
    } else {
      appendMessage("ERROR", "Empty response from backend.");
    }
  } catch (err) {
    appendMessage("ERROR", "API call failed: " + err.message);
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  messagesDiv.appendChild(msg);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
.alpaca-hallucination {
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 15px auto;
}
