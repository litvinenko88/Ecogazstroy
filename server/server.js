const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 5500;

// =============================================
// 1. HTTPS и WWW редиректы (middleware)
// =============================================
app.use((req, res, next) => {
  // Проверка на HTTPS (если сайт уже на продакшене)
  if (
    req.headers["x-forwarded-proto"] &&
    req.headers["x-forwarded-proto"] !== "https" &&
    process.env.NODE_ENV === "production"
  ) {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }

  // Редирект www → без www (или наоборот)
  if (req.headers.host.startsWith("www.")) {
    return res.redirect(
      301,
      `https://${req.headers.host.replace("www.", "")}${req.url}`
    );
  }

  // Редирект URL со слешем на без слеша (или наоборот)
  if (req.url.endsWith("/") && req.url !== "/") {
    return res.redirect(301, req.url.slice(0, -1));
  }

  next();
});

// =============================================
// 2. Статические файлы
// =============================================
app.use(express.static(path.join(__dirname, "..")));
app.use("/src", express.static(path.join(__dirname, "../src")));

// =============================================
// 3. Жёсткие роуты для страниц (ЧПУ)
// =============================================
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/novosti", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/pages/novosti/novosti.html"));
});

app.get("/politika-konfidentsialnosti", (req, res) => {
  res.sendFile(
    path.join(
      __dirname,
      "../src/pages/politika-konfidentsialnosti/politika-konfidentsialnosti.html"
    )
  );
});

app.get("/proyektirovaniye", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../src/pages/proyektirovaniye/proyektirovaniye.html")
  );
});

// =============================================
// 4. Динамические URL (новости)
// =============================================
app.get("/novosti/gazifikaciya/:article", (req, res) => {
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

// =============================================
// 5. Редиректы старых URL (если нужно)
// =============================================
const oldToNewUrls = {
  "/old-news": "/novosti",
  "/projects": "/proyektirovaniye",
  // Добавьте другие редиректы при необходимости
};

app.get("*", (req, res, next) => {
  const requestedUrl = req.path;
  if (oldToNewUrls[requestedUrl]) {
    return res.redirect(301, oldToNewUrls[requestedUrl]);
  }
  next();
});

// =============================================
// 6. Обработка 404 (кастомная страница)
// =============================================
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../src/pages/404.html"));
});

// =============================================
// Запуск сервера
// =============================================
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
  console.log("Доступные ЧПУ-адреса:");
  console.log("- /");
  console.log("- /novosti");
  console.log("- /politika-konfidentsialnosti");
  console.log("- /proyektirovaniye");
  console.log("- /novosti/gazifikaciya/:article");
});
