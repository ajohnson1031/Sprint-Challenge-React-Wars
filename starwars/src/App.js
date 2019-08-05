import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import StarCard from "./components/StarCard";
import "./App.css";

const App = () => {
  const [cardData, setCardData] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => setCardData(res.data.results))
      .catch(err => console.log(`Error: `, err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="main-container">
        {cardData &&
          cardData.map(res => {
            return <StarCard data={res} key={res.created} />;
          })}
      </Container>
    </div>
  );
};

export default App;
