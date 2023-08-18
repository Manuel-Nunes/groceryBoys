import React from 'react';
import ReactDOM from 'react-dom/client';

// import App from '@screen/App';
import App from './screens/App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);