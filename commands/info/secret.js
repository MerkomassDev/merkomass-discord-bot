module.exports = {
    name: "secret",
    category: "info",
    description: "a super secret command",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply("||nothing to see here :)||") //is a spoiler message
    }
}