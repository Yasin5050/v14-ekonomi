const db = require("croxydb")
const ms = require("ms")
exports.run = async(client, message, args) => {
    let yavaşmod = 8.64e+7, 

        amount = Math.floor(Math.random() * 1000) + 4000;      


    let lastDaily = await db.fetch(`cal_${message.author.id}`);

    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

        let timeObj = ms(yavaşmod - (Date.now() - lastDaily));




      
      return message.reply(`Sadece 24 saatte bir hırsızlık yapabilirsin.`)

      

    } else {
 let kullanıcı = message.mentions.users.first()
 if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
 let parasi = db.fetch(`para_${kullanıcı.id}`)
 if (!parasi) return message.reply("Kullanıcının parası yok hahayt")
  let miktarsonuç = Math.floor(Math.random() * 99) + 1
    db.add(`para_${message.author.id}`, miktarsonuç)
    db.add(`para_${kullanıcı.id}`, -miktarsonuç)
    db.set(`cal_${message.author.id}`, Date.now());

    message.channel.send(`${message.author} <@${kullanıcı.id}> Kullanıcısından **${miktarsonuç}** TL çaldı!`)
};
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'çal' 
  }
