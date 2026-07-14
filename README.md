# Yi-Pang Lo Portfolio

羅翊邦（Yi-Pang Lo, PhD, RN）的個人學術網站，聚焦航空護理、空中傷患後送、航空全期護理、輪班護理人員、多重慢性病、智慧穿戴，以及身體活動與睡眠品質監測。

## Website

- GitHub Pages: https://inpangpang.github.io/yipang-lo-portfolio/
- ChatGPT Sites: https://yipang-lo-flight-nursing.winfly1017.chatgpt.site

## Structure

- `app/`: React / vinext source used by ChatGPT Sites
- `docs/`: static GitHub Pages build
- `scripts/export-static.mjs`: rebuilds the static page after `npm run build`
- `.github/workflows/pages.yml`: GitHub Pages deployment workflow

## Local development

```bash
npm install
npm run dev
```

## Rebuild GitHub Pages

```bash
npm run build
node scripts/export-static.mjs
```
