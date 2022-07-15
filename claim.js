const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

let player = ["Roman Reigns","Gigi Dolin","Liv Morgan"]
let images = ['https://rageworksmediafiles.s3.amazonaws.com/wp-content/uploads/2022/03/31105635/WWESC-S8-Roman-Reigns-WM38-657x1024.png','https://pbs.twimg.com/media/FPI7Yn1VgAUbyHW?format=jpg&name=4096x4096','https://pbs.twimg.com/media/FPI9MWXWUAo0CF_.jpg']
let price = ['2,000,000','1,500,000','1,000,000']
let sprice = ['1,000,000','700,000','500,000']
let random = Math.floor(Math.random() * player.length)
let prandom = player[random]
let irandom = images[random]
let prrandom = price[random]
let sprandom = sprice[random]

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": context.params.event.channel_id,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 3,
          "label": `Promote`,
          "custom_id": `row_0_button_0`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 4,
          "label": `Sell`,
          "custom_id": `row_0_button_1`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `${prandom} joins your team`,
      "description": `Value : ${prrandom}\nSell Price : ${sprandom}`,
      "color": 0x00b7ff,
      "image": {
        "url": `${irandom}`,
        "height": 0,
        "width": 0
      }
    }
  ]
});