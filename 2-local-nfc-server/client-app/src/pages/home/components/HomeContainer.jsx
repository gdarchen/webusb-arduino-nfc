import React, { useEffect, useState } from "react";
import SocketIO from "socket.io-client";

import { APILocalSocketUrl } from "../../../config";
import Home from "./Home";

const HomeContainer = () => {
  const [socket, setSocket] = useState(undefined);
  const [readTag, setReadTag] = useState(undefined);

  useEffect(() => {
    setSocket(SocketIO.connect(APILocalSocketUrl));
  }, []);

  useEffect(() => {
    if (!socket) {
      return () => {};
    }

    socket.emit("require-scan");
    socket.on("nfc-tag-scanned", payload => {
      setReadTag(payload);
    });

    return () => socket.close();
  }, [socket]);

  return <Home readTag={readTag} />;
};

export default HomeContainer;
