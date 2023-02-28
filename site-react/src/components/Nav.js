import React from 'react'
import { PagPrincipal } from './PagPrincipal';
import { ConteudoPagPesquisa } from './ConteudoPagPesquisa';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


export  function Nav() {
  return (  
    
      <div className='menu'>
        <Link to='/'>Inicio</Link>
        <Link to='/ConteudoPagPesquisa'>Pesquisa</Link>
            
      </div>
       

  )
}
