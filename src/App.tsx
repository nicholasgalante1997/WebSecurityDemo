import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CSRFProvider } from './contexts';

import './App.css';
import { HomePage, Login } from './components';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/login',
    element: <Login />
  }
]);

function App() {
  const [client] = React.useState(() => new QueryClient());
  return (
    <CSRFProvider>
      <QueryClientProvider client={client}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </CSRFProvider>
  );
}

export default App;
