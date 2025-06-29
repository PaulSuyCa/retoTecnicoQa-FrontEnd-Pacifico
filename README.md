# 🚀 Reto Técnico QA FrontEnd - SauceDemo

Este proyecto automatiza pruebas **end-to-end** sobre el sitio [SauceDemo](https://www.saucedemo.com) utilizando **Playwright**, **Cucumber** y el patrón **Page Object Model (POM)** en **TypeScript**.

---

## 📦 Requisitos

- **Node.js** v18 o superior  
- **npm** (v9 o superior recomendado)

---

## 🛠️ Instalación y configuración

1. **Clona el repositorio**
   git clone https://github.com/PaulSuyCa/retoTecnicoQa-FrontEnd-Pacifico.git
   cd retoTecnicoQa-FrontEnd-Pacifico

2. **Instala las dependencias**
   npm install

3. **Descarga los navegadores requeridos por Playwright**
   npx playwright install

---

## 🧪 Ejecución de pruebas

Ejecuta todos los tests definidos en los archivos `.feature`:
   npm test
Los resultados se muestran por consola y se genera un reporte JSON en la carpeta `/reports`.

---

## 📊 Generar reporte HTML

Si tienes configurado un generador de reportes (ej: `multiple-cucumber-html-reporter`):

1. **Corre los tests** (genera el JSON):
   npm test

2. **Genera el reporte HTML:**
   npm run report
   Luego abre `reports/html/index.html` en tu navegador.

---

## ⚙️ CI/CD - GitHub Actions

Este proyecto incluye un workflow en `.github/workflows/Playwright.yml` que ejecuta las pruebas automáticamente:
- En cada Pull Request a `main`
- O manualmente desde la pestaña Actions en GitHub

Los artefactos generados (reporte y evidencias) estarán disponibles al finalizar la ejecución.

---

## 🗂️ Estructura del proyecto

```
retoTecnicoQa-FrontEnd-Pacifico/
│
├── src/
│   ├── features/
│   │    ├── login.feature
│   │    ├── carrito.feature
│   │    └── checkout.feature
│   ├── step-definitions/
│   │    ├── login.steps.ts
│   │    ├── carrito.steps.ts
│   │    └── checkout.steps.ts
│   ├── support/
│   │    └── world.ts
│   └── pages/
│        ├── LoginPage.ts
│        ├── InventoryPage.ts
│        ├── CartPage.ts
│        └── CheckoutPage.ts
│
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

---

## 📋 Estrategia de Automatización

- **Playwright** interactúa con el navegador real para simular usuarios finales.
- **Cucumber** permite definir escenarios en lenguaje natural Gherkin, facilitando la colaboración con negocio y QA manual.
- **POM (Page Object Model):** Cada página se modela como una clase independiente para máxima reutilización y mantenibilidad.
- **Los escenarios cubren:** login válido, login inválido, agregar productos, ver carrito, y compra completa con distintos tipos de usuario.

---

## 👨‍💻 Autor

Desarrollado por [PaulSuyCa](https://github.com/PaulSuyCa).  
¿Dudas o sugerencias? ¡Abre un issue o pull request!
