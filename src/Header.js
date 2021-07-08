import SettingsButton from "./SettingsButton";
import "./styles/Header.sass";
import React from 'react';

function Header({title, buttons}) {

  return (
    <header className="App__header">
      <div className="container">
        <h1>{title}</h1>
        <div className="header__buttons">
          {buttons && buttons.map(({ text, src, href, cb }) => (
            <SettingsButton text={text} src={src} href={href} cb={cb}/>
          ))}
        </div>
      </div>
    </header>
  );
}
export default Header;
