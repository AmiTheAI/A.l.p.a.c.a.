const res = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userMsg })
});

let data;
try {
  data = await res.json();
} catch (err) {
  const text = await res.text();
  appendMessage("ERROR", "Non-JSON response: " + text);
  return;
}

if (data.error) {
  appendMessage("ERROR", data.error);
} else {
  appendMessage("ALPACA", data.reply);
}
