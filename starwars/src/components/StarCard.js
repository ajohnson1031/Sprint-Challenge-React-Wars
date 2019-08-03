import React from "react";
import { Card } from "semantic-ui-react";
import "./StarCard.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StarCard = ({ data }) => {
  const name = data ? data.name : null;
  const gender = data ? data.gender : null;
  const birthyear = data ? data.birth_year : null;
  const skincolor = data ? data.skin_color : null;
  const haircolor = data ? data.hair_color : null;
  const eyecolor = data ? data.eye_color : null;
  const height = data ? data.height : null;
  const mass = data ? data.mass : null;

  return (
    <Card className="star-card">
      <Card.Header style={{ backgroundColor: getRandomColor() }}>
        {name}
      </Card.Header>
      <Card.Content>
        <Card.Description>
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Y.O.B.:</strong> {birthyear}
          </p>
          <p>
            <strong>Skin Color:</strong> {skincolor}
          </p>
          <p>
            <strong>Hair Color:</strong> {haircolor}
          </p>
          <p>
            <strong>Eye Color:</strong> {eyecolor}
          </p>
          <p>
            <strong>Height:</strong> {height}
          </p>
          <p>
            <strong>Mass:</strong> {mass}
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default StarCard;
