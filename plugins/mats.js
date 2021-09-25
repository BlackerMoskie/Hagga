const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

    Asena.addCommand({pattern: '.bts', fromMe: true, desc: Lang.WP}, (async (message, match) => {

        var r_text = new Array ();

        r_text[0] = "https://images.wallpaperscraft.com/image/trees_pines_lake_198439_4480x6720.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/trees_pines_mountains_160486_3648x5472.jpg";
              var i = Math.floor(2*Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.CAPTION_TXT})

    }));
