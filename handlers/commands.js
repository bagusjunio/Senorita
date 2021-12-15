const {
    readdirSync
} = require("fs");
console.log("Welcome to SERVICE HANDLER /--/ By https://dsc.gg/servereclipse /--/ Discord: Bagus Junio#0104".yellow);
module.exports = (client) => {
    try {
        let amount = 0;
        readdirSync("./commands/").forEach((dir) => {
            const commands = readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith(".js"));
            for (let file of commands) {
                let pull = require(`../commands/${dir}/${file}`);
                if (pull.name) {
                    client.commands.set(pull.name, pull);
                    amount++;
                } else {
                    console.log(file, `error -> missing a help.name, or help.name is not a string.`.brightRed);
                    continue;
                }
                if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach((alias) => client.aliases.set(alias, pull.name));
            }
        });
        console.log(`${amount} Commands Loaded`.brightGreen);
    } catch (e) {
        console.log(String(e.stack).bgRed)
    }
};
/**
 * @INFO
 * Bot Coded Bagus Junio | https://github.com/bagusjunio/Discord-Js-Handler-Template
 * @INFO
 * Work for BJ Development
 * @INFO
 * Please mention Him / BJ Development, when using this Code!
 * @INFO
 */