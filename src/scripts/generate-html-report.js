// Importa el generador de reportes HTML para Cucumber
const reporter = require('multiple-cucumber-html-reporter');

// Ejecuta la generación del reporte HTML
reporter.generate({
  // Carpeta donde están los archivos .json que Cucumber genera después de correr los tests
  jsonDir: 'reports',
  // Carpeta donde se va a crear el reporte HTML final
  reportPath: 'reports/html',

  // Metadata adicional para mostrar información del entorno en el reporte
  metadata: {
    browser: {
      name: 'chrome', // El navegador usado en las pruebas
      version: 'XX',  // Puedes dejar "XX" si es variable o poner la real (ej: "124.0")
    },
    device: 'Local test machine', // Nombre del equipo/dispositivo de pruebas
    platform: {
      name: os.platform(), // windows, darwin, linux
      version: os.release(),
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
