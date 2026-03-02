import React from 'react'
import "./Card.css"

const Card = ({image, image_alt, title, description}) => {
  return (
    <div className='card'>
        <img src={image} alt={image_alt} />
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Card