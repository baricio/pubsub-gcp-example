require('dotenv').config();
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();

module.exports = pubsub;