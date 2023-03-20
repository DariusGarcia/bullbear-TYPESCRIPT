import React, {
  createContext,
  useReducer,
  useMemo,
  ReactNode,
  useCallback,
} from 'react';

type Stock = {
  ticker: string;
  _id: string;
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

export const WatchlistContext = createContext<ContextType>({
  watchlist: [],
  dispatch: () => {},
});

export const watchlistReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'SET_WATCHLIST':
      return {
        ...state,
        watchlist: action.payload,
      };
    case 'ADD_STOCK':
      return {
        watchlist: [action.payload, ...state.watchlist],
      };
    case 'DELETE_STOCK':
      return {
        ...state,
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

  const memoizedDispatch = useCallback(dispatch, []);

  const contextValue = useMemo(
    () => ({ watchlist: state.watchlist, dispatch }),
    [state.watchlist, memoizedDispatch]
  );

  return (
    <WatchlistContext.Provider value={contextValue}>
      {children}
    </WatchlistContext.Provider>
  );
};
