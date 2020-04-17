const { MessageEmbed, Message, Permissions } = require('discord.js')
module.exports.run = (client, message, args) => {
  if(!args[0]){
       let embed = new MessageEmbed()
        .setDescription(`\`\`\`diff\n+ ${message.member.permissions.toArray().join("\n+ ")}\`\`\``)
        .setColor(`GREEN`)
        .setAuthor(`${message.author.tag}'s permissions`, message.author.displayAvatarURL())
    message.channel.send(embed) 
  }
  if(args[0] == 'missing' || args[0] == 'denied'){
     let y = {}; 
Object.entries(new Permissions(message.guild.members.cache.get(message.author.id).permissions).serialize()).filter(x => x[1] === false ? undefined : y[x] = x[1]).join("\n- ");
          let embed = new MessageEmbed()
        .setDescription(`\`\`\`diff\n- ${y}\`\`\``)
        .setColor(`GREEN`)
        .setAuthor(`${message.author.tag}'s missing permissions`, message.author.displayAvatarURL())
    message.channel.send(embed) 
  }
}
module.exports.help = {
    name: 'permissions',
    description: 'permissions',
    category: 'Miscellaneous',
    aliases: ["perms"]
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}