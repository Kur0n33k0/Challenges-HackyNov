import DiscordJS, { Intents, Message, MessageManager } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()


const privateMessage = require('./private-message.js')

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log('HackyBot commence le hacking')
    privateMessage(client,'flag', 'Dommage bien tenté ! Tu peux toujours essayer la partie n\'est pas terminée !!')
    privateMessage(client,'!flag', 'Dommage bien tenté ! Tu peux toujours essayer la partie n\'est pas terminée !!')
    privateMessage(client,'/flag', 'Dommage bien tenté ! Tu peux toujours essayer la partie n\'est pas terminée !!')
    privateMessage(client,'!flagdiscord', 'HACKYNOV{Vla_Le_Flag_Du_Discord}')
})

client.login(process.env.TOKEN)