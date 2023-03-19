import React, { createContext, useReducer, useMemo, ReactNode } from 'react';

type Stock = {
  _id: string;
  symbol: string;
};

type State = {
  watchlist: Stock[] | [];
};

type Action =
  | { type: 'SET_WATCHLIST'; payload: Stock[] }
  | { type: 'ADD_STOCK'; payload: Stock }
  | { type: 'DELETE_STOCK'; payload: Stock };

type ContextType = {
  watchlist: Stock[] | [];
  dispatch: React.Dispatch<Action>;
};

type Props = {
  children: ReactNode;
};

export const WatchlistContext = createContext<ContextType | null>(null);

export const watchlistReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_WATCHLIST':
      return {
        watchlist: action.payload ,
      };
    case 'ADD_STOCK':
      return {
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'DELETE_STOCK':
      return {
        watchlist: state.watchlist.filter((w) => w._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const WatchListContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(watchlistReducer, {
    watchlist: [],
  });

  const data = useMemo(() => ({ watchlist: state.watchlist, dispatch }), [
    state.watchlist,
    dispatch,
  ]);

  return (
    <WatchlistContext.Provider value={data}>
      {children}
    </WatchlistContext.Provider>
  );
};