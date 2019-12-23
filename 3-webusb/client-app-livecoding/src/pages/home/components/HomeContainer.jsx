import React from "react";

import Home from "./Home";

const HomeContainer = () => {
  return (
    <Home
      readTag={null}
      isDeviceConnected={false}
      configureNewNFCReader={() => {}}
    />
  );
};

export default HomeContainer;
