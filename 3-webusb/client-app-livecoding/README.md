# Live coding

1. In `HomeContainer.jsx`, add:
  ```jsx
  import useNFCReader from '../../../common/hooks/useNFCReader';
  //
  const [readTag, device, configureNewNFCReader] = useNFCReader();
  ```
2. In `HomeContainer.jsx`, pass down the props:
  ```jsx
  <Home
    readTag={readTag}
    isDeviceConnected={device ? true : false}
    configureNewNFCReader={configureNewNFCReader}
  />
  ```
3. In `HomeContainer.jsx`, `console.log(device)` to show it's undefined yet
4. In `useNFCReader.jsx`, fill in the `configureNewNFCReader` function:
   1. `usb-request-device` snippet
   2. `vendorId`: `0x2341`
   3. `setDevice(authorizedDevice)`
5. Test to connect the device and show in console it is not undefined anymore
6. Code the `setupNFCReader` function:
   1. Try/catch block:
    ```js
    try {
      
    } catch (e) {
      console.error(`Error while setting up the NFC Reader:\n${e.toString()}`);
      throw e;
    }
    ```
   2. Check if device is not empty
    ```js
    if (device) {}
    ```
   3. Use the `usb-arduino-configure-interface` snippet
   4. Call the `readLoop()` function
7. Code the `readLoop` function:
   1. Try/catch block:
    ```js
    try {

    } catch (e) {
      console.error(`Error while reading from the NFC Reader:\n${e.toString()}`);
      throw e;
    }
   ```
   2. Check if device is opened
    ```js
    if (device.opened) {}
    ```
   3. **Inside** the previous if, call recursively `readLoop()` (at the end)
   4. Read the bytes from the device
   ```js
  const payload = await device.transferIn(5, 64);
   ```
   5. Decode the payload
   ```js
  const decoder = new TextDecoder();
  const decodedPayload = decoder.decode(payload.data).split("/")[1];
   ``` 
   6. Set the read tag state
   ```js
  setReadTag(decodedPayload)
   ```
