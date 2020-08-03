# LineNotifyService
Node.js Line Notify and line bot Message package

# Install 
> npm install line-notify-service

# Need
For line-bot you need to get Channel access token.
https://developers.line.biz/console/

# Initialization
> import Notify from 'line-notify-service';

`const lineNotify = new Notify({tokenBot:"WITH_YOUR_CHANNEL_ACCESSTOKEN"})`

# Payload document
https://developers.line.biz/en/services/messaging-api/

ex. 
   `const payload = {
        replyToken: req.body.events[0].replyToken,
        messages: [
          {
            type: 'text',
            text:
              'ไม่สามารถตรวจผลสลากกินแบ่งได้',
          },
        ],
      }`
> lineNotify.replyMessage(payload)
 
 `message` can be used flex-messages
 https://developers.line.biz/en/docs/messaging-api/using-flex-messages/ 
 
 

# For line-notify 
https://notify-bot.line.me/en/

> const lineNotify = new Notify({tokenNotify:"WITH_YOUR_TOKEN"})
ex. 
   `const payload = {
        messages: [
          {
            type: 'text',
            text:
              'ไม่สามารถตรวจผลสลากกินแบ่งได้',
          },
        ],
      }`
      
> lineNotify.Notify(payload)


or you can use both 

> const lineNotify = new Notify({tokenNotify:"WITH_YOUR_TOKEN", tokenBot:"WITH_YOUR_CHANNEL_ACCESSTOKEN"})
> lineNotify.Notify(payload)`
