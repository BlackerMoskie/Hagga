const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'playstore ?(.*)', fromMe: false, desc: Lang.HMODD_DESC, dontAddCommandList: true }, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://dapuhy-api.herokuapp.com/api/search/playstore?query=${match[1]}&apikey=SSSSSSS1D`;
	try {
		const response = await got(url);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🐱‍👤 ' + Lang.NAMEY +'* ```' + json.result[0].icon + '```\n\n' + , MessageType.image);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🐱‍👤 ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*🐱‍👤 ' + Lang.INFO +'* ```' + json.result[0].whatsnew + '```\n\n\n' + 
		'*🐱‍👤 ' + Lang.DOWNLOAD +':* ```' + json.result[0].url + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
