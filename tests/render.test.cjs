/* 單元層級Canvas API契約測試，避免繪圖例外中止整個requestAnimationFrame。 */
const test=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm'),path=require('path');
test('四場景所有人物／實體物件均可完成一次繪圖而不拋例外',()=>{const nodes=new Map(),gradient={addColorStop(){}},canvasCtx=new Proxy({},{get(t,k){if(k==='measureText')return s=>({width:s.length*12});if(k==='createLinearGradient')return ()=>gradient;return (...a)=>{if(k==='ellipse')assert.ok(a.length>=7,'ellipse至少7參數');if(k==='drawImage')assert.ok([3,5,9].includes(a.length),'drawImage參數數量');};},set(){return true;}});
function node(id){if(!nodes.has(id))nodes.set(id,{id,style:{},classList:{toggle(){},add(){},remove(){}},innerHTML:'',textContent:'',value:80,open:false,disabled:false,children:[],append(n){this.children.push(n);},replaceChildren(){this.children=[];},focus(){},getContext(){return canvasCtx;},addEventListener(){},setAttribute(){},showModal(){this.open=true;},close(){this.open=false;}});return nodes.get(id);}
const handlers={};const doc={getElementById:node,querySelectorAll:()=>[],createElement:()=>node('button'+Math.random()),addEventListener(type,fn){handlers[type]=fn;},hidden:false};
class Im{constructor(){this.naturalWidth=1672;this.naturalHeight=1122;}set src(x){if(x.includes('sprites'))this.naturalWidth=1402;this.onload();}}
class S{constructor(){}setTrack(){}speak(){}stopVoice(){}}
const c={document:doc,window:{SHANHAI_CONFIG:{},addEventListener(){},scrollTo(){}},Image:Im,Sound:S,Leaderboard:{Board:class{}},requestAnimationFrame(){},performance:{now:()=>1000},console,crypto:{randomUUID:()=> 'test-run-1234'},setTimeout,clearTimeout};vm.createContext(c);for(const f of ['data.js','engine.js']){vm.runInContext(fs.readFileSync(path.join(__dirname,'..',f),'utf8'),c);if(f==='data.js')c.GameData=c.window.GameData;else c.GameEngine=c.window.GameEngine;}vm.runInContext(fs.readFileSync(path.join(__dirname,'../script.js'),'utf8'),c);
for(const scene of Object.keys(c.GameData.scenes)){vm.runInContext("state=E.create('測試','soma',0);state.scene="+JSON.stringify(scene)+";draw(1000);hud();",c);}
for(const scene of Object.keys(c.GameData.scenes)){
 vm.runInContext("state=E.create('測試','soma',0);enterScene("+JSON.stringify(scene)+");",c);
 assert.equal(vm.runInContext('dialogueOpen',c),false,'場景介紹不鎖住移動');
 const before=vm.runInContext('player.x',c);
 handlers.keydown({code:'KeyD',key:'ㄎ',target:{tagName:'DIV'},preventDefault(){},repeat:false});
 for(let i=0;i<25;i++)vm.runInContext('frame(1000+'+i+'*40)',c);
 handlers.keyup({code:'KeyD',key:'ㄎ'});
 assert.ok(vm.runInContext('player.x',c)>before+100,scene+'中文輸入法WASD可持續移動');
 assert.equal(vm.runInContext('keys.size',c),0,'放開實體按鍵停止');
 vm.runInContext('player={x:300,y:490,face:1};path=routeTo(450,490)',c);
 for(let i=0;i<60;i++)vm.runInContext('frame(3000+'+i+'*40)',c);
 assert.ok(vm.runInContext('player.x',c)>400,scene+'點擊路徑可行走');
 vm.runInContext("say('測試NPC','對話暫停');keys.add('d')",c);const paused=vm.runInContext('player.x',c);vm.runInContext('frame(6000)',c);assert.equal(vm.runInContext('player.x',c),paused,'NPC對話仍暫停移動');
}
});
