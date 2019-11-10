import React from "react";
import { Card, Loader } from "semantic-ui-react";
import "./Home.css";

const Home = ({ readTag }) => {
  return readTag ? (
    <div className="App">
      <Card className="nfc-card">
        <Card.Content>
          <Card.Header>NFC Tag Read</Card.Header>
          <Card.Description>
            Received value: <div className="read-value">{readTag}</div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  ) : (
    <div className="App waitingContainer">
      <Loader active inverted inline="centered">
        Waiting for a scan
      </Loader>
    </div>
  );
};

export default Home;
