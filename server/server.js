const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5500;

// Настройка статических файлов
app.use(express.static(path.join(__dirname, "..")));
app.use("/src", express.static(path.join(__dirname, "../src")));

// Жёсткие роуты для каждой страницы
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/novosti/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/pages/novosti/novosti.html"));
});

app.get("/politika-konfidentsialnosti/", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../src/pages/politika-konfidentsialnosti/politika-konfidentsialnosti.html"
    )
  );
});

app.get("/proyektirovaniye/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../src/pages/proyektirovaniye/proyektirovaniye.html")
  );
});

// Для статей новостей
app.get("/novosti/gazifikaciya/:article/", (req, res) => {
  const article = req.params.article;
  const filePath = path.join(
    __dirname,
    `../src/pages/novosti/novostnyye-stranitsy/gazifikaciya/${article}.html`
  );

  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).send("Статья не найдена");
  }
});

// Обработка 404
app.use((req, res) => {
  res.status(404).send("Страница не найдена");
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log("Доступные ЧПУ-адреса:");
  console.log("- /");
  console.log("- /novosti/");
  console.log("- /politika-konfidentsialnosti/");
  console.log("- /proyektirovaniye/");
  console.log("- /novosti/gazifikaciya/[название-статьи]/");
});
