module.exports = {
  // Horizon API endpoint
  horizonUrl: 'https://horizon-testnet.stellar.org/',

  // Local development network settings
  localNetwork: {
    horizonUrl: 'http://localhost:8000/',
    testnetUrl: 'http://testnet.local:3000/',
    publicnetUrl: 'http://publicnet.local:3000/',
  },

  // Language settings
  languages: [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    // Add more languages here
  ],

  // Blockchain settings
  blockchain: {
    network: 'testnet', // or 'publicnet'
    horizonInstance: 'testnet.local', // or 'publicnet.local'
  },
};
