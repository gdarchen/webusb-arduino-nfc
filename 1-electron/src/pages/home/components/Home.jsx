import React from "react";
import { Card, Loader } from "semantic-ui-react";
import style from "./Home.scss";

import PropTypes from "prop-types";

const Home = ({ readTag }) => {
  return readTag ? (
    <div className={style.container}>
      <Card className={style.nfcCard}>
        <Card.Content>
          <Card.Header>NFC Tag Read</Card.Header>
          <Card.Description>
            Received value: <div className={style.readValue}>{readTag}</div>
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  ) : (
    <div className={style.waitingContainer}>
      <Loader active inverted inline="centered">
        Waiting for a scan
      </Loader>
    </div>
  );
};

Home.propTypes = {
  readTag: PropTypes.string
};

export default Home;
