import "./App.css";

import React from "react";
import { Card } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Card className="nfc-card">
        <Card.Content>
          <Card.Header>NFC Tag Read</Card.Header>
          <Card.Description>
            Received value: <div className="read-value">value</div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
