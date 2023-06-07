import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
export default function Header() {
    const [scroll, setScroll] = useState(false);

  const routePath = useLocation();
      const onTop = () => {
        window.scrollTo(0, 0);
      };
     useEffect(() => {
       onTop();
     }, [routePath]);
    
     useEffect(() => {
       const addBorder = () => {
         if (window.scrollY >= 100) {
           setScroll(true);
         } else {
           setScroll(false);
         }
       };
       window.addEventListener("scroll", addBorder);
     });
  return (
    <header
      className={
        scroll
          ? "w-full h-[100px] px-[5rem] sticky top-0 left-0 bg-[#FFFFFFE5] shadow-sm transition-all"
          : "w-full h-[100px] px-[5rem] sticky top-0 left-0 bg-[#ffffff72]"
      }
    >
      <nav className="flex justify-between items-center py-[1rem]">
        <img src="/images/logo.png" alt="logo-here" />
        <ul className="flex gap-10">
          <li>Home</li>
          <li>Our Affiliates</li>
          <li>Contact Us</li>
        </ul>
        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
    </header>
  );
}
