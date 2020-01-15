<div align="center">
<h1>Arduino NFC Reader through WebUSB️ 💻</h1>

![nfc tag]
![arduino tag]
![react tag]
![node tag]
![electron tag]
![socketio tag]
![webusb tag]

Multiple ways to develop a web application communicating with a NFC reader.

<h2>See the <a href="https://slides.com/gautierdarchen/webusb-arduino-nfc/fullscreen">slides</a></h2>

</div>

---

This repo aims at explaining how I ended up building a NFC Reader with an Arduino using the WebUSB API.

You will find the three solutions I developed to make a web application communicate with a NFC Reader.

## Solution 1 - Local server NFC Reader and _web-sockets_

![nfc tag]
![react tag]
![node tag]
![socketio tag]

Still using a ACR122U NFC Reader, I implemented the a local Node.js server handling the NFC reading part and sending the read payload to a front-end application through _web-sockets_.

You can find the code for this solution in the `./1-local-nfc-server` folder.

### See the [1-local-nfc-server/README.md](1-local-nfc-server/README.md) file to understand how it works.

## Solution 2 - Electron application using a NFC Reader

![nfc tag] ![react tag] ![electron tag]

Using a ACR122U NFC Reader, I firstly implemented an Electron application to handle NFC reading.

You can find the code for this solution in the `./2-electron` folder.

### See the [2-electron/README.md](2-electron/README.md) file to understand how it works.

## Solution 3 - Using _WebUSB_ and an Arduino board

![react tag]
![arduino tag]
![webusb tag]

Using an Arduino Leonardo board and an Adafruit PN532 NFC Shield, I created a device able to communicate with a web application thanks to the *WebUSB* API and its implementation in Google Chrome.

You can find the code for this solution in the `./3-webusb` folder.

### See the [3-webusb/README.md](3-webusb/README.md) file to understand how it works.

[react tag]: https://img.shields.io/badge/react-JS-blue?style=for-the-badge&logo=react
[nfc tag]: https://img.shields.io/badge/nfc-PCSC-green?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABXUlEQVRIS72XQU7EMAxF/0caOACcYFjBKZC4N3MLWNETwAEACaNESZVaSewyyXRRVa3rl287iUMUl4i8AziW7xzP3yRvlB+p/LeQvM/vmR9EpGbs4K4mjyTfLH8kIzPeOtADgB8vPTtNPj8A3Nb+DXbshTd9D4P7/Se8FcUlgJshzgpExA1Xqtu+PeAUOhd8ONgqmiIVLySfjdqBK9RqqpjKixSdF+qQjjKEppo0Zbpp9OQ423jhQxWvK05S08v5FHBcdQz4NLAFHw5OK9laqS3lU8C6omsLxjRwC66r/yLTqUzDcMVWUekpN0yxdy5PUeyBTwX3wj4d3IJfBJxCfxW6KN0ejSiuE4CnXt+lVzFz6/Rsi5aTYkAb5Wcr3gEOpivcAjdPD97GrZKCCO+AF6uh/yR5t6PRK8fQPAzEht5yqmweALx6m/ua3eYIU8CrYa/su18ArncOYHNo+wONC6WK2f891gAAAABJRU5ErkJggg==
[electron tag]: https://img.shields.io/badge/electron-JS-blue?style=for-the-badge&logo=electron
[arduino tag]: https://img.shields.io/badge/Arduino-IOT-00979d?style=for-the-badge&logo=arduino
[node tag]: https://img.shields.io/badge/Node.js-JS-43853d?style=for-the-badge&logo=node.js
[socketio tag]: https://img.shields.io/badge/Socket.io-Websockets-black?style=for-the-badge&logo=socket.io
[webusb tag]: https://img.shields.io/badge/WebUSB-API-red?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABFUlEQVRIS+2WvQ0CMQxG3xVIbIAYgQHYAHpEyxiICkpoEHPQImqYgAEYgYINoAGddCdFURI7BoT4ufISf892vjun4E1P8QD3VsWaNExBwA7oVeA90M8twAquq6152TrZAYAPNcE/ClxXKJnL78wGGJra4xno+8DaimI+MbVa87lIiZUnE92jzTa077vAbeAk/ItfUnHyfKqEUmDRI6k/l1SRu74EJpFBEWQ8AxwbTGtgFFvUgMvYlKtd7RZw1ozIFPgAdD2RAbD1zvgCNDUwd480nVbAWBCVNILh2qAOcMwxj9QBLdjVaQBX54VFI2gaKVntPE7qmLINXH+ydbIDfu7ONQemkcNbADOtQf6t1nZKHHuS0B0muzsfCWq49wAAAABJRU5ErkJggg==
