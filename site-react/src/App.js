import './index.css';
import { PagPrincipal } from './components/PagPrincipal';
import { ConteudoPagPesquisa } from './components/ConteudoPagPesquisa';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import {PagEnviado} from './components/PagEnviado';



export const App=()=> {

  return (

    <>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<>
                      <PagPrincipal/>
                      </>} />

          <Route exact path='/ConteudoPagPesquisa' element={<>
                      <ConteudoPagPesquisa /> </> } />


            <Route exact path='/PagEnviado' element={ <>
                      <PagEnviado  /> </> } />                       
         
         </Routes>
          

      
      </BrowserRouter>
    
    </>


  );
};

