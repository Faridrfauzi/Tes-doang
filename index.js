const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple')
let zen = new WAConnection()
const fs = require('fs')
const axios = require("axios")  
const figlet = require('figlet')
const moment = require('moment-timezone')
const toMs = require('ms')
const ms = require("parse-ms")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success } = require('./lib/functions')
const { color } = require('./lib/color')

// Ini apaansi anjr
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '

require('./zen.js')
nocache('./zen.js', module => console.log(color(`zen.js is now updated!`)))
require('./message/menu.js')
nocache('./message/menu.js', module => console.log(color(`Menu.js is Now updated!`)))

const starts = async (zen = new WAConnection()) => {
zen.version = [2, 2119, 6]
zen.browserDescription = ['zen','Desktop','3.0']
zen.logger.level = 'warn'
console.log(color(figlet.textSync(`${spc1}Reyzenn`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ • BOT Creator By Reyzen • ]` ,'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Nama        : RyzzenXcode 7`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerNumber}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

zen.on('qr', () => {
console.log(color('[','white'), color('!','cyan'), color(']','white'), color('Scan Now This Qr!'))
})

fs.existsSync('./database/session.json') && zen.loadAuthInfo('./database/session.json')

zen.sendMessage(`6283148375193@s.whatsapp.net`, `*Hai Owner Skyliners 7, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`*Skyliners 7 V1*\n_*Link group owner*_\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Skyliners 7",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/xyz.jpg'),sourceUrl:"https://wa.me/6283148375193?text=Assalamualaikum"}}})
	console.log(color('[-]', 'yellow'), color('Sending bot info to bot owner', 'cyan')) 
	
zen.on('connecting', () => {
start('2', '>')
}) 

zen.on('open', () => {
success('2',`\n[ ✓ ] Connected...`)
})
await zen.connect({timeoutMs: 30*1000})
fs.writeFileSync('./database/session.json', JSON.stringify(zen.base64EncodedAuthInfo(), null, '\t'))
zen.on('chat-update', async (message) => {
require('./zen.js')(zen, message)
}) 

zen.on('group-participants-update', async (anu) => { 
mem = anu.participants[0]
const uwu = '```'
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zen.prepareMessage(mdata.id, kma, MessageType.location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
zen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const mdata = await zen.groupMetadata(anu.jid)
try {
console.log(anu)
if (anu.action == 'add') {
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
if(!welkom.includes(mdata.id)) return
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;zen;;;\nFN:zen\nitem1.TEL;waid=6283148375193:6283148375193\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
try {
ppimg = await zen.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buff = await getBuffer(ppimg)
masuk =`Halo @${num.split('@')[0]}
Selamat Datang Di ${mdata.subject}

*Jangan Lupa Isi*
*Nama* :
*Umur* :
*Gender* :
*Askot* :

Enjoy Jangan Lupa Kenalan
Klik Button Di Bawah Untuk Memulai Bot
Note Jika Tidak Ada Ketik .allmenu`
gbutsan = [
{buttonId:`inibuatwelcome`,buttonText:{displayText:'Selamat dtng silahkan keluar 👋'},type:1},
{buttonId:`menu`,buttonText:{displayText:'Menu 💕'},type:1},
{buttonId:`owner`,buttonText:{displayText:'Owner 💌'},type:1}
]
mhan = await zen.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `Welcome  Message`, 
buttons: gbutsan,
headerType: 4
}
zen.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/xyz.jpg'),
"contextInfo": {
mentionedJid: [num]},
caption: 'Tes',
quoted: fkontakk})
            
} else if (anu.action == 'remove') {
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
if(!welkom.includes(mdata.id)) return
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;zen;;;\nFN:zen\nitem1.TEL;waid=6283148375193:6283148375193\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
try {
ppimg = await zen.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
let buff = await getBuffer(ppimg)
keluar =`_*Akhirnya si beban @${num.split('@')[0]} left*_\nSemoga ga balik lagi`
gbutsan = [
{buttonId:`buatleave`,buttonText:{displayText:'Sayonara 👋'},type:1}
]
mhan = await zen.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Leave message`,
buttons: gbutsan,
headerType: 4
}
zen.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/xyz.jpg'),
"contextInfo": {
mentionedJid: [num]},
caption: 'Tes',
quoted: fkontakk})

} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;zen;;;\nFN:zen\nitem1.TEL;waid=6283148375193:6283148375193\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
zen.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;zen;;;\nFN:zen\nitem1.TEL;waid=6283148375193:6283148375193\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
zen.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
} catch (e) {
console.log('Error : %s', color(e, 'white'))
}
})	       

zen.on('group-update', async (anu) => {
const metdata = await zen.groupMetadata(anu.jid)
const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;zen;;;\nFN:zen\nitem1.TEL;waid=6283148375193:6283148375193\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
if(anu.announce == 'false'){
teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
zen.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
} 
else if(anu.announce == 'true'){
teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
zen.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
zen.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
}
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    zen.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    zen.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
}) 

antical = true
zen.on('CB:action,,call', async json => {
const callerId = json[2][0][1].from;
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + `Reyzenn` + '\n' + `ORG:Developer Skyliners 7\n` + 'TEL;type=CELL;type=VOICE;waid=' + `6283148375193` + ':+' + `6283148375193` + '\n' + 'END:VCARD'
zen.sendMessage(callerId, "\`\`\`[ ! ] CALL DETECTED [ ! ]\`\`\`\n\n\`\`\`Anda Di Block Karena Telepon Bot , Silahkan Hubungi Developer Bot Untuk Membuka Block\`\`\`", MessageType.text)
zen.sendMessage(callerId, { displayname: `zen`, vcard: vcard}, MessageType.contact, {contextInfo: { externalAdReply:{title: `Developer Skyliners 7`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/xyz.jpg'),sourceUrl:`https://wa.me/6283148375193?text=Assalamualaikum`}}})
await sleep(5000)
await zen.blockUser(callerId, "add")
})

antidel = true
zen.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = zen.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = zen.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
zen.copyNForward(m.key.remoteJid, m.message)
zen.sendMessage(m.key.remoteJid, `▷\`\`\`Anti Delete\`\`\`

▢ \`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
▢ \`\`\`Tipe : ${c3type}\`\`\`
▢ \`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
} 

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
//console.log(color('========================================'))
//console.log('Module', `'${module}'`, 'is now being watched for changes')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
