

import { ensureJSON, toArray } from "./utils";

class Notify{
    constructor({token}) {
		if(!token) {
			throw new Error('invalid with {token} argument.')
        }
        this.http = axios.create();
        this.http.defaults.headers.common['Authorization'] = "Bearer " + token;
    }
    
    //https://developers.line.me/businessconnect/api-reference#sending_message
    Notify(args){
        return new Promise((resolve, reject)=>{
            this.http.post(config.URL_LINE['send'], {
                messages: args.messages,
              }).then(res=>{
                const body = res.body
                resolve(JSON.parse(body))
            })
            .catch(err=>{
                reject(JSON.parse(err.error))
            });
        })
    }

    replyMessage(args){
        return new Promise((resolve, reject)=>{
            this.http.post(`${config.MESSAGING_API_PREFIX}/message/reply`, {
                messages: toArray(args.messages),
                replyToken: args.replyToken,
              }).then(res=>{
                const body = res.body
                resolve(JSON.parse(body))
            })
            .catch(err=>{
                reject(JSON.parse(err.error))
            });
        })
    }

}

export default Notify
