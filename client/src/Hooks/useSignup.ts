import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

const endpoint = 'api/user/signup/'
const API = process.env.REACT_APP_BACKEND_API + endpoint

interface SignUpError {
  error: string;
}

export const useSignUp = () => {
  const [error, setError] = useState<SignUpError | null>(null)
  const [isLoading, setIsLoading] = useState<boolean | null>(null)
  const { dispatch } = useAuthContext()

  const signUp = async (username: String, password: String) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    const json = await response.json()
    
    if (!response.ok) {
      setIsLoading(false)
      setError(json as SignUpError)
    }
    if (response.ok) {
      // save the user to local storage using the jwt token.
      setIsLoading(false)
      localStorage.setItem('user', JSON.stringify(json))
      // update the auth context using useAuthContext hook
      dispatch({ type: 'LOGIN', payload: json })
    }
  }

  return { signUp, isLoading, error }
}