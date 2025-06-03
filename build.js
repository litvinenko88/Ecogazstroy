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

// Импорты, которые нужно сохранить во всех CSS файлах
const PRESERVED_IMPORTS = [
  '@import "/src/assets/css/normalize.css";',
  '@import "/src/assets/css/reset.css";',
  '@import "/src/assets/fonts/stylesheet.css";',
];

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

// Функция для минификации CSS с сохранением нужных импортов
async function minifyCssWithPreservedImports(filePath, destPath) {
  try {
    let css = await fs.promises.readFile(filePath, "utf8");

    // Выделяем все импорты
    const importRegex = /@import\s+(['"])(.*?)\1[^;]*;/g;
    const allImports = [];
    let match;

    while ((match = importRegex.exec(css)) !== null) {
      allImports.push(match[0]);
    }

    // Удаляем все импорты из CSS для минификации
    let cssWithoutImports = css.replace(importRegex, "");

    // Минифицируем CSS без импортов
    const minifiedCss = new cleanCSS({
      level: {
        1: { specialComments: "none" },
        2: { mergeMedia: true },
      },
      rebase: false,
    }).minify(cssWithoutImports).styles;

    // Фильтруем импорты, оставляя только те, которые нужно сохранить
    const preservedImports = allImports.filter((imp) =>
      PRESERVED_IMPORTS.some((preserved) =>
        imp.includes(preserved.split('"')[1])
      )
    );

    // Добавляем все сохраненные импорты (если их еще нет)
    PRESERVED_IMPORTS.forEach((preserved) => {
      if (!preservedImports.includes(preserved)) {
        preservedImports.push(preserved);
      }
    });

    // Собираем финальный CSS: сохраненные импорты + минифицированный код
    const finalCss = preservedImports.join("\n") + "\n" + minifiedCss;

    await fse.ensureDir(path.dirname(destPath));
    await fs.promises.writeFile(destPath, finalCss);
  } catch (err) {
    console.error(
      `Error minifying CSS with preserved imports ${filePath}:`,
      err
    );
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
        // Теперь применяем сохранение импортов для всех CSS файлов
        await minifyCssWithPreservedImports(srcPath, destPath);
      } else if (ext === ".js") {
        await minifyJs(srcPath, destPath);
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
    ];
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
