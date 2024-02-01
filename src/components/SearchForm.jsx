import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Wrapper from '../assets/wrappers/SearchForm'
const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form'>
      <Wrapper>
        <input
          type='search'
          className='form-input'
          name='search'
          id='search'
          defaultValue={searchTerm}
        />
        <button className='btn' disabled={isSubmitting}>
          {isSubmitting ? 'isSubmit' : 'Submit'}
        </button>
      </Wrapper>
    </Form>
  )
}

export default SearchForm
