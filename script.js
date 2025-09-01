document.getElementById("summonLore").addEventListener("click", async () => {
  const response = await fetch("https://your-railway-app.up.railway.app/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: "Describe Goober Monster’s dual form" })
  });

  const data = await response.json();
  document.getElementById("loreOutput").innerText = data.lore;
});}
