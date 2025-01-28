import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './FotterBanner.css';
import FooterBannerOne from './FooterBanner1';
import FooterBannerTwo from './FooterBanner2';
import FooterBannerThree from './FooterBanner3';

function HeaderAndFooterExample() {
  return (
    <div className='footerbanner1' >
    <Card className="text-center" id='card1'>
      <Card.Header className="card-header">Mens</Card.Header>
      <Card.Body>
      <Card.Img variant="top" src="./Images/MensImage.jpg" alt="Card image" />

        {/* <Card.Title>Special title treatment</Card.Title>    
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
        {/* <Button variant="primary" className='btn'>Go somewhere</Button> */}
        <Button variant="primary" className='stylish-button'>Shop Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    <FooterBannerOne></FooterBannerOne>
    <FooterBannerTwo></FooterBannerTwo>
    <FooterBannerThree></FooterBannerThree>
    </div>
  );
}

export default HeaderAndFooterExample;