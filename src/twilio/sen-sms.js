const config = require('../config')
const client = require('twilio')(config.accountSid, config.authToken)

async function sendMessage() {
    try {

        const message = await client.messages.create({
            to: config.phone,
            from: '+12057514692',
            body: 'my frist sms'

        })
        console.log(message.sid);

    } catch (error) {
        console.log(error);
    }


}

sendMessage();