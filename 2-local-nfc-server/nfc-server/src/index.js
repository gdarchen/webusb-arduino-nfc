import { NFC } from 'nfc-pcsc';
import SocketIO from 'socket.io';
const io = SocketIO(4242);

io.on('connection', (socket) => {
  console.log('waiting for nfc scanner');
  socket.on('require-scan', () => {
    const nfc = new NFC();
    nfc.on('reader', (reader) => {
      console.log(`${reader.reader.name}  device attached`);

      const pageNumber = 4;
      const bufferLength = 48;

      reader.on('card', async (card) => {
        try {
          const data = await reader.read(pageNumber, bufferLength);
          const extractedPayload = data.toString().split('/')[1];

          console.log(`Socket ID: ${socket.id}, Read tag: ${extractedPayload}`);
          socket.emit('nfc-tag-scanned', extractedPayload);
        } catch (err) {
          console.error(err);
          throw err;
        }
      });

      reader.on('card.off', (card) => {
        console.log(`${reader.reader.name}  card removed`);
      });

      reader.on('error', (err) => {
        console.log(`${reader.reader.name}  an error occurred`, err);
      });

      reader.on('end', () => {
        console.log(`${reader.reader.name}  device removed`);
      });
    });

    nfc.on('error', (err) => {
      console.log('an error occurred', err);
    });
  });
});
