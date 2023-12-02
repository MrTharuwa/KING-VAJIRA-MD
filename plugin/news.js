const moment = require('moment-timezone') 
 const {fetchJson,cmd, tlang } = require('../lib') 
 let gis = require("async-g-i-s"); 
 const axios = require('axios') 
 const fetch = require('node-fetch') 
 const Esana = require('@sl-code-lords/esana-news') 
 var api = new Esana() 

//---------------------------------------------------------------------------
cmd({   
       pattern: "nasa",   
       alias: ["news/nasa"],   
       react: "🀄",   
       desc: "",   
       category: "news",   
       use: '.hirunews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const nasa = await fetchJson(`https://darkapi--technicalhacke4.repl.co/nasanews`);   
  
             const images = `${nasa.result.image}`   
              const title = `${nasa.result.title}`  
              const news = `${nasa.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＮＡＳＡ ＢＹ ＶＡＪＩＲＡ\n\n*📍 𝚃𝚒𝚝𝚕𝚎 :- ${ title }\n\n🕒 ᴛɪᴍᴇ :-${date}*\n\n⚡ ᴜʀʟ :-${url}\n\n _${news}._\n\n📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ...`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }}) 
//---------------------------------------------------------------------------
cmd({  
      pattern: "technews",  
      react: "🧾",  
      desc: "Searches news",  
      category: "news",  
      use: '.technews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const technews = await fetchJson(`http://darkapi.technicalhacke4.repl.co/sinhala-technews`);  
  
  
  
  
             const images = `${technews.result.img}`  
             const title = `${technews.result.title}`  
             const date = `${technews.time}`
             const news = `${technews.result.decs}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＴＥＣＨＮＥＷＳ ＢＹ ＶＡＪＩＲＡ\n\n📍 𝚃𝚒𝚝𝚕𝚎 :- ${ title }\n\n 🕒 ᴛɪᴍᴇ :-${date}\n\n⚡ ᴜʀʟ :-${url}\n\n 📑 ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${ news }\n📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ...`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
//---------------------------------------------------------------------------
cmd({ 
         pattern: "news", 
         alias: "esana",
         category: "news",
         react: "📃",
         desc: "Searches news", 
         use: '<text>', 
         filename: __filename, 
     }, 
     async(Void, citel) => { 
        let res = await api.latest_id(); 
        const nid = res.results.news_id; 
        let news = await api.news(nid); 
        const tt = news.results.TITLE; 
        const dss = news.results.DESCRIPTION; 
        const ttime = news.results.PUBLISHED; 
        const img = news.results.COVER; 
        const cap = `📃ＮＥＷＳ ＢＹ ＶＡＪＩＲＡ\n\n📍 𝚃𝚒𝚝𝚕𝚎 :- ${tt}\n\n🕒 ᴛɪᴍᴇ :- ${ttime}\n\n⚡ ᴜʀʟ :-${url}\n\n 📑 ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${dss}\n\n 📌 GENERATED BY VAJIRA...`; 
                 await Void.sendMessage(citel.chat,{image:{url: img}, caption: cap})
 }) 
//---------------------------------------------------------------------------
cmd({  
      pattern: "hirunews",  
      alias: ["hiru","news/hiru"],  
      react: "📜",  
      desc: "",  
      category: "news",  
      use: '.hirunews',  
      filename: __filename  
  },  
  async(Void, citel) => {  
  try{  
  const hirunews = await fetchJson(`https://hirunews.aquaapk-dl.repl.co/api/latest`);  
            const images = `${hirunews.image}`  
             const title = `${hirunews.title}`  
             const date = `${hirunews.time}`  
             const news = `${hirunews.desc}`  
  
  await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＨＩＲＵ ＮＥＷＳ ＢＹ ＶＡＪＩＲＡ\n\n📍 𝚃𝚒𝚝𝚕𝚎 :- ${ title }\n\n🕒 ᴛɪᴍᴇ :-${date}\n\n⚡ ᴜʀʟ :-${url}\n\n📑 ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${ news }\n\n📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ...`}, { quoted: citel })  
  }  
  catch(e){  
  console.log(e)  
  }}) 
  
//---------------------------------------------------------------------------
cmd({   
       pattern: "derana",   
       alias: ["news/derana"],   
       react: "🀄",   
       desc: "",   
       category: "news",   
       use: '.derananews',   
       filename: __filename   
   },   
   async(Void, citel) => {   
   try{   
   const derana = await fetchJson(`https://darkapi--technicalhacke4.repl.co/derananews`);   
  
             const images = `${derana.result.image}`   
              const title = `${derana.result.title}`  
              const news = `${derana.result.desc}`   
  
   await Void.sendMessage(citel.chat,  { image: { url: images }, caption: `📃ＤＥＲＡＮＡ ＢＹ ＶＡＪＩＲＡ\n\n*📍 𝚃𝚒𝚝𝚕𝚎 :- ${ title }*\n\n🕒 ᴛɪᴍᴇ :-${date}\n\n⚡ ᴜʀʟ :-${url}\n\n 📑 ᴅᴇꜱᴄʀᴇᴘᴛɪᴏɴ :- ${news}\n\n*📌 ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴠᴀᴊɪʀᴀ...`}, { quoted: citel })   
   }   
   catch(e){   
   console.log(e)   
   }})
