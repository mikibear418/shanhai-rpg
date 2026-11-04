/* 原作：十位原創同行者、七位NPC、停電／山霧／漲潮主線。 */
(function(g){
const characters=[
['soma','澤見蒼真','水痕觀察','辨識水痕與潮汐；技能顯示本場景調查提示，回復 6 體力。','#70bfe4'],
['subaru','霆野昴','聽風辨雷','天候警戒；技能使移動速度提升 35%，持續 20 秒，回復 5 體力。','#e7b64b'],
['kiba','野嶺牙','山徑直覺','山區移動消耗減半；技能回復 12 體力並指出安全路線。','#8caa70'],
['mio','蝶宮澪','急救分析','技能回復 25 體力；先確認自身安全，再協助他人。','#82c6bd'],
['nagi','霧島凪','靜水判讀','所有場景移動消耗減半；技能回復 8 體力並提示海岸危險。','#adc7ec'],
['rin','花守鈴','守護之力','救援物資搬運者；技能回復 18 體力並整理本場景任務。','#ef9cad'],
['saku','緋月朔','觀人辨險','技能辨識陌生人的誘導話術、提示安全選擇，回復 10 體力。','#bd8297'],
['retsu','赤城烈','危險感知','技能指出高風險區，回復 15 體力；不以冒進換取速度。','#d68769'],
['byakuya','冬城白夜','寒境耐受','山區與海岸移動消耗減半；技能回復 18 體力。','#c7e1ed'],
['genya','月代玄夜','夜行明察','技能加亮場景 25 秒並顯示調查提示，回復 8 體力。','#b6a0e0']
].map((a,i)=>({id:a[0],name:a[1],skill:a[2],description:a[3],color:a[4],sprite:i}));
const people={
teacher:{name:'林若棠',role:'老師',sprite:10,text:'停電後，林澄的朋友不見了。公告欄有一張陌生地圖。出發前先看官方天氣、潮汐與校方公告，別照來路不明的地圖走。',voice:'teacher'},
guard:{name:'陳守安',role:'警衛',sprite:11,text:'施工圍籬後有陌生人招手。不要跟進去，我會通知校方。去山徑只能走開放的標示步道，天候惡化就撤退。',voice:'guard'},
student:{name:'林澄',role:'同學',sprite:12,text:'我朋友去了海邊，還沒回來。我看到一個人把錯誤地圖放上公告欄。請先告訴老師，不要一個人追他！',voice:'student'},
guide:{name:'羅景川',role:'嚮導',sprite:13,text:'霧變濃了。請留在原有標示步道，確認路標與返回方向，遠離溪床、邊坡和山稜。雷雨來時不要上高處，也不要在孤立樹下避雨。',voice:'guide'},
hiker:{name:'梅知夏',role:'登山客',sprite:14,text:'我聽見海岸有求救聲。別抄近路下溪谷！先記錄位置、確認安全撤退路線，再把線索交給救援人員。',voice:'hiker'},
captain:{name:'吳海岳',role:'船長',sprite:15,text:'海水已越過第一道安全線。洞穴會被潮水封住。即使有繩索，也不該讓沒有訓練的學生進去。請在安全高處通報，交給專業救援隊。',voice:'captain'},
volunteer:{name:'安予晴',role:'志工',sprite:16,text:'我帶來救援無線電。把背包上的姓名和洞口位置告訴我，我會通報救援隊。請退到警戒線外，別再靠近浪區。',voice:'volunteer'},
commander:{name:'江岑',role:'救援隊長',sprite:17,text:'我們收到求救位置，已由專業隊員完成救援。謝謝你選擇通報和撤離。真正的勇敢，是保護自己，也讓支援找得到人。',voice:'commander'},
rescued:{name:'葉汐',role:'獲救同學',sprite:18,text:'謝謝你沒有自己衝進洞穴。救援隊找到我了。我以後會先查潮汐、告訴老師行程，也不會獨自去礁岩。',voice:'rescued'},
stranger:{name:'陌生旅人',role:'身分不明',sprite:19,text:'我知道失蹤學生在哪裡。跟著我穿過圍籬，走捷徑，別告訴其他人。',voice:'stranger'}
};
const scenes={
school:{name:'校園',title:'黑板上的海潮線',weather:'多雲轉小雨',chapter:'01 / 校園異聞',intro:'放學鐘聲後，校園忽然停電。公告欄上多了一張海岸地圖；林澄的朋友遲遲沒有回來。',quest:'找林若棠與同學了解狀況，調查公告欄，再從校門前往標示步道。',hint:'公告欄上的官方天氣與潮汐資訊，比陌生地圖可信。',crop:[18,18,630,415],floor:['#71878c','#304b57'],npcs:[['teacher',240,340],['guard',800,435],['student',485,430],['stranger',720,310]],objects:[['board','公告欄',370,315,'board'],['gate','校門',890,340,'gate'],['barrier','施工圍籬',640,300,'barrier']],blocks:[[570,255,100,32]]},
mountain:{name:'霧林山徑',title:'濃霧裡的腳印',weather:'濃霧 · 遠處雷聲',chapter:'02 / 霧林尋跡',intro:'泥地上的腳印分成兩路：一條通向標示步道，另一條消失在溪床旁。霧正越來越厚。',quest:'與羅景川、梅知夏交談，調查實體路標並確認返回方向。',hint:'留在標示步道，遠離溪床與山稜；迷路時停止亂走、保暖並求援。',crop:[18,470,400,440],floor:['#526f69','#213d3d'],npcs:[['guide',255,335],['hiker',730,440]],objects:[['marker','返回路標',465,320,'sign'],['ridge','山稜岔路',720,290,'rock'],['trail','海岸步道',880,360,'gate']],blocks:[[580,290,100,50],[70,410,90,45]]},
sea:{name:'海岸礁岩',title:'漲潮前的求救聲',weather:'漲潮 · 雷雨警戒',chapter:'03 / 漲潮警報',intro:'背包落在警戒線內側的安全步道上。海水正淹過礁岩，洞穴深處傳來求救聲。切勿踏入浪區。',quest:'在安全步道調查背包，向船長與志工確認情況，用救援無線電通報。',hint:'留在警戒線外通報位置、受困人數與環境；不要進洞穴或下水。',crop:[580,470,400,440],floor:['#647a80','#2a424d'],npcs:[['captain',245,350],['volunteer',755,430]],objects:[['bag','學生背包',435,330,'bag'],['cave','漲潮洞穴',720,285,'cave'],['radio','救援無線電',575,440,'radio']],blocks:[[620,255,130,40],[50,440,110,30]]},
station:{name:'救援站',title:'讓每個人平安回家',weather:'雨勢漸歇',chapter:'04 / 平安歸航',intro:'救援站的燈亮著。專業隊伍帶回受困同學，海潮聲逐漸遠去。',quest:'與獲救同學交談，再向救援隊長回報，完成冒險並停止計時。',hint:'記住：先確保自身安全、通報、等待專業救援。',crop:[1135,470,380,440],floor:['#697d83','#2a4651'],npcs:[['commander',420,345],['rescued',685,420],['volunteer',820,350]],objects:[['aid','急救箱',260,330,'aid'],['report','結案紀錄',550,440,'board']],blocks:[[70,280,100,45]]}
};
const endings={
good:{label:'GOOD ENDING · 成功結局',title:'守護山海的約定',text:'你查證資訊、確認路線並提供完整線索，專業救援隊及時找回葉汐。大家平安回到學校。',knowledge:'行前查詢官方天氣與潮汐，告知行程；山區留在標示步道，海岸遵守警戒線。救人先確保自身安全，通報位置與人數，等待專業救援。'},
normal:{label:'NORMAL ENDING · 普通結局',title:'帶著遺憾的平安',text:'你及時撤離並通報，葉汐最終獲救。但缺少調查線索讓救援定位花了更多時間。下次先準備、再出發。',knowledge:'不完整的資訊也應及時通報。提供最後目擊位置、受困人數、天氣與聯絡方式；不要為了補線索重新進入危險區。'},
bad:{label:'BAD ENDING · 失敗結局',title:'被海霧吞沒的線索',text:'你忽略警戒與查證，冒進迫使隊伍撤離，救援也因此延誤。這次選擇提醒你：速度不能取代安全。',knowledge:'不要跟隨陌生人進入封閉施工區。海岸洞穴可能迅速漲潮；即使有繩索，也不應由未受訓者進洞救人。'},
stop:{label:'STOP ENDING · 冒險中止',title:'雷雨下的返回方向',text:'天候或體力已不適合繼續。冒險在這裡停止，先保暖、留在安全位置並請求支援。',knowledge:'雷雨時遠離山稜、孤立大樹與溪床。迷路或失去體力時停止盲目移動，保存體力並通報位置。撤退是風險管理的一部分。'}
};
const profiles={"soma":{"age":17,"gender":"male","voice":"Zhiwei","pitch":3,"rate":1},"subaru":{"age":16,"gender":"male","voice":"Zhiwei","pitch":4,"rate":1},"kiba":{"age":32,"gender":"male","voice":"Zhiwei","pitch":-2,"rate":0},"mio":{"age":22,"gender":"female","voice":"Yating","pitch":1,"rate":0},"nagi":{"age":20,"gender":"male","voice":"Zhiwei","pitch":1,"rate":-1},"rin":{"age":19,"gender":"female","voice":"Hanhan","pitch":3,"rate":1},"saku":{"age":29,"gender":"male","voice":"Zhiwei","pitch":-3,"rate":-1},"retsu":{"age":27,"gender":"male","voice":"Zhiwei","pitch":-1,"rate":1},"byakuya":{"age":20,"gender":"male","voice":"Zhiwei","pitch":1,"rate":-1},"genya":{"age":22,"gender":"female","voice":"Yating","pitch":0,"rate":-1},"teacher":{"age":48,"gender":"female","voice":"Hanhan","pitch":-2,"rate":-1},"guard":{"age":52,"gender":"male","voice":"Zhiwei","pitch":-3,"rate":-1},"student":{"age":15,"gender":"male","voice":"Zhiwei","pitch":5,"rate":1},"guide":{"age":68,"gender":"male","voice":"Zhiwei","pitch":-4,"rate":-2},"hiker":{"age":28,"gender":"female","voice":"Yating","pitch":0,"rate":0},"captain":{"age":67,"gender":"male","voice":"Zhiwei","pitch":-4,"rate":-2},"volunteer":{"age":24,"gender":"female","voice":"Hanhan","pitch":1,"rate":0},"commander":{"age":36,"gender":"female","voice":"Yating","pitch":-2,"rate":-1},"rescued":{"age":16,"gender":"female","voice":"Hanhan","pitch":4,"rate":1},"stranger":{"age":43,"gender":"male","voice":"Zhiwei","pitch":-3,"rate":-1},"narrator":{"age":35,"gender":"female","voice":"Yating","pitch":0,"rate":-1}};characters.forEach(c=>{const p=profiles[c.id];Object.assign(c,{age:p.age,gender:p.gender,voiceEngine:p.voice});});Object.entries(people).forEach(([id,n])=>{const p=profiles[id];Object.assign(n,{age:p.age,gender:p.gender,voiceEngine:p.voice});});scenes.school.objective='停電之後，校園裡多了一張奇怪的地圖。找出失蹤同學留下的痕跡。';scenes.mountain.objective='霧吞沒了腳印。分辨哪些痕跡值得相信，繼續尋找同學。';scenes.sea.objective='求救聲被海浪蓋過。找到失蹤同學，決定下一步該怎麼做。';scenes.station.objective='燈火亮起，海潮漸退。和大家確認這段旅程的最後一件事。';const data={characters,people,scenes,endings};if(typeof module!=='undefined')module.exports=data;else g.GameData=data;
})(typeof window!=='undefined'?window:globalThis);