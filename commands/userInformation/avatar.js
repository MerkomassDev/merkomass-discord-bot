const { MessageEmbed } = require('discord.js');
module.exports = {
    name: "avatar",
    category: "userInformation",
    description: "displays avatar of mentioned (@user) user or who ran the command",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
            const user = message.mentions.users.first() || message.author //get information about user and checks if there is a mention
            const avatarEmbed = new MessageEmbed() //create an embed
                .setColor(`#0099ff`)
                .setTitle(`${user.username}'s Avatar`)
                .setImage(
                    user.displayAvatarURL({size:256})
                )
                .setTimestamp()
                .setFooter({text: 'MerkomassBot :)', iconURL: 'https://i.imgur.com/f5nZluu.jpg'})
            message.reply({embeds: [avatarEmbed]}) //send embed
    }
}