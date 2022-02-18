const Discord = require("discord.js")
//const {Messages} = require("mess")   no idea what it did lol
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        //basically which permissions the bot uses
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
//system check to write if logged in with correct user profile (bot)
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//basic message react 
client.on("messageCreate", (message)=>{
    if (message.content === "hello"){ //trigger word
        message.reply("hi") //answer
    }
})

//discord id for welcome channel
const welcomeChannelID = "940643051867619388"

//when a member joins, the bot sends a welcome message
client.on("guildMemberAdd", async (member) =>{
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to this server :)`,
        files: [img]
    })
})

//when a member leaves, the bot sends a leave message
client.on("guildMemberRemove", (member) =>{
    member.guild.channels.cache.get(welcomeChannelID).send(`<@${member.id}> bye :(`)
})

//logs the bot in with the discord token stored in .env file (not public, don't leak)
client.login(process.env.TOKEN)