import React from 'react'
import GetInTouch from '../components/GetInTouch';
import GetStarted from '../components/GetStarted';
import Header from '../components/Header';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from './Dashboard';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    {!isAuthenticated &&(
      <>
      <Header />
      <GetStarted />
      <GetInTouch />
    </>
    )}
    {isAuthenticated && (
      <Dashboard />
    )}
    </>

  )
}

export default Home