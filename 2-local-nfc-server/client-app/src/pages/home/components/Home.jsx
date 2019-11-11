import "./Home.css";

import React from "react";
import { Card, Loader } from "semantic-ui-react";

import Credits from "../../../common/credits";

const Home = ({ readTag }) => {
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
