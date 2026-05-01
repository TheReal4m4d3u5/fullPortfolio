import React from 'react';
import ReactDOM, { createRoot  } from 'react-dom/client'; // Updated import
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import App from './App'; // Ensure path is correct
import './styles/styles.css';

import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
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
      {
        path: '/Contact',
        element: (
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
        ),
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
