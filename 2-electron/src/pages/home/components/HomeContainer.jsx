import React, { useState } from "react";
import Home from "./Home";
import { NFC } from "nfc-pcsc";

const HomeContainer = () => {
  const nfc = new NFC();

  const [readTag, setReadTag] = useState(undefined);

  nfc.on("reader", reader => {
    console.log(`${reader.reader.name}  device attached`);

    const pageNumber = 4;
    const bufferLength = 48;

    reader.on("card", card => {
      console.log(`${reader.reader.name}  card detected`, card);
      reader.read(pageNumber, bufferLength).then(data => {
        // Data is encoded between slashes such a 'blibli/Hello Paris!/blabla' and we just want to
        // extract 'Hello Paris!'
        const extractedPayload = data.toString().split("/")[1];
        console.log(extractedPayload);
        setReadTag(extractedPayload);
      });

      reader.on("card.off", card => {
        console.log(`${reader.reader.name}  card removed`, card);
      });

      reader.on("error", err => {
        console.log(`${reader.reader.name}  an error occurred`, err);
      });

      reader.on("end", () => {
        console.log(`${reader.reader.name}  device removed`);
      });
    });
  });

  return <Home readTag={readTag} />;
};

export default HomeContainer;
