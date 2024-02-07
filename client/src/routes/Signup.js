import React, { useContext, useState } from 'react'
import { UserContext } from '../context/user'

export default function Signup() {
    const { user, signup } = useContext( UserContext )

    console.log( 'current', user)

    const [ userData, setUserData ] = useState( {
        email: '',
        username: '',
        password: '',
        password_confirmation: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = { ...userData }
        signup( newUser )
    }

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserData({ ...userData, [name]: value })
    }

  return (
    <div className='signup'>
        <form onSubmit={ handleSubmit }>
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={ userData.email }
                onChange={ handleChange }
            />

            <input
                type='text'
                name='username'
                placeholder='Username'
                value={ userData.username }
                onChange={ handleChange }
            />

            <input
                type='text'
                name='password'
                placeholder='Password'
                value={ userData.password }
                onChange={ handleChange }
            />

            <input
                type='text'
                name='password_confirmation'
                placeholder='Confirm Password'
                value={ userData.password_confirmation }
                onChange={ handleChange }
            />

            <button type='submit' > Welcome! </button>
        </form>
    </div>
  )
}
