(function(g){
const D=typeof module!=='undefined'?require('./data.js'):g.GameData;
const clueNames={school:'官方天氣與潮汐紀錄',mountain:'標示步道與返回方向',sea:'學生姓名與洞口位置'};
function create(name,character,now=0){return {name:String(name).trim().slice(0,12)||'旅人',character,scene:'school',energy:80,clues:[],notes:[],met:[],skillScenes:[],startedAt:now,elapsedMs:0,ending:null,pendingEnding:null,speedUntil:0,lightUntil:0,saved:false};}
function collect(s,scene){if(!s.clues.includes(scene)){s.clues.push(scene);s.notes.push(clueNames[scene]);s.energy=Math.max(0,s.energy-2);return true;}return false;}
function enter(s,scene){if(s.ending||!D.scenes[scene])return false;s.scene=scene;return true;}
function useSkill(s,now=0){if(s.ending||s.skillScenes.includes(s.scene))return false;s.skillScenes.push(s.scene);const c=D.characters.find(x=>x.id===s.character);const amount=[6,5,12,25,8,18,10,15,18,8][c.sprite];s.energy=Math.min(100,s.energy+amount);if(c.sprite===1)s.speedUntil=now+20000;if(c.sprite===9)s.lightUntil=now+25000;return c.skill+'：'+D.scenes[s.scene].hint;}
function drain(s,seconds){const c=D.characters.find(x=>x.id===s.character);let rate=.65;if(c.sprite===4||(c.sprite===2&&s.scene==='mountain')||(c.sprite===8&&['mountain','sea'].includes(s.scene)))rate*=.5;s.energy=Math.max(0,s.energy-seconds*rate);return s.energy;}
function finish(s,type,now){if(s.ending)return false;if(!D.endings[type])throw Error('Invalid ending');s.ending=type;s.elapsedMs=Math.max(0,now-s.startedAt);return true;}
function rescue(s){s.pendingEnding=s.clues.length===3?'good':'normal';return enter(s,'station');}
function score(s,date=new Date()){if(!['good','normal'].includes(s.ending))return null;return {run_id:s.runId,player_name:s.name,character_name:D.characters.find(x=>x.id===s.character).name,ending_type:s.ending,clear_time_ms:Math.max(1,Math.round(s.elapsedMs)),clues_collected:s.clues.length,created_at:date.toISOString()};}
function format(ms){const t=Math.max(0,ms)/1000;return String(Math.floor(t/60)).padStart(2,'0')+':'+String(Math.floor(t%60)).padStart(2,'0')+'.'+Math.floor(t*10)%10;}
function canStand(scene,x,y){return x>=40&&x<=920&&y>=295&&y<=505&&!D.scenes[scene].blocks.some(([a,b,w,h])=>x>a-12&&x<a+w+12&&y>b-5&&y<b+h+8);}
const api={create,collect,enter,useSkill,drain,finish,rescue,score,format,canStand};if(typeof module!=='undefined')module.exports=api;else g.GameEngine=api;
})(typeof window!=='undefined'?window:globalThis);