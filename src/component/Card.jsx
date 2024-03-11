import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
  

const CustomCard = (props) => {
  return (
    <div>
      <Card className="my-3 border-0 shadow-sm  ">
        <Card.Img variant="top" src= {props.imageurl}/>
        <Card.Body onClick={props.onClick}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
           {props.cardtext}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;