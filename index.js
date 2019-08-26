const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE1NDc1MjczMzE5NzEwNzIw.XWO_Ww.XXZ5VJfUNDVp-iHduO72w13GRv4';

const PREFIX = '>';

const rakyat = '614567213298483337';
const relasi = '614569338481016995';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
    if(message.content === ">jadi rakyat"){
        message.member.addRole(rakyat);
    }
    else if (message.content === ">jadi relasi"){
        message.member.addRole(relasi)
    }
    else if (message.content === ">lepas relasi"){
        message.member.removeRole(relasi)
    }
    else if (message.content === ">lepas rakyat"){
        message.member.removeRole(rakyat)
    }
});

bot.login(token);
