import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Imagem1 from '../../../assets/pexels-garrettmorrow-1649771.jpg'
import Imagem2 from '../../../assets/carregador.jpg'
import Imagem3 from '../../../assets/headphone.jpg'
import { Container, Row, Col } from 'react-bootstrap';

import './style.css';

function CardProdutos() {

  return (

    <Container className='cardPosition'>

      <Row className='g4 rowCat'>

        <Col xs={4} className='p-o'>

          <Card className='cardStyle'>

              <Card.Img variant="top" src={Imagem1}  className='imagemCard'/>

              <Card.Body className='cardBody'>

              <Card.Title>Fone de ouvido </Card.Title>

              <Card.Text>

              R$ 129,90

              </Card.Text>

              <Button variant="primary">Comprar</Button>

            </Card.Body>

          </Card>

        </Col>

        <Col xs={4} className='p-o'>

          <Card className='cardStyle'>

              <Card.Img variant="top" src={Imagem2} className='imagemCard'/>

              <Card.Body className='cardBody'>

              <Card.Title>Carregador USB-C</Card.Title>

              <Card.Text>

              R$ 129,90

              </Card.Text>

              <Button variant="primary">Comprar</Button>

            </Card.Body>

          </Card>

        </Col>

        <Col xs={4} className='p-o'>

        <Card className='cardStyle'>

            <Card.Img variant="top" src={Imagem3} className='imagemCard'/>

            <Card.Body className='cardBody'>

            <Card.Title>Mini fone bluetooth</Card.Title>

            <Card.Text>

            R$ 129,90

            </Card.Text>

            <Button variant="primary">Comprar</Button>

          </Card.Body>

        </Card>

        </Col>
      </Row>

      
      



    </Container>
   
  );
}

export default CardProdutos;