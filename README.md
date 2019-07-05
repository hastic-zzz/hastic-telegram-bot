# hastic-telegram-bot
Tool for delivering notifications from Hastic's webhooks to Telegram

This tool uses some port, that is indicated in config.
Hastic analytic unit webhooks get in this port and handled in a certain way.
Fields like message and image are extracted from webhooks and sent to the telegram chats. (Chats are indicated in config too).
Telegram chat is selected according to url of webhook.

Example of config :
```{
  "port": "12345",
  "host": "127.0.0.1",
  "chat_ids": {
    "/": "chat_id_1",
    "/url_1": "-chat_id_2",
    "/url_2": "-chat_id_3"
  }
}```
