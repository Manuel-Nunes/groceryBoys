import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from '@screen/App';
import App from './screens/App';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { ContextHandler } from './components/ContextHandler';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

root.render(
  <React.StrictMode>
    <ContextHandler>
      <RouterProvider router={ router } />
    </ContextHandler>
  </React.StrictMode>
  // <RouterProvider router={ router } />

);
