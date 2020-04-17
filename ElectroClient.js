let express = require("express");
let app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
const { token, prefix } = require("./config")
const { Client, Collection, MessageEmbed } = require("discord.js")
const db = require('quick.db');
const m = require('moment')

const client = new Client({
    disableEveryone: true
});
client.prefix = prefix;
client.commands = new Collection();
client.aliases = new Collection();
client.snipes = new Map();
client.esnipes = new Map();

const fetch = require("node-fetch");

const body = {
  users: client.users.cache.size, // <client>.users.size
  servers: client.users.cache.size, // <client>.guilds.size 
  shards: client.shard.count // <client>.shard.count
};

fetch("https://abstractlist.com/api/bots/694214787227451492/stats", {
  method: "POST",
  headers: {
    Authorization: "TJCbKIHHMfgrS4le9NKdupxPfrGhTPnc"
  },
  body: JSON.stringify(body)
})
  .then(res => res.json())
  .then(json => console.log(`Successfully posted stats to ADL API!`));

const commands = require("./structures/command")
commands.run(client)

const events = require("./structures/event")
events.run(client)

client.on("guildMemberAdd", member => {
    let channel = db.get(`wchannel_${member.guild.id}`)
    let role = db.get(`autorole_${member.guild.id}`)
    if(!role) return;
    let m = client.channels.cache.get(channel)
    if(m == null) return;
    let text = db.get(`wtext_${member.guild.id}`)
    if(text == null) return;
    member.roles.add(role)
    text = text.replace("{user}", member.user.tag)
               .replace("{membercount}", member.guild.memberCount)
               .replace("{created}", m.utc(member.user.createdAt).format('LLL'))   
     m.send(new MessageEmbed().setColor('GREEN').setDescription(text).setTimestamp().setThumbnail(member.user.displayAvatarURL()))
});
client.on("guildMemberRemove", member => {
    let ch2annel = db.get(`wchannel_${member.guild.id}`)
        let text = db.get(`ltext_${member.guild.id}`)
        if(text == null) return;
    text = text.replace("{user}", member.user.tag)
               .replace("{membercount}", member.guild.memberCount)
               .replace("{joined}", m.utc(member.joined).format('LLL'))   
    let m2 = client.channels.cache.get(ch2annel)
        if(m2 == null) return;
  m2.send(new MessageEmbed().setColor('RED').setDescription(text).setTimestamp().setThumbnail(member.user.displayAvatarURL()))
});

build();

function build () {
  client.login(token)
}