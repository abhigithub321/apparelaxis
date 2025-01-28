import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function FooterBannerTwo() {
  return (
    <div className='footerbanner1'>
    <Card className="text-center">
      <Card.Header>Kids</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src="./Images/kidss.jpg" alt="Card image" id='kidimg'/>

        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Button variant="primary" className='stylish-button'>Shop Now</Button>
        {/* <Button variant="primary" className='btn'>Go somewhere</Button> */}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  );
}

export default FooterBannerTwo;
