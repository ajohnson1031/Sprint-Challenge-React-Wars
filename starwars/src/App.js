import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import StarCard from "./components/StarCard";
import "./App.css";

const App = () => {
  const [card1, setCard1] = useState();
  const [card2, setCard2] = useState();
  const [card3, setCard3] = useState();
  const [card4, setCard4] = useState();
  const [card5, setCard5] = useState();
  const [card6, setCard6] = useState();
  const [card7, setCard7] = useState();
  const [card8, setCard8] = useState();
  const [card9, setCard9] = useState();
  const [card10, setCard10] = useState();

  const stateHolder = [
    setCard1,
    setCard2,
    setCard3,
    setCard4,
    setCard5,
    setCard6,
    setCard7,
    setCard8,
    setCard9,
    setCard10
  ];

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res =>
        res.data.results.forEach((r, i) => {
          stateHolder[i](r);
        })
      )
      .catch(err => console.log(`Error: `, err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Container className="main-container">
        <StarCard data={card1} />
        <StarCard data={card2} />
        <StarCard data={card3} />
        <StarCard data={card4} />
        <StarCard data={card5} />
        <StarCard data={card6} />
        <StarCard data={card7} />
        <StarCard data={card8} />
        <StarCard data={card9} />
        <StarCard data={card10} />
      </Container>
    </div>
  );
};

export default App;
