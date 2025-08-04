import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

function Categorias(){

    return(
        
        <div className='divPrincipal'>

           <h1>ENCONTRE SEU</h1>
           <h1>CARREGADOR </h1>
           <h1>IDEAL </h1>
           <p>Explore nossa ampla gama de carregadores modernos e eficientes</p>

           <div className='categoria d-flex'>

                <Button className='buttonCat buttonActive'>Iphone</Button>
                <Button className='buttonCat'>Motorola</Button>
                <Button className='buttonCat'>Xiomi</Button>
                <Button className='buttonCat'>Carregadores</Button>
                <Button className='buttonCat'>Outras</Button>

            </div>    
        </div>
    )

}

export default Categorias;