import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AuthProvider} from '../hooks/useAuth';
import AuthenticatedRoute from '../components/auth/AuthenticatedRoute';
import LoginForm from './Login';

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
          <Route path="/" element = {
              <AuthenticatedRoute>
              <HomePage/>
            </AuthenticatedRoute>
            }>
          </Route>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
  );
}

function HomePage() {
  return <><h2>Home</h2><p>home page</p></>;
}

export default App;