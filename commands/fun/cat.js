const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
module.exports = {
    name: "cat",
    category: "fun",
    description: "posts a random cat picture from an API",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        //i`ll have to figure out how to make this into an embed
        fetch('https://aws.random.cat/meow').then(response => response.json()); //calls the API and receives it in JSON format
                const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json()); 
                const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str); //makes sure the embed text doesn't go beyond 1024 characters
                
                message.reply({ files: [file] }); //sends the cat image (file)
            }
}
