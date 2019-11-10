import NFC from "nfc-pcsc";
import React from "react";

import Home from "./Home";

const HomeContainer = () => {
  try {
    const nfc = new NFC();
    console.log(nfc);
  } catch (e) {
    console.error(e);
  }
  return <Home />;
};

export default HomeContainer;
