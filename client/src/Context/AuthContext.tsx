import { createContext, useReducer, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  password: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface AuthContextType extends AuthState {
  dispatch: React.Dispatch<AuthAction>;
}

interface AuthAction {
  type: 'LOGIN' | 'LOGOUT';
  payload?: User;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload || null,
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

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  console.log('AuthContext state', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
