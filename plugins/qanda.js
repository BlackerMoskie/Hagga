const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const mainly = "Finds the answer."
const usage = ".mqa <Question>"

const butuh = "```Enter the Question!```"

Asena.addCommand({ pattern: 'mqa ?(.*)', fromMe: false, desc: mainly, usage: usage }, async (message, match) => {

        const Soal = match[1]
        
        if (match[1] === '') return await message.client.sendMessage(message.jid, butuh, MessageType.text);

        await axios
          .get(`https://api.xteam.xyz/brainly?APIKEY=10c4105200edc0f0&soal=${Soal}`)
          .then(async (response) => {
            const {
              soal,
              jawaban,
            } = response.data

            const msg = `*Soal:* ${soal}
*Mamba Mainly:* ${jawaban.replace(/1Question/g, '*(1) Question*').replace(/2Question/g, '*(2) Question*').replace(/3Question/g, '*(3) Question*').replace(/Answer/g, '*Answer*').replace(/Mainly Found/g, '')}`
            await message.client.sendMessage(message.jid, msg, MessageType.text)
           })
      },
    )
