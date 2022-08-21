import React from 'react'
import "./FilmsCard.css"

const FilmsCard = ({film}) => {
  return (
    <div className='card'>
        <img src= {film.image}  alt={film.director}/>
        <h2><b>Director:</b> {film.director}</h2>
        <h3><b>Producer:</b> {film.producer}</h3>
        <p>{film.description}</p>
    </div>
  )
}

export default FilmsCard