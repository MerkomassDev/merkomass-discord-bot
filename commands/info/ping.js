module.exports = {
    name: "ping",
    category: "info",
    permissions: [],
    devOnly: false,
    description: "measures ping of bot and api",
    run: async ({client, message, args}) => {
        
            message.reply('Calculating ping...').then((resultMessage) => {
                const ping = resultMessage.createdTimestamp - message.createdTimestamp

                resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
            })
        },
}