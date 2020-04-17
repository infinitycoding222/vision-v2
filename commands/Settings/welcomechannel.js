const { MessageEmbed} = require('discord.js')
const db = require("quick.db")

module.exports.run = (client, message, args) => {
  let channel = message.mentions.channels.first();
    db.set(`wchannel_${message.guild.id}`, channel.id)
  message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the welcome channel to ${channel}`))
    
}
module.exports.help = {
    name: "welcomechannel",
    description: "",
    aliases: ["wch"],
    category: "Settings"
}

module.exports.requirements = {
    clientPerms: [],
    userPerms: ["MANAGE_GUILD"],
    ownerOnly: false
}