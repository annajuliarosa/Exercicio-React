import React from 'react'

import { useState } from 'react'
export const Formulario=()=> {
  
  const [name, setName] = useState();

  return (

    <div className="corpo">

      <h1>Pesquisa Meio Ambiente</h1>


      <h3>Seja bem vindo(a) {name}!</h3>

        <form>
            <p>Nome: <input required type={'text'} size="70" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/></p>
            <p>Telefone: <input required type={'number'} min="1000000000" max="99999999999" placeholder="(00)000000000" />
            &nbsp;Qual a sua idade?: <input required type={'number'} min="1" max="150" size="10"/></p>

            <label>Qual o seu nível de preocupação em relação a poluição do ar? &nbsp;</label>
              <p><input className="radios" type={'radio'} name="pAr" id="mp"/>
            <label htmlFor="mp">Muita preocupação &nbsp; &nbsp;</label>
              <input className="radios" type={'radio'} name="pAr" id="pm"/>
            <label htmlFor="pm">Preocupação moderada </label></p>
              <p><input className="radios" type={'radio'} name="pAr" id="pp"/>
            <label htmlFor="pp">Pouca Preocupação &nbsp; &nbsp;</label>
              <input className="radios" type={'radio'} name="pAr" id="np"/>
            <label htmlFor="np">Nenhuma Preocupação</label></p>

            <label>Em sua opinião, devem as leis do governo federal sobre a poluição ser mais rigorosas?</label>
              <p><input className="radios"type={'radio'} name="poluicao" id="mr"/>
            <label htmlFor="mr">Muito mais rigorosas &nbsp;</label>
              <input className="radios" type={'radio'} name="poluicao" id="pr"/>
            <label htmlFor="pr">Pouco rigorosas</label></p>
           <p><input className="radios" type={'radio'} name="poluicao" id="ra"/>
            <label htmlFor="ra">Rigorosas como agora</label>
              <input className="radios" type={'radio'} name="poluicao" id="nr"/>
            <label htmlFor="nr">Nada rigorosas</label></p>

            <label>Qual seria a probabilidade de comprar um produto mais caro, caso sua embalagem <br/>
            fosse mais amiga do meio ambiente?</label>
              <p><input className="radios" type={'radio'} name="emb" id="mpp"/>
            <label htmlFor="mpp">Muito provável &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;</label>
              <input className="radios" type={'radio'} name="emb" id="mdp"/>
            <label htmlFor="mdp">Moderadamente provável</label></p>
           <p><input className="radios" type={'radio'} name="emb" id="ppp"/>
            <label htmlFor="ppp">Pouco provável &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;</label>
             <input className="radios" type={'radio'} name="emb" id="npp"/>
            <label htmlFor="npp">Nada provável </label></p>       

            

            <input id="botao" type={'submit'} value="Enviar"/>
           

        </form>
    </div>
  )
}

