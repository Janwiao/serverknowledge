/* Generated from knowledge.json; run node scripts/sync-data.mjs after edits. */
window.SOFTWARE_ATLAS = {
  "title": "透視軟體",
  "subtitle": "從程式碼到上線，把軟體背後的每一層看清楚。",
  "version": "0.3.0",
  "updated": "2026-11-03（增補即時分享與 PDF 知識；非全站重新查核）",
  "chapters": [
    {
      "id": "map",
      "title": "先看全貌：一套軟體有哪些層？",
      "lead": "先問「它負責什麼、在哪裡執行、跟誰溝通」，比先背產品名稱有用。",
      "points": [
        "程式與資料：原始碼、編譯產物、設定、圖片和資料庫，各有不同用途。",
        "執行與分工：裝置上的 Client 呈現與接收操作；Server 處理服務規則；資料庫保存需要長期留下的資料。這是常見分工，不是所有軟體都必須連網。",
        "部署與連線：檔案放哪裡、服務如何啟動、網路怎麼抵達，是另外三個問題。",
        "維運與信任：更新、監控、備份、權限和輸入驗證，決定它能否長期可靠運作。"
      ],
      "example": "RO 的 EXE、Login／Char／Map 程式和 MariaDB 是不同角色；網站也可以採同樣的分工。",
      "trap": "「伺服器」有時指一台主機，有時指提供服務的程式。先確認談的是硬體還是軟體角色。",
      "flow": [
        "開發原始碼",
        "建置與測試",
        "部署檔案／啟動服務",
        "使用者操作",
        "後端處理與保存",
        "監控、更新、備份"
      ],
      "related": [
        "lifecycle",
        "roles",
        "hosting"
      ]
    },
    {
      "id": "lifecycle",
      "title": "從 src 到執行：編譯、建置與發布",
      "lead": "原始碼是寫法；產物是交付形式；執行才真的消耗資源。",
      "points": [
        "編譯把某種程式表示轉成另一種，例如 C/C++ 或 Rust 產生機器碼。建置還可能包含依賴處理、測試、打包與素材轉換。",
        "JavaScript、PHP 等也需要執行環境。不是沒有 EXE 就沒有程式，也不是所有語言都用完全相同的編譯流程。",
        "部署是把適合的版本與設定放到目標環境；啟動是讓作業系統或執行環境開始運行它。上傳成功不等於服務已啟動。",
        "BAT／Shell 腳本通常把啟動指令串起來。真正提供網站的可能是 Node.js、Python 或另一個 Web Server。"
      ],
      "example": "RA 的 src 經編譯產生 Server 程式，執行時還讀 conf、db、script；單獨拿到 EXE 不一定足以還原整套環境。",
      "trap": "Git repo 有新版，不表示正在運行的服務已換成新版；修改原始碼後是否需重建、重啟，要看工具與部署流程。",
      "flow": [
        "src＋依賴＋設定範本",
        "build／compile",
        "產物",
        "部署到目標主機",
        "啟動 process"
      ],
      "related": [
        "repository",
        "runtime",
        "operations"
      ]
    },
    {
      "id": "roles",
      "title": "前端、後端、Client、Server 不是同一組名詞",
      "lead": "前後端強調責任；Client／Server 強調一次互動中的角色。",
      "points": [
        "前端處理使用者看見與操作的介面，可能是網頁、手機 App 或桌面程式。後端處理權限、規則、服務與資料存取。",
        "「管理後台」是一種管理用途的介面。它同樣有按鈕與頁面的前端，以及處理管理請求的後端，不能因為叫後台就把整頁當成後端程式。",
        "Client 發出請求、Server 提供服務。一個後端向另一個服務發請求時，也扮演那次互動的 Client。",
        "瀏覽器下載網頁 Client 後，JavaScript 通常在使用者裝置執行；Server 端程式仍在伺服器執行。有些框架會在伺服器先產生 HTML。"
      ],
      "example": "PHP 管理站：瀏覽器顯示表單是前端；PHP 驗證 GM 權限並寫入資料是後端。",
      "trap": "「檔案存放在機房」不等於「Client 在機房運算」。下載地點與執行地點要分開。",
      "flow": [
        "使用者按鈕",
        "Client 送請求",
        "Server 驗證及處理",
        "讀寫資料",
        "回應 Client 呈現"
      ],
      "related": [
        "database",
        "runtime",
        "security"
      ]
    },
    {
      "id": "runtime",
      "title": "原生 EXE、網頁 Client 與遠端桌面",
      "lead": "看起來都在螢幕上，但程式可能在不同地方執行。",
      "points": [
        "原生桌面程式通常由玩家裝置的作業系統執行；網頁程式通常由玩家裝置的瀏覽器執行。兩者仍可能需要後端服務。",
        "同一份 Client 檔案從不同空間取得，內容不變就不會自動獲得較好的演算法或修掉原本錯誤。瀏覽器、硬體、設定及版本仍會影響表現。",
        "遠端桌面是操作另一台電腦，通常傳送畫面與輸入；在遠端電腦啟動的程式，主要消耗那台電腦的 CPU／GPU／記憶體。",
        "Rust 是程式語言；RustDesk 是遠端桌面軟體。名稱相似不代表同一個概念。連線可以涉及直連、媒合或中繼，不保證永遠走同一路徑。"
      ],
      "example": "筆電透過 RustDesk 操作桌機開 RO：RO 主要仍在桌機執行；筆電還要負責遠端畫面的接收與解碼。",
      "trap": "遠端控制不是匿名保證。連線日誌、服務端登入、代理／VPN 設定及網路出口都可能留下不同紀錄。",
      "flow": [
        "原生：下載 EXE → 本機執行",
        "網頁：載入 HTML／JS → 瀏覽器執行",
        "遠端：本機輸入 → 遠端執行 → 畫面回傳"
      ],
      "related": [
        "performance",
        "network",
        "assets"
      ]
    },
    {
      "id": "database",
      "title": "SQL、MariaDB、JSON、Navicat 怎麼分？",
      "lead": "語言、資料庫系統、檔案格式與管理工具，分成四格就不會混。",
      "points": [
        "SQL 是查詢與操作關聯式資料庫的語言。MariaDB、PostgreSQL、SQLite 是不同資料庫系統，語法與功能不完全相同。",
        "Navicat 等工具是管理客戶端，不是資料庫本體；關掉管理工具，資料庫服務仍可繼續運行。",
        "JSON 是資料表示格式。它可以是設定檔、API 回應，也可以被存進資料庫欄位；看到 JSON 不代表整個系統沒有 SQL。",
        "交易（transaction）讓一組變更以一致方式完成；例如購買時扣錢與加道具要一起成功。重試還需要避免同一筆操作重複結算。",
        "Cloudflare D1 是採 SQLite SQL 語意的受管 serverless 資料庫服務，不是 MariaDB，也不是把現有 MariaDB schema 原封不動搬入就能使用。SQLite 常以嵌入式資料庫方式運作；自架 MariaDB 則由你管理資料庫服務。選擇要看 SQL 相容性、存取方式、維運、配額與工作負載，不能只用新舊或遊戲／非遊戲概括。"
      ],
      "example": "Server 和 MariaDB 同機時可走本機連線；分兩台時則要設計私有連線與權限。玩家通常不應拿到資料庫管理憑證。",
      "trap": "集中資料庫能減少兩份存檔互蓋，但不會自動解決同時修改、重複請求或錯誤的業務邏輯。",
      "flow": [
        "Client 提交購買意圖",
        "Server 驗證身分／價格／餘額",
        "資料庫交易",
        "成功後回傳新狀態"
      ],
      "related": [
        "security",
        "operations",
        "roles"
      ]
    },
    {
      "id": "network",
      "title": "連線地圖：網域、IP、Port 與本機位置",
      "lead": "網域幫你找到入口，IP 指向網路端點，Port 區分端點上的服務。",
      "points": [
        "DNS 將名稱解析成對應紀錄；它不是把遊戲運算搬到網域註冊商。買網域也不等於買了主機或資料庫。",
        "127.0.0.1 是「正在發出連線的那台主機自己」。放在玩家瀏覽器的設定裡，指的是玩家電腦，不是開發者電腦。",
        "內網位址、公開位址與內部服務互連用途不同。朋友能否抵達取決於路由、防火牆、監聽位址及對外入口，而不只是程式有沒有開。",
        "Port 轉發把外部連線導向內網服務；NAT 與防火牆不是同一概念。內部服務不必為了對外開放而全部改填公開 IP。"
      ],
      "example": "RO 三端在同機互連可使用合適的內部位址；提供給玩家連線的位址則必須是玩家能抵達的入口。具體設定依端與網路拓撲而定。",
      "trap": "網址中的 Port、本機服務監聽的 Port、路由器外部轉發的 Port 可以不同；先畫出每一段再設定。",
      "flow": [
        "使用者輸入網域",
        "DNS 解析入口",
        "路由／代理／防火牆",
        "目標服務監聽 Port"
      ],
      "related": [
        "tunnel",
        "protocol",
        "hosting"
      ]
    },
    {
      "id": "protocol",
      "title": "HTTP、WebSocket、封包與 API",
      "lead": "封包不是魔法；雙方必須同意資料的格式、順序與意義。",
      "points": [
        "API 是程式提供的操作介面。網路 API 常透過 HTTP 傳遞請求與回應，但 API 不一定都經網路。",
        "HTTP 常用於載入網頁、素材與資料請求；WebSocket 建立持續的雙向通訊，適合需要主動推送的互動，但不會自動提供遊戲公平性。",
        "網路封包是傳輸層面的資料單位；遊戲常說的封包也可能指應用層訊息。TCP 是位元組串流，一次 read 不保證剛好等於一個完整遊戲訊息。",
        "協定版本定義欄位、長度、訊息識別與行為。Client 和 Server 理解不同，可能解析失敗、斷線或得到錯誤結果。"
      ],
      "example": "RO 的 packetver 相容性，類似雙方必須使用能互相理解的「表格格式與規則」。改個 Port 並不能修正封包格式不相容。",
      "trap": "HTTPS／WSS 保護傳輸，不代表 Server 可以相信 Client 傳來的金錢、傷害或管理員身分。",
      "flow": [
        "操作意圖",
        "序列化成訊息",
        "透過連線傳輸",
        "解析與驗證",
        "執行規則並回覆"
      ],
      "related": [
        "security",
        "network",
        "cases"
      ]
    },
    {
      "id": "hosting",
      "title": "網站空間、cPanel、GitHub Pages 與雲端",
      "lead": "託管解決「放哪裡、由誰維持服務」，不是改寫你的 Client。",
      "points": [
        "cPanel 是常見主機管理介面；FTP／SFTP 是傳檔方式；Web Server 提供 HTTP 服務。三者不能視為同一樣東西。",
        "GitHub Pages 是靜態網站託管：提供 HTML、CSS、JS 等檔案。它不直接執行你的 PHP 或 MariaDB 服務。",
        "一般網站空間、VPS、獨立主機與受管平台，主要差在控制權、隔離程度、可用環境、維運責任與方案限制。",
        "ChatGPT Sites 是網站託管與發布平台的一個選項，不是所有網站的統稱。這份知識庫不依賴 Sites，可以放到任何合適的靜態網站空間。",
        "平台也可依層分類：Cloudflare Workers 是受管應用執行環境；Amazon RDS 是受管關聯式資料庫服務；R2 等物件儲存提供檔案／物件保存。它們不是彼此完全替代，也不是都能直接執行 Windows 遊戲 EXE。"
      ],
      "example": "以前用 BAT 啟動作品網站，再讓朋友連進來，已經是在提供網站服務。改用受管託管，是把部分服務維持工作交給平台。",
      "trap": "網站空間可以提供 Client 檔案；遊戲 Server 則是處理遊戲服務。兩者可同機，也可以分開，不必為了放 Client 而佔用遊戲主機。",
      "flow": [
        "repo 原始檔",
        "網站發布流程",
        "Web Server／靜態託管",
        "使用者下載並執行 Client"
      ],
      "related": [
        "repository",
        "performance",
        "tunnel"
      ]
    },
    {
      "id": "tunnel",
      "title": "Tunnel、反向代理與遠端桌面：不同用途",
      "lead": "通道改變「怎麼連到服務」，不替你提供遊戲運算主機。",
      "points": [
        "Cloudflare Tunnel 由來源端的 cloudflared 主動建立對外連線，再讓平台將符合路由的請求送回來源服務。通常不需要一般的入站 Port 轉發。",
        "公開 HTTP 網站可讓使用者以瀏覽器訪問；非 HTTP 的存取方式不同，可能需要使用者端連線工具或私有網路設定。不要把一般 Tunnel 當成任意遊戲 TCP 的透明公開入口。",
        "反向代理在服務前面接請求，再送到後方服務；Tunnel 是通道機制；遠端桌面則是操作另一台電腦。它們可能搭配，但不是彼此替代名稱。",
        "Tunnel 目標仍要填正確的本機服務位址／Port。主機關機、來源程式停止或通道中斷，服務仍可能不可用。"
      ],
      "example": "Client 放網站空間，Server 和 SQL 在測試電腦；HTTPS API 經 Tunnel 到 Server，Server 內部再存取資料庫。資料庫不必因此公開。",
      "trap": "隱藏某個服務的來源 IP，不會抹除以前公開的紀錄，也不會自動隱藏同一 IP 上其他直接對外服務。",
      "flow": [
        "瀏覽器連網域",
        "平台公開入口",
        "已建立的 Tunnel",
        "本機 Server",
        "內部資料庫"
      ],
      "related": [
        "network",
        "security",
        "runtime"
      ]
    },
    {
      "id": "assets",
      "title": "素材、GRF、壓縮與按需載入",
      "lead": "檔案儲存空間不必然懂檔案格式；能解析它的是程式。",
      "points": [
        "ZIP／GRF 是封裝或壓縮容器；HTML／JS 是網頁產物；圖片與音效是素材。支援下載一個檔案，不等於能讀取其中每個項目。",
        "roBrowser 可以涉及讀取使用者選擇的本機遊戲檔，或向 Remote Client 素材服務要求個別資源；實際能力取決於版本與設定。",
        "素材服務可讀取 GRF、抽出資源再回傳；靜態託管則通常提供已準備好的檔案。不能把依賴 PHP 的服務原封不動放進只支援靜態檔案的平台。",
        "一次預載入與邊玩邊載入是取捨：前者等待較集中，後者首開較輕但後續可能仍需下載。壓縮減少傳輸，不代表解壓、解碼與記憶體成本消失。"
      ],
      "example": "RO Client 可以先下載完整素材再玩；瀏覽器遊戲也可預載或分段取素材。把所有素材壓成一大包，不一定比按需載入更快。",
      "trap": "檔案加密／壓縮不等於後端權限控制；提供給 Client 使用的資料，不能當成永遠不可被檢視的秘密。",
      "flow": [
        "素材來源",
        "封裝／轉換",
        "檔案託管或素材服務",
        "下載／快取",
        "解析／解碼",
        "顯示或播放"
      ],
      "related": [
        "cache",
        "runtime",
        "performance"
      ]
    },
    {
      "id": "cache",
      "title": "快取、容量、頻寬與流量",
      "lead": "容量是放多少；速率是傳多快；流量是總共傳多少。",
      "points": [
        "100 MB 的資源被完整下載 1,000 次，約產生 100 GB 的資料傳輸量；這是十進位簡化估算，不含協定開銷，也未扣除快取重用。",
        "Mbps 是每秒百萬 bit，MB/s 是每秒百萬 byte；忽略開銷時 8 bit = 1 byte。不要把頻寬數字當成可無限制下載的總額。",
        "瀏覽器快取可重用已取回的回應；是否重用受快取標頭、版本、重新驗證、空間與清除影響。CDN 快取和玩家裝置快取位於不同地方。",
        "快取不是備份。更新程式要兼顧快取失效與版本一致性，避免舊 HTML 搭新 JS 或資源被刪除造成載入失敗。"
      ],
      "example": "同一份 Client 放不同下載空間，不會改變程式演算法；但空間或網路速度會影響下載和未快取素材的取得。",
      "trap": "「沒有固定單站儲存上限」不等於帳號流量、請求或費用無限。平台配額應查當時方案，不套用其他平台的數字。",
      "flow": [
        "第一次請求",
        "下載資源",
        "依規則保存快取",
        "下次重用或重新驗證",
        "過期／更新則重新取得"
      ],
      "related": [
        "hosting",
        "performance",
        "operations"
      ]
    },
    {
      "id": "performance",
      "title": "慢在哪裡？先分 FPS、載入、網路與後端",
      "lead": "都叫 lag，根因可能完全不同，換機房不會包治百病。",
      "points": [
        "畫面掉幀：看 Client 演算法、主執行緒工作、渲染、素材解碼、GPU 與記憶體。即使已下載完仍可能卡。",
        "開頁或素材等待：看檔案體積、請求數、網路速率、伺服器回應、快取與載入策略。",
        "操作晚反應：看網路往返延遲、丟包、後端排隊、遊戲 tick、資料庫查詢與鎖競爭。",
        "閃退或頁面崩潰：看錯誤日誌、記憶體不足、版本相容、外掛與驅動。不要只從「用了哪家託管」下結論。"
      ],
      "example": "不同年份的 RO EXE 可能有不同程式實作與相容性；同一份 EXE 從不同下載空間取得，則不是換了程式版本。網頁 Client 也同理。",
      "trap": "正確比較要固定版本、裝置、場景與設定，再量測首載時間、FPS、記憶體、API 延遲等，不能只用一次主觀感覺判定。",
      "flow": [
        "先描述症狀",
        "固定測試條件",
        "量測 Client／網路／Server",
        "找瓶頸",
        "修改後再比較"
      ],
      "related": [
        "runtime",
        "cache",
        "operations"
      ]
    },
    {
      "id": "security",
      "title": "信任邊界：看得見不等於有權改",
      "lead": "後端必須驗證請求，不能把玩家介面當成安全防線。",
      "points": [
        "身分驗證確認你是誰；授權確認你能做什麼。隱藏按鈕不等於撤銷後端權限。",
        "HTTPS 加密傳輸；輸入驗證、權限檢查、參數化 SQL、限流與稽核分別解決不同問題。不能因為用了 HTTPS 就省略其他層。",
        "遊戲若要求公平，Server 要掌握權威狀態與規則；只把 Client 自報的傷害、勝利和掉落存進 SQL，資料雖在伺服器卻仍可被假請求影響。",
        "資料庫應採最小權限與適當網路隔離；秘密金鑰不要放進前端、公開 repo 或可下載的設定檔。安全設計也需要修補與備份復原。"
      ],
      "example": "購物網站應由後端查商品價格、驗證餘額與庫存；不能因為瀏覽器送出「價格 1 元」就照單全收。",
      "trap": "Server 權威不是「所有畫面每一幀都寫 SQL」；即時狀態可在記憶體計算，重要結果與資產變更再可靠保存。",
      "flow": [
        "不可信 Client 請求",
        "認證與授權",
        "規則／資料驗證",
        "交易與去重",
        "可信狀態與稽核"
      ],
      "related": [
        "database",
        "protocol",
        "operations"
      ]
    },
    {
      "id": "reverse",
      "title": "位址、DLL、反編譯與反組譯",
      "lead": "位置要先講清楚是哪種座標；逆向工具也不能把產物完美變回原始專案。",
      "points": [
        "IP 位址是網路層的位置；URL／路徑是資源或檔案位置；記憶體位址是執行中行程的位址空間。相同數字出現在不同脈絡不代表同一物件。",
        "偏移量是相對基準的位置差；指標是可用來指向資料或函式的值。更新版本、編譯最佳化與位址配置可能使固定位置失效。",
        "在 Windows PE 分析中，VA 是載入後的虛擬位址，RVA 是相對映像基底的位址，file offset 是檔案中的位移。RVA 通常不等於磁碟 offset，需依區段映射換算；有些記憶體內容也未必有對應的檔案位元組。",
        "DLL 是可被程式載入的動態函式庫。擴充需要符合介面、位元架構、呼叫慣例與版本，掛載不代表一定相容或穩定。",
        "反組譯把機器碼呈現成組合語言；反編譯推回較高階的表示。註解、變數名、建置環境和部分結構可能已遺失，結果不是原作者原始碼的完整還原。"
      ],
      "example": "同樣是補丁，修改某版 Client 的固定偏移位置，通常不能假設適用所有年份 EXE。對照版本、備份與測試比「位址看起來一樣」可靠。",
      "trap": "這裡說明概念與合法相容性研究，不提供繞過授權、偷取資料或破壞他人服務的操作教學。",
      "flow": [
        "原始碼",
        "編譯與最佳化",
        "機器碼產物",
        "反組譯／反編譯分析",
        "推測結構而非完整原碼"
      ],
      "related": [
        "lifecycle",
        "runtime",
        "security"
      ]
    },
    {
      "id": "repository",
      "title": "Repo、Git、更新器與部署版本",
      "lead": "Repo 管的是檔案歷史；正式網站跑哪一版，要另有發布流程。",
      "points": [
        "Git 記錄變更；GitHub 是託管與協作平台之一；GitHub Pages 是網站發布服務。三者有關，但不是一個功能。",
        "分支用來隔離工作，commit 記錄變更，PR 用來審查與討論。合併後是否自動上線，取決於工作流程設定。",
        "更新器把適當版本的 Client 或素材傳到使用者裝置；網頁也需要版本與快取策略，不是上傳了就保證每位使用者立刻載入同一版。",
        "開發、測試與正式環境應有清楚界線。測試用資料庫、服務 URL、金鑰與設定不應誤用正式環境。"
      ],
      "example": "把純靜態 HTML／CSS／JS 放進 repo，可以用 GitHub Pages 發布，也可以複製到既有網站子目錄。這份站點使用相對路徑，降低搬家成本。",
      "trap": "刪分支不等於刪掉已合併的功能；回退程式也不一定能自動回退資料庫格式，兩者需要各自的遷移計畫。",
      "flow": [
        "分支修改",
        "測試與審查",
        "合併／標記版本",
        "發布產物",
        "檢查線上版本",
        "必要時回復"
      ],
      "related": [
        "lifecycle",
        "hosting",
        "operations"
      ]
    },
    {
      "id": "operations",
      "title": "維運：啟動成功以後還有什麼？",
      "lead": "可靠運作靠可觀測、可恢復、可更新，而不是只靠「現在能開」。",
      "points": [
        "日誌記錄發生什麼；指標觀察延遲、錯誤率、資源用量；追蹤可串起跨服務請求。不要把密碼、完整 token 或不必要個資寫進日誌。",
        "備份要考慮保存週期、異地副本與實際還原測試。同步可能把錯誤或刪除同步出去，所以不等於備份。",
        "主機與 SQL 分離可獨立管理，但引入網路延遲與故障點；共用主機較簡單，卻會共用 CPU、記憶體、磁碟和故障風險。",
        "服務管理、健康檢查、重啟策略、容量監控、告警與更新回復流程，才把「手動開機測試」推向可營運的系統。"
      ],
      "example": "搬機房不只複製資料夾：還要準備執行環境、依賴、網路入口、設定、資料庫備份還原與驗證；保留穩定網域能減少玩家端改動。",
      "trap": "加機器不一定線性加速：單一鎖、慢查詢、資料一致性或串行計算都可能成為瓶頸。先量測再擴充。",
      "flow": [
        "部署",
        "健康檢查",
        "監控／日誌",
        "發現異常",
        "修復或回復",
        "還原演練與改善"
      ],
      "related": [
        "database",
        "performance",
        "security"
      ]
    },
    {
      "id": "cases",
      "title": "把觀念放進 LINE、Facebook 與 RO",
      "lead": "以下是教學用簡化流程，不是這些產品私有架構的宣稱。",
      "points": [
        "訊息 App：裝置收集文字 → 後端驗證與路由 → 對方裝置收到更新。已送出、伺服器接受、已送達、已讀可能是不同狀態；加密方式會改變誰能讀取內容。",
        "社群貼文：Client 上傳圖片與文字 → 後端檢查權限／處理媒體／保存記錄 → 其他使用者取得貼文。圖片儲存與資料庫記錄可以分工，不代表圖片必須直接放進 SQL。",
        "RO：Client 發送操作 → Login／Char／Map 等服務依各自職責處理 → Client 呈現收到的狀態。具體責任邊界依使用的端與版本為準。",
        "純靜態作品集：HTML／CSS／JS 與圖片即可提供閱讀；若新增會員、付款或跨裝置收藏，就可能需要額外的服務與資料保存設計。"
      ],
      "example": "先挑一個動作，例如「發一張圖」「買一個道具」，逐步問：誰輸入？誰驗證？在哪裡算？存什麼？怎麼回傳？斷線怎麼辦？",
      "trap": "產品名稱不是架構答案。不同規模、版本與需求可以採不同實作，不要把概念示意當成廠商官方內部設計。",
      "flow": [
        "一個使用者動作",
        "Client 呈現／送出",
        "Server 驗證／處理",
        "持久資料與素材",
        "回應／推送其他裝置"
      ],
      "related": [
        "roles",
        "protocol",
        "security"
      ]
    },
    {
      "id": "file-sharing",
      "title": "即時檔案分享：上傳連結、雲端硬碟與 P2P",
      "lead": "這類工具重點是把一批檔案交給對方，不是讓每個人都裝好同步軟體。先看接收方式，再比較容量。",
      "flow": [
        "選取檔案與資料夾",
        "上傳至暫存服務或建立 P2P 連線",
        "設定期限／密碼／下載次數",
        "分享連結",
        "收件下載並確認完整性"
      ],
      "points": [
        "託管式傳送：先把檔案上傳到服務商，對方再下載。上傳完成後通常不必一直保持你的電腦開機；但要確認服務確實完成接收，而非只是先給你連結。",
        "P2P 點對點：檔案可能直接從寄件裝置傳到收件裝置，雙方必須同時在線。Wormhole 超過 5GB 時採這種方式，寄件分頁要保持開啟。",
        "比較五種限制：單次大小、每月總量、傳送次數、每筆下載次數及保存期限。它們是不同計數，10 位收件人不等於只能下載 10 次。",
        "「不限大小」不是保證無限速度或無限容量永久儲存。排隊、網路穩定性、瀏覽器限制、公平使用政策與訂閱失效規則仍可能影響使用。",
        "TLS 保護傳輸路徑；靜態加密保護儲存資料；端對端加密（E2EE）則要看金鑰是否只在端點。可設分享密碼不代表服務商不能解密，SSE-C 仍是伺服器端加密。",
        "大型資料夾先用小包測試：確認相對路徑、完整下載、斷線後行為及收件端限制，再傳整批。可附 SHA-256 雜湊值檢查下載完整性；雜湊相符本身不證明來源安全。",
        "既有雲端硬碟分享通常指向你帳號內的檔案；臨時傳檔通常建立有期限的獨立傳送。命名相近的 pCloud Transfer 和 pCloud 網盤、Transfer.it 和 MEGA 雲端，是不同產品與配額。"
      ],
      "example": "交付 25GB 的遊戲測試客戶端，可以選有足夠單次額度的託管服務，設定短期連結並附版本與雜湊；若採 P2P，就先約好雙方在線時間。只分享自己有權交付的內容。",
      "trap": "即時分享是方便交付，不是資料同步，也不是替遠端網盤自動搬檔；服務是否支援跨雲匯入需另查。加密也不會自動讓收到的可執行檔安全。",
      "related": [
        "file-transfer-services",
        "cache",
        "security",
        "operations"
      ]
    },
    {
      "id": "file-transfer-services",
      "title": "八款即時分享服務：免費容量、期限與限制",
      "lead": "2026-11-03 官方資料快照。以下聚焦免費使用；方案、地區限制和促銷可能改變，付款或大量上傳前再看官方頁。",
      "flow": [
        "確認檔案大小",
        "確認對方何時下載",
        "檢查次數／期限／地區",
        "選擇加密方式",
        "先做小量測試"
      ],
      "points": [
        "Transfer.it｜單次大小、檔案數及傳送次數不設上限，免帳號，預設 90 天。目前優惠期下載次數不限；官方比較頁預告全功能免費至 2027-03-01，之後免費每筆 100 次下載，Pro €2.99／月為未來方案展示，不是已核實目前結帳價。採服務端管理金鑰，非 E2EE。",
        "Transfer.it 付費期限｜無期限檔案隨有效訂閱保留，訂閱結束後最多再保留 30 天；政策以超過 2TB 的無期限儲存為公平使用限制例子，不應寫成硬性 2TB 容量上限或無限永久保存承諾。",
        "SwissTransfer｜每次 50GB，免費最多 250 次下載，收送免註冊，可能需驗證寄件信箱。免費選 30 天時，詳細 FAQ 說先保留 15 天，第 12 天寄通知、需在其後 3 天內延長至 30 天；付費 Enterprise 最長 60 天。非 E2EE。部分歐洲外地區不能建立傳送，台灣本次未實測。",
        "WeTransfer｜免費需寄件帳號、收件免帳號；每個滾動 30 天最多 10 次，且總計最多 3GB，先碰到任一限制就停，不是每次 3GB 無限傳。每筆最多保留 3 天。付費升級另看當前方案，別沿用舊版 2GB／7 天說法。",
        "Smash｜免費不設硬性大小上限，免註冊，但超過 2GB 非優先處理、可能排隊。現行方案頁寫免費 7 天，官方另一份 FAQ 寫最多 14 天；以建立連結時顯示為準。免費下載次數上限未核實，不標為無限。",
        "Filemail｜免費每次 5GB、每 24 小時 2 次、保留 7 天；免費 Basic 方案列每筆 10 次下載，可免註冊。免費傳輸中有加密，但官方說一般靜態檔案不加密；Business 的 E2EE 需雙方使用桌面程式，不能套到免費網頁版。",
        "TransferNow｜免費每次 5GB、保留 7 天、免註冊；免費確切下載次數上限未查明。付費 Premium／Team 分別可傳 250GB／500GB、最長 365 天；付費 SSE-C 是伺服器端加密，非 E2EE。",
        "pCloud Transfer｜免費每次 5GB、保留 7 天、最多寄給 10 個信箱，收送免註冊但可能要驗證寄件信箱。10 位收件人不是 10 次下載。這是獨立工具，不是 pCloud 網盤容量升級；本次未核實現行 E2EE 保證。",
        "Wormhole｜最多 10GB、免帳號、預設 E2EE。5GB 以下可託管 24 小時；超過 5GB 採 P2P，寄件分頁必須持續開啟直到對方下載。免費下載次數上限與可購買的 Pro 方案本次未確認。",
        "選擇方向｜20～50GB 整包檔案可比較 Transfer.it 與 SwissTransfer（先確認所在地可用）；更大資料可先測 Transfer.it 或能接受排隊的 Smash；敏感小包可看 Wormhole。以上不是台灣速度或穩定性的實測排名。"
      ],
      "example": "一包 1GB MV、多個檔案合計 40GB，以及每月反覆傳送 20 次，適合的方案可能完全不同。先算「一筆的總大小」和「一個月的總量」，再問對方能否在期限內下載。",
      "trap": "免費服務政策變動快；資料未明列不代表不限。各服務官方說明與限制網址收在本頁「參考來源」，存在矛盾的規則已註明，不以舊部落格評測補成確定值。",
      "related": [
        "file-sharing",
        "cache",
        "security"
      ]
    },
    {
      "id": "pdf-basics",
      "title": "PDF 編輯先分清：原文、註記、頁面與 OCR",
      "lead": "PDF 通常是固定版面文件，不是保證可以像 Word 一樣重排的原始稿。選工具前，先辨別要改的是哪一層。",
      "flow": [
        "保留原始檔副本",
        "辨別文字型或掃描型 PDF",
        "確認操作類型",
        "編輯／OCR／整理頁面",
        "另存並逐頁檢查"
      ],
      "points": [
        "原文編輯：改動 PDF 已有的文字或圖片物件。字型、分欄、公式或物件切割方式可能讓修改後排版移位；若有原始 Word／ODT／排版檔，優先回原稿修改再輸出。",
        "註記與加字：螢光標示、便條、手寫、畫線或新增文字框，通常不等於改掉底下的原文。閱讀器標示「可編輯」時，要看它指註記還是真正文字編輯。",
        "頁面操作：合併、分割、抽頁、旋轉、重新排序或壓縮，與修改一行文字是不同能力；不能因為工具能合併 PDF 就認定能改原文。",
        "OCR（光學字元辨識）：從掃描圖片辨識文字，可增加搜尋／複製文字層或轉成可編輯格式；不保證原版面、表格、公式、繁體中文及數字全部正確。",
        "填寫表單是輸入既有欄位；製作表單是新增欄位與驗證規則。貼一張簽名圖片、電子簽署流程與憑證式數位簽章也不是同一件事。",
        "遮住文字不代表刪除文字：白色框、黑色框或螢光筆可能仍保留底下可複製的內容。需要去識別化時用真正的遮蔽／刪除敏感內容功能，再檢查文字搜尋、複製及中繼資料。",
        "驗收至少看：頁數、頁面順序、中文字型、表格邊界、公式、超連結與表單。曾經簽署的 PDF 修改後可能影響簽章驗證，勿只看畫面正常就當成文件完全相同。"
      ],
      "example": "在講義上劃重點用註記；把三份公開說明書合成一份用頁面工具；更正自己文件的原句才需要原文編輯；純掃描頁要先 OCR 才方便搜尋。",
      "trap": "OCR 不是 AI 摘要，摘要不是原文；「能加字」不等於「能替換原文字」。用副本驗證，避免覆蓋唯一原稿。",
      "related": [
        "pdf-tools",
        "pdf-ai-selfhost",
        "assets",
        "security"
      ]
    },
    {
      "id": "pdf-tools",
      "title": "PDF 工具怎麼選：免費、開源與自架各有分工",
      "lead": "2026-11-03 官方資料查核。先按工作選工具，再看授權與資料流；免費、開源、離線、自架是四個不同維度。",
      "flow": [
        "閱讀／註記或原文編輯？",
        "頁面整理或 OCR？",
        "單機或多人自架？",
        "核對授權／功能／資料流",
        "用副本測試輸出"
      ],
      "points": [
        "Adobe Acrobat Reader｜免費閱讀、註記與填寫既有表單。改原本文字、合併、建立表單等進階工作屬 Acrobat 付費功能；不是 Reader 免費功能。各地價格與 OCR／進階能力需查當前方案。",
        "Microsoft Edge｜內建 PDF 閱讀器可閱讀、手寫、標示、文字便條與基本表單填寫。適合快速閱讀註記，不應把加字或便條當作完整替換原文的編輯器。",
        "PDFgear｜目前提供免費桌面 PDF 原文編輯、頁面工具及 OCR 等功能，但屬專有軟體，不是開源專案。官方線上編輯器主要加字、註記與頁面整理，替換既有文字需桌面版。各平台功能不應假設完全一致。",
        "LibreOffice Draw｜免費開源桌面工具，可匯入 PDF 後以文字／圖形物件方式修改再匯出，適合嘗試小幅修改。它不是保證完全保真的 PDF 專業排版器；字型、複雜表格和斷行需逐頁檢查，也不能把掃描圖片直接當成文字物件。",
        "PDFsam Basic｜免費開源、本機處理的合併、分割、旋轉、抽頁與混合頁面工具。不是完整原文編輯器，也不要把 PDFsam Enhanced 的付費編輯／OCR 能力算到 Basic；Visual、Enhanced 是不同產品。",
        "Stirling PDF｜可在瀏覽器、桌面或自架伺服器使用，提供合併、分割、壓縮、轉換、OCR、註記等；現行文件也有 PDF Text Editor 可改既有文字與圖片，但提醒字型和版面可能移位。採 open-core，不是所有企業功能或 AI 處理都無限制免費。",
        "PdfDing｜偏向自架 PDF 收藏管理與跨裝置閱讀，支援閱讀進度、標籤及加字／標示／繪圖註記。不是以完整原文排版修改為核心；GitHub 舊倉庫已封存並導向 Codeberg，找維護版本要跟官方新位置。",
        "DocuSeal｜開源電子簽署與表單流程工具，適合建立填寫／簽署欄位、收集簽署及管理流程；有自架及商業服務。不是 Acrobat 式通用原文編輯器，也不是掃描辨識工具；功能與授權範圍依版本。",
        "選擇捷徑｜只讀和註記先用 Edge／Reader；要免費改原文可先試 PDFgear 或 Draw；只合併拆頁用 PDFsam Basic；想集中自架多種處理用 Stirling；想管理閱讀庫看 PdfDing；簽署流程看 DocuSeal。這是用途分類，不是逐款安裝實測排名。"
      ],
      "example": "一套 PDFsam Basic 加一個閱讀器，就可能解決抽頁、合併和註記；只有需要改原句或 OCR 時，才需要增加對應工具，不必每次都購買最完整套件。",
      "trap": "免費不等於開源；開源不等於全部商業功能免費；自架不等於不用維護；同一品牌的網頁版、桌面版與不同方案不能混為一談。官方來源集中於本頁參考來源。",
      "related": [
        "pdf-basics",
        "pdf-ai-selfhost",
        "hosting",
        "operations"
      ]
    },
    {
      "id": "pdf-ai-selfhost",
      "title": "PDF 的 AI 與隱私：自架也要追資料去了哪裡",
      "lead": "「裝在自己的電腦」只描述軟體位置；文件、提示詞與向量化文字是否送往第三方，要按每個功能與設定查核。",
      "flow": [
        "文件進入工具",
        "文字擷取／OCR",
        "本機或外部嵌入模型建立索引",
        "本機或外部語言模型回答",
        "檢查輸出／清除暫存與權限"
      ],
      "points": [
        "先畫資料流：一般編輯、進階轉檔、OCR、AI 摘要和同步可能走不同路徑。某個網頁工具在瀏覽器本機處理，不代表同品牌所有 AI 或轉檔功能也不上傳。",
        "PDFgear 隱私政策寫明：使用 AI 功能並在應用程式明確同意後，可能將 PDF 內容、聊天文字與必要中繼資料傳給 Microsoft Azure OpenAI Service。官方另說部分進階轉檔可能使用雲端運算。不要宣稱整套 PDFgear 完全離線或零外傳。",
        "Stirling PDF 的自架 AI 預設關閉。啟用後可選自己執行 AI 引擎，或使用 Stirling Cloud AI；自己執行引擎仍可連到外部模型供應商，不等於模型就在自己電腦。",
        "自架 Stirling 的語言模型供應商可能收到提示詞、相關文件內容、對話歷史與檔名；嵌入模型供應商可能收到文件文字及搜尋查詢。使用 Stirling Cloud AI 時，內容會交給 Stirling Cloud。",
        "想把文件 AI 處理留在自有網路，語言模型和嵌入模型兩邊都要選本機端點，例如官方支援的 Ollama，並檢查引擎、OCR、儲存、日誌及其他整合。只把聊天模型改成本機仍可能從向量化步驟外傳。",
        "Stirling 現行自架 Free 方案列 5 位使用者；企業功能與方案另分。官方說非 Enterprise 的 AI／Processor 等處理仍受月額度影響，即使自備引擎與供應商金鑰也不能直接理解成無限免費；需另計模型 API 或本機硬體成本。",
        "自架仍要管理登入、HTTPS、更新、備份、暫存清理及分享權限；不要把 AI 引擎直接暴露到公網。此章是選型與資料流知識，不是已替你部署、開放連線或設定 API 金鑰。",
        "AI 回答可能漏頁、誤讀表格或編造細節。需要提交或正式使用時核對原文頁碼、引用、日期和數值；敏感資料先確認你有權交給該服務，而不是看到「安全」標語就上傳。"
      ],
      "example": "PDF 工具部署在自己的主機，但嵌入設定使用外部 API 時，全文仍可能先傳到外部做索引。追蹤「文件 → OCR → 向量 → 模型 → 儲存」比只問是不是自架更準確。",
      "trap": "自架應用程式、自架 AI 引擎、本機語言模型、本機嵌入模型是不同層。預設關閉 AI 也不代表所有更新檢查、遙測或自選外部整合都不存在。",
      "related": [
        "pdf-tools",
        "security",
        "hosting",
        "operations"
      ]
    }
  ],
  "terms": [
    {
      "id": "term-1",
      "term": "原始碼",
      "aliases": "Source code,src",
      "definition": "人撰寫、可維護的程式表示。",
      "confusion": "不是正在運行的行程，也不必然可由 EXE 完整還原。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-2",
      "term": "編譯",
      "aliases": "Compile,Compiler",
      "definition": "把程式表示轉換成另一種形式的處理。",
      "confusion": "不等於整個建置、部署或啟動流程。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-3",
      "term": "建置",
      "aliases": "Build",
      "definition": "把原碼與依賴轉成可測試或交付產物的流程。",
      "confusion": "可能含編譯、打包、素材轉換，不只產生 EXE。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-4",
      "term": "執行環境",
      "aliases": "Runtime",
      "definition": "執行程式需要的引擎、函式庫或平台環境。",
      "confusion": "同一原碼在不同環境不保證相容。",
      "chapter": "runtime"
    },
    {
      "id": "term-5",
      "term": "行程",
      "aliases": "Process",
      "definition": "作業系統中一個正在執行的程式實例。",
      "confusion": "不是檔案本身；同一程式可開多個行程。",
      "chapter": "runtime"
    },
    {
      "id": "term-6",
      "term": "執行緒",
      "aliases": "Thread",
      "definition": "行程內的一條執行流程。",
      "confusion": "多執行緒不保證所有工作都更快。",
      "chapter": "performance"
    },
    {
      "id": "term-7",
      "term": "EXE",
      "aliases": "Executable",
      "definition": "Windows 常見的可執行檔形式。",
      "confusion": "副檔名不保證包含全部設定、素材或依賴。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-8",
      "term": "DLL",
      "aliases": "Dynamic-link library",
      "definition": "程式可動態載入使用的函式庫。",
      "confusion": "不是任意版本都可互換的擴充包。",
      "chapter": "reverse"
    },
    {
      "id": "term-9",
      "term": "BAT",
      "aliases": "Batch file",
      "definition": "Windows 批次指令腳本。",
      "confusion": "通常是啟動或管理流程，不是網站服務本體。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-10",
      "term": "前端",
      "aliases": "Frontend",
      "definition": "使用者介面與裝置端互動相關職責。",
      "confusion": "管理後台的頁面也有前端。",
      "chapter": "roles"
    },
    {
      "id": "term-11",
      "term": "後端",
      "aliases": "Backend",
      "definition": "處理服務規則、權限與資料存取的部分。",
      "confusion": "不是只有 SQL，也不等於一個管理頁面。",
      "chapter": "roles"
    },
    {
      "id": "term-12",
      "term": "管理後台",
      "aliases": "Admin console",
      "definition": "供管理者操作的介面與功能。",
      "confusion": "介面是前端，執行管理規則仍需要後端。",
      "chapter": "roles"
    },
    {
      "id": "term-13",
      "term": "客戶端",
      "aliases": "Client",
      "definition": "在互動中使用另一方服務的程式。",
      "confusion": "不必然是 EXE，瀏覽器和後端程式也可扮演 Client。",
      "chapter": "roles"
    },
    {
      "id": "term-14",
      "term": "伺服器",
      "aliases": "Server",
      "definition": "提供服務的程式；口語也指承載它的主機。",
      "confusion": "主機位置與程式角色要分開。",
      "chapter": "map"
    },
    {
      "id": "term-15",
      "term": "API",
      "aliases": "Application programming interface",
      "definition": "程式公開給其他程式使用的介面。",
      "confusion": "不一定是網路 API，也不是資料庫的同義詞。",
      "chapter": "protocol"
    },
    {
      "id": "term-16",
      "term": "資料庫",
      "aliases": "Database,DB",
      "definition": "依一定結構保存與查詢資料的系統或資料集合。",
      "confusion": "SQL 語言與管理工具都不是資料庫本體。",
      "chapter": "database"
    },
    {
      "id": "term-17",
      "term": "SQL",
      "aliases": "Structured query language",
      "definition": "查詢與操作關聯式資料庫的語言。",
      "confusion": "不同資料庫的語法與能力不完全相同。",
      "chapter": "database"
    },
    {
      "id": "term-18",
      "term": "MariaDB",
      "aliases": "MySQL family",
      "definition": "一種關聯式資料庫系統。",
      "confusion": "不是所有 .sql 都能不修改直接匯入。",
      "chapter": "database"
    },
    {
      "id": "term-19",
      "term": "SQLite",
      "aliases": "Embedded database",
      "definition": "可嵌入應用程式的資料庫引擎，常用檔案保存資料。",
      "confusion": "不等於所有資料庫都是一個可隨意複製的 .db。",
      "chapter": "database"
    },
    {
      "id": "term-20",
      "term": "JSON",
      "aliases": "JavaScript Object Notation",
      "definition": "以物件、陣列等表示資料的文字格式。",
      "confusion": "不是看到 JSON 就代表沒有使用資料庫。",
      "chapter": "database"
    },
    {
      "id": "term-21",
      "term": "交易",
      "aliases": "Transaction",
      "definition": "讓一組資料操作依資料庫規則一起完成的單位。",
      "confusion": "仍需設計業務規則、隔離與重試。",
      "chapter": "database"
    },
    {
      "id": "term-22",
      "term": "冪等",
      "aliases": "Idempotency",
      "definition": "同一操作重試時避免產生額外重複效果的性質。",
      "confusion": "不是只要有 operation ID 就自然做到。",
      "chapter": "security"
    },
    {
      "id": "term-23",
      "term": "網域",
      "aliases": "Domain name",
      "definition": "網路命名系統中的名稱。",
      "confusion": "買網域不等於買主機或網站。",
      "chapter": "network"
    },
    {
      "id": "term-24",
      "term": "DNS",
      "aliases": "Domain Name System",
      "definition": "查詢名稱對應紀錄的系統。",
      "confusion": "解析成功不表示服務已啟動。",
      "chapter": "network"
    },
    {
      "id": "term-25",
      "term": "IP 位址",
      "aliases": "IP address",
      "definition": "網路通訊中識別介面的位址。",
      "confusion": "不是檔案路徑，也不是永久不變的身分。",
      "chapter": "network"
    },
    {
      "id": "term-26",
      "term": "連接埠",
      "aliases": "Port",
      "definition": "傳輸協定用來區分端點服務的編號。",
      "confusion": "有設定號碼不等於程式有監聽或防火牆有放行。",
      "chapter": "network"
    },
    {
      "id": "term-27",
      "term": "本機回環",
      "aliases": "Loopback,localhost,127.0.0.1",
      "definition": "指向發起連線主機自己的介面。",
      "confusion": "玩家裝置的 localhost 不是開發者電腦。",
      "chapter": "network"
    },
    {
      "id": "term-28",
      "term": "內網位址",
      "aliases": "Private address,LAN",
      "definition": "供私有網路使用、不直接在公網路由的位址範圍。",
      "confusion": "不能只把它寄給外地朋友就期待能連。",
      "chapter": "network"
    },
    {
      "id": "term-29",
      "term": "公開位址",
      "aliases": "Public address,WAN",
      "definition": "能在公用網路路由的位址。",
      "confusion": "公開不等於任何服務都能穿過防火牆。",
      "chapter": "network"
    },
    {
      "id": "term-30",
      "term": "NAT",
      "aliases": "Network Address Translation",
      "definition": "網路位址轉換機制。",
      "confusion": "不是加密，也不等於完整安全防護。",
      "chapter": "network"
    },
    {
      "id": "term-31",
      "term": "Port 轉發",
      "aliases": "Port forwarding",
      "definition": "把指定入口的連線導向另一個內部端點。",
      "confusion": "不能解決程式未啟動或協定不相容。",
      "chapter": "network"
    },
    {
      "id": "term-32",
      "term": "防火牆",
      "aliases": "Firewall",
      "definition": "依規則允許或阻擋網路通訊。",
      "confusion": "不是資料備份或應用程式權限檢查的替代品。",
      "chapter": "security"
    },
    {
      "id": "term-33",
      "term": "HTTP",
      "aliases": "Hypertext Transfer Protocol",
      "definition": "網站常見的請求與回應協定。",
      "confusion": "不限於傳 HTML，也可傳 JSON 或圖片。",
      "chapter": "protocol"
    },
    {
      "id": "term-34",
      "term": "HTTPS",
      "aliases": "HTTP over TLS",
      "definition": "透過 TLS 保護的 HTTP。",
      "confusion": "保護傳輸不代表對方服務可信或沒有漏洞。",
      "chapter": "security"
    },
    {
      "id": "term-35",
      "term": "WebSocket",
      "aliases": "WS,WSS",
      "definition": "支援持續雙向訊息傳輸的通訊機制。",
      "confusion": "不是自帶多人遊戲同步與反作弊。",
      "chapter": "protocol"
    },
    {
      "id": "term-36",
      "term": "封包",
      "aliases": "Packet,message",
      "definition": "網路資料單位；遊戲語境也可能指應用訊息。",
      "confusion": "TCP 一次讀取不一定是一個完整遊戲訊息。",
      "chapter": "protocol"
    },
    {
      "id": "term-37",
      "term": "協定",
      "aliases": "Protocol",
      "definition": "通訊雙方遵守的格式與行為規則。",
      "confusion": "只匹配 IP／Port 不代表訊息格式相容。",
      "chapter": "protocol"
    },
    {
      "id": "term-38",
      "term": "序列化",
      "aliases": "Serialization",
      "definition": "把資料結構轉成可保存或傳輸的表示。",
      "confusion": "不是加密；接收端還要解析與驗證。",
      "chapter": "protocol"
    },
    {
      "id": "term-39",
      "term": "Tunnel",
      "aliases": "隧道,cloudflared",
      "definition": "將通訊透過另一條連線承載的機制。",
      "confusion": "不是免費運算主機，也不自動適用任意原生遊戲。",
      "chapter": "tunnel"
    },
    {
      "id": "term-40",
      "term": "反向代理",
      "aliases": "Reverse proxy",
      "definition": "在服務前接請求，再轉送到後方服務。",
      "confusion": "跟遠端桌面不是同一用途。",
      "chapter": "tunnel"
    },
    {
      "id": "term-41",
      "term": "CDN",
      "aliases": "Content delivery network",
      "definition": "由分散節點協助傳遞內容的網路。",
      "confusion": "CDN 快取不是每位玩家裝置的快取。",
      "chapter": "cache"
    },
    {
      "id": "term-42",
      "term": "快取",
      "aliases": "Cache",
      "definition": "為重用而暫存資料，減少重複取得或計算。",
      "confusion": "可能過期、被清除，不等於永久備份。",
      "chapter": "cache"
    },
    {
      "id": "term-43",
      "term": "頻寬",
      "aliases": "Bandwidth",
      "definition": "通道可承載的資料速率能力。",
      "confusion": "與每月總流量 GB 不同。",
      "chapter": "cache"
    },
    {
      "id": "term-44",
      "term": "流量",
      "aliases": "Data transfer",
      "definition": "一段期間內實際傳輸的資料量。",
      "confusion": "不是硬碟剩餘容量。",
      "chapter": "cache"
    },
    {
      "id": "term-45",
      "term": "延遲",
      "aliases": "Latency,RTT",
      "definition": "操作或通訊等待所花的時間；RTT 是往返時間。",
      "confusion": "不等於下載速率或畫面 FPS。",
      "chapter": "performance"
    },
    {
      "id": "term-46",
      "term": "幀率",
      "aliases": "FPS",
      "definition": "每秒呈現的影格數。",
      "confusion": "快取完成或換下載空間不一定能改善它。",
      "chapter": "performance"
    },
    {
      "id": "term-47",
      "term": "Tick",
      "aliases": "Simulation tick",
      "definition": "伺服器或遊戲邏輯更新的步進。",
      "confusion": "不必與畫面 FPS 一樣，也不代表每次都寫 SQL。",
      "chapter": "performance"
    },
    {
      "id": "term-48",
      "term": "記憶體",
      "aliases": "RAM",
      "definition": "執行中程式使用的工作空間。",
      "confusion": "不是硬碟容量，通常不當作斷電後永久保存。",
      "chapter": "reverse"
    },
    {
      "id": "term-49",
      "term": "記憶體位址",
      "aliases": "Memory address",
      "definition": "行程位址空間中指向內容的位置。",
      "confusion": "不是可直接拿來連網的 IP。",
      "chapter": "reverse"
    },
    {
      "id": "term-50",
      "term": "偏移量",
      "aliases": "Offset",
      "definition": "相對某個基準的位置差。",
      "confusion": "換版本或基準後，原偏移可能無效。",
      "chapter": "reverse"
    },
    {
      "id": "term-51",
      "term": "指標",
      "aliases": "Pointer",
      "definition": "可用來指向資料或函式的值。",
      "confusion": "不是保證永遠有效的固定地址。",
      "chapter": "reverse"
    },
    {
      "id": "term-52",
      "term": "檔案路徑",
      "aliases": "File path",
      "definition": "檔案系統中資源的定位方式。",
      "confusion": "本機路徑不會自動成為朋友可開啟的網址。",
      "chapter": "reverse"
    },
    {
      "id": "term-53",
      "term": "URL",
      "aliases": "Uniform Resource Locator",
      "definition": "包含協定、主機與路徑等資訊的資源定位表示。",
      "confusion": "路徑部分不必直接對應硬碟目錄。",
      "chapter": "network"
    },
    {
      "id": "term-54",
      "term": "反編譯",
      "aliases": "Decompile",
      "definition": "從產物推回較高階的程式表示。",
      "confusion": "通常無法完整還原原始命名、註解與專案。",
      "chapter": "reverse"
    },
    {
      "id": "term-55",
      "term": "反組譯",
      "aliases": "Disassemble",
      "definition": "把機器碼轉為組合語言表示。",
      "confusion": "不是自動理解程式意圖。",
      "chapter": "reverse"
    },
    {
      "id": "term-56",
      "term": "GRF",
      "aliases": "Game Resource File",
      "definition": "RO 常見的遊戲素材封裝格式。",
      "confusion": "託管可下載不等於主機自動懂得抽取素材。",
      "chapter": "assets"
    },
    {
      "id": "term-57",
      "term": "靜態網站",
      "aliases": "Static website",
      "definition": "可由事先準備的 HTML、CSS、JS 等檔案提供的網站。",
      "confusion": "仍可有瀏覽器端互動，不代表只能顯示死文字。",
      "chapter": "hosting"
    },
    {
      "id": "term-58",
      "term": "cPanel",
      "aliases": "Hosting control panel",
      "definition": "管理網站主機服務的控制介面。",
      "confusion": "不是 FTP 協定，也不能只靠名稱判定主機品質。",
      "chapter": "hosting"
    },
    {
      "id": "term-59",
      "term": "FTP／SFTP",
      "aliases": "File transfer",
      "definition": "不同的檔案傳輸方式；SFTP 透過 SSH 提供服務。",
      "confusion": "不是網站空間本體，FTP 與 SFTP 不是同一協定。",
      "chapter": "hosting"
    },
    {
      "id": "term-60",
      "term": "VPS",
      "aliases": "Virtual private server",
      "definition": "由虛擬化提供的伺服器環境。",
      "confusion": "控制權與資源保障依方案，不等於獨享整台實體機。",
      "chapter": "hosting"
    },
    {
      "id": "term-61",
      "term": "Git",
      "aliases": "Version control",
      "definition": "記錄與管理檔案版本的工具。",
      "confusion": "不是 GitHub，也不自動部署網站。",
      "chapter": "repository"
    },
    {
      "id": "term-62",
      "term": "Repo",
      "aliases": "Repository,儲存庫",
      "definition": "保存專案檔案及版本資訊的地方。",
      "confusion": "不是正在執行的服務。",
      "chapter": "repository"
    },
    {
      "id": "term-63",
      "term": "Commit",
      "aliases": "提交",
      "definition": "一次記錄在版本歷史中的變更。",
      "confusion": "已提交不等於已推送或已上線。",
      "chapter": "repository"
    },
    {
      "id": "term-64",
      "term": "PR",
      "aliases": "Pull request",
      "definition": "供審查與合併變更的協作請求。",
      "confusion": "建立 PR 不等於已合併或已發布。",
      "chapter": "repository"
    },
    {
      "id": "term-65",
      "term": "CI／CD",
      "aliases": "Continuous integration,delivery,deployment",
      "definition": "自動驗證與交付／部署流程的概念。",
      "confusion": "工具綠燈不代表所有實際畫面與操作都測過。",
      "chapter": "repository"
    },
    {
      "id": "term-66",
      "term": "認證",
      "aliases": "Authentication",
      "definition": "確認請求者身分。",
      "confusion": "已登入不等於有所有操作權限。",
      "chapter": "security"
    },
    {
      "id": "term-67",
      "term": "授權",
      "aliases": "Authorization",
      "definition": "判斷身分是否可以執行某個操作。",
      "confusion": "不能只靠前端隱藏按鈕。",
      "chapter": "security"
    },
    {
      "id": "term-68",
      "term": "Server 權威",
      "aliases": "Server authoritative",
      "definition": "由伺服器維護並決定可信狀態與結果。",
      "confusion": "只收 Client 成果存 SQL 還不算完整戰鬥權威。",
      "chapter": "security"
    },
    {
      "id": "term-69",
      "term": "備份",
      "aliases": "Backup",
      "definition": "為故障或誤操作準備的可復原資料副本。",
      "confusion": "需要實測還原；同步不等於備份。",
      "chapter": "operations"
    },
    {
      "id": "term-70",
      "term": "日誌",
      "aliases": "Log",
      "definition": "記錄事件與診斷資訊的資料。",
      "confusion": "不能把秘密或不必要個資隨便寫進去。",
      "chapter": "operations"
    },
    {
      "id": "term-71",
      "term": "Rust",
      "aliases": "Programming language",
      "definition": "一種系統程式語言。",
      "confusion": "不是 RustDesk 遠端工具。",
      "chapter": "runtime"
    },
    {
      "id": "term-72",
      "term": "RustDesk",
      "aliases": "Remote desktop",
      "definition": "用來遠端控制其他裝置的軟體。",
      "confusion": "遠端操作不會把被控端程式搬來本機執行。",
      "chapter": "runtime"
    },
    {
      "id": "term-73",
      "term": "HTML",
      "aliases": "HyperText Markup Language",
      "definition": "描述網頁內容與結構的標記語言。",
      "confusion": "不是資料庫，也不是用來處理所有後端規則的語言。",
      "chapter": "roles"
    },
    {
      "id": "term-74",
      "term": "CSS",
      "aliases": "Cascading Style Sheets",
      "definition": "描述網頁外觀、排版與響應式呈現的樣式語言。",
      "confusion": "更換 CSS 通常不會替你修正後端資料規則。",
      "chapter": "roles"
    },
    {
      "id": "term-75",
      "term": "JavaScript",
      "aliases": "JS",
      "definition": "可在瀏覽器或支援的其他執行環境使用的程式語言。",
      "confusion": "不是只能寫前端，也不是 Java 的簡稱。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-76",
      "term": "PHP",
      "aliases": "Server-side scripting",
      "definition": "常用於伺服器端網頁處理的程式語言。",
      "confusion": "上傳 PHP 到純靜態空間不代表它會被執行。",
      "chapter": "hosting"
    },
    {
      "id": "term-77",
      "term": "Node.js",
      "aliases": "JavaScript runtime",
      "definition": "讓 JavaScript 在瀏覽器外執行的環境。",
      "confusion": "不是資料庫，也不代表所有網頁都要常駐 Node 服務。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-78",
      "term": "框架",
      "aliases": "Framework",
      "definition": "提供一組結構與慣例，協助組織應用程式的工具。",
      "confusion": "不是選了新框架就自然得到效能、安全與完整功能。",
      "chapter": "lifecycle"
    },
    {
      "id": "term-79",
      "term": "VA／RVA",
      "aliases": "Virtual address,Relative virtual address",
      "definition": "PE 分析中的虛擬位址與相對映像基底位址。",
      "confusion": "RVA 不可直接當成磁碟檔案 offset；需依區段等資訊對應。",
      "chapter": "reverse"
    },
    {
      "id": "term-80",
      "term": "檔案偏移",
      "aliases": "File offset",
      "definition": "相對檔案起點的位元組位置。",
      "confusion": "不是執行中行程的記憶體位址，也不是原碼行號。",
      "chapter": "reverse"
    },
    {
      "id": "term-81",
      "term": "物件儲存",
      "aliases": "Object storage,R2,S3",
      "definition": "透過物件鍵與介面保存並取得檔案資料的服務類型。",
      "confusion": "不是通用程式執行主機，也不自動解析 GRF。",
      "chapter": "hosting"
    },
    {
      "id": "term-82",
      "term": "受管服務",
      "aliases": "Managed service",
      "definition": "由供應商負責部分基礎設施與維護工作的服務。",
      "confusion": "不等於使用者不必管理資料權限、程式或備份需求。",
      "chapter": "operations"
    },
    {
      "id": "term-83",
      "term": "監聽",
      "aliases": "Listen,binding",
      "definition": "服務在指定介面與 Port 等候連線。",
      "confusion": "監聽成功不等於外部路由和防火牆已允許抵達。",
      "chapter": "network"
    },
    {
      "id": "term-84",
      "term": "TLS",
      "aliases": "Transport Layer Security",
      "definition": "保護通訊機密性與完整性並支援端點驗證的協定。",
      "confusion": "不是應用權限或資料庫輸入驗證。",
      "chapter": "security"
    },
    {
      "id": "term-85",
      "term": "Cloudflare D1",
      "aliases": "D1,Serverless SQL",
      "definition": "採 SQLite SQL 語意、由 Cloudflare 託管的資料庫服務。",
      "confusion": "不是 MariaDB，也不代表你的資料庫一定在自己 CF 帳號；需查實際部署與資源歸屬。",
      "chapter": "database"
    },
    {
      "id": "term-86",
      "term": "即時檔案分享",
      "aliases": "File transfer,臨時傳檔,免空",
      "definition": "把一批檔案透過有期限的連結交付給收件者。",
      "confusion": "與同步硬碟、持久備份或跨雲搬運不同。",
      "chapter": "file-sharing"
    },
    {
      "id": "term-87",
      "term": "端對端加密",
      "aliases": "E2EE,End-to-end encryption",
      "definition": "內容在端點加密，解密金鑰由預期端點掌握；服務商不應持有可解密內容的金鑰。",
      "confusion": "TLS、靜態加密或分享密碼單獨都不足以證明 E2EE。",
      "chapter": "file-sharing"
    },
    {
      "id": "term-88",
      "term": "下載額度與傳送額度",
      "aliases": "Transfer quota,Download limit,流量",
      "definition": "可能分別按位元組、傳送筆數、下載次數或滾動期間計算。",
      "confusion": "單次 5GB 不表示每月無限傳；收件人數也不是下載次數。",
      "chapter": "file-sharing"
    },
    {
      "id": "term-89",
      "term": "P2P 檔案傳送",
      "aliases": "Peer-to-peer,點對點",
      "definition": "裝置之間直接傳檔；依產品可能需要雙方同時在線及中繼協助。",
      "confusion": "產生連結不代表檔案已完整留在服務商，關閉寄件頁可能讓下載中斷。",
      "chapter": "file-sharing"
    },
    {
      "id": "term-90",
      "term": "Transfer.it",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "Transfer.it｜單次大小、檔案數及傳送次數不設上限，免帳號，預設 90 天。目前優惠期下載次數不限；官方比較頁預告全功能免費至 2027-03-01，之後免費每筆 100 次下載，Pro €2.99／月為未來方案展示，不是已核實目前結帳價。採服務端管理金鑰，非 E2EE。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-91",
      "term": "SwissTransfer",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "SwissTransfer｜每次 50GB，免費最多 250 次下載，收送免註冊，可能需驗證寄件信箱。免費選 30 天時，詳細 FAQ 說先保留 15 天，第 12 天寄通知、需在其後 3 天內延長至 30 天；付費 Enterprise 最長 60 天。非 E2EE。部分歐洲外地區不能建立傳送，台灣本次未實測。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-92",
      "term": "WeTransfer",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "WeTransfer｜免費需寄件帳號、收件免帳號；每個滾動 30 天最多 10 次，且總計最多 3GB，先碰到任一限制就停，不是每次 3GB 無限傳。每筆最多保留 3 天。付費升級另看當前方案，別沿用舊版 2GB／7 天說法。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-93",
      "term": "Smash",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "Smash｜免費不設硬性大小上限，免註冊，但超過 2GB 非優先處理、可能排隊。現行方案頁寫免費 7 天，官方另一份 FAQ 寫最多 14 天；以建立連結時顯示為準。免費下載次數上限未核實，不標為無限。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-94",
      "term": "Filemail",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "Filemail｜免費每次 5GB、每 24 小時 2 次、保留 7 天；免費 Basic 方案列每筆 10 次下載，可免註冊。免費傳輸中有加密，但官方說一般靜態檔案不加密；Business 的 E2EE 需雙方使用桌面程式，不能套到免費網頁版。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-95",
      "term": "TransferNow",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "TransferNow｜免費每次 5GB、保留 7 天、免註冊；免費確切下載次數上限未查明。付費 Premium／Team 分別可傳 250GB／500GB、最長 365 天；付費 SSE-C 是伺服器端加密，非 E2EE。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-96",
      "term": "pCloud Transfer",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "pCloud Transfer｜免費每次 5GB、保留 7 天、最多寄給 10 個信箱，收送免註冊但可能要驗證寄件信箱。10 位收件人不是 10 次下載。這是獨立工具，不是 pCloud 網盤容量升級；本次未核實現行 E2EE 保證。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-97",
      "term": "Wormhole",
      "aliases": "即時分享,大檔傳送,File transfer",
      "definition": "Wormhole｜最多 10GB、免帳號、預設 E2EE。5GB 以下可託管 24 小時；超過 5GB 採 P2P，寄件分頁必須持續開啟直到對方下載。免費下載次數上限與可購買的 Pro 方案本次未確認。",
      "confusion": "規則為 2026-11-03 快照；以官方當前方案及建立傳送時提示為準。",
      "chapter": "file-transfer-services"
    },
    {
      "id": "term-98",
      "term": "PDF 原文編輯",
      "aliases": "PDF text editing",
      "definition": "改 PDF 裡已存在的文字或圖片物件，可能受字型與物件布局影響。",
      "confusion": "與新增文字框或註記不同。",
      "chapter": "pdf-basics"
    },
    {
      "id": "term-99",
      "term": "PDF 註記",
      "aliases": "Annotation,螢光標示,便條",
      "definition": "在文件上加入標示、便條、繪圖或說明。",
      "confusion": "不保證改動底層原文字，也不是安全遮蔽。",
      "chapter": "pdf-basics"
    },
    {
      "id": "term-100",
      "term": "OCR",
      "aliases": "光學字元辨識,Optical Character Recognition",
      "definition": "從掃描或圖片辨識文字，支援搜尋、複製或後續編輯。",
      "confusion": "不等於 AI 摘要，且辨識和版面還原都可能出錯。",
      "chapter": "pdf-basics"
    },
    {
      "id": "term-101",
      "term": "Open-core",
      "aliases": "開放核心,開源核心",
      "definition": "核心開放，部分功能、服務或企業能力另外授權的產品模式。",
      "confusion": "不能因 repo 公開就推論整套所有功能免費或適用同一授權。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-102",
      "term": "PDF AI 資料流",
      "aliases": "AI privacy,RAG,embedding,本機模型",
      "definition": "追蹤文件擷取、向量化、語言模型與儲存分別在哪裡執行、由誰接收內容。",
      "confusion": "自架前端或引擎不保證模型和嵌入處理都在本地。",
      "chapter": "pdf-ai-selfhost"
    },
    {
      "id": "term-103",
      "term": "Adobe Acrobat Reader",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "Adobe Acrobat Reader｜免費閱讀、註記與填寫既有表單。改原本文字、合併、建立表單等進階工作屬 Acrobat 付費功能；不是 Reader 免費功能。各地價格與 OCR／進階能力需查當前方案。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-104",
      "term": "Microsoft Edge",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "Microsoft Edge｜內建 PDF 閱讀器可閱讀、手寫、標示、文字便條與基本表單填寫。適合快速閱讀註記，不應把加字或便條當作完整替換原文的編輯器。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-105",
      "term": "PDFgear",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "PDFgear｜目前提供免費桌面 PDF 原文編輯、頁面工具及 OCR 等功能，但屬專有軟體，不是開源專案。官方線上編輯器主要加字、註記與頁面整理，替換既有文字需桌面版。各平台功能不應假設完全一致。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-106",
      "term": "LibreOffice Draw",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "LibreOffice Draw｜免費開源桌面工具，可匯入 PDF 後以文字／圖形物件方式修改再匯出，適合嘗試小幅修改。它不是保證完全保真的 PDF 專業排版器；字型、複雜表格和斷行需逐頁檢查，也不能把掃描圖片直接當成文字物件。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-107",
      "term": "PDFsam Basic",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "PDFsam Basic｜免費開源、本機處理的合併、分割、旋轉、抽頁與混合頁面工具。不是完整原文編輯器，也不要把 PDFsam Enhanced 的付費編輯／OCR 能力算到 Basic；Visual、Enhanced 是不同產品。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-108",
      "term": "Stirling PDF",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "Stirling PDF｜可在瀏覽器、桌面或自架伺服器使用，提供合併、分割、壓縮、轉換、OCR、註記等；現行文件也有 PDF Text Editor 可改既有文字與圖片，但提醒字型和版面可能移位。採 open-core，不是所有企業功能或 AI 處理都無限制免費。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-109",
      "term": "PdfDing",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "PdfDing｜偏向自架 PDF 收藏管理與跨裝置閱讀，支援閱讀進度、標籤及加字／標示／繪圖註記。不是以完整原文排版修改為核心；GitHub 舊倉庫已封存並導向 Codeberg，找維護版本要跟官方新位置。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    },
    {
      "id": "term-110",
      "term": "DocuSeal",
      "aliases": "PDF,編輯,註記,工具",
      "definition": "DocuSeal｜開源電子簽署與表單流程工具，適合建立填寫／簽署欄位、收集簽署及管理流程；有自架及商業服務。不是 Acrobat 式通用原文編輯器，也不是掃描辨識工具；功能與授權範圍依版本。",
      "confusion": "先分原文編輯、註記、頁面管理與 OCR；功能及授權為 2026-11-03 查核快照。",
      "chapter": "pdf-tools"
    }
  ],
  "faq": [
    {
      "question": "Client 放 Sites 跟放機房，會讓遊戲更順嗎？",
      "answer": "同一版本的程式不會只因為換下載位置就改善演算法。託管主要影響載入與素材取得；已載入後的 FPS、網路互動與後端處理須分開量測。",
      "chapter": "performance"
    },
    {
      "question": "Client 放在伺服器上，那不是 Server 嗎？",
      "answer": "檔案儲存地點不是程式角色。網站服務把 Client 檔案送到使用者瀏覽器，Client 可以在使用者裝置執行，然後連另一個遊戲服務。",
      "chapter": "roles"
    },
    {
      "question": "快取之後是不是永遠不用下載？",
      "answer": "不是。快取規則、版本更新、過期、裝置空間或清除都可能造成重新取得；尚未載入的素材仍需要下載。",
      "chapter": "cache"
    },
    {
      "question": "用 Tunnel 還要設定 Port 嗎？",
      "answer": "需要指定來源服務真正監聽的 Port，但不一定需要一般路由器入站轉發。來源程式和通道都要運作，非 HTTP 的用法也不同。",
      "chapter": "tunnel"
    },
    {
      "question": "127.0.0.1 是我電腦嗎？",
      "answer": "是發起連線的那台主機自己。寫在伺服器資料庫設定與寫在玩家瀏覽器 API 設定，指向的可能不是同一台。",
      "chapter": "network"
    },
    {
      "question": "資料都在 SQL，就不會被改 Client 作弊嗎？",
      "answer": "不保證。如果後端接受偽造的勝利、掉落或金錢請求，仍可能寫入錯誤結果。要由後端驗證規則、權限並維護可信狀態。",
      "chapter": "security"
    },
    {
      "question": "JSON 跟 SQL 哪個才是我的 DB？",
      "answer": "JSON 是格式，SQL 是語言；需要看實際程式把資料保存在哪裡。JSON 可以存在檔案，也可以存在關聯式資料庫欄位內。",
      "chapter": "database"
    },
    {
      "question": "網站有互動就一定需要後端嗎？",
      "answer": "不一定。搜尋這份知識庫、篩選與切換頁籤可在瀏覽器完成；跨裝置共同資料、會員權限與可靠交易通常需要服務端設計。",
      "chapter": "hosting"
    },
    {
      "question": "把 GRF 上傳到網站就能給 roBrowser 用嗎？",
      "answer": "不一定。要有版本相容的解析方式與載入流程；可能由瀏覽器讀本機檔，也可能由 Remote Client 服務抽出素材回傳。",
      "chapter": "assets"
    },
    {
      "question": "RustDesk 遠端操作，程式吃哪台電腦資源？",
      "answer": "在被控電腦啟動的程式主要消耗被控端資源；操控端還需接收與解碼畫面。網路出口與紀錄則要依實際代理和連線設定判斷。",
      "chapter": "runtime"
    },
    {
      "question": "反編譯是不是就拿回原作者 src？",
      "answer": "通常不是。可以推得較高階表示，但最佳化、命名、註解和建置資訊可能已遺失，需要分析且未必可重建原專案。",
      "chapter": "reverse"
    },
    {
      "question": "搬機房是不是只改 IP 就好？",
      "answer": "如果整套環境相同可能很接近，但仍需驗證依賴、設定、服務啟動、網路、資料庫與備份。穩定網域可降低客戶端改動，不代表後端設定不用改。",
      "chapter": "operations"
    },
    {
      "question": "有了下載連結，我就能關掉電腦嗎？",
      "answer": "託管式服務通常要等完整上傳完成；P2P 可能仍要保持寄件裝置與分頁在線。Wormhole 超過 5GB 就需要寄件分頁持續開啟。",
      "chapter": "file-sharing"
    },
    {
      "question": "不限檔案大小，是不是也不限下載次數與保存時間？",
      "answer": "不是。容量、總流量、傳送次數、每筆下載次數及保存期限要分開看；也要注意免費促銷到期後的變化。",
      "chapter": "file-transfer-services"
    },
    {
      "question": "傳幾十 GB 素材前，最值得先測什麼？",
      "answer": "先用小包確認所在地可用、上下載速度、資料夾結構、下載完整性、斷線後行為與收件端操作。這份比較沒有做 TB 級實測，不能保證不中斷或最快。",
      "chapter": "file-sharing"
    },
    {
      "question": "PDF 能加文字，為什麼改不了原句？",
      "answer": "加字可能只是新增文字框；修改既有文字需要原文編輯器。掃描頁則可能只有圖片，需先 OCR；即使能編輯，也要檢查字型和排版。",
      "chapter": "pdf-basics"
    },
    {
      "question": "PDFgear 是免費開源嗎？",
      "answer": "免費和開源要分開。PDFgear 目前提供免費工具，但屬專有軟體；官方保留未來對部分進階功能收費的可能。不要從同名第三方 GitHub 倉庫推論官方開源。",
      "chapter": "pdf-tools"
    },
    {
      "question": "Stirling PDF 自架之後，AI 就完全在本機嗎？",
      "answer": "不一定。自架引擎可以連外部模型與嵌入 API；想留在自有網路，要同時選本機語言模型及本機嵌入模型，再檢查其他整合與日誌。",
      "chapter": "pdf-ai-selfhost"
    },
    {
      "question": "要合併 PDF 一定得買 Adobe 嗎？",
      "answer": "不用。PDFsam Basic 是免費開源的本機頁面工具；Stirling 也有相關功能。它們的用途和付費 Acrobat 全套能力不同，先按任務挑選。",
      "chapter": "pdf-tools"
    }
  ],
  "sources": [
    {
      "id": "web",
      "title": "Web 的運作方式",
      "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
      "scope": "前後端、Client 與 Web 基礎"
    },
    {
      "id": "cache",
      "title": "HTTP 快取",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching",
      "scope": "重用、重新驗證與快取不是永久保證"
    },
    {
      "id": "pages",
      "title": "GitHub Pages 官方介紹",
      "url": "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages",
      "scope": "靜態託管與 repository 的關係"
    },
    {
      "id": "rustdesk",
      "title": "RustDesk 自架說明",
      "url": "https://rustdesk.com/docs/en/self-host/",
      "scope": "遠端工具與自架服務"
    },
    {
      "id": "tunnel",
      "title": "Cloudflare Tunnel 支援協定",
      "url": "https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/routing-to-tunnel/protocols/",
      "scope": "HTTP 與非 HTTP 存取方式不同"
    },
    {
      "id": "robrowser",
      "title": "roBrowser 官方入門",
      "url": "https://www.robrowser.com/getting-started",
      "scope": "本機遊戲檔與 Remote Client 素材服務"
    },
    {
      "id": "rust",
      "title": "Rust 官方書籍",
      "url": "https://doc.rust-lang.org/book/",
      "scope": "Rust 語言與編譯概念"
    },
    {
      "id": "ra",
      "title": "rAthena 原始碼",
      "url": "https://github.com/rathena/rathena",
      "scope": "開源 RO Server 的實作參考；依版本閱讀"
    },
    {
      "id": "auth",
      "title": "OWASP Authorization Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html",
      "scope": "後端授權與最小權限"
    },
    {
      "id": "sql",
      "title": "MariaDB 官方文件",
      "url": "https://mariadb.com/docs/server",
      "scope": "資料庫引擎與交易參考"
    },
    {
      "id": "pe",
      "title": "Microsoft PE 格式",
      "url": "https://learn.microsoft.com/en-us/windows/win32/debug/pe-format",
      "scope": "VA、RVA 與檔案 offset"
    },
    {
      "id": "tcp",
      "title": "RFC 9293：TCP",
      "url": "https://www.rfc-editor.org/rfc/rfc9293.html",
      "scope": "位元組串流與應用訊息分界"
    },
    {
      "id": "cpanel",
      "title": "cPanel 管理介面",
      "url": "https://docs.cpanel.net/cpanel/the-cpanel-interface/the-cpanel-interface/",
      "scope": "面板與實際主機服務的區別"
    },
    {
      "id": "workers",
      "title": "Cloudflare Workers",
      "url": "https://developers.cloudflare.com/workers/",
      "scope": "受管應用執行環境"
    },
    {
      "id": "rds",
      "title": "Amazon RDS 文件",
      "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/",
      "scope": "受管關聯式資料庫服務"
    },
    {
      "id": "r2",
      "title": "Cloudflare R2 文件",
      "url": "https://developers.cloudflare.com/r2/",
      "scope": "物件儲存與執行環境的區別"
    },
    {
      "id": "d1",
      "title": "Cloudflare D1 官方概覽",
      "url": "https://developers.cloudflare.com/d1/",
      "scope": "受管資料庫、SQLite SQL 語意與存取方式"
    },
    {
      "title": "Transfer.it FAQ",
      "url": "https://transfer.it/faq",
      "scope": "本次查核 2026-11-03：檔案大小、免帳號、90 天預設期限與服務定位。"
    },
    {
      "title": "Transfer.it 方案比較",
      "url": "https://transfer.it/compare",
      "scope": "本次查核 2026-11-03：目前優惠與 2027-03-01 後方案預告；只採其自身資料。"
    },
    {
      "title": "Transfer.it 隱私與保留政策",
      "url": "https://transfer.it/privacy",
      "scope": "本次查核 2026-11-03：訂閱結束後保留與大量無期限儲存公平使用。"
    },
    {
      "title": "Transfer.it 條款",
      "url": "https://transfer.it/terms",
      "scope": "本次查核 2026-11-03：管理式加密金鑰與服務條款。"
    },
    {
      "title": "SwissTransfer 詳細限制 FAQ",
      "url": "https://www.infomaniak.com/en/support/faq/2929/understanding-swisstransfer-data-limits",
      "scope": "本次查核 2026-11-03：50GB、30 天延長程序、250 次下載；FAQ 更新 2026-10-22。"
    },
    {
      "title": "SwissTransfer 官方介紹",
      "url": "https://www.swisstransfer.com/en",
      "scope": "本次查核 2026-11-03：地區限制、傳輸與靜態加密，明確非 E2EE。"
    },
    {
      "title": "WeTransfer 免費方案",
      "url": "https://wetransfer.com/resources/free-file-transfer/wetransfer-free-plan",
      "scope": "本次查核 2026-11-03：滾動 30 天 10 次及合計 3GB、帳號要求。"
    },
    {
      "title": "WeTransfer 保存期限",
      "url": "https://wetransfer.com/help-center/how-to/transfer-availability",
      "scope": "本次查核 2026-11-03：免費與付費連結期限。"
    },
    {
      "title": "Smash 方案比較",
      "url": "https://fromsmash.com/pricing",
      "scope": "本次查核 2026-11-03：免費保存期限以本頁 7 天保守列示。"
    },
    {
      "title": "Smash 大小限制",
      "url": "https://fromsmash.com/article/112-file-size-limit",
      "scope": "本次查核 2026-11-03：超過 2GB 非優先處理。"
    },
    {
      "title": "Smash 保存期限 FAQ",
      "url": "https://fromsmash.com/help/articles/12952074-how-can-i-change-the-availability-period-of-my-transfer",
      "scope": "本次查核 2026-11-03：與方案頁期限存在差異；以建立時顯示為準。"
    },
    {
      "title": "Filemail 免費服務限制",
      "url": "https://support.filemail.com/en/articles/4103694-free-file-sharing-service",
      "scope": "本次查核 2026-11-03：5GB、每 24 小時 2 次、7 天與免註冊。"
    },
    {
      "title": "Filemail 免費 Basic",
      "url": "https://www1.filemail.com/plans/basic",
      "scope": "本次查核 2026-11-03：免費每筆 10 次下載。"
    },
    {
      "title": "Filemail 加密說明",
      "url": "https://support.filemail.com/en/articles/9844738-is-data-encrypted-in-transit-and-at-rest",
      "scope": "本次查核 2026-11-03：區分傳輸與靜態資料加密。"
    },
    {
      "title": "Filemail E2EE 要求",
      "url": "https://support.filemail.com/en/articles/10313859-end-to-end-encryption-with-filemail",
      "scope": "本次查核 2026-11-03：Business 方案與桌面程式要求。"
    },
    {
      "title": "TransferNow 方案",
      "url": "https://www.transfernow.net/en/prices",
      "scope": "本次查核 2026-11-03：免費及付費容量與保存期限。"
    },
    {
      "title": "TransferNow 加密",
      "url": "https://www.transfernow.net/en/explore/security",
      "scope": "本次查核 2026-11-03：TLS、靜態 AES-256 與付費 SSE-C。"
    },
    {
      "title": "pCloud Transfer 官方介紹",
      "url": "https://blog.pcloud.com/pcloud-transfer-send-large-files-for-free/",
      "scope": "本次查核 2026-11-03：獨立傳檔工具的免費容量、期限、收件人數。"
    },
    {
      "title": "Wormhole FAQ",
      "url": "https://wormhole.app/faq",
      "scope": "本次查核 2026-11-03：5GB 託管與更大檔案 P2P、24 小時與待推出 Pro。"
    },
    {
      "title": "Wormhole 主頁",
      "url": "https://wormhole.app/",
      "scope": "本次查核 2026-11-03：目前公開宣傳上限 10GB。"
    },
    {
      "title": "Wormhole 安全設計",
      "url": "https://wormhole.app/security",
      "scope": "本次查核 2026-11-03：端對端加密與金鑰處理。"
    },
    {
      "title": "Adobe Reader 與進階編輯",
      "url": "https://helpx.adobe.com/reader/desktop/open-edit-or-delete-pdfs.html",
      "scope": "PDF 知識查核 2026-11-03：區分免費 Reader 與 Acrobat 進階編輯。"
    },
    {
      "title": "Microsoft Edge PDF 閱讀器",
      "url": "https://learn.microsoft.com/en-us/deployedge/microsoft-edge-pdf",
      "scope": "PDF 知識查核 2026-11-03：閱讀、註記與基本表單，不等同完整原文編輯。"
    },
    {
      "title": "PDFgear 線上編輯器",
      "url": "https://www.pdfgear.com/edit-pdf/",
      "scope": "PDF 知識查核 2026-11-03：線上加字與桌面替換既有文字的差別。"
    },
    {
      "title": "PDFgear 費用說明",
      "url": "https://www.pdfgear.com/insights/is-pdfgear-free.htm",
      "scope": "PDF 知識查核 2026-11-03：現行免費與未來進階收費可能、部分進階雲端轉檔。"
    },
    {
      "title": "PDFgear 軟體條款",
      "url": "https://www.pdfgear.com/terms-conditions/",
      "scope": "PDF 知識查核 2026-11-03：專有軟體授權，不以免費推論開源。"
    },
    {
      "title": "PDFgear 隱私政策",
      "url": "https://www.pdfgear.com/privacy/",
      "scope": "PDF 知識查核 2026-11-03：AI 同意、Azure OpenAI 接收資料類型。"
    },
    {
      "title": "LibreOffice 官方網站",
      "url": "https://www.libreoffice.org/",
      "scope": "PDF 知識查核 2026-11-03：免費開源套件與 Draw。"
    },
    {
      "title": "LibreOffice Draw 官方指南",
      "url": "https://books.libreoffice.org/en/DG262/DG26201-IntroducingDraw.html",
      "scope": "PDF 知識查核 2026-11-03：Draw 的物件式圖形編輯與用途。"
    },
    {
      "title": "PDFsam Basic 官方功能",
      "url": "https://pdfsam.org/pdfsam-basic/",
      "scope": "PDF 知識查核 2026-11-03：本機開源頁面整理工具。"
    },
    {
      "title": "PDFsam 各產品區別",
      "url": "https://pdfsam.org/",
      "scope": "PDF 知識查核 2026-11-03：Basic、Visual 與 Enhanced 不同功能／授權。"
    },
    {
      "title": "Stirling PDF 官方倉庫",
      "url": "https://github.com/Stirling-Tools/Stirling-PDF",
      "scope": "PDF 知識查核 2026-11-03：open-core、工具與部署模式。"
    },
    {
      "title": "Stirling PDF 原文編輯",
      "url": "https://docs.stirlingpdf.com/Tools/Guides/Content-Editing/",
      "scope": "PDF 知識查核 2026-11-03：現行文字／圖片編輯及字型排版限制。"
    },
    {
      "title": "Stirling 自架方案與授權",
      "url": "https://docs.stirlingpdf.com/Server/Licensing/Plans-and-Licences/",
      "scope": "PDF 知識查核 2026-11-03：Free 5 人、付費功能與處理額度。"
    },
    {
      "title": "Stirling 自架 AI 選項",
      "url": "https://docs.stirlingpdf.com/Server/AI/",
      "scope": "PDF 知識查核 2026-11-03：預設關閉、自備引擎與 Cloud AI。"
    },
    {
      "title": "Stirling AI 模型供應商",
      "url": "https://docs.stirlingpdf.com/Server/AI/Model-Providers/",
      "scope": "PDF 知識查核 2026-11-03：語言模型與嵌入模型可用不同供應商。"
    },
    {
      "title": "Stirling AI 安全與資料流",
      "url": "https://docs.stirlingpdf.com/Server/AI/AI-Security/",
      "scope": "PDF 知識查核 2026-11-03：文件、提示詞、向量化文字、引擎保護。"
    },
    {
      "title": "PdfDing 舊倉庫及官方搬遷公告",
      "url": "https://github.com/mrmn2/PdfDing",
      "scope": "PDF 知識查核 2026-11-03：PDF 管理閱讀、註記與 Codeberg 新位置。"
    },
    {
      "title": "PdfDing 現行原始碼入口",
      "url": "https://codeberg.org/mrmn/PdfDing",
      "scope": "PDF 知識查核 2026-11-03：由官方舊倉庫指向的維護位置。"
    },
    {
      "title": "DocuSeal 官方倉庫",
      "url": "https://github.com/docusealco/docuseal",
      "scope": "PDF 知識查核 2026-11-03：開源電子簽署與表單流程定位。"
    }
  ]
};
