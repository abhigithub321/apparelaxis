import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function FooterBannerThree() {
  return (
    <div className='footerbanner1'>
    <Card className="text-center">
      <Card.Header>Beauty</Card.Header>
      <Card.Body>
        {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        <Card.Img variant="top" src="./Images/beauty.avif" alt="Card image" id='beautyimg'/>
        {/* <Button variant="primary" className='btn'>Go somewhere</Button> */}
        <Button variant="primary" className='stylish-button'>Shop Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </div>
  );
}

export default FooterBannerThree;
