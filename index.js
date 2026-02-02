const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ]
  }
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
  console.log('📱 Scan QR Code');
});

client.on('ready', () => {
  console.log('✅ البوت خدام 24/24');
});

client.on('message', message => {
  if (message.body === 'السلام') {
    message.reply('وعليكم السلام 👋 أنا بوت واتساب');
  }
});

client.initialize();