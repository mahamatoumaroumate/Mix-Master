import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import img from '../assets/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt='not-found' />
        <h3>Ohh!</h3>
        <p>We Can't seem to find page you are looking for</p>
        <Link to='/'>Back Home</Link>
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <h1>Something Went wrong</h1>
      </Wrapper>
    )
  }
}

export default Error
