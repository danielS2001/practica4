import React, { useState } from 'react';
import AddCategoria from './components/AddCategoria.js';
import { GifGrid } from './components/GifGrid.js';

export const GifExpertApp = () => {
    const  [categorias, setCategorias] = useState(['Milan'])

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategoria setCategorias= {setCategorias}/>
    <hr />

    <ol>
        {
        categorias.map( categoria => {
          return <GifGrid
            key = { categoria }
            categoria = { categoria }
          />
        })
        }
    </ol>
    </>
  )
}
