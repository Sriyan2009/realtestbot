require("dotenv").config();
const fs = require('fs');

const Discord = require('discord.js');

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
  ]})

console.log("Bot is starting...");

const token = process.env.TOKEN;
/*
const users = require("./users.txt");

fs.readFile = ('test.txt', "utf8",(err, data) =>{
    if(err){
        console.error
        return;
    }
    console.log(data)
});
*/
client.login(token)

console.log("Bot has started!");
