import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from 'react-icons/fa';

import './style.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

function NavScroll() {

  const [procurar, setProcurar] = useState(false);

  function procurarOnOff() {
    console.log('clicou na lupa');
    setProcurar(!procurar); // alterna entre true e false
  }


  return (
    <Navbar expand="lg" className='navSticky'>
      <Container fluid>

        <Navbar.Brand href="#" className=' fw-bold shadow-text text-white fs-1' >Intech</Navbar.Brand>
        
        <Nav.Link href="#action1" className='text-white'>Produtos</Nav.Link>
        <Nav.Link href="#action2" className='text-white'>Servicos</Nav.Link>
        <Nav.Link href="#action2" className='text-white'>Contato</Nav.Link>

        <FaSearch className='text-white me-2 lupa-icone' size={20} onClick={procurarOnOff}/>

        <Navbar.Toggle aria-controls="navbarScroll" className='toggle-branco'/>
        
        <Navbar.Collapse id="navbarScroll" className='text-white'>

          <Nav
            className="me-auto my-2 my-lg-0 text-white"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white'>Capinhas</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Carregadores</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Reparos</Nav.Link>
            <Nav.Link href="#action2" className='text-white'>Fones </Nav.Link>
            
          </Nav>

       
        </Navbar.Collapse>

        {procurar && (

          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 text-white"
            aria-label="Search"
          />
          <Button variant="outline-success" onClick={procurarOnOff}>Search</Button>
          </Form>

          )}
      </Container>
    </Navbar>
  );
}

export default NavScroll;