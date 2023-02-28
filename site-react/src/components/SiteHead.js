import React from 'react'
import ImagemPesquisa from '../imgs/meio-ambiente2.png';
import { Nav } from './Nav';

export const SiteHead=()=> {
  return (    
    <div className="cabecalho">

      <div id="tituloImg">

        <h1>Meio Ambiente &nbsp;</h1>  
        
        <img src={ImagemPesquisa} alt="Desenho Meio ambiente"/>
        </div>
        
    </div>
    
  );
}

