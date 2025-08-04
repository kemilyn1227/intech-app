import { FaFacebookF } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { FaInstagram } from "react-icons/fa6";

import {Container, Nav} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

function Footer(){
    return(
        <footer className="foot text-white mt-5 py-3">

        <Container>
          <Nav className="justify-content-center">

            <FaXTwitter className="icons"/>
            <FaFacebookF className="icons"/>
            <FaInstagram className="icons"/>
        

            <Nav.Link href="#produtos" className="text-white">Produtos</Nav.Link>
            <Nav.Link href="#servicos" className="text-white">Serviços</Nav.Link>
            <Nav.Link href="#contatos" className="text-white">Contatos</Nav.Link>
          </Nav>
        </Container>

      </footer>
    )

}

export default Footer;