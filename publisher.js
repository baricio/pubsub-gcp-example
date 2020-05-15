const pubsub = require('./pubsub');

async function pusblish() {
    const data = new Date().toString();
    const dataBuffer = Buffer.from(data);
    const topicName = 'starting_topic';

    const messageId = await pubsub
        .topic(topicName)
        .publish(dataBuffer)
    
    console.log(messageId)
}

pusblish()