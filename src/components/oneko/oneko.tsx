"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Oneko = () => {
  const pathname = usePathname();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(pathname === "/");
    if (pathname !== "/") {
      const cat = document.getElementById("oneko");
      if (cat) {
        cat.remove();
      }
    }else{
      const cat = document.getElementById("oneko");
      if (!cat) {
        const script = document.createElement("script");
        script.src = "/oneko/oneko.js";
        script.dataset.cat = "/oneko/oneko.gif";
        document.body.appendChild(script);
      }
    }
  }, [pathname]);

  if (!isHome) return null;

  return <Script src="/oneko/oneko.js" data-cat="/oneko/oneko.gif" />;
};

export default Oneko;
