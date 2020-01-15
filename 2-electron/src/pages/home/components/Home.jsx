import PropTypes from "prop-types";
import React from "react";
import { Card, Loader } from "semantic-ui-react";

import Credits from "../../../common/credits";
import style from "./Home.scss";

const Home = ({ readTag }) => {
  return (
    <div className={style.container}>
      {readTag ? (
        <Card className={style.nfcCard}>
          <Card.Content>
            <Card.Header>NFC Tag Read</Card.Header>
            <Card.Description>
              Received value: <div className={style.readValue}>{readTag}</div>
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

Home.propTypes = {
  readTag: PropTypes.string
};

export default Home;
