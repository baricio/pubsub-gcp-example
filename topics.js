const pubsub = require('./pubsub');
async function listAllTopics() {
    // Lists all topics in the current project
    const [topics] = await pubsub.getTopics();
    console.log('Topics:');
    topics.forEach(topic => console.log(topic.name));
}

listAllTopics();