const { EmbedBuilder } = require("discord.js");
const db = require("croxydb")
exports.run = async (client, message, args) => {
    
    const money = db.fetch(`para_${message.author.id}`)
    if (!money) return message.reply("Paran yok ağla")
    const moneyPush = args[0]
    if (!moneyPush) return message.reply("Lütfen oynamak istediğin miktarı gir!")
    if (money < moneyPush) return message.reply("yeterli paran yok")

    var Money = moneyPush
    if(!moneyPush) Money = 1
    
    const mapping = ["true","false"]
    const randomMapping = mapping[Math.floor(Math.random() * mapping.length)]
    
    if(randomMapping === "true") {
        message.channel.send("Kazandın tebrikler")
        db.add(`para_${message.author.id}`, moneyPush*2)
    } 
    if(randomMapping === "false") {
            message.channel.send("Kaybettin")
            db.add(`para_${message.author.id}`, -moneyPush)
    }

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "cf"
};