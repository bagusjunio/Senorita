const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
const websiteSettings = require("../../dashboard/settings.json");
module.exports = {
  name: "dashboard", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "dashboard",
  aliases: ["dash"],

  cooldown: 1, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends a Link of the Dashboard", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setImage("https://media.giphy.com/media/ExzTWWKqvHg4rQdMQ9/giphy.gif")
          .setDescription(`> [**Website:**](https://www.senoritamusic.top/)\n\n> [**Dashboard:**](https://www.senoritamusic.top)\n\n> [**Website:**](https://www.senoritamusic.top)\n\n> [**Current Queue:**](https://www.senoritamusic.top)`)
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
/**
 * @INFO
 * Bot Coded Bagus Junio | https://github.com/bagusjunio/Discord-Js-Handler-Template
 * @INFO
 * Work for BJ Development
 * @INFO
 * Please mention Him / BJ Development, when using this Code!
 * @INFO
 */
