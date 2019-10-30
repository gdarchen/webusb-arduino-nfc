#include <Wire.h>
#include <PN532_I2C.h>
#include <PN532.h>
#include <NfcAdapter.h>
// Third-party WebUSB Arduino library
#include <WebUSB.h>

WebUSB WebUSBSerial( 0/* http:// */, "localhost:8080");

// #define Serial WebUSBSerial

PN532_I2C pn532_i2c(Wire);
NfcAdapter nfc = NfcAdapter(pn532_i2c);

void setup() {
  WebUSBSerial.begin(9600);
  Serial.begin(9600);
  while (!Serial && !WebUSBSerial) {};
  Serial.println("NDEF READER");
  nfc.begin();
}

void loop() {

  Serial.println("\nScan your NFC tag on the NFC Shield\n");
  
  if (nfc.tagPresent())
  {
    NfcTag tag = nfc.read();
    if (tag.hasNdefMessage()) // If your tag has a message
    {

      NdefMessage message = tag.getNdefMessage();

      // If you have more than 1 Message then it will cycle through them
      int recordCount = message.getRecordCount();
      for (int i = 0; i < recordCount; i++)
      {
        NdefRecord record = message.getRecord(i);

        int payloadLength = record.getPayloadLength();
        byte payload[payloadLength];
        record.getPayload(payload);

        String payloadAsString = ""; // Processes the message as a string vs as a HEX value
        for (int c = 0; c < payloadLength; c++) {
          payloadAsString += (char)payload[c];
        }
        WebUSBSerial.write(payloadAsString.c_str());
        Serial.println(payloadAsString.c_str());
      }
    }
  };

  WebUSBSerial.flush();
  delay(250);
}