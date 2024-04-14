# CSS2Color
 The css2Color is a tool that simplifies the creation of visual effects on HTML elements such as images, text or icons. You only need to specify two colors: one target colo (the color you want to highlight or modify) and one based color (as a reference point). The tool automatically generates the CSS code needed to apply the desired filter, you to easily customize the look of your website.
## Project Structure

```text

├── public/
├── src/
│   └── components/
│   └── pages/
│   └── constants/
│   └── layouts/
│   └── scripts/
│           └── TargetColor.ts
│   └── styles/
│           └── global.css
│
└── package.json
```
## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build production site to `./dist/`          |
| `npm run preview`         | Preview build locally, before deploying     |
