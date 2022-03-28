module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    description: "measures ping of bot and api",
    run: async ({client, message, args}) => {
        
            message.reply('Calculating ping...').then((resultMessage) => { //writes 'Calculating ping...'
                const ping = resultMessage.createdTimestamp - message.createdTimestamp //calculates ping

                resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`) //edits the message to have corresponding numbers
            })
        },
}