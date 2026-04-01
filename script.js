// Inicjalizacja Webchat Botpress w kontenerze
window.botpressWebChat.init({
  host: 'https://cdn.botpress.cloud/webchat/v3.6',
  botId: 'IFCO3FKO', // Twój botId
  webchatConfig: 'https://files.bpcontent.cloud/2026/04/01/09/20260401090115-3JZ17WG4.json', // Twój link do JSON
  botName: 'Specjalistka Agnieszka',
  showConversationsButton: false, // usuwa ikonę w prawym dolnym rogu
  enableReset: true,
  enableWelcomeMessage: true,
  container: document.getElementById('bot-container') // wstawienie bota do kontenera na stronie
});
