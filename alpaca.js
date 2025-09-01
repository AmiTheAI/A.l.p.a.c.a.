const API_URL = "https://a-l-p-a-c-njdunpqxk-amitheais-projects.vercel.app/api/alpaca";

async function sendMessage(userMsg) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg }),
  });

  const data = await res.json();
  appendMessage("ALPACA", data.reply);
}
