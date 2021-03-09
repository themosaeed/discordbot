const Discord = require('discord.js');
const client = new Discord.Client();
const birthday = require('./commands/birthday');
const whoIs = require('./commands/whoIs');
const sayHappyBirthday = require('./utils/birthdayReminder');
require('dotenv').config();
client.login(process.env.TOKEN);

const testChannel = '804429983489327109';
const belaHadafChannel = '754732751558541365';

client.on('ready', () => {
    sayHappyBirthday(client, testChannel);
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    if (msg.channel.id === testChannel) {
        if (msg.content.startsWith('!')) {
            const args = msg.content.trim().split(' ');
            const command = args.shift().toLowerCase();
            const arg = args[0].toLowerCase();
            const zezoEmoji = client.emojis.cache.get('769215210447306752');
            const AfifiEmoji = client.emojis.cache.get('756163779804266659');

            console.log(client.emojis.cache);
            if (command === '!bd') {
                birthday(arg, msg, zezoEmoji, AfifiEmoji);
            }
            if (command === '!whois') {
                whoIs(arg, msg);
            }
        }
    }
});

// function checkBirthday() {
//   //year, month 0-11, date, hour, min (can add ,sec,msec)
//   const eta = new Date(2021, 1, 5, 10, 12).getTime() - Date.now()
//   setTimeout(() => console.log('its 10,12 pm'), eta)
// }
