import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import hmb from '../../../assets/hmb.png'
import close from '../../../assets/close.png'

const Header: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');
  
  const headerLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'projects',
      title: 'Projects',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  return (
    <nav
      className={`sm:px-16 px-6 w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />

          {/* if you have text you want besides your logo it comes here.
          Otherwise delete this if you don't need it. */}
          {/* <img
            src={logotext}
            alt="logo"
            className="sm:w-[90px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.6rem] object-contain"
          /> */}
          yujaewu
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {headerLinks.map((content) => (
            <li
              key={content.id}
              className={`${
                active === content.title ? 'italic' : 'italic'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(content.title)}>
              <a href={`#${content.id}`}>{content.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {headerLinks.map((content) => (
                  <li
                    id={content.id}
                    key={content.id}
                    className={`${
                      active === content.title ? 'italic' : 'italic'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(content.title);
                    }}>
                    <a href={`#${content.id}`}>{content.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={hmb}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
