const express = require("express");
const app = express();

const { MessageEmbed, WebhookClient } = require("discord.js");

require("dotenv").config();

app.use(express.json());
app.listen(5000, (_) => {
  const embed = new MessageEmbed().setTitle("From Express").setColor("BLUE");

  const webhook = new WebhookClient({
    token: process.env.DISCORD_TOKEN,
    id: process.env.DISCORD_ID,
    URL: process.env.DISCORD_URL,
  });
  webhook
    .send({
      embeds: [embed],
      content: "testing from express",
      username: "David the Asshole",
      avatarURL: "https://i.imgur.com/AfFp7pu.png",
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("express app listening at 5000");
});
