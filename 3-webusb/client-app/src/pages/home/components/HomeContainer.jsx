import React from "react";

import useNFCReader from "../../../common/hooks/useNFCReader";
import Home from "./Home";

const HomeContainer = () => {
  const [readTag, device, configureNewNFCReader] = useNFCReader();
  console.log(device);

  return (
    <Home
      readTag={readTag}
      isDeviceConnected={device ? true : false}
      configureNewNFCReader={configureNewNFCReader}
    />
  );
};

export default HomeContainer;
