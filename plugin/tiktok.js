/**
//---------------------------------------------------------------------------
██╗░░░██╗░█████╗░░░░░░██╗██╗██████╗░░█████╗░░░░░░███╗░░░███╗██████╗░
██║░░░██║██╔══██╗░░░░░██║██║██╔══██╗██╔══██╗░░░░░████╗░████║██╔══██╗
╚██╗░██╔╝███████║░░░░░██║██║██████╔╝███████║░░░░░██╔████╔██║██║░░██║
░╚████╔╝░██╔══██║██╗░░██║██║██╔══██╗██╔══██║░░░░░██║╚██╔╝██║██║░░██║
░░╚██╔╝░░██║░░██║╚█████╔╝██║██║░░██║██║░░██║░░░░░██║░╚═╝░██║██████╔╝
░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░
//---------------------------------------------------------------------------
**/

cmd({  
     pattern: "tiktok",  
           alias :  ['tt','ttdl'],  
     desc: "Downloads Tiktok Videos Via Url.",  
     category: "downloader",  
     filename: __filename,  
     use: '<add tiktok url.>'  
 },  
  
 async(Void, citel, text) => {  
 if(!text) return await citel.reply(`*Uhh Please, Provide me tiktok Video Url*\n*_Ex .tiktok https://www.tiktok.com/@dakwahmuezza/video/7150544062221749531_*`);  
 let txt = text ? text.split(" ")[0]:'';  
 const { status , video, audio } = await tiktokdl(txt)  
 if (status){ 
     await Void.sendMessage(citel.chat, { audio: {url : audio,}, mimetype: 'audio/mpeg' }, { quoted: citel }); 
     return await Void.sendMessage(citel.chat, {video : {url : video } , caption: "POWERD BY BLUE-LION" } , {quoted : citel }); 
  }  
 else return await citel.reply("Error While Downloading Your Video")   
 })
