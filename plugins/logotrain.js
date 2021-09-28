const MAMBA = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "type some word after command\n🗡🗡"


    MAMBA.addCommand({ pattern: 'neondevil ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/neondevil?text=${encodeURIComponent(match[1])}&apikey=SSSSSSS1D`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    MAMBA.addCommand({ pattern: 'zombie3d ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/zombie3d?text=${encodeURIComponent(match[1])}&apikey=SSSSSSS1D`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    MAMBA.addCommand({ pattern: 'neon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://dapuhy-api.herokuapp.com/api/ephoto/neon?text=${encodeURIComponent(match[1])}&apikey=SSSSSSS1D`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));
