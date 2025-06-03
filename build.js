const fs = require("fs");
const path = require("path");
const fse = require("fs-extra");
const htmlMinifier = require("html-minifier-terser");
const cleanCSS = require("clean-css");
const { minify } = require("uglify-js");

// Пути
const rootDir = __dirname;
const srcDir = path.join(rootDir, "src");
const distDir = path.join(rootDir, "dist");

// Очистка папки dist
fse.emptyDirSync(distDir);

// Функция для минификации HTML
async function minifyHtml(filePath, destPath) {
  try {
    const html = await fs.promises.readFile(filePath, "utf8");
    const minified = await htmlMinifier.minify(html, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      keepClosingSlash: true,
    });
    await fse.ensureDir(path.dirname(destPath));
    await fs.promises.writeFile(destPath, minified);
  } catch (err) {
    console.error(`Error minifying HTML ${filePath}:`, err);
  }
}

// Функция для минификации CSS с сохранением импортов
async function minifyCssWithImports(filePath, destPath) {
  try {
    let css = await fs.promises.readFile(filePath, "utf8");

    // Выделяем импорты
    const importRegex = /@import\s+(['"])(.*?)\1[^;]*;/g;
    const imports = [];
    let match;

    while ((match = importRegex.exec(css)) !== null) {
      imports.push(match[0]);
    }

    // Удаляем импорты из CSS для минификации
    const cssWithoutImports = css.replace(importRegex, "");

    // Минифицируем CSS без импортов
    const minifiedCss = new cleanCSS({
      level: {
        1: { specialComments: "none" },
        2: { mergeMedia: true },
      },
      rebase: false,
    }).minify(cssWithoutImports).styles;

    // Собираем финальный CSS: импорты + минифицированный код
    const finalCss = imports.join("\n") + "\n" + minifiedCss;

    await fse.ensureDir(path.dirname(destPath));
    await fs.promises.writeFile(destPath, finalCss);
  } catch (err) {
    console.error(`Error minifying CSS with imports ${filePath}:`, err);
  }
}

// Функция для обычной минификации CSS
async function minifyCss(filePath, destPath) {
  try {
    const css = await fs.promises.readFile(filePath, "utf8");
    const minified = new cleanCSS({
      level: {
        1: { specialComments: "none" },
        2: { mergeMedia: true },
      },
      rebase: false,
    }).minify(css).styles;

    await fse.ensureDir(path.dirname(destPath));
    await fs.promises.writeFile(destPath, minified);
  } catch (err) {
    console.error(`Error minifying CSS ${filePath}:`, err);
  }
}

// Функция для минификации JS (включая server.js)
async function minifyJs(filePath, destPath) {
  try {
    const js = await fs.promises.readFile(filePath, "utf8");
    const minified = minify(js, {
      output: {
        comments: false,
      },
    }).code;
    await fse.ensureDir(path.dirname(destPath));
    await fs.promises.writeFile(destPath, minified);
  } catch (err) {
    console.error(`Error minifying JS ${filePath}:`, err);
  }
}

// Функция для копирования файлов без минификации
async function copyFile(filePath, destPath) {
  try {
    await fse.ensureDir(path.dirname(destPath));
    await fse.copy(filePath, destPath);
  } catch (err) {
    console.error(`Error copying file ${filePath}:`, err);
  }
}

// Обработка файла или папки
async function processPath(srcPath) {
  const relativePath = path.relative(rootDir, srcPath);
  const destPath = path.join(distDir, relativePath);

  try {
    const stat = await fs.promises.stat(srcPath);

    if (stat.isDirectory()) {
      const files = await fs.promises.readdir(srcPath, { withFileTypes: true });
      for (const file of files) {
        await processPath(path.join(srcPath, file.name));
      }
    } else {
      const ext = path.extname(srcPath).toLowerCase();
      const filename = path.basename(srcPath);

      if (ext === ".html") {
        await minifyHtml(srcPath, destPath);
      } else if (ext === ".css") {
        if (filename === "main.css") {
          await minifyCssWithImports(srcPath, destPath);
        } else {
          await minifyCss(srcPath, destPath);
        }
      } else if (ext === ".js") {
        await minifyJs(srcPath, destPath); // Теперь минифицирует и server.js
      } else {
        await copyFile(srcPath, destPath);
      }
    }
  } catch (err) {
    console.error(`Error processing ${srcPath}:`, err);
  }
}

// Запуск сборки
(async () => {
  try {
    console.log("Starting build process...");

    // Обрабатываем основные папки
    await processPath(srcDir);

    // Обрабатываем файлы из корня
    const rootFiles = [
      "index.html",
      "yandex_ee4b3c3cc884db38.html",
      ".htaccess",
    ]; // Добавлен .htaccess
    for (const file of rootFiles) {
      const filePath = path.join(rootDir, file);
      if (fs.existsSync(filePath)) {
        await processPath(filePath);
      }
    }

    console.log("Build completed successfully!");
  } catch (err) {
    console.error("Build failed:", err);
    process.exit(1);
  }
})();
