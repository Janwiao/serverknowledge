# 透視軟體 · serverknowledge

專案儲存庫：`Janwiao/serverknowledge`。網站入口為根目錄 `index.html`。

以繁體中文整理軟體與網站的開發、部署、執行及維運觀念。從 RO、cPanel、BAT 架站、遠端桌面等熟悉經驗理解通用架構，不把內容限制在遊戲。

**純靜態網站。** 不需要 Sites、Node 服務、資料庫、帳號登入、第三方字型或外部 JavaScript。Node 只用於維護資料與測試，不是網站執行依賴。

## 使用

- 直接用瀏覽器開啟 `index.html` 即可閱讀，無須 fetch JSON，因此可離線開啟。
- 或把整個目錄放到 GitHub Pages、一般網站空間或個人網站的子目錄。
- 網頁資源使用相對路徑，不依賴固定網域或根目錄。
- 首頁提供主題閱讀、85 個名詞搜尋、常見疑問與參考來源。
- 無 JavaScript 或希望直接閱讀文字時，使用 `docs/KNOWLEDGE.md`。

## 結構

- `index.html`：頁面骨架。
- `assets/style.css`：簡單響應式 CSS 與列印樣式。
- `assets/app.js`：靜態內容呈現、名詞搜尋與章節連結。
- `data/knowledge.json`：唯一內容編輯來源。
- `data/knowledge.js`：由 JSON 產生，讓離線直接開啟也能讀取。
- `scripts/sync-data.mjs`：同步 JS 資料檔與可閱讀 Markdown。
- `tests/content.test.mjs`：資料、隱私與靜態資源完整性測試。

## 編輯與驗證

```sh
node scripts/sync-data.mjs
node --test tests/*.test.mjs
node --check assets/app.js
```

先改 JSON，再執行同步，不要只修改產生的 JS。修改後檢查手機閱讀、主題展開、章節深連結、搜尋與清除、鍵盤操作、列印前後狀態。程式測試不能取代實際瀏覽器驗收。

## 併入個人網站

最簡單的方式是保留本目錄結構放進一個子目錄，再由原網站新增連結。若要共用外觀，只需替換 CSS 或將內容資料交由自己的模板呈現。不要只搬 `index.html` 而漏掉 `assets/` 與 `data/knowledge.js`。

本專案不自行建立 GitHub repository、啟用 Pages 或公開網站；由維護者決定發布位置。沒有任何機房、路由器或資料庫設定變更。

## 內容範圍與隱私

這是初版知識地圖，不宣稱涵蓋所有軟體知識。LINE、Facebook 與遊戲流程是概念示意，不宣稱其私有內部架構。平台費率、額度與功能應另以當時官方資料核對。網站不含私人聊天連結、實際家用 IP、機房帳號、憑證或登入資訊。127.0.0.1 僅作標準 loopback 教學例子。

原始素材格式、反編譯與封包章節僅用於合法開發、相容性與維護觀念；不是繞過授權、入侵或濫用服務的教學。

## 可選 DOM 驗證

`tests/dom.optional.cjs` 另外使用 jsdom 模擬呈現與搜尋互動；需要測試環境可解析 jsdom 才執行 `node tests/dom.optional.cjs`。網站本身不依賴 jsdom，也不要求安裝套件。這不取代真實瀏覽器畫面驗收。
