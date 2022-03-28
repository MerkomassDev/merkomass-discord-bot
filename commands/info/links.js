const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "links",
    category: "info",
    permissions: [],
    description: "replies with a list of links where you can find me",
    devOnly: false,
    run: async ({client, message, args}) => {
        const linksEmbed = new MessageEmbed() //creates an embed message
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

        message.reply({embeds: [linksEmbed]}) //replies with linksEmbed
    }
}