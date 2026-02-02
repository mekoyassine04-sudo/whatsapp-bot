const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--no-zygote',
      '--single-process'
    ]
  }
});

// ملي يكون جاهز
client.on('ready', () => {
  console.log('✅ البوت خدام ومربوط بواتساب');
});

// QR Code
client.on('qr', (qr) => {
  console.log('📱 سكاني QR من التيرمينال');
  qrcode.generate(qr, { small: true });
});

// رد بسيط
client.on('message', async (message) => {
  if (message.body === 'سلام') {
    await message.reply('وعليكم السلام 👋');
  }

  if (message.body === 'ping') {
    await message.reply('pong 🏓');
  }
});

client.initialize();
