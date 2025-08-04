import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import { FaArrowRight } from "react-icons/fa";

import Imagem1 from '../../assets/celCard.png'
import Imagem2 from '../../assets/foneCard.png'


function CardCatalog() {
  return (
    <Container className="my-2">
      
      <Row className='g-4'>
        
        <Col xs={4} className='pl-1'>

          <Card  className='cardProduct'>
 
            <div  className='divImagem'>

              <Card.Img variant="top" src={Imagem1} className='cardImage'/>

            </div>

            
            <Card.Body className='cardBody'>

              <Card.Title className='tittle'>Acessórios</Card.Title>
              <Card.Text className='fs-6'>Explore nossa selecao de acessorios</Card.Text>
              
            </Card.Body>

          </Card>
        </Col>

        <Col xs={4}className='pl-1'>

          <Card  className='cardProduct'>

            <div className='divImagem'>

             <Card.Img variant="top" src={Imagem2} className='cardImage'/>

            </div>

            
            <Card.Body className='cardBody'>
                
              <Card.Title className='tittle'>MAINTENANCE</Card.Title>
              <Card.Text className='text'>encontre selecoes de reparo para telefone</Card.Text>
             
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4} className='p-0'>

          <Card  className='cardProduct promocaoCard'>

            <Card.Body>

              <Card.Title className='fs-2'>20% OFF</Card.Title>
              <Card.Text className='fs-4'>Em carregadores</Card.Text>
              
              <FaArrowRight color='orange' className='flecha'/>

            </Card.Body>
          </Card>
        </Col>
      </Row>


    <h1 className='pt-3'>Os melhores acessórios para elevar sua experiência.</h1>
    </Container>

  );
}

export default CardCatalog;
