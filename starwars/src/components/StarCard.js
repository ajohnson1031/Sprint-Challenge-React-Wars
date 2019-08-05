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
  return (
    <Card className="star-card">
      <Card.Header style={{ backgroundColor: getRandomColor() }}>
        {data.name}
      </Card.Header>
      <Card.Content>
        <Card.Description>
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
