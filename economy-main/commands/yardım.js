const Discord = require('discord.js')
const db = require('croxydb');


exports.run = async (client, message, args) => {
  
  const embed = new Discord.EmbedBuilder()
  .setTitle("Godzilla - Yardım Menüsü!")
  .addFields({ name: '.cf', value: `Kumar Oynarsın!`, inline: true})
  .addFields({ name: '.çal', value: "Birinden Para Çalarsın!", inline: true})
  .addFields({ name: '.çalış', value: `Köle Gibi Çalışırsın!`, inline: true})
  .addFields({ name: '.kart-oluştur', value: `Kredi Kartı Oluşturursun!`, inline: true})
  .addFields({ name: '.banka', value: `Bankadaki Parana Bakarsın!`, inline: true})
  .addFields({ name: '.günlük', value: `Günlük Harçlık Alırsın!`, inline: true})
  .addFields({ name: '.para-gönder', value: `Birine Para Gönderirsin!`, inline: true})
  .addFields({ name: '.bakiye', value: `Kendi Parana Bakarsın!`, inline: true})
  .addFields({ name: '.satın-al', value: `Marketten Bir Şey Satın Alırsın!`, inline: true})
  .addFields({ name: '.market', value: `Markete Bakarsın!`, inline: true})
  .addFields({ name: '.para-çek', value: `Bankadan Para Çekersin!`, inline: true})
  .addFields({ name: '.para-yatır', value: `Bankaya Para Yatırırsın!`, inline: true})
  .addFields({ name: '.para-ekle', value: `Owner Komutu.`, inline: true})
  .addFields({ name: '.para-sil', value: `Owner Komutu.`, inline: true})
  .addFields({ name: '.yardım', value: `Yardım Menüsüne Bakarsın!`, inline: true})

  .setColor("#ff0000")
  message.channel.send({embeds: [embed]})
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'yardım'
}