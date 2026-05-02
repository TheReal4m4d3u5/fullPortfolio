import React from 'react';
import ReactDOM, { createRoot  } from 'react-dom/client'; // Updated import
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import App from './App'; // Ensure path is correct
import './styles/styles.css';

import About from './pages/About';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/About',
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
