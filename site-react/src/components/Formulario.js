import React from 'react'

import { useState } from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import TelefoneBrasileiroInput from "react-telefone-brasileiro";
import {useNavigate} from "react-router-dom"
import Swal from 'sweetalert2'

export const Formulario=()=> {

  
  const [name, setName] = useState();
  const [idade, setIdade] = useState();
  const [telefone, setTelefone] = useState("")
  
  const navigate = useNavigate()

  const enviarPag = (e) => {

    if (name===undefined || idade===undefined) {
      
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Campo vazio!',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
       console.log({name})

    e.preventDefault()

   
    navigate('/PagEnviado')
    
    }
   
    }

      const limpar = () =>{
        setTelefone('')
      }

 
  interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
  }
  
  const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ theme, checked }) => ({
    '.MuiFormControlLabel-label': checked && {
      color: theme.palette.primary.main,
    },
  }));
  
  function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  return (

    <div className="corpo">

      <h1>Pesquisa Meio Ambiente</h1>
     
      <h3>Seja bem vindo(a) {name}!</h3>

        <form>                     

            <TextField fullWidth label="Nome:" id="nome" required onChange={(e) => setName(e.target.value)}/> 

            <div className="textos">   

              <p><TelefoneBrasileiroInput required className="telefone" placeholder="Telefone:" value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                temDDD /> &nbsp; </p>
                <input required type="number" className="telefone" name="idade"  placeholder="Idade:" onChange={(e) => setIdade(e.target.value)}/>
        
            </div>

            <label>Qual o seu n??vel de preocupa????o em rela????o a polui????o do ar?</label>
              
            <div className="radios">
              <RadioGroup name="use-radio-group" defaultValue="Muita preocupa????o">
               <p><MyFormControlLabel value="Muita preocupa????o" label="Muita preocupa????o" control={<Radio />} /> &nbsp; 
                <MyFormControlLabel value="Preocupa????o moderada " label="Preocupa????o moderada " control={<Radio />}/></p> 
                <p> <MyFormControlLabel value="Pouca Preocupa????o" label="Pouca Preocupa????o" control={<Radio />}/>
                <MyFormControlLabel value="Nenhuma Preocupa????o" label="Nenhuma Preocupa????o" control={<Radio />}/></p>
              </RadioGroup>
              </div>

            <label>Em sua opini??o, devem as leis do governo federal sobre a polui????o ser mais rigorosas?</label>  

           <div className="radios">
            <RadioGroup name="use-radio-group" defaultValue="Muito mais rigorosas"> 
                <p><MyFormControlLabel value="Muito mais rigorosas" label="Muito mais rigorosas" control={<Radio />} />&nbsp; &nbsp; 
                <MyFormControlLabel value="Pouco rigorosas" label="Pouco rigorosas" control={<Radio />} /></p>
                <p><MyFormControlLabel value="Rigorosas como agora" label="Rigorosas como agora" control={<Radio />} />
                <MyFormControlLabel value="Nada rigorosas" label="Nada rigorosas" control={<Radio />} /></p>
              </RadioGroup>
            </div>

            <label>Qual seria a probabilidade de comprar um produto mais caro, caso sua embalagem <br/>
            fosse mais amiga do meio ambiente?</label>              

            <div className="radios">
            <RadioGroup name="use-radio-group" defaultValue="Muito prov??vel">
                <p><MyFormControlLabel value="Muito prov??vel" label="Muito prov??vel" control={<Radio />} />&nbsp;  
                <MyFormControlLabel value="Moderadamente prov??vel" label="Moderadamente prov??vel" control={<Radio />} /></p>
                <p><MyFormControlLabel value="Pouco prov??vel" label="Pouco prov??vel" control={<Radio />} />
                <MyFormControlLabel value="Nada prov??vel" label="Nada prov??vel" control={<Radio />} /></p>
              </RadioGroup>
            </div>

            <div className="botoes">

 
           <Button id="botao" variant="contained" type={'submit'} onClick={enviarPag} >Enviar</Button>
          
            <Button id="botao2" variant="outlined" type={'reset'} onClick={limpar}>Limpar</Button>
            </div>

        </form>
        
    </div>
  )
}

