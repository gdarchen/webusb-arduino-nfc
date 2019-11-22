import React, { useEffect, useState } from "react";

import Home from "./Home";

const HomeContainer = () => {
  const [readTag, setReadTag] = useState(undefined);

  useEffect(() => {
    setReadTag("Blabla");
  }, []);

  return <Home readTag={readTag} />;
};

export default HomeContainer;
