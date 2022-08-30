import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Body() {
  return (
    <Container >
    <Card style={{ width: '100%',marginTop:'50px'}}>
    <Card.Img style={{height: '400px'}} variant="top" src="/about.jpg" />
    <Card.Body>
      <Card.Title style={{marginTop:'25px'}}>About</Card.Title>
      <div id='about'>
      <p style={{textAlign: 'left',marginTop:'25px'}}>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </p>
        </div>
        <div id='contact'>
        <Card.Title style={{marginTop:'25px'}}>Contact Us</Card.Title>
      <p style={{textAlign: 'centre',marginTop:'25px'}}>
        Phone Number +977 9843357731<br />
        Kausaltar, Nepal
        </p>
        </div>
    </Card.Body>
  </Card>
 </Container>
  )
}

export default Body