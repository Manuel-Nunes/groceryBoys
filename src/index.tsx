import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './hooks/useAuth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './components/auth/AuthenticatedRoute';
import RegisterPage from './screens/Register';
import LoginForm from './screens/Login';
import App from './screens/App';

import { ContextHandler } from './components/ContextHandler';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <AuthProvider>
      <ContextHandler>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route 
              path="/"
              element = {
                <AuthenticatedRoute>
                  <App/>
                </AuthenticatedRoute>
              }>
            </Route>
          </Routes>
        </BrowserRouter>
      </ContextHandler>
    </AuthProvider>
  </React.StrictMode>
  // <RouterProvider router={ router } />

);
