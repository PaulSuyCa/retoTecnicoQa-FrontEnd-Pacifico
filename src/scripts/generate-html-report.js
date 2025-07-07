const reporter = require('multiple-cucumber-html-reporter');
const os = require('os');

// Obtén el browser de la variable de entorno (para cross-browser)
const browser = process.env.BROWSER || 'chromium';


const browserNames = {
  chromium: 'Chrome',
  firefox: 'Firefox',
  webkit: 'Webkit (Safari)'
};

const now = new Date();

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  reportName: 'Reporte de Pruebas',
  pageTitle: 'Reporte SauceDemo',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome', // El navegador usado en las pruebas
      version: 'XX',  // Puedes dejar "XX" si es variable o poner la real (ej: "124.0")
    },
    device: 'Local test machine', // Nombre del equipo/dispositivo de pruebas
    platform: {
      name: os.platform(), // windows, darwin, linux
    },
    execution: {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    }
  },
  customData: {
    title: 'Información del Proyecto',
    data: [
//      { label: 'Proyecto', value: 'Automatización SauceDemo QA Frontend' },
//      { label: 'Ejecutado por', value: os.userInfo().username },
      { label: 'Fecha', value: now.toLocaleString() },
//      { label: 'Repositorio', value: 'https://github.com/PaulSuyCa/retoTecnicoQa-FrontEnd-Pacifico' }
    ]
  }
});
