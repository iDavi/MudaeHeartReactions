const http = require("http");
const Discord = require("discord.js");
const client = new Discord.Client();
http.createServer().listen(8080); //for uptime robots ping

//config
const claim = "React with any emoji to claim!";
const emojis = ["💖", "💞", "💘", "💗"];
const token = process.env.DISCORDTOKEN;
//-----

client.login(token);
client.on("ready", () => {
  console.log("ready");
});
client.on("message", (msg) => {
  try {
    if (checkIfIsRoll(msg)) {
      msg.react(emojis[Math.floor(Math.random() * emojis.length)]);
    }
  } catch (err) {}
});

function checkIfIsRoll(msg) {
  const embed = JSON.stringify(msg.embeds[0]);
  if (embed.includes(claim)) return true;
  return false;
}
