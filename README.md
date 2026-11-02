# R.C.Taipei North Gate

這是使用 HTML、CSS、JavaScript 製作的 GitHub Pages 靜態網站初版。

## 檔案
- `index.html`：網站內容與結構
- `style.css`：版面與視覺樣式
- `script.js`：選單、圖片預覽、文章草稿互動

## 在 GitHub Pages 發布
1. 將這三個檔案上傳到 Repository 根目錄。
2. 開啟 Repository 的 Settings → Pages。
3. 在 Build and deployment 選擇 `Deploy from a branch`。
4. Branch 選 `main`，資料夾選 `/ (root)`，按 Save。
5. 等待部署完成，網址通常為 `https://你的帳號.github.io/Repository名稱/`。

## 重要：圖片上傳限制
目前樹牌與活動照片的上傳功能是「本機預覽」，圖片不會存進 GitHub，也不會自動讓其他訪客看見。若要正式公開圖片，請把圖片檔案放入 Repository（例如 `images/`），再更新 HTML；若要讓網站訪客直接上傳並永久保存，需要另外串接後端或雲端儲存服務。

## 修改網站
可直接在 GitHub 網頁版點選檔案後按鉛筆圖示修改，完成後 Commit changes，GitHub Pages 會重新部署。
