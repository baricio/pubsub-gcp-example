const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3030;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/subscriber2', (req, res) => {
    const message = req.body ? req.body.message : null;
    if (message) {
        const buffer = Buffer.from(message.data, 'base64');
        const data = buffer ? buffer.toString() : null;
    
        console.log(`Received message ${message.messageId}:`);
        console.log(`Data: ${data}`);
    }

    res.sendStatus(204);
})

app.listen(port, () => console.log(`Example app listening at port ${port}`))