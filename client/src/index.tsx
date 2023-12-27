import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import { WatchListContextProvider } from './Context/watchlistContext';
import ScrollToTop from './utils/ScrollToTop';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <WatchListContextProvider>
          <BrowserRouter>
            <ScrollToTop>
              <Routes>
                <Route path='*' element={<App />} />
              </Routes>
            </ScrollToTop>
          </BrowserRouter>
        </WatchListContextProvider>
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
