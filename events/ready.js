const {getFiles} = require("../util/functions");
module.exports = {
    name: "ready",
    run: async (bot) => {
        console.log("Logged in as " + bot.client.user.tag)
    }
}