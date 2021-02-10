import React, { useState, useEffect } from "react";

import GlobalStyle from "./temas";

export default function Home() {
  const [isShow, setIsShow] = useState(false);

  const menuOn = () => {
    setIsShow(!isShow);
  };

  const [tema, setTema] = useState(false);

  const temaDark = () => {
    setTema(!tema);
  };

  useEffect(() => {
    return console.log("hello");
  }, [isShow]);

  return (
    <>
      <GlobalStyle />
      <div className={`${tema ? "offDark" : "onDark"}`}>
        <button onClick={temaDark}>mudar tema</button>
        <button onClick={menuOn}>menu</button>
        <div className={`${isShow ? "on-menu" : "off-menu"}`}>
          <ul>
            <li>
              <a className="sla" href="/post">
                home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
