import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const endpoint = 'api/user/login';
const API = process.env.REACT_APP_BACKEND_API + endpoint;
const headerOptions = {
  'Content-Type': 'application/json',
};

type LoginResponse = {
  error: string;
};

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<null | Boolean>(null);
  const { dispatch } = useAuthContext();

  const login = async (username: String, password: String) => {
    setIsLoading(true);
    setError(null);
    const response = await fetch(API, {
      method: 'POST',
      headers: headerOptions,
      body: JSON.stringify({ username, password }),
    });

    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage using the jwt token
      localStorage.setItem('user', JSON.stringify(json));
      // update the auth context using useAuthContext hook
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    }
  };
  return { login, isLoading, error };
};
