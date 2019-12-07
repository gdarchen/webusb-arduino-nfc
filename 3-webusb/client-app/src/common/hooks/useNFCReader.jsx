import { useState, useEffect } from "react";

const useNFCReader = () => {
  const [device, setDevice] = useState();
  const [readTag, setReadTag] = useState();

  // Loop to read the NFC tags
  const readLoop = async () => {
    try {
      if (device.opened) {
        // Read the bytes from the device
        const payload = await device.transferIn(5, 64);
        const decoder = new TextDecoder();
        const decodedPayload = decoder.decode(payload.data).split("/")[1];

        setReadTag(decodedPayload);
        console.log(`Read NTAG213 containing '${decodedPayload}'.`);

        if (device) {
          readLoop();
        }
      }
    } catch (e) {
      console.error(
        `Error while reading from the NFC Reader:\n${e.toString()}`
      );
      throw e;
    }
  };

  const setupNFCReader = async () => {
    try {
      if (device) {
        await device.open();
        await device.selectConfiguration(1);
        await device.claimInterface(2);
        await device.controlTransferOut({
          requestType: "class",
          recipient: "interface",
          request: 0x22,
          value: 0x01,
          index: 0x02
        });

        readLoop();
      }
    } catch (e) {
      console.error(`Error while setting up the NFC Reader:\n${e.toString()}`);
    }
  };

  // Get the plugged devices and extract the one having the Arduino's vendor id, then asks the user
  // to choose from the resulting list
  const configureNewNFCReader = async () => {
    const authorizedDevice = await navigator.usb.requestDevice({
      filters: [{ vendorId: 0x2341 }]
    });

    setDevice(authorizedDevice);
  };

  // When a device has been found, we initiate a connection with it
  useEffect(() => {
    setupNFCReader();
  });

  return [readTag, device, configureNewNFCReader];
};

export default useNFCReader;
