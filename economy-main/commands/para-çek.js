const db = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
    let kart = db.fetch(`kart_${message.author.id}`)
  if (!kart) return message.reply("Kart oluşturmamışsın bebek")
 let miktar = args[0]
 if (!miktar) return message.reply("Lütfen bankadan çekilecek para miktarını yaz.")
  let paran = db.fetch(`banka_${message.author.id}`)
 if (paran < miktar) return message.reply("Bankanda bu kadar para yok")
message.reply("Başarıyla bankadan belirtilen miktarda para çekildi.")
db.add(`banka_${message.author.id}`, -miktar)
db.add(`para_${message.author.id}`, miktar)




}
exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para-çek'
};