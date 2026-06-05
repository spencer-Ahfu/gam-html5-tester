# 部署到 Vercel

## 前置條件

- [GitHub](https://github.com) 帳號
- [Vercel](https://vercel.com) 帳號（可直接用 GitHub 登入）

---

## 步驟一：推送程式碼到 GitHub

```bash
git init
git add .
git commit -m "init: gam html5 tester"
```

在 GitHub 建立一個新的空白 repository（不要勾選 Initialize with README），複製 remote URL 後執行：

```bash
git remote add origin https://github.com/<your-username>/gam-html5-tester.git
git push -u origin main
```

---

## 步驟二：在 Vercel 匯入專案

1. 前往 [vercel.com/new](https://vercel.com/new)
2. 選擇 **Import Git Repository**，授權 GitHub 並找到 `gam-html5-tester`
3. 點擊 **Import**

---

## 步驟三：確認部署設定

Vercel 會自動偵測 Next.js，設定如下：

| 項目 | 值 |
|------|----|
| Framework Preset | Next.js |
| Build Command | `pnpm build` |
| Output Directory | `.next` |
| Install Command | `pnpm install` |

無需額外修改，直接點擊 **Deploy**。

---

## 步驟四：取得公開 URL

部署完成後，Vercel 會提供一個公開網址，格式為：

```
https://gam-html5-tester.vercel.app
```

之後每次 push 到 `main` branch 都會自動觸發重新部署。

---

## 步驟五：（選用）綁定自訂 domain

1. 進入 Vercel 專案 → **Settings** → **Domains**
2. 輸入你的 domain 並依指示設定 DNS（CNAME 或 A record）

---

## 更新廣告設定

`app/page.tsx` 中的 `AD_UNIT_PATH` 需填入你在 GAM 建立的 Ad Unit：

```ts
const AD_UNIT_PATH = "/your-network-code/your-ad-unit";
```

修改後 commit 並 push，Vercel 會自動重新部署。
