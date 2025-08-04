import Carousel from 'react-bootstrap/Carousel';

import celular from '../../../assets/celular.png';
import caneta from '../../../assets/penCell.png'
import servicos from '../../../assets/servicos.png'

import Button from 'react-bootstrap/Button';
import './style.css';

//SEMPRE IMPORTAR
import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselComponent() {
  return (
    <Carousel fade controls={false} indicators={true} className='carroselTop'>

      <Carousel.Item className='carrosel'>

        <div className="carrosel-conteudo">

          <div className="carrosel-texto">

            <h3>CORRA</h3>
            <h3>PARA </h3>
            <h3 className='h3Titulo'>A VITÓRIA</h3>

            <p>Explore nossa sessão de acessórios</p>

            <Button className='tituloButton'> Comprar agora</Button>
          </div>

          <img className='d-block imagemCarrosel' src={celular} alt='Slide celular' />
        </div>

      

      </Carousel.Item>

      <Carousel.Item className='carrosel'>

        <div className="carrosel-conteudo">

          <div className="carrosel-texto">

            <h3>CUIDAMOS</h3>
            <h3>DO SEU </h3>
            <h3 className='h3Titulo'>TECH</h3>

            <p>Explore nossa sessão de serviços</p>

            <Button className='tituloButton'> Comprar agora</Button>
          </div>
          
          <div>

            <img className='d-block imagemCarrosel' src={servicos} alt='Slide celular' />

          </div>

          
        </div>

      </Carousel.Item>

      <Carousel.Item className='carrosel'>

        <div className="carrosel-conteudo">

          <div className="carrosel-texto">

            <h3>ESCREVA</h3>
            <h3>COM</h3>
            <h3 className='h3Titulo'>ESTILO</h3>

            <p>Explore nossa sessão de papelaria</p>

            <Button className='tituloButton '> Comprar agora</Button>
          </div>

          <img className='d-block imagemCarrosel' src={caneta} alt='Slide celular' />
        </div>

      

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;