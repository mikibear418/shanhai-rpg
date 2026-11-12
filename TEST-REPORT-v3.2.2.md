# v3.2.2 排行榜修復驗證
日期：2026-11-12（Asia/Taipei）
基礎：原 GitHub main 8ced603a906a8c24a79d77b44fdac8c3a4ae65eb；已 fetch 確認。直接修正 github-publish-shanhai 並同步 shanhai-rpg-v3，未退回 v2。

## 修正
- 設定缺漏不再使 Board 建構崩潰；預設資料表名稱。
- 真正依通關毫秒與日期時間排序，排除零、負數、非數字與超過24小時的時間；毫秒顯示避免假性同分。
- 儲存可讀但寫入失敗時，後續讀取合併記憶體，不再抹去本次成績。
- 成功／普通結局自動保存、固定同回合紀錄時間；防止並行重複提交及舊回合非同步更新新回合畫面。
- 持久化有限待傳佇列，重新載入後可重試；明確 POST on_conflict=run_id 搭配 ignore-duplicates。
- 寫入後若查無紀錄且不足以證明被前15名淘汰，視為權限／清理異常，避免把 RLS 隱藏誤報為未入榜。
- 共用榜讀取中先顯示可用本機備援，讀取失敗明確標示來源；格式錯誤不偽裝空榜。
- 刷新、切榜與關閉視窗的非同步更新保護；加入重新整理與待傳重送。
- 手機控制鈕換行、表格內捲動、鍵盤可聚焦區域、日期與名字輸出跳脫。
- SQL 補上 schema usage，交付不改資料的權限診斷 SQL；未在不可連線的雲端執行。
- HTML 引用快取版本提升為3.2.2。

## 測試結果
- Node 單元／繪圖回歸：34通過，0失敗。
- Chrome Headless／Playwright：8組流程通過，pageerror為空。
- 成功流程用場景互動函式搭配實際 UI 選項：公告欄→校門→返回路標→海岸→背包→無線電→隊長→結局自動保存；不是人工走位完整遊玩。
- 普通、失敗與中止結局；共用毫秒排序、HTML跳脫；403與斷線；錯誤回應；重載後待傳重送與時間不變；慢速回應關閉視窗；缺少設定；禁止localStorage。
- 320與390px viewport：頁面不水平溢出，排行榜表格在容器內捲動。非真實 iOS/Android 裝置測試。
- Chrome REST 使用模擬資料，未向正式榜寫測試成績。結果見 verification/browser-results.json，手機截圖見 verification/mobile-leaderboard.png。

## 雲端驗證界線
正式遊戲首頁HTTP200。既有Supabase專案子網域DNS名稱不存在，REST請求失敗ENOTFOUND；supabase.co可正常解析。因此無法實測該資料庫的SELECT/INSERT/RLS、觸發器或共用排名；未假設其資料為空，未刪除任何雲端成績。
僅能以模擬測試驗證前端權限錯誤、逾時、備援及重試行為。真正多人共用需恢復或更換有效Supabase專案。

## 部署
部署結果另見工作區 DEPLOYMENT-v3.2.2.md；以實際遠端 commit 與正式頁面版本檢查為準。
