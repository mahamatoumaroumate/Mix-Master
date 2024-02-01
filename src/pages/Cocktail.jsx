import React from 'react'
import {
  useLoaderData,
  useRouteLoaderData,
  Link,
  useNavigate,
  Navigate,
} from 'react-router-dom'
import Wrapper from '../assets/wrappers/SingleCocktail'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export const loader = (queryClient) => async (valueId) => {
  const { id } = valueId.params
  await queryClient.ensureQueryData(singleCocktailQuery(id))

  return { id }
}
const Cocktail = () => {
  const { id } = useLoaderData()
  const navigate = useNavigate()
  const { data } = useQuery(singleCocktailQuery(id))
  const drinks = data.drinks

  if (!drinks) return <Navigate to='/'></Navigate>
  const drink = drinks[0]

  const {
    strDrink: name,
    strAlcoholic: info,
    strDrinkThumb: img,
    strGlass: glass,
    strCategory: category,
    strInstructions: instructions,
  } = drink
  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((ingredient) => drink[ingredient])

  return (
    <>
      <header style={{ textAlign: 'center' }}>
        <Link className='btn' to='/' style={{ marginBottom: '1rem' }}>
          Back Home
        </Link>
        <h2>{name}</h2>
      </header>
      <Wrapper>
        <div className='single-drink-container'>
          <div className='img-container'>
            <img src={img} alt={name} className='img' />
          </div>
          <div className='info-container'>
            <p>
              <span className='drink'>Name :</span>
              {name}
            </p>
            <p>
              <span className='drink'>Category :</span>
              {category}
            </p>
            <p>
              <span className='drink'>Info :</span>
              {info}
            </p>
            <p>
              <span className='drink'>Cocktail Glass :</span>
              {glass}
            </p>
            <p className='ingredients'>
              <span className='drink '>Ingredients :</span>
              {ingredients.map((item, index) => {
                return index == 0 || index === ingredients.length
                  ? item
                  : ', ' + item
              })}
            </p>
            <p>
              <span className='drink'>Instructions :</span>
              {instructions}
            </p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Cocktail
