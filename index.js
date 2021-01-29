const Discord = require('discord.js')
const client = new Discord.Client()
const birthday = require('./commands/birthday')
const whoIs = require('./commands/whoIs')
require('dotenv').config()
client.login(process.env.TOKEN)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

const testChannel = '804429983489327109'
const belaHadafChannel = '754732751558541365'

client.on('message', (msg) => {
  if (msg.channel.id === belaHadafChannel) {
    const args = msg.content.slice().trim().split(' ')
    const command = args.shift().toLowerCase()
    const arg = args[0].toLowerCase()
    if (command === '!birthday') {
      birthday(arg, msg)
    }
    if (command === '!whois') {
      whoIs(arg, msg)
    }
  }
})