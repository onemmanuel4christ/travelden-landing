import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import TraveldenAffiliate from '../components/TraveldenAffiliate';
import Steps from '../components/Steps';
import { useLocation } from 'react-router-dom';
export default function Home() {
    const routePath = useLocation();

    const onTop = () => {
      window.scrollTo(0, 0);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);
  return (
    <>
      <Hero />
      <TraveldenAffiliate />
      <Steps />
    </>
  );
}
