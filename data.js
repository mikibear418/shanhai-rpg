/* 原創角色、場景與交叉查證式推理資料。 */
(function(g){const data={
  "characters": [
    {
      "id": "soma",
      "name": "澤見蒼真",
      "skill": "水痕觀察",
      "description": "觀察同一位置不同時間留下的水痕；技能回復 6 體力，提出一個觀察角度。",
      "color": "#70bfe4",
      "sprite": 0,
      "age": 17,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "subaru",
      "name": "霆野昴",
      "skill": "聽風辨雷",
      "description": "注意環境改變的先後；技能提升移動速度 35%，持續 20 秒，回復 5 體力。",
      "color": "#e7b64b",
      "sprite": 1,
      "age": 16,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "kiba",
      "name": "野嶺牙",
      "skill": "山徑直覺",
      "description": "把方位與沿途痕跡交叉比對；山區消耗減半，技能回復 12 體力。",
      "color": "#8caa70",
      "sprite": 2,
      "age": 32,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "mio",
      "name": "蝶宮澪",
      "skill": "急救分析",
      "description": "區分觀察、推測與需要確認的事；技能回復 25 體力。",
      "color": "#82c6bd",
      "sprite": 3,
      "age": 22,
      "gender": "female",
      "voiceEngine": "Yating",
      "voiceRate": 0
    },
    {
      "id": "nagi",
      "name": "霧島凪",
      "skill": "靜水判讀",
      "description": "分辨固定地標和移動中的環境；移動消耗減半，技能回復 8 體力。",
      "color": "#adc7ec",
      "sprite": 4,
      "age": 20,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "rin",
      "name": "花守鈴",
      "skill": "守護之力",
      "description": "檢查哪一個資訊環節仍然空缺；技能回復 18 體力。",
      "color": "#ef9cad",
      "sprite": 5,
      "age": 19,
      "gender": "female",
      "voiceEngine": "Hanhan",
      "voiceRate": 0
    },
    {
      "id": "saku",
      "name": "緋月朔",
      "skill": "觀人辨險",
      "description": "留意一段說法跳過了哪些查證步驟；技能回復 10 體力。",
      "color": "#bd8297",
      "sprite": 6,
      "age": 29,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "retsu",
      "name": "赤城烈",
      "skill": "危險感知",
      "description": "比較一項行動失去退路的可能；技能回復 15 體力。",
      "color": "#d68769",
      "sprite": 7,
      "age": 27,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "byakuya",
      "name": "冬城白夜",
      "skill": "寒境耐受",
      "description": "保留體力，讓觀察不被焦急打斷；山區與海岸消耗減半，技能回復 18 體力。",
      "color": "#c7e1ed",
      "sprite": 8,
      "age": 20,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    {
      "id": "genya",
      "name": "月代玄夜",
      "skill": "夜行明察",
      "description": "注意容易被忽略的細節；技能加亮場景 25 秒，回復 8 體力。",
      "color": "#b6a0e0",
      "sprite": 9,
      "age": 22,
      "gender": "female",
      "voiceEngine": "Yating",
      "voiceRate": 0
    }
  ],
  "people": {
    "teacher": {
      "name": "林若棠",
      "role": "老師",
      "sprite": 10,
      "text": "停電前，我在十六點十分簽了外出公告。西門那一欄是施工封閉；後來多出的手繪紙，我沒見過送件的人。紙張新，不代表消息也新。",
      "voice": "teacher",
      "age": 48,
      "gender": "female",
      "voiceEngine": "Hanhan",
      "voiceRate": 0
    },
    "guard": {
      "name": "陳守安",
      "role": "警衛",
      "sprite": 11,
      "text": "西門十四點就上鎖了，鎖上的封條到現在沒破。那張圖卻把西門畫成出口。東門的步道開放紀錄，我剛剛核對過，還有效。",
      "voice": "guard",
      "age": 52,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    "student": {
      "name": "林澄",
      "role": "同學",
      "sprite": 12,
      "text": "葉汐說要拍海潮，走之前在看那張手繪圖。我只看見有人把紙壓在公告上，沒看清楚他的臉。走得急的人，未必就知道路。",
      "voice": "student",
      "age": 15,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    "guide": {
      "name": "羅景川",
      "role": "嚮導",
      "sprite": 13,
      "text": "溪邊那一串寬鞋印，是我上午巡查留下的。往東的步道編號會接到四號返回點。霧裡看不見遠方，還能不能用沿路留下的東西確認位置？",
      "voice": "guide",
      "age": 68,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    "hiker": {
      "name": "梅知夏",
      "role": "登山客",
      "sprite": 14,
      "text": "我沿著編號走來，三號與四號之間沒有岔出去。剛才溪水多了一圈濕痕；腳印還在，水位卻已經不同了。你看到的痕跡，是哪個時候留下的？",
      "voice": "hiker",
      "age": 28,
      "gender": "female",
      "voiceEngine": "Yating",
      "voiceRate": 0
    },
    "captain": {
      "name": "吳海岳",
      "role": "船長",
      "sprite": 15,
      "text": "十分鐘前，浪還碰不到那塊白岩，現在已經越過了。洞口的回聲會折回來，兩聲不一定是兩個人。岸邊的編號牌，倒是不會跟著浪移動。",
      "voice": "captain",
      "age": 67,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    },
    "volunteer": {
      "name": "安予晴",
      "role": "志工",
      "sprite": 16,
      "text": "這部無線電接得到救援站。隊伍要的是能找到人的位置，還有你親眼確認的事；猜到的也能說，但要說清楚還沒確認。",
      "voice": "volunteer",
      "age": 24,
      "gender": "female",
      "voiceEngine": "Hanhan",
      "voiceRate": 0
    },
    "commander": {
      "name": "江岑",
      "role": "救援隊長",
      "sprite": 17,
      "text": "隊伍已把人帶回來了。我想聽聽，你的判斷是怎麼從一張紙、一道水痕，變成能讓我們出發的資訊。哪一項你確認過，哪一項仍然不確定？",
      "voice": "commander",
      "age": 36,
      "gender": "female",
      "voiceEngine": "Yating",
      "voiceRate": 0
    },
    "rescued": {
      "name": "葉汐",
      "role": "獲救同學",
      "sprite": 18,
      "text": "我拍照時只注意到畫面，沒注意到退路正在變窄。謝謝你把位置說清楚。要是只說海邊有一個洞，救援隊可能還要找很久。",
      "voice": "rescued",
      "age": 16,
      "gender": "female",
      "voiceEngine": "Hanhan",
      "voiceRate": 0
    },
    "stranger": {
      "name": "陌生旅人",
      "role": "身分不明",
      "sprite": 19,
      "text": "你們還在看公告？我那張圖近多了。別找警衛，等他問完，人早就走遠了。你現在就跟我走，路上再解釋。",
      "voice": "stranger",
      "age": 43,
      "gender": "male",
      "voiceEngine": "Zhiwei",
      "voiceRate": 0
    }
  },
  "scenes": {
    "school": {
      "name": "校園",
      "title": "黑板上的海潮線",
      "weather": "多雲轉小雨",
      "chapter": "01 / 校園異聞",
      "intro": "放學鐘聲後，校園忽然停電。公告欄上多了一張海岸地圖；林澄的朋友遲遲沒有回來。",
      "quest": "兩張紙對同一個出口的說法不同。哪一項能在現場被另一個來源核對？",
      "hint": "把「寫得比較新」與「內容仍然有效」分開想。",
      "crop": [
        18,
        18,
        630,
        415
      ],
      "floor": [
        "#71878c",
        "#304b57"
      ],
      "npcs": [
        [
          "teacher",
          240,
          340
        ],
        [
          "guard",
          800,
          435
        ],
        [
          "student",
          485,
          430
        ],
        [
          "stranger",
          720,
          310
        ]
      ],
      "objects": [
        [
          "board",
          "公告欄",
          370,
          315,
          "board"
        ],
        [
          "gate",
          "校門",
          890,
          340,
          "gate"
        ],
        [
          "barrier",
          "施工圍籬",
          640,
          300,
          "barrier"
        ]
      ],
      "blocks": [
        [
          570,
          255,
          100,
          32
        ]
      ],
      "objective": "同一個出口，出現兩種說法。找出能支持下一步的證據。"
    },
    "mountain": {
      "name": "霧林山徑",
      "title": "濃霧裡的腳印",
      "weather": "濃霧 · 遠處雷聲",
      "chapter": "02 / 霧林尋跡",
      "intro": "泥地上的腳印分成兩路：一條通向標示步道，另一條消失在溪床旁。霧正越來越厚。",
      "quest": "腳印、編號和水痕，記錄的可能不是同一個時間。哪一項能接回你已知的位置？",
      "hint": "如果腳印確實很新，是否就能推出是失蹤同學留下的？",
      "crop": [
        18,
        470,
        400,
        440
      ],
      "floor": [
        "#526f69",
        "#213d3d"
      ],
      "npcs": [
        [
          "guide",
          255,
          335
        ],
        [
          "hiker",
          730,
          440
        ]
      ],
      "objects": [
        [
          "marker",
          "返回路標",
          465,
          320,
          "sign"
        ],
        [
          "ridge",
          "山稜岔路",
          720,
          290,
          "rock"
        ],
        [
          "trail",
          "海岸步道",
          880,
          360,
          "sign"
        ]
      ],
      "blocks": [
        [
          580,
          290,
          100,
          50
        ],
        [
          70,
          410,
          90,
          45
        ]
      ],
      "objective": "看似新鮮的痕跡，未必指向你要找的人。重新建立方向。"
    },
    "sea": {
      "name": "海岸礁岩",
      "title": "漲潮前的求救聲",
      "weather": "漲潮 · 雷雨警戒",
      "chapter": "03 / 漲潮警報",
      "intro": "一只背包留在步道旁。洞穴深處傳來斷續的呼聲，白岩上的水痕比剛才更高。腳下的步道仍在警戒線外。",
      "quest": "背包、回聲與岸上的編號，各能證明多少事情？試著分開已知與推測。",
      "hint": "把會隨時間變動的事物，與能讓別人重新找到的位置分開記錄。",
      "crop": [
        580,
        470,
        400,
        440
      ],
      "floor": [
        "#647a80",
        "#2a424d"
      ],
      "npcs": [
        [
          "captain",
          245,
          350
        ],
        [
          "volunteer",
          755,
          430
        ]
      ],
      "objects": [
        [
          "bag",
          "學生背包",
          435,
          330,
          "bag"
        ],
        [
          "cave",
          "漲潮洞穴",
          720,
          285,
          "cave"
        ],
        [
          "radio",
          "救援無線電",
          575,
          440,
          "radio"
        ]
      ],
      "blocks": [
        [
          620,
          255,
          130,
          40
        ],
        [
          50,
          440,
          110,
          30
        ]
      ],
      "objective": "聲音指向洞穴，但一份可靠的通報還缺少哪些資訊？"
    },
    "station": {
      "name": "救援站",
      "title": "讓每個人平安回家",
      "weather": "雨勢漸歇",
      "chapter": "04 / 平安歸航",
      "intro": "救援站的燈亮著。專業隊伍帶回受困同學，海潮聲逐漸遠去。",
      "quest": "回想哪一個觀察改變了你的判斷，又有哪些問題直到救援後才知道答案。",
      "hint": "一份可信的回報，可以同時包含已確認的事與仍不確定的事。",
      "crop": [
        1135,
        470,
        380,
        440
      ],
      "floor": [
        "#697d83",
        "#2a4651"
      ],
      "npcs": [
        [
          "commander",
          420,
          345
        ],
        [
          "rescued",
          685,
          420
        ],
        [
          "volunteer",
          820,
          350
        ]
      ],
      "objects": [
        [
          "aid",
          "急救箱",
          260,
          330,
          "aid"
        ],
        [
          "report",
          "結案紀錄",
          550,
          440,
          "board"
        ]
      ],
      "blocks": [
        [
          70,
          280,
          100,
          45
        ]
      ],
      "objective": "燈火亮起，海潮漸退。和大家確認這段旅程的最後一件事。"
    }
  },
  "endings": {
    "good": {
      "label": "GOOD ENDING · 成功結局",
      "title": "守護山海的約定",
      "text": "你查證資訊、確認路線並提供完整線索，專業救援隊及時找回葉汐。大家平安回到學校。",
      "knowledge": "行前查詢官方天氣與潮汐，告知行程；山區留在標示步道，海岸遵守警戒線。救人先確保自身安全，通報位置與人數，等待專業救援。"
    },
    "normal": {
      "label": "NORMAL ENDING · 普通結局",
      "title": "帶著遺憾的平安",
      "text": "你及時撤離並通報，葉汐最終獲救。但缺少調查線索讓救援定位花了更多時間。下次先準備、再出發。",
      "knowledge": "不完整的資訊也應及時通報。提供最後目擊位置、受困人數、天氣與聯絡方式；不要為了補線索重新進入危險區。"
    },
    "bad": {
      "label": "BAD ENDING · 失敗結局",
      "title": "被海霧吞沒的線索",
      "text": "你忽略警戒與查證，冒進迫使隊伍撤離，救援也因此延誤。這次選擇提醒你：速度不能取代安全。",
      "knowledge": "不要跟隨陌生人進入封閉施工區。海岸洞穴可能迅速漲潮；即使有繩索，也不應由未受訓者進洞救人。"
    },
    "stop": {
      "label": "STOP ENDING · 冒險中止",
      "title": "雷雨下的返回方向",
      "text": "天候或體力已不適合繼續。冒險在這裡停止，先保暖、留在安全位置並請求支援。",
      "knowledge": "雷雨時遠離山稜、孤立大樹與溪床。迷路或失去體力時停止盲目移動，保存體力並通報位置。撤退是風險管理的一部分。"
    }
  },
  "mysteries": {
    "school": {
      "title": "公告欄 · 哪一個版本還能成立？",
      "witnesses": [
        "guard"
      ],
      "observation": "有簽章的公告記著「16:10｜東門步道開放，西門施工」。覆蓋其上的手繪圖標出「西門近路」，卻沒有日期、署名或更新來源。紙邊乾燥，公告表面有雨痕。",
      "question": "要追查葉汐的路線，哪一個暫時判斷最站得住腳？",
      "hypotheses": [
        {
          "id": "paper",
          "text": "手繪紙比較乾燥，應是停電後更新的可行路線。"
        },
        {
          "id": "verify",
          "text": "先採用可核對的東門路線，西門捷徑仍有矛盾。"
        },
        {
          "id": "wait",
          "text": "兩張紙說法不同，現場便沒有任何資訊可用。"
        }
      ],
      "answer": "verify",
      "supports": [
        {
          "id": "fresh",
          "text": "紙邊乾燥，加上西門距離較短，足以取代原公告。"
        },
        {
          "id": "consistent",
          "text": "有時刻與簽章的公告，能和現場封條及開放紀錄互相核對。"
        },
        {
          "id": "urgent",
          "text": "同學曾看過手繪圖，而失蹤時間緊迫，來源可暫不追究。"
        }
      ],
      "support": "consistent",
      "reflection": "你把紙張的新舊與資訊的效力分開，選用能被現場紀錄核對的路線。西門封閉與捷徑圖仍互相衝突。",
      "retry": "你的理由仍有一個缺口：外觀、距離或焦急，能證明一條路現在可以通行嗎？",
      "note": "推論：東門公告與現場開放紀錄吻合；西門捷徑圖尚未獲證實。"
    },
    "mountain": {
      "title": "返回路標 · 痕跡是誰留下的？",
      "witnesses": [
        "guide"
      ],
      "observation": "三號路標的東箭頭指向四號返回點；溪床旁有一列寬鞋印，邊緣清楚。你來時見過同款編號牌。石頭的新濕痕已高過舊泥線，稜線上傳來雷聲。",
      "question": "如果要保留可確認的位置與返回方向，哪個判斷更合理？",
      "hypotheses": [
        {
          "id": "prints",
          "text": "鞋印輪廓很清楚，先沿溪床追蹤，再尋找下一個標記。"
        },
        {
          "id": "height",
          "text": "先到較高的稜線看清地形，再決定返回方向。"
        },
        {
          "id": "markers",
          "text": "以能接續的編號確認東側步道，把鞋印身分另作查證。"
        }
      ],
      "answer": "markers",
      "supports": [
        {
          "id": "sequence",
          "text": "編號接續到已知返回點；嚮導確認鞋印另有來源，水位也已改變。"
        },
        {
          "id": "recent",
          "text": "鞋印邊緣還清楚，代表走在前面的人一定就是失蹤同學。"
        },
        {
          "id": "view",
          "text": "高處視野較遠，能抵銷目前濃霧與雷聲帶來的不確定性。"
        }
      ],
      "support": "sequence",
      "reflection": "鞋印可以很新，卻不是你要找的人留下的。編號與已知來向相互支持，而環境變化讓溪床線索更不能直接當成路線。",
      "retry": "先分開「痕跡有多新」與「痕跡屬於誰」，再看你的路線是否能接回已知位置。",
      "note": "推論：鞋印出自上午巡查；沿接續編號確認返回點，水位正在上升。"
    },
    "sea": {
      "title": "學生背包 · 哪些事已經知道？",
      "witnesses": [
        "captain"
      ],
      "observation": "背包名牌寫著「葉汐」。相機裡有兩人合照，但拍攝時間是昨天。夾層地圖圈出岸上 C3 編號牌；附近洞口傳來有重疊回音的呼聲。白岩上方出現一圈新的濕痕。",
      "question": "你要把哪一份判斷交給救援站？",
      "hypotheses": [
        {
          "id": "two",
          "text": "照片有兩個人，先以兩人同時受困作為已確認人數。"
        },
        {
          "id": "report",
          "text": "回報 C3 附近洞口的呼聲與水位變化；身分和人數分別註明確認程度。"
        },
        {
          "id": "echo",
          "text": "先靠近洞口，依回音方向確認人數後再決定是否通報。"
        }
      ],
      "answer": "report",
      "supports": [
        {
          "id": "photo",
          "text": "照片和回聲都出現兩個訊號，足以證明目前有兩人。"
        },
        {
          "id": "location",
          "text": "岸上編號能定位，名牌只指向物主；舊照片與回聲不能證實現場人數。"
        },
        {
          "id": "objects",
          "text": "背包還在步道上，表示洞內的人仍有足夠時間等待查證。"
        }
      ],
      "support": "location",
      "reflection": "你把可重新找到的地點、正在變化的水位與尚未確認的人數分開回報。名牌可提供身分線索，舊照片和回音卻不是現場人數的證明。",
      "retry": "看看每項資料的時間與來源。它能證明物主、位置，還是現在受困的人數？這些不是同一件事。",
      "note": "推論：C3附近洞口有呼聲且水位升高；葉汐為身分線索，現場人數仍待救援隊確認。"
    }
  }
};if(typeof module!=="undefined")module.exports=data;else g.GameData=data;})(typeof window!=="undefined"?window:globalThis);
