module.exports = {
    name: "links",
    category: "info",
    permissions: [],
    description: "replies with a list of links where you can find me",
    devOnly: false,
    run: async ({client, message, args}) => {
        message.reply(
            "LinkTree - <https://linktr.ee/MerkomassDev>" +
            "\nGitHub Repo of this bot - <https://github.com/MerkomassUnity/merkomass-discord-bot>" +
            "\nGitHub - <https://github.com/MerkomassUnity>" +
            "\nYouTube - <https://www.youtube.com/channel/UCPWgV3iQKruKtUf5bJ3hHAA>" +
            "\n||i will change this into hyperlinks later||"
        )
    }
}