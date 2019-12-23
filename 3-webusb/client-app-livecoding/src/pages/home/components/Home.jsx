import "./Home.css";

import React from "react";
import { Button, Card, Loader } from "semantic-ui-react";

import Credits from "../../../common/credits";

const Home = ({ readTag, isDeviceConnected, configureNewNFCReader }) => {
  if (!isDeviceConnected) {
    return (
      <div className="App">
        <Button onClick={configureNewNFCReader} size="small" color="orange">
          Configure the NFC Reader
        </Button>

        <Credits />
      </div>
    );
  }

  return (
    <div className="App">
      {readTag ? (
        <Card className="nfc-card">
          <Card.Content>
            <Card.Header>NFC Tag Read</Card.Header>
            <Card.Description>
              Received value: <div className="read-value">{readTag}</div>
            </Card.Description>
          </Card.Content>
        </Card>
      ) : (
        <Loader active inverted inline="centered">
          Waiting for a scan
        </Loader>
      )}

      <Credits />
    </div>
  );
};

export default Home;
