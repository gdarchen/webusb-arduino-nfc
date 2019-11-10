import { NFC } from 'nfc-pcsc';
// import SocketIO from 'socket.io';
// const io = SocketIO(4242);

console.log('test', new NFC());

// console.log('nfc', new NFC());

// io.on('connection', (socket) => {
//   console.log('waiting for nfc scanner');
//   socket.on('require-scan', () => {
//     let connectedSockets = Object.keys(io.sockets.sockets);

//     socket.on('disconnect', () => {
//       console.log('disconnect', Object.keys(io.sockets.sockets).filter((s) => s.id !== socket.id));
//       connectedSockets = Object.keys(io.sockets.sockets).filter((s) => s.id !== socket.id);
//     });

//     if (connectedSockets && connectedSockets.length > 1) {
//       console.log('Too many connections.', connectedSockets);
//       io.emit('too-many-connections');
//     } else {
//       const nfc = new NFC(); // optionally you can pass logger
//       nfc.on('reader', (reader) => {
//         console.log(`${reader.reader.name}  device attached`);

//         reader.on('card', async (card) => {
//           try {
//             const data = await reader.read(8, 30);
//             const payload = parseInt(data.toString());
//             console.log(`Socket ID: ${socket.id}, OF: ${payload}`);
//             socket.emit('nfc-tag-scanned', payload);
//           } catch (err) {
//             console.error(err);
//           }
//         });

//         reader.on('card.off', (card) => {
//           console.log(`${reader.reader.name}  card removed`);
//         });

//         reader.on('error', (err) => {
//           console.log(`${reader.reader.name}  an error occurred`, err);
//         });

//         reader.on('end', () => {
//           console.log(`${reader.reader.name}  device removed`);
//         });
//       });

//       nfc.on('error', (err) => {
//         console.log('an error occurred', err);
//       });
//     }
//   });
// });
