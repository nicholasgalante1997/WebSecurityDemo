import React from 'react';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import QueryParamSite from './QPSite';
import FormSite from './FormSite';

import './App.css';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Link to="/sites/query">QP.me</Link>
        <Link to="/sites/form">Live Update Blog</Link>
      </div>
    )
  },
  {
    path: 'sites/query',
    element: <QueryParamSite search={window.location.search} />
  },
  {
    path: 'sites/form',
    element: <FormSite />
  }
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
