const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "links",
    category: "info",
    permissions: [],
    description: "replies with a list of links where you can find me",
    devOnly: false,
    run: async ({client, message, args}) => {
        //replies with a help embed 
        const linksEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Link List')
            .setDescription('Here are the important links, where you can find me')
            .addField("Bot",
                "[GitHub Repo](https://github.com/MerkomassUnity/merkomass-discord-bot)")
            .addField("Developer",
                "[LinkTree](https://linktr.ee/MerkomassDev)" +
                "\n[GitHub](https://github.com/MerkomassUnity)" +
                "\n[YouTube](https://www.youtube.com/channel/UCPWgV3iQKruKtUf5bJ3hHAA)"
            )
            .setTimestamp()
            .setFooter({text: 'MerkomassBot :)', iconURL: 'https://i.imgur.com/f5nZluu.jpg'})

        message.reply({embeds: [linksEmbed]})
    }
}
/*
            "LinkTree - <https://linktr.ee/MerkomassDev>" +
            "\nGitHub Repo of this bot - <https://github.com/MerkomassUnity/merkomass-discord-bot>" +
            "\nGitHub - <https://github.com/MerkomassUnity>" +
            "\nYouTube - <https://www.youtube.com/channel/UCPWgV3iQKruKtUf5bJ3hHAA>" +
            "\n||i will change this into hyperlinks later||"
 */
 //   , value: '[Here is the link](https://linktr.ee/MerkomassDev)'