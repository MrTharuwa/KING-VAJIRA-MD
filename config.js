const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uwrr2obvrb4kbwnrvimy:rbgieh8nfk7EylXCh2D@byg4ii8uzy5rro8bcdfu-mongodb.services.clever-cloud.com:2008/byg4ii8uzy5rro8bcdfu"
global.port= process.env.PORT || 5000
global.email = 'ali3235439274@gmail.com'
global.github = 'https://github.com/vajirabot1/KING-VAJIRA-MD'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/ali_shahid_25' // add your username
global.sudo = process.env.SUDO || '923235439274'
global.devs = '923235439274';
global.website = 'https://github.com/AliShahid20' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/Bot-01-16-9'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '*Gulsher bot*' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Gulsher Awan' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT04rUy9iRlhhQWVyeDE1ZCtyQjJhbG1YT1VoTGIxZEpqNDg5ZHFCQUJrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXRMWkRSbk9kUXc1ajJGSWtoYVpxd0hWOTlkZkxRSmRTaWRiQnhUNWxtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJR29DaTNyM2FMQk5xeVdjS2cwU1dKQUVLVlhUeEU2U1IyMlBQNFJScUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUVR5QXgrMVo3ekc0b3JvRUtzK1kwNTE5NVpVLzdmSVB3bkxoTHpacmpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZOYTcrakNCQVkwdG82cnpzSUdLcXNRclowN3VFMVFwUGtVZ01VUEYrbHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllSenpUZW04dnZKWWZIR09KZlJkZkJXWkpyREgwZlFMbjlxSUs4WGhQQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUdCaituWEQwV3V5bEhPZWFBcWp3Mk8rUE5Gbm9oOEtwdmJiYXlGZmpYYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXFIK1k2TjRvUm5BbXQzYjUybGFmTy9JWS9rQkhkMEZYUTdRdnJqUzNqOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBOdEZhbUh5K1RYTGJNaFdjTS9XMW8wN2NyV1VVTEY5Y0wrMVVHUmtDaFRWcC80bUdkVlFWVmF6UXcwU1Z4L3NFanRxcGgweFU5SnRralNHT3lGZWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJrTkJEZzNvQjFkQkc5Nm52amEvN3d5M1hKMjRTR1g4RVV6QzZGR0FpclFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2cWw0YlNCY1IxT21MVEs0TzQzaU1BIiwicGhvbmVJZCI6IjFlZmNhZjQ1LTVkM2EtNDg0Ni04ODI3LTllN2ZlZGExYjE1MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOVVLWS96dWFBVU4wVUt6a01Jb2xxcGNQV1U9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMrT3pkM0pZb2Y0OFV5Z2FDaU10YUdIOW1nND0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TYmhyb0NFSVRobDYwR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktLVTdseDlJZk1rcC9TZi82WHdRZm9aQzY4blBScnFiQ05rR0FyZ081eDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im5vNk02aU5peElQU0tsZ0dRbFVEbGNBeUdEVkFyMlp1cDFCdUxoNVZLTEovaVlqd1R0VUtNVTBmNXVyMVZMbVhwOHRaSUFoNm0wUlJvdTNqaW11VUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyZkNrOEdCdFdlemQ1NURoaVFiaFRCdURGWHArV3MvWkNOUjVlMVphWXlVa2dJOGhLUUl0SnIyV1NvbDBneWEzdkpCU2x3dGx3c0tMMm92N2JTVTZoQT09In0sIm1lIjp7ImlkIjoiOTIzMDQzOTQyNDI5OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6InVua25vd24ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDQzOTQyNDI5OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNpbE81Y2ZTSHpKS2Ywbi8rbDhFSDZHUXV2SnowYTZtd2paQmdLNER1Y2QifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDUzNzM4MzAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEdQIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Gulsher Awan' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'Gulsher Awan' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'Fuck, Sex' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'Hello. Gulsher-bot is here...How can I assist you toda?' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? true : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'VAJIRA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
