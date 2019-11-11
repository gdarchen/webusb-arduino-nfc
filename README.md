<div align="center">
<h1>Arduino NFC Reader through WebUSB️ 💻</h1>

![nfc tag]
![arduino tag]
![react tag]
![node tag]
![electron tag]
![socketio tag]

Multiple ways to develop a web application communicating with a NFC reader.

<h2>See the <a href="https://slides.com/gautierdarchen/webusb-arduino-nfc/fullscreen">slides</a></h2>

</div>

---

This repo aims at explaining how I ended up building a NFC Reader with an Arduino using the WebUSB API.

You will find the three solutions I developed to make a web application communicate with a NFC Reader.

## Solution 1 - Electron application using a NFC Reader

![nfc tag] ![react tag] ![electron tag]

Using a ACR122U NFC Reader, I firstly implemented an Electron application to handle NFC reading.

You can find the code for this solution in the `./1-electron` folder.

### See the [1-electron/README.md](1-electron/README.md) file to understand how it works.

## Solution 2 - Local server NFC Reader and _web-sockets_

![nfc tag]
![react tag]
![node tag]
![socketio tag]

Still using a ACR122U NFC Reader, I implemented the a local Node.js server handling the NFC reading part and sending the read payload to a front-end application through _web-sockets_.

You can find the code for this solution in the `./2-local-nfc-server` folder.

### See the [2-local-nfc-server/README.md](2-local-nfc-server/README.md) file to understand how it works.

[react tag]: https://img.shields.io/badge/react-JS-blue?style=for-the-badge&logo=react
[nfc tag]: https://img.shields.io/badge/nfc-PCSC-green?style=for-the-badge&logo=data:image/png;base64,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
[electron tag]: https://img.shields.io/badge/electron-JS-blue?style=for-the-badge&logo=electron
[arduino tag]: https://img.shields.io/badge/Arduino-IOT-00979d?style=for-the-badge&logo=arduino
[node tag]: https://img.shields.io/badge/Node.js-JS-43853d?style=for-the-badge&logo=node.js
[socketio tag]: https://img.shields.io/badge/Socket.io-Websockets-black?style=for-the-badge&logo=socket.io
