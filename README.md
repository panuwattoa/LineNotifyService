# LineNotifyService
Node.js Line Notify and line bot Message package

#Need
For line-bot you need to get Channel access token.
https://developers.line.biz/console/

#Initialization
> import Notify from 'line-notify-service';

`const lineNotify = new Notify({tokenBot:"WITH_YOUR_CHANNEL_ACCESSTOKEN"})`

#payload document
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
      },`
      
 > lineNotify.replyMessage(payload)`

#For line-notify 
https://notify-bot.line.me/en/

> const lineNotify = new Notify({tokenNotify:"WITH_YOUR_TOKEN"})

or you can use both 

> const lineNotify = new Notify({tokenNotify:"WITH_YOUR_TOKEN", tokenBot:"WITH_YOUR_CHANNEL_ACCESSTOKEN"})
> lineNotify.Notify(payload)`
