const { Client, Intents } = require("discord.js");
const dotenv = require('dotenv')

dotenv.config();
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("messageCreate", (message) => {
    if (message.content.startsWith("ping")) {
        message.channel.send("pong!");
    }
});

client.login(process.env.TOKEN);