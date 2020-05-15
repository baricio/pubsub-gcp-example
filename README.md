# PubSub GCP code example

This is an example of code usage in PubSub of Google Cloud Platform

## Getting start

copy `.env.example` to `.env`

```bash
cp .env.example .env
```

fill the enviroment variable with the key.json when created pubsub access

```env
GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
```

install packages

```bash
npm install
```

## How to execute

run subscribers in separted terminals

```bash
node subsciber1.js
node subsciber2.js
```

run publisher and see the messages in subscribers

```bash
node publisher.js
```
