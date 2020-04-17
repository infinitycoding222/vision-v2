const moment = require("moment")
const { MessageEmbed } = require("discord.js")
module.exports = (client) => {
    console.log(`${client.user.tag} is ready at ${moment.utc(client.user.readyAt).format('LLL')}`)
    client.user.setStatus('dnd')
    client.user.setActivity(`${client.prefix} help`, {type: "LISTENING"})
  client.channels.cache.get(`700775973418958888`).send(new MessageEmbed().setColor(`BLUE`).setDescription(`\`${client.user.tag}\` is ready at \`${moment.utc(client.user.readyAt).format('LLL')}\` and \`${client.user.username}\`'s prefix is \`${client.prefix}\``))
}