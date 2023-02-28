import React from 'react';
import ImagemMeioAmbiente from '../imgs/foto-meio-ambiente.jpg';

export function ConteudoPagPrincipal() {
  return (
    <div className="conteudoPagPrincipal">
        <h1>O que é meio ambiente?</h1>

            <p>
            Meio ambiente é definido como o conjunto de elementos e processos biológicos, químicos e físicos que orientam e criam as condições necessárias para a manutenção da vida no planeta Terra. Essa é uma das principais e mais abrangentes definições para o termo, utilizada tanto pela Organização das Nações Unidas (ONU) como pela legislação ambiental brasileira.

            Do ponto de vista da Geografia, o meio ambiente compreende também todo o espaço natural e o espaço geográfico, aquele espaço dinâmico que se encontra em processo de modificação pela ação antrópica. Assim, devemos levar em consideração que os seres humanos e a sua organização social e econômica são parte do meio ambiente, interagindo com ele e modificando-o de acordo com a sua necessidade</p>    

        <h2>Importância do meio ambiente</h2>

            <p>O meio ambiente é importante porque é dele que os seres humanos retiram os recursos essenciais para a manutenção da vida e do funcionamento da sociedade, especialmente em se tratando do desenvolvimento da economia no mundo. São esses recursos o ar, a água, os alimentos, as matérias-primas, utilizadas para a fabricação de outros alimentos, vestuário e itens básicos utilizados no nosso cotidiano.

            Os ciclos biogeoquímicos que regem o funcionamento das esferas do meio ambiente são fundamentais para a manutenção dos ecossistemas e, por conseguinte, de todas formas de vida presentes no planeta, o que inclui invariavelmente a espécie humana.</p>

                <img src={ImagemMeioAmbiente} alt="Foto Meio Ambiente"/>
        
    </div>
  )
}
