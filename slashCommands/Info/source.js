const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "source", //the command name for execution & for helpcmd [OPTIONAL]

  category: "Info",
  usage: "source",
  aliases: ["github"],

  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "Sends you Source Code Information", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
    try {
      message.reply({
        embeds: [
          new MessageEmbed().setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setDescription(`**WHEN YOU USE THE SOURCE CODE, __GIVE CREDITS__!** :heart:\n\n[Link to Source](https://github.com/Tomato6966/Musicium)\n\n[Youtube Tutorial]()`)
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
