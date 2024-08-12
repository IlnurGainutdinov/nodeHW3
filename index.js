const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  const pathFileHome = path.join(__dirname, "countHomeJson.json");

  const countHomeDataJson = fs.readFileSync(pathFileHome, "utf-8");
  const countHomeData = JSON.parse(countHomeDataJson);
  countHomeData.count++;
  fs.writeFileSync(pathFileHome, JSON.stringify(countHomeData));
  res.send(`<h1>Главная</h1><p>Просмотров: ${countHomeData.count}</p><a href="/about">Ссылка на страницу about</a>`);
});

app.get("/about", (req, res) => {
  const pathFileAbout = path.join(__dirname, "countAboutJson.json");

  const countAboutDataJson = fs.readFileSync(pathFileAbout, "utf-8");
  const countAboutData = JSON.parse(countAboutDataJson);
  countAboutData.count++;
  fs.writeFileSync(pathFileAbout, JSON.stringify(countAboutData));
  res.send(`<h1>About</h1><p>Просмотров: ${countAboutData.count}</p><a href="/">Ссылка на главную</a>`);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
