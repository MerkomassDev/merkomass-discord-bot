const Discord = require("discord.js")
module.exports = {
    name: "help",
    category: "info",
    description: "list of all commands this bot can do",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply(
            "**These are the commands i can do**\n" +
            "\n**?help** - replies with this help message" +
            "\n**?links** - replies with a list of links where you can find me" +
            "\n**?secret** - super secret command, don't look pls" +
            "\n**?ping** - replies with pong" +
            "\nmore coming soon"
        )
    }
}