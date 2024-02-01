import React from 'react'
import Wrapper from '../assets/wrappers/CocktailCard'
import { Link } from 'react-router-dom'
const CocktailCard = ({ id, image, name, info, glass }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='info-container'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`cocktail/${id}`}>Details</Link>
      </div>
    </Wrapper>
  )
}

export default CocktailCard
