const pubsub = require('./pubsub');

let messageCount = 0;
const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`Data: ${message.data}`);
    console.log(`tAttributes: ${message.attributes}`);
    messageCount += 1;

    // Ack the messae
    message.ack();
};

pubsub.subscription('sub1').on(`message`, messageHandler)

setTimeout(()=>{
    pubsub.subscription('sub1').removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
}, 5000);

