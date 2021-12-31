/* -- Importing Modules -- */
require('dotenv').config();
const { Client } = require('discord.js-self');
const chalk = require('chalk');
const client = new Client();


/* -- Webserver remove this if you dont want -- */
require('./server');


/* -- Messages In console when Client/User is Ready and Warning for selfbot dangers -- */
client.on('ready', () => {
        console.log(chalk.bgRed('[WARNING]: SELF BOT IS AGAINST THE DISCORD TOS. YOU MAY EVEN GET BANNED FOR THAT, WE ARE NOT RESPONSIBLE FOR ANY DAMAGES!'))
    console.log(chalk.bgBlue(`[CLIENT]: Logged in as ${client.user.tag}`))
});


/* -- Messages To Bump Server -- */
client.on('message', async message => {
    if (
        message.embeds.length &&
        message.author.username == 'DISBOARD' &&
        message.embeds[ 0 ].description.indexOf('Bump done') > -1
    ) {
        setTimeout(() => {
            message.channel.send('!d bump');
        }, 7200000);
    }
});


/* -- Login To Client/User -- */
client.login(process.env.TOKEN);
