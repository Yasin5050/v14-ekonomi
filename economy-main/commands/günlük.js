const db = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
  
 var paralar = ['100','50','25','200','250','5','75'];
      var para = paralar[Math.floor(Math.random() * paralar.length)];

  let yavaşmod = 8.64e+7, 

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`günlük_${message.author.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));




      
      return message.reply(`Sadece 24 saatte bir günlük para alabilirsin!`)

      

    } else {

      db.add(`para_${message.author.id}`, para)
message.channel.send(`${para} Kadar Parayı Kaptın!`);
       db.set(`günlük_${message.author.id}`, Date.now());
    }
    }

  


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'günlük'
};
