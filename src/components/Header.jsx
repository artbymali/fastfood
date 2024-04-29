import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function Header() {
  const date = [
    {
      Home: "/",
      About: "/about",
      Blog: "/blog",
      Shop: "/shop",
    },
  ];
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolled, setIsScrolled] = useState(true); 


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolled(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);



  return (
    <motion.header
      initial={{ y: isScrolled ? 0 : -100 }}
      animate={{ y: isScrolled ? 0 : -100 }}
      transition={{ duration: 0.5 }}
      className="bg-white mx-[20px] rounded-[40px] py-[10px]  px-[20px] md:px-[40px] flex items-center justify-between  "
    >
      <img src="/logo.png" className="w-20 md:hidden " alt="logo" />
      <nav className="hidden md:flex items-center space-x-10 flex-1 pl-[30px]">
        {Object.keys(date[0]).map((key) => (
          <a
            href={date[0][key]}
            key={key}
            className="text-black font-semibold cursor-pointer hover:text-[#E84242] transition-all duration-100  uppercase ease-in-out"
          >
            {key}
          </a>
        ))}
      </nav>

      <button className="flex items-center font-semibold md:text-[16px] text-[12px] text-primary md:py-[16px] py-[12px] md:px-[35px] px-[10px]  border-[2px] border-primary border-solid rounded-[50px] outline-none bg-none cursor-pointer transition-all duration-100 ease-in-out ">
        VIEW FULL MENU
      </button>
    </motion.header>
  );
}

export default Header;
