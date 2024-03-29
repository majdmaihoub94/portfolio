import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, logo, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleActive = () => {
    setActive("");
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={handleActive}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px]  font-bold cursor-pointer flex">
            Majd &nbsp; <span className="sm:block hidden">Maihoub</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li>
              <a
                href={`#${link.id}`}
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                }
              hover:text-white text-[18px] font-medium cursor-pointer
              `}
                onClick={() => setActive(link.title)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] absolute
          z-10 rounded-xl
           `}
          >
            <ul className="list-none flex flex-col justify-end items-start  gap-4">
              {navLinks.map((link) => (
                <li>
                  <a
                    href={`#${link.id}`}
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    }
              font-poppins text-[16px] font-medium cursor-pointer
              `}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
