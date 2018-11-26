const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online`);
  bot.user.setActivity("=>help | rust!", {type: "STREAMING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

// costume commands //

if(cmd === `${prefix}status`){

let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Status")
  .setColor("#d69af8")
  .setThumbnail(bicon)
  .addField("Bot's Name", bot.user.username);

  return message.channel.send(botembed);
}
//////////////////////////

if(cmd === `${prefix}serverstatus`){

  let sicon = message.guild.iconURL;
  if(message.member.hasPermission("ADMINISTRATOR")) {
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Status")
  .setColor("#070707")
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Total Members", message.guild.memberCount);

  return message.channel.send(serverembed);

  }
}
////////////////////////

if(cmd === `${prefix}rule`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**:shield: RULES :shield:**")
    .setColor("#5db9f0")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
//////////////////////////

if(cmd === `${prefix}image1`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armywelcome.jpg"]});

  }
}
/////////////////////////

if(cmd === `${prefix}image2`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armyrules.png"]});
  }
}
////////////////////////

if(cmd === `${prefix}punish`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**PUNISHMENTS**")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////

if(cmd === `${prefix}faqs`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**Frequently asked questions (FAQS)**")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
//////////////////////////////

if(cmd === `${prefix}lvlque`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**:Question: How do I level up in here?**")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////
if(cmd === `${prefix}image3`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armylevels.png"]});
  }
}
//////////////////////////////

if(cmd === `${prefix}well`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**Welcome to Anime Nation! [AN]**")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////

if(cmd === `${prefix}Sroles`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**SERVER ROLES EXPLAINED**")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
///////////////////////////////

if(cmd === `${prefix}image4`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armyroles.jpg"]});
  }
}
////////////////////////////////

if(cmd === `${prefix}rows`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setColor("#2476c0")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////////

if(cmd === `${prefix}image5`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armyfaqs.jpg"]});
  }
}
//////////////////////////////////

if(cmd === `${prefix}image6`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/serverguide.jpg"]});
  }
}
////////////////////////////////

if(cmd === `${prefix}image7`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send({files: ["./images/armypledges.jpg"]});
  }
}
///////////////////////////////
if(cmd === `${prefix}pledge1`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 1__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////

if(cmd === `${prefix}pledge2`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 2__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////////

if(cmd === `${prefix}pledge3`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 3__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////

if(cmd === `${prefix}pledge4`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 4__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
//////////////////////////////////

if(cmd === `${prefix}pledge5`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 5__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////////

if(cmd === `${prefix}pledge6`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 6__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////////

if(cmd === `${prefix}pledge7`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 7__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////

if(cmd === `${prefix}pledge8`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 8__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////////

if(cmd === `${prefix}pledge9`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge 9__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
/////////////////////////////////////

if(cmd === `${prefix}pledgeX`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("__Pledge X__")
    .setColor("#070707")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
///////////////////////////////////

if(cmd === `${prefix}invite`){
  if(message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.RichEmbed()
    .setTitle("**Invitaion: https://discord.gg/zGQNNxX**")
    .setColor("#72dfff")
    .setDescription(args.join(" "))
    message.channel.send({embed})

  }
}
////////////////////////////////////////


});

bot.login(botconfig.token);
