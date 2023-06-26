import React, { useState } from "react";
// import logo from '../../../assets/logo.png'
import close from '../../../assets/close.png'
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
    <header css={css({
      position: "relative",
      left: 0,
      top: 0,
      width: "100%",
      height: "80px",
      backgroundColor: "rgb(25,25,25)",
  })}>
      <div css={css({
        display: "flex"
      })}>
        <div className="DescBig">
            yujaewu
        </div>
        <nav>
          <ul css={css({
            display: "flex",
            listStyle: "none"
          })}>
            {headerLinks.map((el:{id:string, title:string})=>{
              return (
                <li css={css({
                  marginLeft: "30px"
                })}>
                    <p className="Desc">{el.title}</p>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
