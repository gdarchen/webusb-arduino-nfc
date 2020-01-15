# Live coding

1. Create the file `common/hooks/useNFCReader.jsx`
   1. Define a `useNFCReader` method and export it by `default`
   2. Define `device` and `readTag` states using `useState`
   3. Create a `configureNewNFCReader` empty **async** method
   4. Return `[readTag, device, configureNewNFCReader]`
2. In `HomeContainer.jsx`, add:
  ```jsx
  import useNFCReader from '../../../common/hooks/useNFCReader';
  //
  const [readTag, device, configureNewNFCReader] = useNFCReader();
  ```
3. In `HomeContainer.jsx`, pass down the props:
  ```jsx
  <Home
    readTag={readTag}
    isDeviceConnected={device ? true : false}
    configureNewNFCReader={configureNewNFCReader}
  />
  ```
4. In `HomeContainer.jsx`, `console.log(device)` to show it's undefined yet
5. In `useNFCReader.jsx`, fill in the `configureNewNFCReader` function:
   1. **`usb-const-arduino-vendor-id`** snippet (below the states)
   2. **`usb-request-device`** snippet
   3. `vendorId`: use the const
   4. `setDevice(authorizedDevice)`
6. Test to connect the device and show in console it is not undefined anymore
7. Code the `setupNFCReader` function:
   1. **`usb-const-arduino-setup-nfc`** snippet (below the states)
   2. Create a `setupNFCReader` empty **async** method
   3. Create an effect using `useEffect` to call `setupNFCReader`
   4. Try/catch block:
    ```js
    try {
      
    } catch (e) {
      console.error(`Error while setting up the NFC Reader:\n${e.toString()}`);
      throw e;
    }
    ```
   5. Check if device is not empty
    ```js
    if (device) {}
    ```
   6. Use the **`usb-arduino-configure-interface`** snippet
      * It has to look like:
      ```javascript
      await device.open();
      await device.selectConfiguration(CONFIG_NUMBER);
      await device.claimInterface(INTERFACE_NUMBER);
      await device.controlTransferOut({
        requestType: REQUEST_TYPE,
        recipient: TRANSFER_RECIPIENT,
        request: ARDUINO_CORE_REQUEST,
        value: ARDUINO_CONTROL_CONNECT,
        index: RECIPIENT_INTERFACE_NUMBER
      });
      ```
   7. Create a `readLoop` empty **async** method
   8. Call the `readLoop()` function
8. Code the `readLoop` function:
   1. **`usb-const-arduino-in-endpoint`** snippet (below the states)
   2. Try/catch block:
    ```js
    try {

    } catch (e) {
      console.error(`Error while reading from the NFC Reader:\n${e.toString()}`);
      throw e;
    }
   ```
   3. Check if device is opened
    ```js
    if (device.opened) {}
    ```
   4. **Inside** the previous if, call recursively `readLoop()` (at the end)
   5. Create the `bufferLength` const equals `64`
   6. Read the bytes from the device
    ```js
    const payload = await device.transferIn(IN_ENDPOINT, bufferLength);
    ```
   7. Decode the payload
   ```js
    const decoder = new TextDecoder();
    const decodedPayload = decoder.decode(payload.data).split("/")[1];
   ``` 
   8. Set the read tag state
    ```js
    setReadTag(decodedPayload)
    ```
