const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = ["mr frank"];
global.OwnerNumber = ["263729647303"];
global.ownertag = ["263729647303"]; 
global.OwnerName =  "mr frank";
global.BotName = "🐦";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"0JHFRZdIOtUW3fbGMudj2PfwxRENwZk3lMiZmFJhdUQ="},"public":{"type":"Buffer","data":"P+qiVrs26kAaGDHxiSKcykolzKzzvm72prs09YSPvyw="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"AKtRe0UmdHn4rGVcj+kyhSk6Caf+y4Q7IRlHIaxEF3A="},"public":{"type":"Buffer","data":"KTIEiZEmXwcSfWvoD7x/+AZpKBfXzIPD+HkNl2/lTXM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"SAo7ykJ+juxJT1Ck/tAQGKpyA+WVAw5B0rdjmbI2fmQ="},"public":{"type":"Buffer","data":"cDZTR4Z3XOMZkpaKuiGzDMoOUjCp/O3q9j31k4hswWw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4CrQs4aleuKDYEMUqUHRdnn3zcpzpeYeV7bSkDMlGHo="},"public":{"type":"Buffer","data":"C9GUHj9Z0bgpZkZg1CS68RICpWNXqsBmcQLLFunIQWU="}},"signature":{"type":"Buffer","data":"PE/x7iMwEp4giHdn67R/2hujiDlElv+mpMdOABjHUnaDbOuawJITJxya8Vpon3HRud7vdgqNgi2KUekFTNNEhg=="},"keyId":1},"registrationId":4,"advSecretKey":"aCgj1eJVxrw8qjaxmXDM7fqfkrESJ6R/nciT61vO8cc=","processedHistoryMessages":[{"key":{"remoteJid":"33757054389@s.whatsapp.net","fromMe":true,"id":"0570F203DBF897CFE53D9F5ABF92E964"},"messageTimestamp":1722162502},{"key":{"remoteJid":"33757054389@s.whatsapp.net","fromMe":true,"id":"C4738CCE752C63DFEFE18F94907988B2"},"messageTimestamp":1722162502}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"deviceId":"aStzuP8IRSOHRQxIqi34sQ","phoneId":"8cf72d76-8017-4125-9e0f-8046e71fa862","identityId":{"type":"Buffer","data":"Crxx5qa95S4lOiUvxH2B+bE1Py0="},"registered":true,"backupToken":{"type":"Buffer","data":"fkUAjzP7DQrMfO5mfCNsRvGc+jI="},"registration":{},"pairingCode":"CR39ANY2","me":{"id":"33757054389:2@s.whatsapp.net","name":"〄 𝙼𝚁 𝙵𝚁𝙰𝙽𝙺"},"account":{"details":"CJvtiYEEELa6mLUGGAIgACgA","accountSignatureKey":"wmDmqsaeYAy+I0GiZDJaReYDcBzUTADNamHAvWBR4G8=","accountSignature":"tS3uKOeUpGN6sksCZLo9EpC/FkHDyuJ5hh4YN30jjverjRJwC7c0OCowF3h6FtROy723p72qFsUz88brC/qGCg==","deviceSignature":"V30GrL2T0y76k/vDibB3/DH/yqM4sZY0C4VvMozSodb8qkpffwlb7S2t0HQw0UVFGR7ymLnyV5BdlIM+heoEgA=="},"signalIdentities":[{"identifier":{"name":"33757054389:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BcJg5qrGnmAMviNBomQyWkXmA3Ac1EwAzWphwL1gUeBv"}}],"platform":"android","lastAccountSyncTimestamp":1722162498,"myAppStateKeyId":"AAAAAEPC"}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
