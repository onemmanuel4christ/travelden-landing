import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const routePath = useLocation();

    const onTop = () => {
      window.scrollTo(0, 0);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Contact
