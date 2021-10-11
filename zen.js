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
		ChatModification,
		mentionedJid,
		processTime,
		prepareMessageFromContent,
		relayWAMessage
	} = require("@adiwajshing/baileys") 
const simple = require('./lib/simple.js') 

// [ MODULES ]
const hx = require('hxz-api')
const { EmojiAPI } = require("emoji-api")
const qrcode = require('qrcode-terminal')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const ggs = require('google-it')
const os = require('os')
const toMs = require('ms')
const ms = require('parse-ms')
const fetch = require('node-fetch')
const fromData = require('form-data')
const cheerio = require('cheerio')
const imgbb = require('imgbb-uploader')
const yts = require('yt-search')
const base64Img = require('base64-img')
const imageToBase64 = require('image-to-base64')
const ffmpeg = require('fluent-ffmpeg')
const figlet = require('figlet')
const request = require('request')
const util = require('util')
const moment = require("moment-timezone")
const axios = require("axios")
const fs = require("fs")
const translate = require("@vitalets/google-translate-api") 

// [ LIBRARY ]
const { color, bgcolor } = require('./lib/color')
const { getBuffer, getGroupAdmins, getRandom } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { exec } = require('child_process')
const { uploadimg, upload } = require('./lib/uploadimg')
const { bahasa } = require('./lib/kodebahasa') 
const { mediafireDl } = require('./lib/mediafire.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const _sewa = require("./lib/sewa")

// [ STICKER WM ]
const Exif = require('./lib/exif')
const exif = new Exif() 

// [ DATABASE ]
const ban = JSON.parse(fs.readFileSync('./database/ban.json'))
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const _gombal = JSON.parse(fs.readFileSync('./database/gombal.json'))
const _quotes = JSON.parse(fs.readFileSync('./database/quotes.json')) 
const _lapor = JSON.parse(fs.readFileSync('./database/report.json'))
const _request = JSON.parse(fs.readFileSync('./database/request.json')) 

// [ SETTINGS ]
baterai = {
battery: "" || "Not found",
isCharge: "" || false
}
cmhit = []
ownerNumber = ['6283148375193@s.whatsapp.net']
waktuafk = 'Nothing' 
alasanafk = 'Nothing' 

// [ SETTINGS SECURITY ]
publik = false  
offline = false
multi = false 
nopref = true 
antidelete = false
antical = false
menusimpel = true
autovn = true
autoketik = false 
bugc = false

// [ APIKEY ]
HunterApi = 'Ikyy69',
YuzApi = 'Yuzzu',
LolKey = 'AurelCans',
ValKey = 'rivalgans',
Dapapi = 'anakasu'

// [ UCAPAN WAKTU ]
const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time < "23:59:00"){
var ucapanWaktu = 'Selamat malam 🌃'
                                        }
if(time < "19:00:00"){
var ucapanWaktu = 'Selamat senja 🌆'
                                         }
if(time < "18:00:00"){
var ucapanWaktu = 'Selamat sore 🌆'
                                         }
if(time < "15:00:00"){
var ucapanWaktu = 'Selamat siang 🏙️'
                                         }
if(time < "11:00:00"){
var ucapanWaktu = 'Selamat pagi 🌇'
                                         }
if(time < "06:00:00"){
var ucapanWaktu = 'Selamat pagi 🌅'                                                          } 

// [ RUNTIME ]
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

// [ FUNCTION AFK ]
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

// [ FUNC STICK CMD ]
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
} 
//-------------------------------------------------//
module.exports = zen = async (zen, dev) => {
try {
if (!dev.hasNewMessage) return
dev = dev.messages.all()[0]
if (!dev.message) return
if (dev.key && dev.key.remoteJid == 'status@broadcast') return 

if ((Object.keys(dev.message)[0] === 'ephemeralMessage' && JSON.stringify(dev.message).includes('EPHEMERAL_SETTING')) && dev.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !dev.key.fromMe) {
nums = dev.participant
longkapnye = "\n".repeat(420)
tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
zen.groupRemove(dev.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
zen.sendMessage(dev.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
       
dev.message = (Object.keys(dev.message)[0] === 'ephemeralMessage') ? dev.message.ephemeralMessage.message : dev.message  

global.prefix 
m = simple.smsg(zen, dev)
const antibot = m.isBaileys
const content = JSON.stringify(dev.message)
const from = dev.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType  

//-- Time 
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')

//-- Mengauto respon 
const type = Object.keys(dev.message)[0]
var pes = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : ''
const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const cmd = (type === 'conversation' && dev.message.conversation) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase() 
zen.on("CB:action,,battery", json => {
const battery = json[2][0][1].value
const persenbat = parseInt(battery)
baterai.battery = `${persenbat}%`
baterai.isCharge = json[2][0][1].live
})
if (multi){
var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
prefix = prefa
}
}
isStc = Object.keys(dev.message)[0] == "stickerMessage" ? dev.message.stickerMessage.fileSha256.toString('hex') : ""
isStc = `${isStc}`
const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
isStc !== "" && content.includes("conversation")
const body = (type === 'listResponseMessage' && dev.message.listResponseMessage.title) ? dev.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && dev.message.buttonsResponseMessage.selectedButtonId) ? dev.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && dev.message.conversation.startsWith(prefix)) ? dev.message.conversation : (type == 'imageMessage') && dev.message.imageMessage.caption.startsWith(prefix) ? dev.message.imageMessage.caption : (type == 'videoMessage') && dev.message.videoMessage.caption.startsWith(prefix) ? dev.message.videoMessage.caption : (type == 'extendedTextMessage') && dev.message.extendedTextMessage.text.startsWith(prefix) ? dev.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(dev.message.stickerMessage.fileSha256.toString('base64')) : "" 
const budy = (type === 'conversation') ? dev.message.conversation : (type === 'extendedTextMessage') ? dev.message.extendedTextMessage.text : '' 
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() 
const args = body.trim().split(/ +/).slice(1) 
const isCmd = body.startsWith(prefix)
const arg = budy.slice(command.length + 2, budy.length)
const q = args.join(' ') 
const c = args.join(' ')

cmhit.push(command)
mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		
const botNumber = zen.user.jid 
const ownerNumberr = ["6283148375193@s.whatsapp.net", "6285283427860@s.whatsapp.net", "6285866295942@s.whatsapp.net", "6281337541779@s.whatsapp.net"]
const isGroup = from.endsWith('@g.us')
const sender = dev.key.fromMe ? zen.user.jid : isGroup ? dev.participant : dev.key.remoteJid
const senderNumber = sender.split("@")[0] 
const conts = dev.key.fromMe ? zen.user.jid : zen.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = dev.key.fromMe ? zen.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
const totalchat = await zen.chats.all()
const groupMetadata = isGroup ? await zen.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const isOwner = ownerNumber.includes(sender)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isBan = cekBannedUser(sender, ban)
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBanchat = isGroup ? bancht.includes(from) : false 
const isAntiVO = isGroup ? antiviewonce.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false 
const isWelkom = isGroup ? welkom.includes(from) : false 
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false  

//-- >> [ BUTTONS CMD ]
const isButton = (type == 'buttonsResponseMessage') ? dev.message.buttonsResponseMessage.selectedDisplayText : '' 

const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}  
		
//-- Time 
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

const readmore = `‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎`
// Thumbnail nya bang 
const found = fs.readFileSync('./media/Xcode7.jpeg')
const fthub = fs.readFileSync('./media/xyz.jpg')
const set = fs.readFileSync('./media/fthumb.jpg')
const hem = fs.readFileSync('./media/skyliners.jpg')
const hemm = fs.readFileSync('./media/zen.jpg')

//-- Fake reply by dcode-denpa 
//-- Fake grup inv
const grupinv = (teks) => {
grup = zen.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `Reyzen`, "footerText": `*_Xyraa-Botz_*`, "jpegThumbnail": fthub, "caption": teks}}, {quoted:finv})
zen.relayWAMessage(grup)
}

//-- Fake katalog 
const katalog = (teks) => {
res = zen.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": `*_Xyraa-Botz_*`, "thumbnail": fthub, "surface": 'CATALOG' }}, {quoted:ftrol})
zen.relayWAMessage(res)
}
        
//-- Fake reply by YOGIPW
//-- Fake toko
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fthub //Gambarnye
},
"title": `*_Xyraa-Botz_*`, //Kasih namalu 
"description": `*_Xyraa-Botz_*`, 
"currencyCode": "USD",
"priceAmount1000": "321",
"retailerId": `*_Xyraa-Botz_*`,
"productImageCount": 321
},
"businessOwnerJid": `0@s.whatsapp.net`
}}
}

//-- Troli 
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 321,
status: 3,
surface : 3,
message: `Xyraa-Botz\nCreated by ReyzenXC`, //Kasih namalu
orderTitle: `*_Xyraa-Botz_*`,
thumbnail: fthub, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}}
}

//-- Fake location 
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${ucapanWaktu} ${pushname}`,
jpegThumbnail: hemm
}
}
}
//-- Fake gif
const fgi = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `*_Xyraa-Botz_*`,
"h": `*_Xyraa-Botz_*`,
'duration': '321', 
'gifPlayback': 'true', 
'caption': `*_Xyraa-Botz_*`,
'jpegThumbnail': fthub
}}
} 

//-- Fake Text 
const ftex = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
"text": `*_Xyraa-Botz_*`,
"title": `*_Xyraa-Botz_*`,
'jpegThumbnail': fthub
}} 
}

//-- Fake video
const fvid = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `*_Xyraa-Botz_*`,
"h": `*_Xyraa-Botz_*`,
'duration': '321', 
'caption': `*_Xyraa-Botz_*`,
'jpegThumbnail': fthub
}}
}
	                  
//-- GROUPINVITE
const finv = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
	},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": `*_Xyraa-Botz_*`,
"groupName": `*_Xyraa-Botz_*`, 
"caption": `*_Xyraa-Botz_*`, 
'jpegThumbnail': fthub
}}
}

//-- Fake status
const fakestatus = (teks) => {
zen.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": fake1,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/nisa.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}}}})}
        
//-- Fake reply
const reply = (text) => {
zen.sendMessage(from, text, MessageType.text, {contextInfo:{forwardingScore: 508, isForwarded: true}, quoted: dev, sendEphemeral: false ,thumbnail: fs.readFileSync(`./media/xyz.jpg`)})
}

//-- Fake link 
const flink = (teks) => {
			zen.sendMessage(from, teks, text, { thumbnail: found, sendEphemeral: true, quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Skyliners 7`,body:"",previewType:"PHOTO",thumbnail:found,sourceUrl:`Created by Reyzen\nhttps://wa.me/6283148375193?text=Assalamualaikum`}}})
		}

function monospace(string) {
return '```' + string + '```'
}   

//-- Send message
const sendMess = (hehe, teks) => {
zen.sendMessage(hehe, teks, text, { quoted: ftoko, contextInfo: { forwardingScore: 508, isForwarded: true}})
}

//-- Mentions
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zen.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zen.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": memberr } })
}

// Apsi
const math = (teks) => {
return Math.floor(teks)
}

// Gtau bng lupa      
const sendBug = async (target) => {
await zen.relayWAMessage(
zen.prepareMessageFromContent(
target,
zen.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
		
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
zen.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zen.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
zen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await zen.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
zen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await zen.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
zen.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
} 

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
})
} 
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
zen.sendMessage(to, media, sticker, {quoted: dev})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
})
})
})
}
const sendWebp = async(from, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
}; 
download(url, './temp' + names + '.png', async function () {
console.log('selesai');
let ajg = './temp' + names + '.png'
let palak = './temp' + names + '.webp'
exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
let media = fs.readFileSync(palak)
zen.sendMessage(from, media, MessageType.sticker,{quoted:dev})
fs.unlinkSync(ajg)
fs.unlinkSync(palak)
});
});
} 
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zen.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zen.sendMessage(from, hasil, type, options).catch(e => {
zen.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zen.sendMessage(to, media, type, { quoted: dev, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})

fs.unlinkSync(filename)
})
}
const sendFakeThumb = async function(from, url, title, desc){
var anoim = {
detectLinks: false
}
var qul = await zen.generateLinkPreview(url)
qul.title = title
qul.description = desc
qul.jpegThumbnail = fthub
zen.sendMessage(from, qul, MessageType.extendedText, anoim)
}
function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
function speedText(speed) {
let bits = speed * 8;
const units = ['', 'K', 'M', 'G', 'T'];
const places = [0, 1, 2, 3];
let unit = 0;
while (bits >= 2000 && unit < 4) {
unit++;
bits/= 1000;
}
return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
} 
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
zen.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:dev, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

if (budy.startsWith('>')){
if (!dev.key.fromMe && !isOwner) return
console.log(color('[EVAL]'), color(moment(dev.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!dev.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return flink(`${err}`)
if (stdout) {
flink(stdout)
}
})
}
if (budy.startsWith('x')){
if (!dev.key.fromMe && !isOwner) return
try {
return zen.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: dev})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !dev.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}

// AUTO
for (let anji of setik){
if (budy === anji){
result = fs.readFileSync(`./media/sticker/${anji}.webp`)
zen.sendMessage(from, result, sticker, { quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true }})
}
}
for (let anju of vien){
if (budy === anju){
result = fs.readFileSync(`./media/vn/${anju}.mp3`)
zen.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 2179, ptt: true, quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
}
			
//-- Auto respon
for (let i = 0; i < commandsDB.length ; i++) {
if (budy == commandsDB[i].pesan) {
zen.sendMessage(from, commandsDB[i].balasan, text, {quoted: dev})
      }
}

//-- >> [ ANTI LINK GC ]
if (budy.includes("https://chat.whatsapp.com/")) {
if (!dev.key.fromMe){
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return 
zen.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply('Link terdeteksi, Auto kick!')
zen.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
}

//-- >> [ BADWORD ]
if (bad.includes(messagesD)) {
		reply('_Santay jamet_')
} 

//-- Banchat
if (isBanchat){
if (!isOwner) return
if (budy.toLowerCase().startsWith('unbanchat')){
if (!isBanchat) return reply(`udah di UnBan`)
let anu = bancht.indexOf(from)
bancht.splice(anu, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Bot telah di Unban di group ini`)
}
}

//-- Anti troli
if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await zen.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}

//-- >> [ ANTI VIEW ONCE ]
if (isGroup && isAntiVO && type == 'viewOnceMessage'){
var msg = {...dev}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `*VIEWONCE TERDETEKSI*\n_*Caption : ${(typenya.caption === '') ? 'NONE' : typenya.caption}*_`
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: dev.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: dev.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await zen.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
            
await zen.relayWAMessage(pe)
console.log(color('WARNING: ANTIVIEW ONCE','red'))
}

// [ SEWA ]
_sewa.expiredCheck(zen, sewa)

// [ BANNED ]
if (isBan) return
BannedExpired(ban)

// [ Yg auto res itu bang ]
if (budy.startsWith('Ryzzen')){
sendButMessage(from, `${JSON.stringify(me, null, 2)}`, "㋛ *_RyzzenXC_*", [{buttonId: 'gtm', buttonText: {displayText: 'Github 💕'}, type: 1},{buttonId: 'gpm', buttonText: {displayText: 'Group 💌'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
if(isButton == 'gtm'){
reply('https://github.com/Reyzenn')
}
if(isButton == 'gpm'){
reply('link ny bng')
}
// ×××××××××××××× > OFFLINE <××××××××××××××××××××× //
if (!dev.key.remoteJid.endsWith('@g.us') && offline){
if (!dev.key.fromMe){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktuafk)
sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini Reyzenn sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, `*_Xyraa-Botz_*`, [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
// ×××××××××××××× > OFFLINE <××××××××××××××××××××× //
if (dev.key.remoteJid.endsWith('@g.us') && offline) {
if (!dev.key.fromMe){
if (dev.message.extendedTextMessage != undefined){
if (dev.message.extendedTextMessage.contextInfo != undefined){
if (dev.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of dev.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === zen.user.jid){
if (isAfk(dev.key.remoteJid)) return
addafk(dev.key.remoteJid)
heheh = ms(Date.now() - waktuafk)
sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini Reyzenn sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, `*_Xyraa-Botz_*`, [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
}
				}
	}
}
				}
			}
		}

     const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	    	const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
	    	const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage') 

if (isCmd && !isGroup) {console.log(color('[•]', 'greenyellow'), color(moment(dev.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (!command) {console.log(color('[•]', 'greenyellow'), color(moment(dev.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))} 

if (autovn) {
	if (autovn === false) return
await zen.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await zen.updatePresence(from, Presence.composing)
}

if (antibot === true) return
if (!publik) {
if (!isOwner && !dev.key.fromMe) return
} 

switch (command) {
case 'menu':
if(menusimpel == false){
runtime = process.uptime()
stst = await zen.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menu = `_*Hai ${pushname} 👋*_

*㋰ INFO USER*

*㋛ _Name :_* _${pushname}_
*㋛ _Bio :_* _${stst}_
*㋛ _Status :_* _${isOwner ? 'Owner' : 'User'}_

*㋚ INFO BOT*

*࿊ _Prefix :_* _${multi ? 'Multi prefix' : 'Noprefx'}_
*࿊ _Mode :_* _${publik ? 'Public' : 'Self'}_
*࿊ _Status :_* _${offline ? 'Online' : 'Offline'}_
*࿊ _Runtime :_* _${kyun(runtime)}_
*࿊ _Device :_* _Realme_

 _*Reyzenn*_
 ✄ - - - - - - - - - - - - - - - - - - - - - - -  
${readmore}
*SIMPLE MENU*
 ㋛ _*Owner command*_ 
 ㋛ _*Group only*_ 
 ㋛ _*Maker menu*_ 
 ㋛ _*Private message*_ 
 ㋛ _*Others menu*_
 ㋛ _*Downloader*_ 
 ㋛ _*Convert*_ `
 sendButLocation(from, `${menu}`, `✇ _*RyzzenXC*_`, {jpegThumbnail:set}, [{buttonId:`${prefix}private`,buttonText:{displayText:'Private message 💚'},type:1},{buttonId:`${prefix}rules`,buttonText:{displayText:'Syarat dan ketentuan ✈'},type:1}, {buttonId:`${prefix}owner`,buttonText:{displayText:'Creator 💗'},type:1}])
}
else if(menusimpel = true ){
dtod = `6283148375193@s.whatsapp.net`
data = fs.readFileSync('./lib/logo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
gambar = await getBuffer(randKey.result)
const timestamp = speed()
const latensi = speed() - timestamp 
menu = `*${ucapanWaktu}*
            
• *Owner Contact* :
🪀 _*WhatsApp:*_ @${dtod.split("@")[0]}
📧 _*Github:*_ https://github.com/Reyzenn
--------------------------------------
Speed : _${latensi.toFixed(4)}ms_

${readmore} *INFO*
> ${prefix}botstat
> ${prefix}owner
> ${prefix}chatlist
> ${prefix}runtime
> ${prefix}simi
> ${prefix}snk
> ${prefix}group`
sendButLocation(from, `${menu}`, "✇ _*RyzzenXC*_", {jpegThumbnail:gambar,name:""}, [{buttonId:`sewa`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`cmd`,buttonText:{displayText:'Show menu 💕'},type:1}], {contextInfo: { mentionedJid: [dtod]}})
}
break

case 'command':
case 'cmd':
 stod = `${sender}`
 listMsg = {
 buttonText: 'LIST MESSAGE',
 footerText: '✇ _*RyzzenXC*_',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
{
"title": `${time} - ${week} ${weton} - ${calender}`,
 rows: [
{
  "title": "OwnerMenu",
  "rowId": "Only for bot owners - Xyraa ㋛"
                                               },
{
  "title": "GroupMenu",
  "rowId": "Only for within the group - Xyraa ㋛"
                                               },
{
  "title": "Admin",
  "rowld": "Only for group admins - Xyraa ㋛"
                                               },
{
  "title": "PrivateCmd",
  "rowId": "Only private message - Xyraa ㋛"
                                               },
{
  "title": "MakerMenu",
  "rowId": "Menu  maker - Xyraa ㋛"
                                               },
{
  "title": "MenuFun",
  "rowId": "Menu fun - Xyraa ㋛"
                                               },
{
  "title": "Database",
  "rowId": "Database - Xyraa ㋛"
                                               },
{
  "title": "ConvertMenu",
  "rowId": "Menu convert/tools - Xyraa ㋛"
                                               },
{
  "title": "OfficialGroup",
  "rowId": "Group official - Xyraa ㋛"
                                               },
{
  "title": "OthersMenu",
  "rowId": "Menu yang lain nya banh - Xyraa ㋛"
                                               }
]}], listType: 1 }
zen.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break

// [ F u n ]
case 'asupan':
stod = `${sender}`
 listMsg = {
 buttonText: 'LIST TYPE',
 footerText: '✇ _*RyzzenXC*_',
 description: `Hai kak @${stod.split('@')[0]}, Silahkan pilih typenya disini`,
 sections: [
{
"title": `${time} - ${week} ${weton} - ${calender}`,
 rows: [
{
  "title": "+62",
  "rowId": "Asupan +62 - Xyraa ㋛"
                                               },
{
  "title": "Bocil",
  "rowId": "Asupan bocil - Xyraa ㋛"
                                               },
{
  "title": "Ghea",
  "rowld": "Asupan Ghea - Xyraa ㋛"
                                               },
{
  "title": "Santuy",
  "rowId": "Asupan santuy - Xyraa ㋛"
                                               },
{
  "title": "Rikagusriani",
  "rowId": "Asupan Rikagusriani - Xyraa ㋛"
                                               }
]}], listType: 1 }
zen.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break 
case 'ghea':
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=${Dapapi}`)
ggg = `_A s u p a n Ghea_ ㋛`
sendButVideo(from, ggg, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break    
case 'rikagusriani':
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=${Dapapi}`)
yyy = `_A s u p a n Rika_ ㋛`
sendButVideo(from, yyy, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break
case 'ukhti':
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=${Dapapi}`)
kntl = `_A s u p a n Ukhti_ ㋛`
sendButVideo(from, kntl, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break
case 'santuy':
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=${Dapapi}`)
hhh = `_A s u p a n Santuy_ ㋛`
sendButVideo(from, hhh, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break 
case '+62':
get_result = await getBuffer(`https://itsmevall.herokuapp.com/api/asupan?apikey=${ValKey}`)
pll = `_A s u p a n +62_ ㋛︎`
sendButVideo(from, pll, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break 
case 'bocil':
get_result = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=${dapapi}`)
kodo = `_A s u p a n Bocil_ ㋛`
sendButVideo(from, kodo, `✇ _*RyzzenXC*_`, get_result, [{buttonId:`${prefix}sewabot`,buttonText:{displayText:'Sewa 💌'},type:1},{buttonId:`${prefix + command}`,buttonText:{displayText:'Next シ'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'Sourcecode 💕'},type:1}])
break 
case 'meme':
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/darkjokes?apikey=${YuzApi}`)
buff = await getBuffer(anu.result.result)
gbutsan = [{buttonId:`meme`,buttonText:{displayText:'NEXT➡️'},type:1}]
mhan = await zen.prepareMessage(from, buff, image, {thumbnail: buff})
const buttonMessagessss = {
imageMessage: mhan.message.imageMessage,
contentText: `*Next* _gak banh ?_`,
footerText: '*_Xyraa-Botz_*',
buttons: gbutsan,
headerType: 4
}
zen.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Xcode7.jpeg'),
caption: 'Tes',
quoted: dev})
break
case 'simi':
case 'bot':
if (args.length < 1) return reply(`Hai ${pushname}`)
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
simi = await fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=${numd.data.country_code}`)
sami = simi.success
zen.sendMessage(from, `_${sami}_`, text, {thumbnail: found, sendEphemeral: false, quoted:dev, contextInfo : {forwardingScore: 508, isForwarded: true}})
break
case 'kutuk':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Target')
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
karn = ["Jelek","Ganteng","Miskin","Kaya","Cantik","Tukang PHO","Sering Di PHP in","Wibu","Tolol","Mirip Monyet"]
karna = karn[Math.floor(Math.random() * karn.length)]
jad = ["Monyet","Pengusaha","Pacar Kekeyi","Lonthe","Jelek","Patung","Kodok","Babi","Anak Anjing","Istriku","Suamiku","Setan"]
jadi = jad[Math.floor(Math.random() * jad.length)]
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
} else {
mentions(`Karna @${mentioned[0].split('@')[0]} *${karna}*, Akan ku kutuk dia jadi *${jadi}*`, mentioned, true)
}
break 
case 'quotes':
const quotes = _quotes[Math.floor(Math.random() * _quotes.length)]
sendButMessage(from, quotes, `_*Xyraa-Botz_*`, [{buttonId: 'quotes', buttonText: {displayText: 'NEXT➡️'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
break
case 'gombal':
case 'bucin':
const gombal = _gombal[Math.floor(Math.random() * _gombal.length)]
sendButMessage(from, gombal, `_*Xyraa-Botz_*`, [{buttonId: 'bucin', buttonText: {displayText: 'NEXT➡️'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
break 

// [ OWNER ] 
case 'sewa':
if (!isGroup)return reply(mess.only.group)
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
reply(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
break
case 'clearchat':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
anu = await zen.chats.all()
list_chat = await zen.chats.all()
for (let chat of list_chat) {
zen.modifyChat(chat.jid, "delete")
}
flink("success clear all chat")
break
case 'delete':
case 'd':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
zen.deleteMessage(from, { id: dev.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break 
case 'setppbot':
zen.updatePresence(from, Presence.composing)
if (!isOwner) return reply('_*Only bot owners*_')
zen.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zen.downloadAndSaveMediaMessage(enmedia)
await zen.updateProfilePicture(botNumber, media)
reply('_*Succes*_')
break 
case "totag":
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (
((isMedia && !dev.message.videoMessage) || isQuotedSticker) &&
args.length == 0
) {
encmedia = isQuotedSticker
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
file = await zen.downloadAndSaveMediaMessage( encmedia, (filename = getRandom()))
value = args.join(" ")
var group = await zen.groupMetadata(from)
var member = group["participants"]
var mem = []
member.map(async (adm) => {
mem.push(adm.id.replace("c.us", "s.whatsapp.net"))
})
var options = {
contextInfo: { mentionedJid: mem }, quoted: dev,
}
ini_buffer = fs.readFileSync(file);
zen.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if (
((isMedia && !dev.message.videoMessage) || isQuotedImage) &&
args.length == 0
) {
encmedia = isQuotedImage
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
file = await zen.downloadAndSaveMediaMessage(
encmedia,
(filename = getRandom())
)
value = args.join(" ")
var group = await zen.groupMetadata(from)
var member = group["participants"]
var mem = [];
member.map(async (adm) => {
mem.push(adm.id.replace("c.us", "s.whatsapp.net"))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: dev,
}
ini_buffer = fs.readFileSync(file);
zen.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if (
((isMedia && !dev.message.videoMessage) || isQuotedAudio) &&
args.length == 0
) {
encmedia = isQuotedAudio
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
file = await zen.downloadAndSaveMediaMessage(
encmedia,
(filename = getRandom())
)
value = args.join(" ")
var group = await zen.groupMetadata(from)
var member = group["participants"]
var mem = [];
member.map(async (adm) => {
mem.push(adm.id.replace("c.us", "s.whatsapp.net"))
})
var options = {
mimetype: "audio/mp4",
ptt: true,
contextInfo: { mentionedJid: mem },
quoted: dev,
}
ini_buffer = fs.readFileSync(file)
zen.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
} else if (
((isMedia && !dev.message.videoMessage) || isQuotedVideo) &&
args.length == 0
) {
encmedia = isQuotedVideo
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
file = await zen.downloadAndSaveMediaMessage(
encmedia,
(filename = getRandom())
)
value = args.join(" ");
var group = await zen.groupMetadata(from);
var member = group["participants"]
var mem = []
member.map(async (adm) => {
mem.push(adm.id.replace("c.us", "s.whatsapp.net"))
})
var options = {
mimetype: "video/mp4",
contextInfo: { mentionedJid: mem },
quoted: dev,
}
ini_buffer = fs.readFileSync(file)
zen.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else {
reply(
`reply gambar/sticker/audio/video dengan caption ${prefix}totag`
)
}
break 
case 'send':
case 'colong':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if ((isMedia && !dev.message.videoMessage) || isQuotedImage) {
ger = isQuotedImage
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
owgi = await zen.downloadAndSaveMediaMessage(ger);
zen.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
caption: q,
})
fs.unlinkSync(owgi)
} else if ((isMedia && !dev.message.videoMessage) || isQuotedVideo) {
ger = isQuotedVideo
? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: dev;
owgi = await zen.downloadAndSaveMediaMessage(ger);
zen.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
caption: q,
});
fs.unlinkSync(owgi)
} else {
reply("Reply sw foto / video yg mau dicolong")
}
break 
case 'spam':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
argzi = arg.split("|")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
zen.sendMessage(from, argzi[0], MessageType.text)
}
break
// Rawan banned
case 'culik':
case 'hayuk':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return flink('_*Masukin id grupnya tolol*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
zen.groupAdd(args[0], pantek)
break
case 'restart':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
flink(`_Restarting Skyliners 7_`)
exec(`cd &&  node index`)
sleep(5000)
reply('_*D o n e*_')
break
case 'pin':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
zen.modifyChat(from, ChatModification.pin)
flink('*succes pin this chat*')
console.log('*pinned chat =* ' + from)
break
case 'unpin':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
zen.modifyChat(from, ChatModification.unpin)
flink('*succes unpin this chat*')
console.log('*Unpin chat =* ' + from)
break
case 'addvn':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('_Reply audio nya_')
nm = body.slice(6)
if (!nm) return reply('Nama vn nya apa?')
boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zen.downloadMediaMessage(boij)
vien.push(`${nm}`)
fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
zen.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: ftrol })
break
case 'delvn':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
try {
nmm = body.slice(6)
wanu = vien.indexOf(nmm)
vien.splice(wanu, 1)
fs.unlinkSync(`./media/vn/${nmm}.mp3`)
flink(`_*Sukses menghapus vn ${body.slice(7)}*_`)
} catch (err){
console.log(err)
reply(mess.error.api)
}
break
case 'addsticker':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stiker')
nm = body.slice(11)
if (!nm) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await zen.downloadMediaMessage(boij)
setik.push(`${nm}`)
fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
zen.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: ftrol })
break
case 'delsticker':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
try {
nmm = body.slice(11)
wanu = setik.indexOf(nmm)
setik.splice(wanu, 1)
fs.unlinkSync(`./media/sticker/${nmm}.webp`)
reply(`Sukses menghapus sticker ${body.slice(12)}`)
} catch (err){
console.log(err)
flink(mess.error.api)
}
break
case 'addrespon':{
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input1 = body.slice(11)
if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
let input = input1.split("|")
if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
addCommands(input[0], input[1], sender, commandsDB) 
flink(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
}
break
case 'dellrespon':
case 'delrespon':{
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
deleteCommands(body.slice(11), commandsDB)
flink(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
}
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : _*${command} cmdnya dan reply stickernya*_`)
var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
flink("_*Done*_")
} else {
reply('_Reply sticker nya_')
}
break
case 'delcmd':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : _*${command} reply sticker*_`)
var kodenya = dev.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done")
break
case 'listcmd':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
flink(teksnyee)
break 
case 'autovn':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autovn === true) return
autovn = true
flink(`Succes mengaktifkan autovn`)
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
flink(`Succes mematikan autovn`)
} else {
reply(`Pilih on atau off`)
}
break
case 'autoketik':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
flink(`Succes mengaktifkan autoketik`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
flink(`Succes mematikan autoketik`)
} else {
reply(`Pilih on atau off`)
}
break
case 'setprefix':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
if (c === 'multi'){
multi = true
flink(`_*Succes change prefix to ${c}*_`)
} else if (c === 'nopref'){
multi = false
nopref = true
flink(`Berhasil mengubah prefix ke *${c}*`)
} else {
multi = false
nopref = false
prefa = `${c}`
flink(`_*Succes change prefix to ${c}*_`)
}
break
case 'join':
case 'invite':
if (isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
zen.acceptInvite(code)
.then((res) => {
zen.sendMessage(res.gid,`*Halo saya ${nama}!*\n_Saya di invit oleh @${sender.split("@")[0]} Untuk masuk ke dalam Group!_\n_Ketik ${prefix}menu untuk Melihat Fitur Bot!_`,text,{contextInfo:{mentionedJid:[sender]},quoted : finv})
flink(`_Succses Join Group!_`)
})
.catch((err) => reply(jsonformat(err)))
break
case 'leave':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
setTimeout( () => {
zen.groupLeave (from) 
}, 5000)
setTimeout( () => {
zen.updatePresence(from, Presence.composing) 
zen.sendMessage(from, '_*Sayonara 👋*_', text) // ur cods
}, 0)
break 
case 'online':
case 'actived':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
offline = false
flink('Status : *ACTIVED*')
break
case 'offline':
case 'off':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
offline = true
waktuafk = Date.now()
anuu = body.slice(9) ? body.slice(8) : '-'
alasanafk = anuu
flink('MODE : *OFFLINE*')
break
case 'public':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
publik = true
reply('Sukses mengubah mode self ke public')
break
case 'self':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
publik = false
reply('Sukses mengubah mode public ke self')
break
case 'anticall':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antical)return reply('Sudah diaktifkan sebelumnya!')
antical = true
flink(`Succes mengaktifkan anticall`)
} else if (args[0] === "off") {
if(!antical)return reply('Sudah di NonAktifkan sebelumnya!')
antical = false
flink(`Succes mematikan anticall`)
} else {
reply(`Pilih on atau off`)
}
break
case 'setmenu':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if(args[0] == 'simpel'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'listmsg'){
menusimpel = false
reply('Sucsess')
}else{
reply(`Cara Penggunaan : ${prefix}setmenu simpel\n\nTersedia\n •simpel\n •listmsg`)
}
break
case 'nano':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'ban':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[2], ban)
}
reply('Sukses')
} else if (isQuotedMsg) {
if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
addBanned(quotedMsg.sender, args[1], ban)
reply(`Sukses ban target`)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
reply('Sukses')
} else {
reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
}
break
case 'unban':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], ban)
}
reply('Sukses')
}if (isQuotedMsg) {
unBanned(quotedMsg.sender, ban)
reply(`Sukses unban target`) 
} else if (!isNaN(args[1])) {
unBanned(args[1] + '@s.whatsapp.net', ban)
reply('Sukses')
} else {
reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
}
break
case 'getcaption':
if (!dev.key.fromMe) return;
try {
reply(`${dev.quoted.title}`)
} catch {
reply(`${dev.quoted.caption}`)
}
break
case "setthumb":
if (
((isMedia && !dev.message.videoMessage) || isQuotedImage || isQuotedSticker) && args.length == 0 ) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(dev).replace("quotedM", "m")).message.extendedTextMessage.contextInfo: dev
delb = await zen.downloadMediaMessage(boij);
fs.writeFileSync(`./media/xyz.jpg`, delb)
replyfakelink("Sukses")
} else {
reply(`Kirim gambar dengan caption ${prefix}sethumb`)
}
break
case 'caripesan':  //by ANU TEAM
if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)
teks = arg
if (teks.includes("|")) { 
try {
var ve = teks.split("|")[0]
var za = teks.split("|")[1]
sampai = `${za}`
if (isNaN(sampai)) return reply('Harus berupa Angka!')
batas = parseInt(sampai) + 1
if (batas > 30) return reply('Maks 30!')
reply(mess.wait)
cok = await zen.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
for (i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
zen.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
} catch (e) {
return reply(String(e))
}
} else {
reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)
}
break
case 'readall':
totalchat.map( async ({ jid }) => {
await zen.chatRead(jid)
})
reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)
console.log(totalchat.length)
break	
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await zen.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break

//-- [ G R O U P ]
case 'antibug':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[0] === 'on') {
if (bugc === true) return
bugc = true
reply('Berhasil menyalakan antibug')
} else if (args[0] === 'off') {
if (bugc === false) return
bugc = false
reply('Berhasil mematikan antibug')
} else {
reply('Pilih on atau off')
}
break
case 'closetime':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zen.updatePresence(from, Presence.composing)
stod = `${sender}`
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
const close = {
text: `Grup ditutup oleh admin @${stod.split('@')[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [stod] }
}
zen.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
break 
case 'opentime':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zen.updatePresence(from, Presence.composing) 
stod = `${sender}`
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = dev.participant
const open = {
text: `Grup telah dibuka oleh admin @${stod.split('@')[0]}\nsekarang semua member bisa mengirim pesan`,
contextInfo: { mentionedJid: [stod] }
}
zen.groupSettingChange (from, GroupSettingChange.messageSend, false);
flink(open)
}, timer)
break 
case 'banchat':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (isBanchat) return reply(`_Telah di ban_`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`_*Succes*_`)
break 
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink on`)
if (Number(args[0]) === "on") {
if (isAntiLink) return reply('Sudah Aktif Kak')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan fitur antilink')
zen.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
} else if (Number(args[0]) === "off") {
if (!isAntiLink) return reply('Sudah Mati Kak')
var ini = antilink.indexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses menonaktifkan fitur antilink')
} else {
reply('on untuk mengaktifkan, off untuk mematikan')
}
break 
case 'antidelete':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if(antidel)return reply('Sudah diaktifkan sebelumnya!')
antidel = true
reply(`Succes mengaktifkan antidelete`)
} else if (args[0] === "off") {
if(!antidel)return reply('Sudah di NonAktifkan sebelumnya!')
antidel = false
reply(`Succes mematikan antidelete`)
} else {
reply(`Pilih on atau off`)
}
break
case 'antiviewonce':
case 'antivo':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`_*Pilih on atau off*_`)
if ((args[0]) === 'on') {                    
if (isAntiVO) return reply(`Udah aktif`)
antiviewonce.push(from)
fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
reply('_*Antiviewonce berhasil di aktifkan*_')
} else if ((args[0]) === 'off') {                  
antiviewonce.splice(from, 1)
fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
reply('_*Antiviewonce berhasil di matikan*_')
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')			        
}
break 
case 'closegc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`_*Sukses menutup grup ${groupName}*_`)
zen.groupSettingChange(from, GroupSettingChange.messageSend, true)
break 
case 'opengc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`_*Sukses membuka grup ${groupName}*_`)
zen.groupSettingChange(from, GroupSettingChange.messageSend, false)
break 
case 'notif':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(6)}*`
group = await zen.groupMetadata(from)
member = group['participants']
jids = []
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: ftrol
}
await zen.sendMessage(from, options, text)
break 
case 'radd':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
add = dev.message.extendedTextMessage.contextInfo.participant
zen.groupAdd(from, [add])
reply('Sukses menambahkan peserta')
break
case 'rkick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
kick = dev.message.extendedTextMessage.contextInfo.participant
zen.groupRemove(from, [kick])
reply('_*Sukses mengeluarkan peserta*_')
break 
case 'promote':
case 'pm':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = dev.message.extendedTextMessage.contextInfo.participant
zen.groupMakeAdmin(from, [promote])
reply('_Done_')
break
case 'demote':
case 'dm':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (dev.message.extendedTextMessage === undefined || dev.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = dev.message.extendedTextMessage.contextInfo.participant
zen.groupDemoteAdmin(from, [demote])
reply('_Done_')
break 
case 'listonline':
if (!isGroup) return reply(mess.only.group)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(zen.chats.get(ido).presences), zen.user.jid]
zen.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: dev,
contextInfo: { mentionedJid: online }
})
break 
case 'revoke':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
zen.query({json, expect200: true})
reply('Sukses Mereset Link Group')
break 
case 'promoteall':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
zen.groupMakeAdmin(from, members_id)
break
case 'demoteall':
if (!isOwner && !dev.key.fromMe) return reply(mess.only.ownerB)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
zen.groupDemoteAdmin(from, members_id)
break 
case 'setdescgc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
zen.groupUpdateDescription(from, `${body.slice(10)}`)
reply(`Sukses mengganti deskripsi grup ke :\n${body.slice(10)}`)
break 
case 'linkgc':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await zen.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
zen.sendMessage(from, yeh, text, { quoted: dev })
break 
case 'listadmin':
if (!isGroup) return reply(mess.only.group)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}welcome 1/0`)
if (Number(args[0]) === 1) {
if (isWelkam) return reply('Sudah Aktif Kak')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome')
} else if (Number(args[0]) === 0) {
if (!isWelkom) return reply('Sudah Mati Kak')
var ini = welkom.indexOf(from)
welkom.splice(ini, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome')
} else {
reply('1 untuk mengaktifkan, 0 untuk mematikan')
}
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(8)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break 
case 'kontak':
if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (dev.message.extendedTextMessage != undefined){
mentioned = dev.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
case 'getpp':
anu = from
if (`${anu}@s.whatsapp.net`) {
try {
ppimg = await zen.getProfilePicture(anu)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
ano = await zen.getProfilePicture(anu)
buffer = await getBuffer(ano)
zen.sendMessage(from, buffer, image, {quoted: dev})
} else {
}
break
			  
//-- [ ABOUT MENU ]
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
reply(txtnyee)
break
case 'sewacheck':
case 'ceksewa': 
if (!isGroup) return reply(mess.only.group)
if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
reply(premiumnya)
break
case 'tes':
case 'test':
case 'runtime':
runtime = process.uptime()
flink(`- Active!\n${kyun(runtime)}`)
break
case 'ping':
case 'chatlist':
var groups = xie.chats.array.filter(v => v.jid.endsWith('g.us'))
var private = xie.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const chatsIds = await xie.chats.all()
const timestamp = speed();
const latensi = speed() - timestamp 
p0 =` Loaded Message
                
- [ ${totalchat.length} ]  Total Chat
- [ ${groups.length} ] Group Chat
- [ ${private.length} ] Private Chat
- [ Realme ] HANDPHONE
- [ ${xie.user.phone.wa_version} ] WA Version
- [ Baileys ] Libary

Speed : ${latensi.toFixed(4)} Second`
reply(p0)
break
case 'listban':
let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
let menx = [];
for (let i of ban){
menx.push(i.id)
txtx += `*ID :* @${i.id.split("@")[0]}\n`
if (i.expired === 'PERMANENT'){
let cekvip = 'PERMANENT'
txtx += `*Expire :* PERMANENT\n\n`
} else {
let cekvip = ms(i.expired - Date.now())
txtx += `*Expire :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)\n\n`
}
}
mentions(txtx, menx, true)
break
case 'report':
report = `  ≡ *INFORMASI*
Request & Melaporkan fitur error pada bot, pastikan memberikan laporan yang benar dan jelas !

┌───⊷ *REPORT* ⊶
├╼ *${prefix}Request (Teks)*
├╼ *${prefix}Bug (Teks)*
└──────────────

Total :
Request : ${_request.length}
Laporan : ${_lapor.length}

✆ Atau bisa Hubungi Owners untuk info lebih lengkap`
reply(report)
break
case 'request':
yoi = q
if (args.length < 1) return reply('Masukan fitur yang kamu inginkan ada di Bot Reyzen')
if (yoi.length > 100 ) return reply('Teks melampaui batas, request mu di tolak !')
  _request.push(yoi)
fs.writeFileSync('./database/request.json', JSON.stringify(_request))
reply(`Terimakasih *${pushname}*, Request kamu telah tersimpan dalam database`)
break
case 'lapor':
case 'bug':
yoi = q
if (args.length < 1) return reply('Masukan nama fitur error yang terjadi saat kamu mencobanya')
if (yoi.length > 100) return reply('Teks melampaui batas, request mu di tolak !')
_lapor.push(yoi)
fs.writeFileSync('./database/report.json', JSON.stringify(_lapor))
reply(`Terimakasih *${pushname}*, Laporan kamu telah tersimpan dalam database`)
break
case 'listreport':
teks = ` ≡ *LIST LAPORAN*\nBerikut adalah list Laporan yang di terima pertanggal *${calender}* dengan jumlah laporan *${_lapor.length}*\n\n┌───⊷ *LIST* ⊶\n`
for (let lap of _lapor) {
teks += `╼ ${lap}\n`
}
teks  += `└──────────────`
reply(teks.trim())
break
case 'owner':
case'creator':
case 'developer':
case 'author':
let ini_list = []
for (let i of ownerNumberr) {
const vname = zen.contacts[i] != undefined ? zen.contacts[i].vname || zen.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer Xyraa-Botz`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Reyzen;;;\nFN:${vname ? `${vname}` : `${zen.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
zen.sendMessage(from, {
"displayName": `Developer Xyraa-Botz`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: dev, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'snk':
case 'rules':
stod = `${sender}`
data = fs.readFileSync('./lib/logo.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
gambar = await getBuffer(randKey.result)
data = '*Syarat & Ketentuan Xyraa-Botz*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~'
sendButLocation(from, `${data}`, `✇ *_Xyraa-Botz_*`, {jpegThumbnail: gambar}, [{buttonId:`${prefix}owner`,buttonText:{displayText:'Creator 💗'},type:1},{buttonId:`${prefix}sewa`,buttonText:{displayText:'Sewa bot 💌'},type:1}], {contextInfo: { mentionedJid: [stod]}})
break
  
//-- [ SEARCH MENU ] 
case 'artimimpi':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/artimimpi?q=${body.slice(10)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'linkwa':
if(!q) return reply('cari group apa?')
hx.linkwa(q)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
})
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*W I K I P E D I A*\n\n*Judul :* ${res[0].judul}
_*Wiki :*_ ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: ftrol, caption: result}).catch(e => {
  reply(result)
})
break 
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(6)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'bilangangka':
if (args.length < 1) return reply('Angkanya?')
var teks = body.slice(12)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/bilangangka?angka=${teks}&apikey=${HunterApi}`, {method: 'get'})
kata = anu.result
reply(kata)
break 
case 'githubstalk':
if (args.length < 1) return reply('Usernamenya?')
var teks = body.slice(12)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/stalk/github?user=${teks}&apikey=${HunterApi}`, {method: 'get'})
gstalk = `❏ *GITHUB STALK*\n\n❏ Name : ${anu.result.name}\n❏ Followers : ${anu.result.followers}\n❏ Following : ${anu.result.following}\n❏ Id : ${anu.result.id}\n❏ Node Id : ${anu.result.node_id}\n❏ Type : ${anu.result.type}\n❏ Company : ${anu.result.company}\n❏ Location : ${anu.result.location}\n❏ Bio : ${anu.result.bio}\n❏ Site Admin : ${anu.result.site_admin}\n❏ Email : ${anu.result.email}\n❏ Created At : ${anu.result.created_at}\n❏ Updated At : ${anu.result.updated_at}\n❏ Twitter Username : ${anu.result.twitter_username}\n❏ Blog : ${anu.result.blog}\n❏ Avatar Url : ${anu.result.avatar_url}\n❏ Gravatar Id : ${anu.result.gravatar_id}\n❏ Html Url : ${anu.result.html_url}`
reply(mess.wait)
buff = await getBuffer(anu.result.avatar_url)
zen.sendMessage(from, buff, image, {quoted: ftoko, caption: gstalk})
break 
case 'infogempa':
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=${HunterApi}`, {method: 'get'})
gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
reply(mess.wait)
buff = await getBuffer(anu.result.Map)
zen.sendMessage(from, buff, image, {quoted: ftrol, caption: gempa})
break 
case 'tr':
case 'translate':
if (args.length == 0) return reply(`Example: ${prefix + command} en apa\nKlo gtau kode bhsa nya ktik ${prefix}bahasa`)
kode_negara = args[0]
args.shift()
teks = args.join(" ")
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Translate*
                    
Terdeteksi Bahasa : ${res.from.language.iso}
Terjemahan Nya : ${res.text}`
reply(ini_txt)
})
break    

//-- [ DOWNLOADER ]
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`❒ Nama : ${res[0].nama}\`\`\`
\`\`\`❒ Ukuran : ${res[0].size}\`\`\`
\`\`\`❒ Link : ${res[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: dev})
break
case 'igstory': 
if(!q) return reply('Usernamenya?')
hx.igstory(q)
.then(async result => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
zen.sendMessage(from,link,video,{quoted: dev,caption: `Type : ${i.type}`})
} else {
let link = await getBuffer(i.url)
zen.sendMessage(from,link,image,{quoted: dev,caption: `Type : ${i.type}`})                  
}
}
})
break
case "fb":
if (!q) return reply("Linknya?")
if (!isUrl(args[0]) && !args[0].includes("facebook.com"))
return reply(mess.Iv)
reply(mess.wait)
te = args.join(" ")
hx.fbdown(`${te}`).then((G) => {
ten = `${G.HD}`
sendMediaURL(from, ten, `*Link video_normal* : ${G.Normal_video}`)
})
break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
break
                    
//-- [ CONVERT ]
case 'sticker':
case 'stiker':
case 's':
if (isMedia && !dev.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
const media = await zen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
const media = await zen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'stickerwm':
case 'swm':
if (isMedia && !dev.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
const media = await zen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && dev.message.videoMessage.fileLength < 10000000 || isQuotedVideo && dev.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : dev
const media = await zen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'takestick':
case 'take':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
ppp = `${args.join(' ')}`
const encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const media = await zen.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname = ppp.split('|')[0]
const author = ppp.split('|')[1]
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zen.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: dev})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break
case 'nobg':
if ((isMedia && !dev.videoMessage || isQuotedImage)) 
reply(mess.wait)
anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", media)
getUrl = `${anu.display_url}`
buff = await getBuffer(`https://api.zeks.xyz/api/removebg?apikey=apivinz&url=${getUrl}`)
zen.sendMessage(from, buff, image, {quoted: dev})
break
case 'tourl':
if ((isMedia && !dev.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo : dev
owgi = await zen.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'emoji':
if (args.length == 0) return reply(`Example: ${prefix + command} wa 🗿

*LIST EMOJI*

ap = Emoji Apple
wa = Emoji Whatsapp
fb = Emoji Facebook
go = Emoji Google
mo = Emoji Mozilla
tw = Emoji Twitter
sa = Emoji Samsung

penggunaan : ${prefix + command } wa 🗿`)
emojis = args[0]
args.shift()
emoje = args.join(" ")
reply(mess.wait)
switch (emojis) {
case 'ap':
case 'apple':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[0].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'wa':
case 'whatsapp':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'fb':
case 'facebook':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[6].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'go':
case 'google':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[1].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'mo':
case 'mozila':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[14].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'tw':
case 'twitter':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[5].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
case 'sa':
case 'samsung':
emoji.get(`${emoje}`).then(emoji => {
teks = `${emoji.images[2].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log(teks)
})
break
}
break
case 'tomp3':
zen.updatePresence(from, Presence.composing)
if (!isQuotedVideo) return reply('Reply Video Nya Kak')
reply(mess.wait)
encmediad = JSON.parse(JSON.stringify(dev).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
mediad = await zen.downloadAndSaveMediaMessage(encmediad)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
fs.unlinkSync(mediad)
if (err) return reply(mess.error.api)
mhee = fs.readFileSync(ran)
zen.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 08, quoted:fgi })
fs.unlinkSync(ran)
})
break
case 'robot':
encmedial = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await zen.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
zen.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted:fgi})
fs.unlinkSync(ran)
})
break
case 'gemuk':
encmediaz = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediaz = await zen.downloadAndSaveMediaMessage(encmediaz)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediaz)
if (err) return ephe('Error!')
hah = fs.readFileSync(ran)
zen.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:fgi})
fs.unlinkSync(ran)
})
break
case 'reversemp3':
encmediau = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediau = await zen.downloadAndSaveMediaMessage(encmediau)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zen.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:fgi})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
encmediao = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediao = await zen.downloadAndSaveMediaMessage(encmediao)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediao)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
zen.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:fgi})
fs.unlinkSync(ran)
})
break
case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(dev).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await zen.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
zen.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: fgi})
fs.unlinkSync(rname)
})
break

//-- [ MAKER ]
case 'maker2d2': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker2?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker2d3': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker2d4': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker4?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker3d': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = body.slice(8)
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker3d2': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker3d3': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'maker3d4': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'transformer': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.results)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'googletxt':
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} tsukasa|chan|kawai`)
makell = args.join(" ")
ll1 = makell.split("|")[0];
ll2 = makell.split("|")[1];
ll3 = makell.split("|")[0];
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'battlefield': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Yuzzu|Kamiyaka`)
makell = args.join(" ")
ll1 = makell.split("|")[0];
ll2 = makell.split("|")[1];
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'coffeecup': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'coffeecup2': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'neon': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'glow': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'summer': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'flower': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'burn': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'quote': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'fliptext':
if (args.length < 1) return reply(`Example:\n${prefix}fliptext Xyraa`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
break
case 'fancytext':
if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/fancytext?text=${body.slice(11)}&apikey=${HunterApi}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'styletext':
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
zen.reply(m.chat, Object.entries(await stylizeText(matext)).map(([name, value]) => `\`\`\`「 ${name} 」\`\`\`\n\n${value}\n\n—————————————————————————`).join`\n\n`, m)
break

//-- [ OTHER MENU ] 
case 'tts':
if (args.length < 1) return zen.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: dev })
const gtts = require('./lib/gtts')(args[0])
if (args.length < 2) return zen.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: dev })
var bby = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300
? reply('_Teks nya kepanjangan_')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(dla.stikga())
zen.sendMessage(from, buff, audio, { duration: 321, ptt: true, quoted: dev })
fs.unlinkSync(rano)
})
})
break 
case 'lolkey':
case 'cekapikey':
if (args.length < 1) return reply(`Ketik ${prefix}lolkey [ *Apikeynya* ]`) 
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${q}`)
teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = https://lolhuman.herokuapp.com`
zen.sendMessage(from, teks, text, {quoted: dev})
break 
case 'ss':
case 'ssweb':
reply(mess.wait)
sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/ssweb?url=${args[0]}&apikey=${HunterApi}`)
break
case 'kodebahasa':
case 'bahasa':
reply(bahasa())
break
case 'q': 
if (!m.quoted) return reply('reply pesan!')
let qse = zen.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'get':
case 'fetch':
if(!c) return reply('Linknya?')
fetch(`${args[0]}`).then(res => res.text())  
.then(bu =>{
reply(bu)
})   
break
            
//-- [ DATABASE ]
case 'vnlist':
case 'listvn':
teks = '*VN List :*\n\n'
for (let awokwkwk of vien) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
xie.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": vien } })
break
case 'stickerlist':
case 'liststicker':
teks = '*Sticker List :*\n\n'
for (let awokwkwk of setik) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
xie.sendMessage(from, teks.trim(), extendedText, { quoted: dev, contextInfo: { "mentionedJid": setik } })
break

//-- [ ANIME ]
case 'otaku':
case 'otakudesu':
if (!q) return reply("judul animenya?")
let anime = await hx.otakudesu(q)
rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
ram = await getBuffer(anime.img)
zen.sendMessage(from, ram, image, { quoted: dev, caption: rem })
break 

// [ MAKER MENU ]
case 'golden': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break
case 'wooden': 
if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xyraa-Botz`)
makell = args.join(" ")
reply(mess.wait)
anu = await fetchJson(`https://api-yuzzu.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${YuzApi}`)
buffer1 = await getBuffer(anu.result.url)
zen.sendMessage(from, buffer1, image, {quoted: dev, thumbnail: fs.readFileSync('./media/Xcode7.jpeg')})
break 

// [ TOOLS MENU ]
case 'nulis':
reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
break
case 'nuliskiri':{
if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(mess.wait)
const tulisan = body.slice(10)
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'22',
'-interline-spacing',
'2',
'-annotate',
'+140+153',
fixHeight,
'./media/nulis/images/buku/setelahkiri.jpg'
])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
zen.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
})
}
break
case 'nuliskanan':{
if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(mess.wait)
const tulisan = body.slice(12)
const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', [
'./media/nulis/images/buku/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'2',
'-annotate',
'+128+129',
fixHeight,
'./media/nulis/images/buku/setelahkanan.jpg'
])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
zen.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
})
}
break
case 'foliokiri':{
if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(mess.wait)
const tulisan = body.slice(11)
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkiri.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'1720x1280',
'-pointsize',
'23',
'-interline-spacing',
'4',
'-annotate',
'+48+185',
fixHeight,
'./media/nulis/images/folio/setelahkiri.jpg'
])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
zen.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
})
}
break
case 'foliokanan':{
if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(mess.wait)
const tulisan = body.slice(12)
const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', [
'./media/nulis/images/folio/sebelumkanan.jpg',
'-font',
'./media/nulis/font/Indie-Flower.ttf',
'-size',
'960x1280',
'-pointsize',
'23',
'-interline-spacing',
'3',
'-annotate',
'+89+190',
fixHeight,
'./media/nulis/images/folio/setelahkanan.jpg'
])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
zen.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`, thumbnail: Buffer.alloc(0)})
})
}
break
default:break 
}
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     zen.sendMessage(`62895360111119@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/xyz.jpg'),sourceUrl:"https://youtube.com/c/Reyzen - AFC"}}})
	}
    }
    }
    }
    }
    }
    }