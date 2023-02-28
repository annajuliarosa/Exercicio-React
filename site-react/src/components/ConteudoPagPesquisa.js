import React from 'react'
import { SiteHead } from './SiteHead'
import { Formulario } from './Formulario'
import { SiteFooter } from './SiteFooter'
import { Nav } from './Nav'

export function ConteudoPagPesquisa() {
  return (

    <div>
      <SiteHead/>
      <Nav />
      <Formulario/>
      <SiteFooter />


    </div>
  )
}
