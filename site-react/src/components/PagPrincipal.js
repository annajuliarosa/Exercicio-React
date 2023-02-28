import React from 'react'

import { SiteHead } from './SiteHead'
import { Nav } from './Nav'
import {ConteudoPagPrincipal} from './ConteudoPagPrincipal'
import { SiteFooter } from './SiteFooter'

export function PagPrincipal() {

  return (

    <div>
      <SiteHead/>
      <Nav />
      <ConteudoPagPrincipal/>
      <SiteFooter />

    </div>
  )
}
