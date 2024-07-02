import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 20000,
  pageLoadTimeout: 20000,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: false,
  },
  e2e: {
    setupNodeEvents(on, config) {      
    },
    video: true,
    baseUrl: "https://www.zapimoveis.com.br/",
    viewportWidth: 1440, // Muda viewport para deixar todos os itens superior visivel
    testIsolation: false, // Não limpa a tela a cada it
  },
});
