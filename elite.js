const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const prefix = "e#";
const ELITEID = "520415434923835392";

client.on("ready", async  => {
setInterval(function(){
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("E");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("El");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Eli");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elit");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite C");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Co");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Com");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Comm");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Commu");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Commun");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Communi");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Communit");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Community ♪");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Community ♪.");
client.guilds.get(ELITEID).channels.find('id', '521743798682910720').setName("Elite Community ♪..");
  }, 3000);
});


client.on('ready',  () => {
console.log(`

╭━━━┳╮╱╱╭━━┳━━━━┳━━━╮
┃╭━━┫┃╱╱╰┫┣┫╭╮╭╮┃╭━━╯
┃╰━━┫┃╱╱╱┃┃╰╯┃┃╰┫╰━━╮
┃╭━━┫┃╱╭╮┃┃╱╱┃┃╱┃╭━━╯
┃╰━━┫╰━╯┣┫┣╮╱┃┃╱┃╰━━╮
╰━━━┻━━━┻━━╯╱╰╯╱╰━━━╯
╭━━━┳━━━┳━╮╭━┳━╮╭━┳╮╱╭┳━╮╱╭┳━━┳━━━━┳╮╱╱╭╮
┃╭━╮┃╭━╮┃┃╰╯┃┃┃╰╯┃┃┃╱┃┃┃╰╮┃┣┫┣┫╭╮╭╮┃╰╮╭╯┃
┃┃╱╰┫┃╱┃┃╭╮╭╮┃╭╮╭╮┃┃╱┃┃╭╮╰╯┃┃┃╰╯┃┃╰┻╮╰╯╭╯
┃┃╱╭┫┃╱┃┃┃┃┃┃┃┃┃┃┃┃┃╱┃┃┃╰╮┃┃┃┃╱╱┃┃╱╱╰╮╭╯
┃╰━╯┃╰━╯┃┃┃┃┃┃┃┃┃┃┃╰━╯┃┃╱┃┃┣┫┣╮╱┃┃╱╱╱┃┃
╰━━━┻━━━┻╯╰╯╰┻╯╰╯╰┻━━━┻╯╱╰━┻━━╯╱╰╯╱╱╱╰╯


`)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~Team #Elite©~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
console.log(`Logged in as  * [ "  Team #Elite© " ] servers! [ " ${client.guilds.size} " ] Users! [ " ${client.users.size} " ]`);
	
client.user.setStatus("dnd");
client.user.setGame(`Elite Community  ♪..`,'https://www.twitch.tv/EliteCommunity');	

});

  let ar = JSON.parse(fs.readFileSync(`./Data/AutoRole.json`, `utf8`))
client.on('guildMemberAdd', member => {
if(!ar[member.guild.id]) ar[member.guild.id] = {
onoff: 'معطل',
role: 'Members ♪..'
}
if(ar[member.guild.id].onoff === 'معطل') return;
member.addRole(member.guild.roles.find(`name`, ar[member.guild.id].role)).catch(console.error)
})
client.on('message', message => {
if(!message.guild) return
if(!ar[message.guild.id]) ar[message.guild.id] = {
onoff: 'معطل',
role: 'Members ♪..'
}
if(message.content.startsWith(prefix + `autorole`)) {
 const nos = new Discord.RichEmbed()
     .setDescription("**:x: | هذا الأمر فقط للسيرفرات**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();	  
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));	
let perms = message.member.hasPermission(`MANAGE_ROLES`)
  const nopermission = new Discord.RichEmbed()
     .setDescription("**x: | MANAGE_ROLES للأسف لا تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.channel.send(nopermission)
let args = message.content.split(" ").slice(1)
const usage = new Discord.RichEmbed()
     .setDescription(`**: امثله على الأوامر \n${prefix}autorole toggle\n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!args.join(" ")) return message.channel.send(usage)
let state = args[0]
const ON = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... تفعيل خاصية الرتبة التلقائية**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	const OFF = new Discord.RichEmbed()
     .setDescription(`**☑ | تم ... تعطيل خاصية الرتبة التلقائية**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
	
		const NOT = new Discord.RichEmbed()
     .setDescription(`**: مثال على الأمر \n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.channel.send(NOT)
if(state.trim().toLowerCase() == 'toggle') {
if(ar[message.guild.id].onoff === 'معطل') return [message.channel.send(ON), ar[message.guild.id].onoff = 'مفعل']
if(ar[message.guild.id].onoff === 'مفعل') return [message.channel.send(OFF), ar[message.guild.id].onoff = 'معطل']
}
if(state.trim().toLowerCase() == 'setrole') {
let newRole = message.content.split(" ").slice(2).join(" ")
		const NOTX = new Discord.RichEmbed()
     .setDescription(`**: مثال على الأمر \n${prefix}autorole setrole [ROLE_NAME]**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!newRole) return message.reply(NOTX)
	
			const CANT = new Discord.RichEmbed()
     .setDescription(`**:interrobang: | ${newRole} لا أستطيع وجود هذه الرتبة**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!message.guild.roles.find(`name`,newRole)) return message.channel.send(CANT)
ar[message.guild.id].role = newRole
			const NEW = new Discord.RichEmbed()
     .setDescription(`**☑ | ${newRole} تم تغير الرتبة إلى**`)
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
message.channel.send(NEW)
}
  }
if(message.content === prefix + 'autorole info') {
let perms = message.member.hasPermission(`MANAGE_GUILD`)
const nopermission1 = new Discord.RichEmbed()
     .setDescription("**:x: | MANAGE_GUILD للأسف لا تمتلك صلاحية**")
     .setColor(000000)
     .setAuthor(`${message.author.tag}`, message.author.avatarURL)
     .setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
     .setTimestamp();
if(!perms) return message.reply(nopermission1)
var embed = new Discord.RichEmbed()
.addField(`AutoRole : :sparkles:  `, `
الحالة : **${ar[message.guild.id].onoff}**
الرتبة : **${ar[message.guild.id].role}**`)
.setColor(000000)
.setAuthor(`${message.author.tag}`, message.author.avatarURL)
.setFooter(`Requested By ${message.author.username}` , message.author.avatarURL)
.setTimestamp();
message.channel.send({embed})
}
fs.writeFile("./Data/AutoRole.json", JSON.stringify(ar), (err) => {
if (err) console.error(err)
});
})

client.login(process.env.ELITE_TOKEN);
