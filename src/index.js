const http = require("http");
const client = new require("discord.js").Client();
http.createServer().listen(8080); //for uptime robots ping

//config
const claim = "React with any emoji to claim!";
const emojis = ["💖", "💞", "💘", "💗"];
//-----

client.on("message", (msg) => {
  try {
    if (checkIfIsRoll(msg)) {
      msg.react(emojis[Math.floor(Math.random() * emojis.length)]);
    }
  } catch (err) {
    console.log("error: " + err);
  }
});

function checkIfIsRoll(msg) {
  const embed = JSON.stringify(msg.embeds[0]);
  if (embed.includes(claim)) return true;
  return false;
}
