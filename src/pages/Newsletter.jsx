import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter'
import axios from 'axios'
export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    const response = await axios.post(newsletterUrl, data)
    toast.success(response.data.msg)
    return redirect('/')
  } catch (error) {
    toast.error(error?.response?.data.msg)
    return error
  }
}
const Newsletter = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <Form className='form' method='post'>
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Our NewsLetter
      </h4>
      <div className='form-row'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          required
          className='form-input'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='lastName' className='form-label'>
          Last Name
        </label>
        <input
          type='text'
          name='lastName'
          id='lastName'
          required
          className='form-input'
        />
      </div>
      <div className='form-row'>
        <label htmlFor='email' className='form-label'>
          Email
        </label>
        <input
          type='text'
          name='email'
          id='email'
          defaultValue='test@test.com'
          required
          className='form-input'
        />
      </div>
      <button className='btn btn-block' disabled={isSubmitting}>
        {isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </Form>
  )
}

export default Newsletter
