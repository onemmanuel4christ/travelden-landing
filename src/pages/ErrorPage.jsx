import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
    const routePath = useLocation();

    const onTop = () => {
      window.scrollTo(0, 0);
    };
    useEffect(() => {
      onTop();
    }, [routePath]);
  return (
    <div className="h-[65vh] flex justify-center items-center flex-col">
      <h1 className="text-[2.5rem] font-bold my-10 ">404 Page not found</h1>
      <span>
        Go back
        <Link to="/" className="text-blue-600 text-[1rem] underline mx-3">Home</Link>
      </span>
    </div>
  );
}
