# hastic-telegram-bot
Tool for delivering notifications from Hastic webhooks to Telegram

## Getting started
- Create [Telegram Bot](https://core.telegram.org/bots)
- Get your [chat ID](https://stackoverflow.com/a/32572159)
- Add `chatId` and bot `token` to `config.json`
- `npm install`
- `npm run build`
- `npm start`
- Configure [Hastic webhooks](https://github.com/hastic/hastic-server/wiki/Webhooks)
- Get notifications

![image](https://user-images.githubusercontent.com/1022757/60738248-4d11bf00-9f66-11e9-851c-529250f4507d.png)

## Config example
```javascript
{
  "port": "12345",
  "host": "127.0.0.1",
  "chatIds": {
    // "<endpoint>": "<chat_id>"
    "/": "1234567890123",
    "/test": "-1234567890123"
  },
  "token": "123456789:AAHqa17QIUJ3fG42VfzrYg1egJ1pKEUcujE"
}
```
