const { MessageEmbed, Message } = require('discord.js')
const db = require("quick.db")

module.exports.run = (client, message, args) => {
  let channel = db.get(`wchannel_${message.guild.id}`) || "Not Set"
  let leavetxt = db.get(`ltext_${message.guild.id}`) || 'Not Set'
  let wtxt = db.get(`wtext_${message.guild.id}`) || 'Not Set'
 // if(channel == null) channel = 'Not Set'
  let ch = client.channels.cache.get(channel);
  if(ch == null) ch = 'Not Set'
  let role1 = db.get(`autorole_${message.guild.id}`)
  let role2 = message.guild.roles.cache.find(r => r.id === role1)
  if(role2 == null) role2 = 'Not Set';
  if(wtxt == null) wtxt = 'Not Set'
  if(leavetxt == null) leavetxt = 'Not Set'
  message.channel.send(new MessageEmbed().setColor("GREEN").setDescription(`__**Join/Leave Channel:**__\n${ch}\n\n__**Leave Text:**__\n${leavetxt}\n\n__**Welcome Text:**__\n${wtxt}\n\n__**Autorole:**__ \n ${role2}`).setThumbnail(message.guild.iconURL()).setTitle(`${message.guild.name}'s Config`))
    
}
module.exports.help = {
    name: "config",
    description: "",
    aliases: ["serverconfig"],
    category: "Settings"
}

module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}