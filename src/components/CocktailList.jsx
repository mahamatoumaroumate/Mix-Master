import React from 'react'
import CocktailCard from './CocktailCard'
import Wrapper from '../assets/wrappers/CocktailList'
import { useOutletContext } from 'react-router-dom'
const CocktailList = ({ drinks }) => {
  const globalValue = useOutletContext()
  //console.log(globalValue)
  if (!drinks) {
    return <h2 style={{ textAlign: 'center' }}>Drinks No Found</h2>
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item
    return {
      id: idDrink,
      image: strDrinkThumb,
      name: strDrink,
      info: strAlcoholic,
      glass: strGlass,
    }
  })
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item}></CocktailCard>
      })}
    </Wrapper>
  )
}
export default CocktailList
