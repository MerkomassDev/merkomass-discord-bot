const Canvas = require("canvas");
const Discord = require("discord.js")

const background = "https://i.imgur.com/sMHCgKF.jpg" //link to background

//const Roboto = require("@fontsource/roboto")

//  dimensions of background image
//  !!! NEEDS TO BE CHANGED MANUALLY FOR EVERY PICTURE !!! (for now)
const dim = {
    height: 675,
    width: 1200,
    margin: 50,
}

const av = {
    size:256,
    x: 480,
    y: 170
}
//generates the welcome picture with profile pic of user
const generateImage = async (member) => {
    let username = member.user.username //username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({format: "png", dynamic: false, size: av.size}) //saves user profile pic for a variable
    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")
    
    //draw in the background
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)
    
    //draw black tinted box for readability
    ctx.fillStyle = "rgba(0,0,0,.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin,dim.height - 2 * dim.margin)
    
    const avimg = await Canvas.loadImage(avatarURL) //load avatar picture
    ctx.save() //save selection
    
    // circle around user avatar
    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
    
    //draws the "edited" profile picture with a circle around it
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()
    
    //text style
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    
    ctx.font = "50px Roboto"
    ctx.fillText("Welcome",dim.width / 2, dim.margin + 70)
    
    ctx.font = "60px Roboto"
    ctx.fillText(username + " #" + discrim, dim.width / 2, dim.height - dim.margin - 125)
    
    ctx.font = "40px Roboto"
    ctx.fillText("to the server", dim.width / 2, dim.height - dim.margin - 50)
    
    //convert to image
    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png")
    return attachment
}
module.exports = generateImage