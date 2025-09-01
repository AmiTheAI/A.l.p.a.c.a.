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

    const data = await res.json();
    document.getElementById("messages").innerHTML += `<p><b>You:</b> ${input}</p>`;
    document.getElementById("messages").innerHTML += `<p><b>ALPACA:</b> ${data.reply}</p>`;
  });
</script>
