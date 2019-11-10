# Client app

This application is the client communicating via _web-sockets_ with a local Node.js serving handling the NFC Scanning behaviour.

## How it works

When loading the application and the `<Home />` component, a `require-scan` event is sent to the _web-sockets_ server.

Afterwards, the server will answer by sending `nfc-tag-scanned` events to the client, with the read payload.

## Installation

To install the required dependencies, please run the following command:

```bash
# NPM
$ npm install
# Yarn alternative
$ yarn install
```

## Start

To run the client app locally, please run the following command:

```bash
# NPM
$ npm start
# Yarn alternative
$ yarn start
```
