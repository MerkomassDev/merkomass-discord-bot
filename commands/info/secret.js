module.exports = {
    name: "secret",
    category: "info",
    description: "a super secret command, mainly for checking if the bot responds",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("||nothing to see here :)||") //its a spoiler message
    }
}