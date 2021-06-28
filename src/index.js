const http = require("http");
const Discord = require("discord.js");
const client = new Discord.Client();
http
  .createServer((req, res) => {
    res.end("pong");
  })
  .listen(8080); //for uptime robots ping

//config
const claim = "Reaja com";
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
