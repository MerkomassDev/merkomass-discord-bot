const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "help",
    category: "info",
    description: "help command with an embed",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        //replies with a help embed 
        const helpEmbed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Command List')
            .setDescription('Here are the commands i can do:')
            .addFields(
                {name: 'Information', value: '?help - displays this message\n?links - send all the links where you can find me'},
                {name: 'Fun', value: 'none'},
                {name: 'Other', value: '?ping - replies with "pong"\n?secret - a very secret command'},
            )
            .setTimestamp()
            .setFooter({text: 'MerkomassBot :)', iconURL: 'https://i.imgur.com/f5nZluu.jpg'})

        message.reply({embeds: [helpEmbed]})
    }
}
