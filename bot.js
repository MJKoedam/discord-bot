const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	client.send('hello');
});

client.on("message", async message => {
	if(message.author.bot) return;
	
	const args = message.content;
	const command = args.shift().toLowerCase();
	
	if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }








/*
client.on('message', message => {
	if (message.content === 'hello') {
		message.reply('hey!');
	}
});
*/
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
