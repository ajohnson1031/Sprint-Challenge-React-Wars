import React, { useState, useEffect } from "react";
import { Card, Container } from "semantic-ui-react";
import "./StarCard.css";
import axios from "axios";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StarCard = ({ data }) => {
  const [species, setSpecies] = useState();
  const [homeworld, setHomeworld] = useState([]);

  useEffect(() => {
    data.species &&
      axios
        .get(data.species)
        .then(res => setSpecies(res.data.name))
        .catch(err => console.log(`Error: `, err));
  }, [data.species]);

  useEffect(() => {
    data.homeworld &&
      axios.get(data.homeworld).then(res => setHomeworld(res.data.name));
  }, [data.homeworld]);

  function toggleActive(e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === "+") {
      e.target.innerHTML = "-";
      e.target.parentNode.parentNode.nextSibling.classList.add("active");
    } else {
      e.target.innerHTML = "+";
      e.target.parentNode.parentNode.nextSibling.classList.remove("active");
    }
  }

  return (
    <Card className="star-card">
      <Card.Header style={{ backgroundColor: getRandomColor() }}>
        <Container>
          {data.name}
          <button className="expand" onClick={e => toggleActive(e)}>
            +
          </button>
        </Container>
      </Card.Header>
      <Card.Content>
        <Card.Description>
          <p>
            <strong>Species:</strong> {species}
          </p>
          <p>
            <strong>Homeworld:</strong> {homeworld}
          </p>
          <p>
            <strong>Gender:</strong> {data.gender}
          </p>
          <p>
            <strong>Y.O.B.:</strong> {data.birthyear}
          </p>
          <p>
            <strong>Skin Color:</strong> {data.skin_color}
          </p>
          <p>
            <strong>Hair Color:</strong> {data.hair_color}
          </p>
          <p>
            <strong>Eye Color:</strong> {data.eye_color}
          </p>
          <p>
            <strong>Height:</strong> {data.height}
          </p>
          <p>
            <strong>Mass:</strong> {data.mass}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default StarCard;
