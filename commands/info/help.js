const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    category: "info",
    description: "help command",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        const helpEmbed = new MessageEmbed() //creates an embed message
            .setColor('#0099ff')
            .setTitle('Command List')
            .setDescription('Here are the commands i can do:')
            .addFields(
                {name: 'Information', value: '?help - displays this message\n?links - send all the links where you can find me'},
                {name: 'Users', value: '?avatar <@user> - displays avatar of mentioned user or user which ran the command'},
                {name: 'Fun', value: '?cat - posts a random cat picture'},
                {name: 'Other', value: '?ping - measures ping of the bot and the API\n?secret - a very secret command :3'},
            )
            .setTimestamp()
            .setFooter({text: 'MerkomassBot :)', iconURL: 'https://i.imgur.com/f5nZluu.jpg'})

        message.reply({embeds: [helpEmbed]}) //replies with the helpEmbed
    }
}
