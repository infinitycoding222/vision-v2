const { MessageEmbed, Message } = require('discord.js')
const db = require("quick.db")

module.exports.run = (client, message, args) => {
  let text = args.join(" ")
db.set(`wtext_${message.guild.id}`, text)
  message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`Set the welcome text to **${text}**`))
    
}
module.exports.help = {
    name: "welcometext",
    description: "Sets the text when a member joins",
    aliases: ["wtxt"],
    category: "Settings"
}

module.exports.requirements = {
    clientPerms: [],
    userPerms: ["MANAGE_GUILD"],
    ownerOnly: false
}