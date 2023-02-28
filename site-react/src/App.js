import logo from './logo.svg';
import './index.css';

import { PagPrincipal } from './components/PagPrincipal';
import { ConteudoPagPesquisa } from './components/ConteudoPagPesquisa';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';



export const App=()=> {

  return (

    <>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<>
                      <PagPrincipal/>
                      </>} />

          <Route exact path='/ConteudoPagPesquisa' element={<>
                      <ConteudoPagPesquisa/>                      
         
          </>

            } />
        </Routes>
      </BrowserRouter>
    
    </>


  );
};

