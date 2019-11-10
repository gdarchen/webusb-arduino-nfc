# NFC server

This project aims at starting a local server to interact with a USB NFC Reader and send read tags
via websockets.

It has been tested with this configuration:

- NFC Reader: ACR122U
- Tags: NTAG213

## How it works

On `connection` events, the server starts listening for `require-scan` events.

It interacts with the NFC USB Reader and sends the detected payload thanks to a `nfc-tag-scanned` event to the socket.

## Installation

To install the required dependencies, please run the following command:

```bash
# NPM
$ npm install
# Yarn alternative
$ yarn install
```

## Start

To start the local server, please run the following command:

```bash
# NPM
$ npm start
# Yarn alternative
$ yarn start
```
