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
[nfc tag]: https://img.shields.io/badge/nfc-PCSC-green?style=for-the-badge
[electron tag]: https://img.shields.io/badge/electron-JS-blue?style=for-the-badge&logo=electron
[arduino tag]: https://img.shields.io/badge/Arduino-IOT-00979d?style=for-the-badge&logo=arduino
[node tag]: https://img.shields.io/badge/Node.js-JS-43853d?style=for-the-badge&logo=node.js
[socketio tag]: https://img.shields.io/badge/Socket.io-Websockets-black?style=for-the-badge&logo=socket.io
