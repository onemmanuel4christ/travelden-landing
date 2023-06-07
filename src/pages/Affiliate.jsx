import React, { useEffect } from 'react'
import Hero from '../components/Hero';
import { useLocation } from 'react-router-dom';

export default function Affiliate() {
    const routePath = useLocation();

    const onTop = () => {
      window.scrollTo(0, 0);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);
  return <>
  <Hero />
  </>;
}
