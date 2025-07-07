
# 🚀 Reto Técnico QA FrontEnd - SauceDemo

Este proyecto automatiza pruebas **end-to-end** sobre el sitio [SauceDemo](https://www.saucedemo.com) utilizando **Playwright**, **Cucumber** y el patrón **Page Object Model (POM)** en **TypeScript**.

---

![CI](https://github.com/PaulSuyCa/retoTecnicoQa-FrontEnd-Pacifico/actions/workflows/Playwright.yml/badge.svg)

---

## 📦 Requisitos

- **Node.js** v18 o superior  
- **npm** (v9 o superior recomendado)

---

## 🛠️ Instalación y configuración

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/PaulSuyCa/retoTecnicoQa-FrontEnd-Pacifico.git
   cd retoTecnicoQa-FrontEnd-Pacifico
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Descarga los navegadores requeridos por Playwright:**
   ```bash
   npx playwright install
   ```

---

## 🧪 Ejecución de pruebas

### **Ejecución por defecto en Chromium:**
```bash
npm test
```

### **Ejecución en otros navegadores:**
```bash
npm run test:chromium   # Solo Chromium
npm run test:firefox    # Solo Firefox
npm run test:webkit     # Solo WebKit
```

### **Ejecución solo por tag:**
```bash
npm run test:chromium:tag --tags "@SauceDemo"
npm run test:firefox:tag --tags "@SauceDemo"
npm run test:webkit:tag --tags "@SauceDemo"
```

> Cambia `@SauceDemo` por el tag que necesites (`@login`, etc).

---

### **Ejecución en todos los navegadores: @SauceDemo**
```bash
npm run test:allRemote     # Corre en los tres browsers, uno tras otro
npm run test:allLocal     # Corre en los tres browsers, uno tras otro
```

## 📊 Generar reporte HTML

1. **Corre los tests** (esto genera el reporte JSON en `/reports`).
2. **Genera el reporte HTML:**
   ```bash
   npm run report
   ```
3. Abre el archivo `reports/html/index.html` en tu navegador.

---

## ⚙️ CI/CD - GitHub Actions

El proyecto incluye un workflow en `.github/workflows/Playwright.yml` que ejecuta pruebas automáticamente:
- En cada Pull Request a `main`
- O manualmente desde la pestaña **Actions** en GitHub

Los artefactos generados (reportes y evidencias) están disponibles al finalizar la ejecución.

---

## 🏗️ Estructura del proyecto

```
retoTecnicoQa-FrontEnd-Pacifico/
│
├── src/
│   ├── features/               # Escenarios de prueba (.feature)
│   ├── step-definitions/       # Definiciones de pasos (.ts)
│   ├── pages/                  # Page Objects
│   ├── support/                # World, hooks, etc.
│   └── scripts/                # Scripts de limpieza y generación de reporte
│
├── .github/workflows/          # Configuración de CI/CD
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📋 Estrategia de Automatización

- **Playwright:** Automatiza la interacción real con el navegador.
- **Cucumber:** Permite definir escenarios en Gherkin, facilitando comunicación con negocio y QA manual.
- **Page Object Model (POM):** Cada página se modela como una clase, facilitando la mantenibilidad.
- **Escenarios cubiertos:** Login válido, inválido, agregar productos, ver carrito y completar compra.

---

## 📝 Tips de uso

- Puedes agregar nuevos escenarios editando los archivos `.feature` dentro de `/src/features/`.
- Para nuevos flujos, agrega nuevos Page Objects en `/src/pages/`.
- Los steps (`.steps.ts`) son reusables y parametrizables.

---

## 👨‍💻 Autor

Desarrollado por [PaulSuyCa](https://github.com/PaulSuyCa).  
¿Dudas o sugerencias? ¡Abre un issue o pull request!
