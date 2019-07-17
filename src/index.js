import TelegramBot from 'node-telegram-bot-api';
import http from 'http';
import fs from 'fs';

const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

const PORT = config.port;
const HOST = config.host;
const CHAT_IDS_MAPPING = config.chatIds;
const TOKEN = config.token;

const bot = new TelegramBot(TOKEN);

const server = http.createServer((req, res) => {
  if(req.method === 'POST') {
    let body = '';
    req.on('data', data => {
      body += data;
    });
    req.on('end', async () => {
      try {
        const notification = JSON.parse(body);
        const chatId = CHAT_IDS_MAPPING[req.url];

        if(Object.keys(notification).includes('image')) {
          const image = new Buffer(notification.image, 'base64');
          await bot.sendPhoto(chatId, image, { caption: notification.text });
        } else {
          await bot.sendMessage(chatId, notification.text);
        }
        console.log(`Successfully sent message to ${chatId}`);
      } catch(e) {
        console.error(e);
      }
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('post received');
  }
});

server.listen(PORT, HOST);
console.log('Listening at http://' + HOST + ':' + PORT);
