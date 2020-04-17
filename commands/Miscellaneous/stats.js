const { MessageEmbed, Message, version } = require('discord.js')
const osutils = require("os-utils");
const os = require("os");
module.exports.run = (client, message, args) => {
    if (!args[0]) {
      let serv = client.shard.fetchClientValues('guilds.cache.size').then(results => {
        let embed = new MessageEmbed()
            .setColor("DARK_RED")
            .setThumbnail(client.user.displayAvatarURL())
            .addField(`Bot Name`, `\`${client.user.username}\``, true)
            .addField(`Bot Discriminator`, `\`${client.user.discriminator}\``, true)
            .addField(`Bot was born at`, `\`${client.user.createdAt.toLocaleString(`en-GB`)}\``, true)
            .addField(`Servers`, `\`${results.reduce((prev, guildCount) => prev + guildCount, 0)}\``, true)
            .addField(`Users`, `\`${client.users.cache.size.toLocaleString()}\``, true)
            .addField(`Channels`, `\`${client.channels.cache.size.toLocaleString()}\``, true)
            .addField(`Emojis`, `\`${client.emojis.cache.size.toLocaleString()}\``, true)
            .addField(`Discord.JS`, `v\`${version}\``, true)
            .addField(`NodeJS`, `\`${process.version}\``, true)
            .addField(`Client Version`, `\`v1.0.3\``, true)
        message.channel.send(embed)
        			})
		.catch(console.error);
    }
    // if (args[0] == 'system' || args[0] == 's') {
    //     let EMBED2 = new MessageEmbed()
    //         .setColor("DARK_RED")
    //         .setThumbnail(client.user.displayAvatarURL())
    //         .addField(`CPU's`, `\`${osutils.cpuCount}\``, true)
    //         .addField(`Platform`, `\`${osutils.platform().slice(0, 1).toUpperCase() + osutils.platform().slice(1)}\``, true)
    //         .addField(`CPU`, `\`${os.cpus()[0]}\``, true)
    //     message.channel.send(EMBED2)
    // }
}
module.exports.help = {
    name: "stats",
    description: "Shows the botinfo",
    category: "Miscellaneous"
}
module.exports.requirements = {
    clientPerms: [],
    userPerms: [],
    ownerOnly: false
}