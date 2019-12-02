const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});


client.on('message', message => {
	if (message.content === 'hello') {
		message.reply('hey!');
	}
});

/*
client.on('message', function (user, userID, channelID, message, evt) {
	
	switch(message) {
		case 'hello':
			bot.sendMessage({
				to: channelID,
				message: 'hello, ' + user + '!'
			});
			break;
	}
});
*/



// THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
