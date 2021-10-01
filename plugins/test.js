const MAMBA = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const BMWA = ".Roll Random\nPlay Games"
const BMWB = "❄ ```Rolling Dice!``` 🎲"
const BMWC = "```Dice Rolled:``` "
 if (con.PSW !== 'kingraviya') {

    if (con.WORKTYPE === 'private') {

        MAMBA.addCommand({pattern: 'roll', fromMe: true, desc: BMWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, BMWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, BMWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        MAMBA.addCommand({pattern: 'roll', fromMe: false, desc: BMWA}, (async (message, match) => {

            await message.client.sendMessage(message.jid, BMWB, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "🎲 *1* 🎲";
            r_text[1] = "🎲 *2* 🎲";
            r_text[2] = "🎲 *3* 🎲";
            r_text[3] = "🎲 *4* 🎲";
            r_text[4] = "🎲 *5* 🎲";
            r_text[5] = "🎲 *6* 🎲";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, BMWC + `${r_text[i]}`, MessageType.text);

        }));
    }
    }
