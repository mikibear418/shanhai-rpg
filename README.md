# 潮痕月影：山海異聞錄 v3.2.2

遊戲網址：https://mikibear418.github.io/shanhai-rpg/
原專案：https://github.com/mikibear418/shanhai-rpg

## 本機啟動與測試
完整解壓後直接開啟 index.html，或使用 Node.js 18+ 執行 `npm start`，開啟 http://127.0.0.1:4173 。遊戲本身不需安裝套件。
`npm test` 執行單元與繪圖回歸測試。瀏覽器回歸測試另需安裝 Playwright 並有 Chrome：`node tests/browser-check.cjs`。

## 排行榜行為
- 成功與普通結局自動保存，失敗與中止不入榜；結局後通關時間固定。
- 兩個結局分榜，各保留最快15名；毫秒數由小到大，同分依實際紀錄時間、回合ID排序。顯示到毫秒，避免看起來同秒卻名次不同。
- 本機讀寫受限時使用記憶體備援，明確提示關閉頁面會遺失。
- 共用榜失敗時顯示本機備援並清楚標示，支援重新整理。手機在表格內左右滑動。
- 雲端上傳失敗，待傳佇列各結局最多保留最快15筆；可於結局畫面或排行榜「重新送出待傳成績」重試。佇列是暫存，不是歷史成績表；超出佇列上限的較慢成績不保留。重試沿用回合ID與紀錄時間，避免重複。
- 共用榜以 Supabase 伺服器收到時間處理同分順序，因此本機與共用榜同分先後可能不同。

## 目前雲端阻礙（2026-11-12）
config.js 的既有公開設定保留，但 `tbndfsjegnrignnigmmm.supabase.co` 在本次 DNS 查詢回報名稱不存在；supabase.co 與正式遊戲網站可連線。無法據此判斷專案是暫停、刪除或網址已變更。
因此不能宣稱多人共用榜已恢復，也無法執行此專案的真實 REST 讀寫及線上 RLS 驗證。本次 Chrome 雲端成功／權限失敗流程使用模擬 REST，沒有向正式榜插入測試成績。
需恢復原 Supabase 專案，或在 config.js 填入可用的 Project URL、公開 publishable key；勿放 service_role/secret key。

## 資料庫設定與驗證
1. 可用專案的 SQL Editor 執行 supabase-diagnostics.sql，唯讀檢查欄位、主鍵、RLS、匿名角色授權與觸發器。
2. 新專案或授權不完整時執行 supabase.sql，建立表格、schema usage、SELECT/INSERT 授權與 RLS；不授權 UPDATE/DELETE。既有表格若結構不同，須依診斷結果遷移，create table if not exists 不會改寫舊欄位。
3. supabase-verify.sql 僅在空榜可執行，驗證前15名與新增權限後回滾；遇到已有正式成績會停止。
4. 此榜用於班級教學，前端計時不具伺服器防作弊能力。

## 素材與操作
WASD／方向鍵、E互動、空白鍵技能；觸控可點地面或用方向鍵。音樂／配音在開始後解鎖。素材與授權見 LICENSES.md、VOICE-CAST.md。

完整驗證與限制見 TEST-REPORT-v3.2.2.md。
