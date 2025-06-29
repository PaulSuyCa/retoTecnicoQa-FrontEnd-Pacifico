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
      name: 'windows', // Sistema operativo
      version: '11'    // Versión del sistema operativo
    }
  }
});
