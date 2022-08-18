const { Client, Intents } = require("discord.js")
require("dotenv").config()
const client = new Discord.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ]
})

client.on('ready', async () => {
console.log("I am ready ^~^")
})
 client.login(process.env.TOKEN)
 
client.on("messageCreate", async message =>{
//it is recommended to store your tokens in env...
  if(message.content.includes(process.env.TOKEN)) {
    message.delete() 
    const owner = client.users.cache.get("952076703910481921")
    
    owner.send({content:`My Token is leaked regenerate my token as fast as possible :skull: \n\n it was leaked by ${message.author.tag} | ID ${message.author.id} `})
    
 
