module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("**These are the commands i can do**\n**?ping** - replies with pong\n**?help** - displays this help message\nmore coming soon")
    }
}