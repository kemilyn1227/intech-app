import React from 'react';
import ReactDOM from 'react-dom/client';
import CarouselComponent from './components/header/carrosel/index';
import './index.css';
import  NavScroll from './components/header/navbar/index';
import CardCatalog from './components/card/index';
import Footer from './components/footer/index';
import Categorias from './components/produtos/categoria/index';
import ProdutosCard from './components/produtos/produtosCard/index';
import ReparosPage from './components/Reparos/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className='principal novaSessao'>

     <NavScroll/>

      <div className="novaSessao">

     
        <CarouselComponent/>
        <CardCatalog/>


      </div>

      <div className="novaSessao">

        <Categorias/>
        <ProdutosCard/>

      </div>
    

      <div className="novaSessao">
        <ReparosPage/>
        <Footer/>
        
      </div>
      
     

     </div>
  </React.StrictMode>
);

