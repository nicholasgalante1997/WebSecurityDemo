import React from 'react';
import { useGetUser } from '../hooks/useGetUser';
import { useNavigate } from 'react-router';

function HomePage() {
  const { isLoading, isError, data } = useGetUser();
  const navigate = useNavigate();

  if (!isLoading && !isError && data == null) {
    navigate('/login');
  }

  if (isLoading) {
    return <div id="spinner" />;
  }

  if (isError) {
    return <div id="error">Check logs</div>;
  }

  return <div className="homepage"></div>;
}

export default React.memo(HomePage);