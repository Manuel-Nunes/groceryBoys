import './global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  AuthProvider
} from './hooks/useAuth';

import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';

import {
  ContextHandler
} from './components/ContextHandler';

import AuthenticatedRoute from './components/auth/AuthenticatedRoute';
import RegisterPage from './screens/Register';
import LoginForm from './screens/Login';

import UiTest from './screens/UiTest';
import LandingPage from './screens/LandingPage';
import AddEntryPage from './screens/AddEntry';
import ItemMamagement from './screens/ItemManagement';

const root = ReactDOM.createRoot(
  document.getElementById( 'root' ) as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <ContextHandler>
        <BrowserRouter>
          <Routes>
            <Route path="/dev" element={<ItemMamagement/>} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/addEntry" element={
              <AuthenticatedRoute>
                <AddEntryPage />
              </AuthenticatedRoute>
            }/>
            <Route path="/" element={
              <AuthenticatedRoute>
                <LandingPage />
              </AuthenticatedRoute>
            }>
            </Route>
            <Route path="/list" element={
              <AuthenticatedRoute>
                <UiTest />
              </AuthenticatedRoute>
            }>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextHandler>
    </AuthProvider>
  </React.StrictMode>
);
