const Discord = require('discord.js')
const db = require('croxydb');


exports.run = async (client, message, args) => {
  
  if (!args[0]) return message.reply(`Lütfen bir ürün gir!`)
  
  if (args[0] === 'cips') {
    let para = await db.get(`para_${message.author.id}`) 
    let cipsfiyati = 15
    
    if (para < cipsfiyati) return message.reply('Yeterli Paran Yok!')
    
    db.add(`para_${message.author.id}`, -cipsfiyati)
    
    return message.reply(`Başarıyla Cips Aldın!`)
  }
  if (args[0] === 'Bilgisayar') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyat = 14500
    
    if (para < fiyat) return message.reply('Yeterli Paran Yok!')
    
    db.add(`para_${message.author.id}`, -fiyat)
    
    return message.reply(`Başarıyla Bilgisayar Aldın!`)
  }

  if (args[0] === 'Hamburger') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyat = 95
    
    if (para < fiyat) return message.reply('Yeterli Paran Yok!')
    
    db.add(`para_${message.author.id}`, -fiyat)
    
    return message.reply(`Başarıyla Hamburger Aldın!`)
  }
  if (args[0] === 'Cola Cola') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyat = 20
    
    if (para < fiyat) return message.reply('Yeterli Paran Yok!')
    
    db.add(`para_${message.author.id}`, -fiyat)
    
    return message.reply(`Başarıyla Cola Cola Aldın!`)
  }
  if (args[0] === 'Köle') {
    let para = await db.get(`para_${message.author.id}`) 
    let fiyat = 7500
    
    if (para < fiyat) return message.reply('Yeterli Paran Yok!')
    
    db.add(`para_${message.author.id}`, -fiyat)
    
    return message.reply(`Başarıyla Köle Aldın!`)
  }
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'satın-al'
}