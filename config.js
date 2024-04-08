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
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk9aVGh4bTR5VWt1NHA1ZzZHeFZ6eUZsOFBuVi9RYnZYM0pOMzliS0RHRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSFZGZDlVOFFHR0szOC8xREZraFBUampjM3VyR0pGbFJCcG5zOHNUV1dqVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRGJQdTZud2E4M0dERmZuYnRjeUNPb1REenUvQWdQR1lGcVo0eWFJV1hrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzZnRhWTRsdFZOUk16ZkYxejJqUldEN3QwUC9TZ2JQLzdQSGdqRGtwSUZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGRERaT2t0YlVCY0xwdUZueG56V0lZL1A5M2NocUVzTjB5MkswWlQxVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhtNGNGZE14WFdVS2loQko3dFVjTGY4U2NpVzRXK0xRZXBweDNkaEE4azg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RLb0IzVFRjTit2aU4xdXlDSUtxWHYwWE50RDljSW0xcG1Ca2lkTUZWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHhlK0dJRDRqelM2UTQ1L05ncjJCOXl2czdvZC8rRkczV2c5WWtLV1Bpaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImF0TXVzOHUrOUdYQkltWlpKNWZOci9CWksyMzRVNUhtYngyUExkN2cvMGNBQldYTVdFdytEY2Z0KzBOQzczQ2VDdnQrcnIzR1M1bGJ0enQ4RkxzekJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTE2LCJhZHZTZWNyZXRLZXkiOiJ6dVplZkNORUZSQ3c5SUZPMU44NmFRNmxWWE5zTk1rNjlUZnIxSXJuOE9ZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBY2MyTWRjTlNaZXd0UlYySGFiN1ZnIiwicGhvbmVJZCI6IjZlYjc1ZGQ4LWUxMmMtNDA1YS04YmEwLThhMWFiMmFlOGMxZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvMkdTNCsrRVV3ZnpEZjd2VjFsWU1xeFFTYzQ9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxzOHoyOXgrc1FWZGFFbVU2Z3YyMG9GYU9uWT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o3azJaTURFSlBxemJBR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndmK3Y0SHl0SHc0dDhwMWdDWnoxMTVVWG5Ia3gwak8wdEg2dDFORUhpMmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imtta2hmdzJoTGNXRG43UTczdk9aL1gxZER1ZStjejdhc0F6aDloYTNydTRUQzdLZUdua3c1NXdEUFQ5RTI4SFFCNlR6anU1TldVWWRzY0RQQUtRdERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2a0ljVjRnbXJwb1EzR0VHMHdENjZsZzNnVitkb3p2eXB4dDZwNHNhZU5aVGNYK3JtOTNKZFRINnhjVzJjaWRDanJSZnZKYTNjNXNxZDlLT0t1eDhEUT09In0sIm1lIjp7ImlkIjoiOTQ3NjU4MzIzMzg6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Xp/Cdl7XwnZeu8J2Xv/CdmILwnZiA8J2XtfCdl64g8J2XnvCdl67wnZiD8J2XtvCdl7vwnZex8J2YhvCdl64gPC8+In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY1ODMyMzM4OjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNIL3IrQjhyUjhPTGZLZFlBbWM5ZGVWRjV4NU1kSXp0TFIrcmRUUkI0dG4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTI1NTExODksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUGVRIn0=' : process.env.SESSION_ID,
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
