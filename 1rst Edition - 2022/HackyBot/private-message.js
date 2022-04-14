module.exports = (client, triggerText, replyText) => {
    client.on('messageCreate', (message) => {
        if (message.content.toLowerCase() === triggerText.toLowerCase()){
            message.author.send(replyText)
            .catch(() => message.channel.send("Impossible de te parler ! Ouvre tes DM ;)"));
            message.delete()
        }
    })
}