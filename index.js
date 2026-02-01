const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('🤖 البوت خدام 24/24!');
});

client.on('message', message => {
    if (message.body === 'السلام') {
        message.reply('وعليكم السلام 👋 أنا بوت واتساب عربي');
    }
});

client.initialize();