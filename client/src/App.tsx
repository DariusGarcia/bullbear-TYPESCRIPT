import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './Hooks/useAuthContext';

import './App.css';

// pages & components
import Landing from './Pages/Landing';
import Dashboard from './Pages/dashboard';
import Market from './Pages/Market';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/Layout/footer';

export default function App(): JSX.Element {
  const { user } = useAuthContext();

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/market" element={<Market />} />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/dashboard" />}
          />
          <Route
            path="/dashboard"
            element={
              !user ? (
                <Navigate to="/dashboard" />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/dashboard" />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
