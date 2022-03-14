import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({categoria}) => {

  const { data:imagenes, loading } = useFetchGifs(categoria);

  return (
    <>
    <h3>{ categoria }</h3>

    { loading ? <p className="animate__animated animate__flash">Cargando...</p> : "Data cargada" }
    <div className="card-grid">
        
        {
          imagenes.map(img => (
            <GifGridItem 
            key = { img.id }
            { ...img }
            />
          ))
        }
    </div>
    </>
  )
}
