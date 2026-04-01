// Inicjalizacja pływającego dymka Botpress
window.botpressWebChat.init({
  host: 'https://cdn.botpress.cloud/webchat/v3.6',
  botId: 'IFCO3FKO',
  webchatConfig: 'https://files.bpcontent.cloud/2026/04/01/09/20260401090115-IFCO3FKO.js',
  botName: 'Specjalistka Agnieszka',
  showConversationsButton: true, // pływający dymek
  botConversationsButtonStyle: {
    backgroundColor: '#ff6b6b', // pastelowa czerwień
    bottom: '20px',
    right: '20px'
  },
  enableReset: true,
  enableWelcomeMessage: true
});
