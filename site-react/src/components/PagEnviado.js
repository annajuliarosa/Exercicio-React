import React from 'react'
import { SiteHead } from './SiteHead'
import { Nav } from './Nav'
import { SiteFooter } from './SiteFooter'
import Swal from 'sweetalert2'
import ImgMeioAmbiente from '../imgs/img-ar.jpg'

export function PagEnviado() {

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Pesquisa enviada com sucesso!',
        showConfirmButton: false,
        timer: 1500
      })

  return (
    
    <>
    <SiteHead/>
      <Nav />

    <div className="pagEnv">

      <h1>Dados recebidos com sucesso!</h1>

      <h2>Obrigado por contribuir com o meio ambiente!</h2>

      <img src={ImgMeioAmbiente} alt="Imagem Meio ambiente"/>
    
    </div>



      <SiteFooter />

    </>
  )
}
