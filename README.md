# 🚀 Reto Técnico QA FrontEnd - SauceDemo

Este proyecto automatiza pruebas end-to-end sobre el sitio [SauceDemo](https://www.saucedemo.com) utilizando **Playwright**, **Cucumber** y el patrón **Page Object Model (POM)** en **TypeScript**.

---

## 📦 Requisitos

- **Node.js** v18 o superior  
- **npm** (v9 o superior recomendado)

---

## 🛠️ Instalación y configuración

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/PaulSuyCa/retoTecnicoQa-FrontEnd-Pacifico.git
   cd retoTecnicoQa-FrontEnd-Pacifico
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Descarga los navegadores requeridos por Playwright**
   ```bash
   npx playwright install
   ```

---

## 🧪 Ejecución de pruebas

Ejecuta todos los tests definidos en los archivos `.feature`:
```bash
npm test
```

---

## 📝 Estructura del proyecto

```
web-playwright-testing/
│
├── features/
│   ├── saucedemo.feature             # Escenarios de prueba (Gherkin)
│   ├── step-definitions/
│   │    └── saucedemo.steps.ts       # Definiciones de pasos
│   └── support/
│        └── world.ts                 # Hooks y Custom World
│
├── pages/
│   ├── LoginPage.ts                  # Page Object para Login
│   ├── InventoryPage.ts              # Page Object de productos
│   ├── CartPage.ts                   # Page Object del carrito
│   └── CheckoutPage.ts               # Page Object del checkout
│
├── .gitignore
├── package.json
├── playwright.config.ts
└── tsconfig.json
```

---

## 📊 Reporte HTML de pruebas

Si tienes configurado un generador de reportes (ej: `multiple-cucumber-html-reporter`):

1. **Ejecuta los tests (genera el JSON):**
   ```bash
   npm test
   ```

2. **Genera el reporte HTML:**
   ```bash
   npm run report
   ```
   Luego abre `reports/html/index.html` en tu navegador.

---

## 👨‍💻 Autor

Desarrollado por [PaulSuyCa](https://github.com/PaulSuyCa).  
¿Dudas o sugerencias? ¡Abre un issue o pull request!
