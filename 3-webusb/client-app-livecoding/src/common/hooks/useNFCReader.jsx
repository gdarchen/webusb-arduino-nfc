import { useState, useEffect } from "react";

const useNFCReader = () => {
  const [device, setDevice] = useState();
  const [readTag, setReadTag] = useState();

  // Loop to read the NFC tags
  const readLoop = async () => {};

  const setupNFCReader = async () => {};

  // Get the plugged devices and extract the one having the Arduino's vendor id, then asks the user
  // to choose from the resulting list
  const configureNewNFCReader = async () => {};

  // When a device has been found, we initiate a connection with it
  useEffect(() => {
    setupNFCReader();
  });

  return [readTag, device, configureNewNFCReader];
};

export default useNFCReader;
