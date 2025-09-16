# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    ## React 專案（Vite + TypeScript）

    這是一個使用 Vite 建立的 React + TypeScript 起始專案，已包含 ESLint 與基本開發設定。

    ### 需要的環境
    - Node.js 18+（推薦 LTS）
    - npm 9+

    ### 常用指令
    - 開發啟動（含 HMR）
      - `npm run dev`
    - 產生正式版建置
      - `npm run build`
    - 本機預覽建置結果
      - `npm run preview`

    ### 專案結構（重點）
    - `src/`：主要程式碼（`main.tsx`、`App.tsx`）
    - `public/`：靜態資源
    - `vite.config.ts`：Vite 設定檔

    ### 疑難排解
    - 若無法啟動或建置失敗：
      1. 刪除 `node_modules` 與 `package-lock.json` 後重新安裝依賴
      2. 確認 Node 版本符合需求（建議使用 LTS）
      3. 執行 `npm run build` 查看錯誤訊息

    ### 授權
    MIT

