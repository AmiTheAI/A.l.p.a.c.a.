<script>
  const API_URL = "https://a-l-p-a-c.vercel.app/api/alpaca";

  document.getElementById("chatForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("userInput").value;

   const res = await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: input })
});

const text = await res.text();
console.log("Raw response:", text);

let data;
try {
  data = JSON.parse(text);
} catch (err) {
  console.error("JSON parse failed:", err);
}
 document.getElementById("messages").innerHTML += `<p><b>You:</b> ${input}</p>`;
document.getElementById("messages").innerHTML += `<p><b>ALPACA:</b> ${data.reply}</p>`;
  });
</script>
