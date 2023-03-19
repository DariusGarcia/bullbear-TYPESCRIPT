import React, { createContext, useReducer, useEffect, ReactNode } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
}

interface AuthAction {
  type: string;
  payload?: any;
}

interface AuthContextType extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  dispatch: () => {},
});

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    isAuthenticated: false,
    // token: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };