import React from 'react';

function SettingsButton({ text, src, href, cb }) {
  return (
    <a href={href} className="header__button" onClick={cb}>
      <img src={src} alt="" />
      { text && (<p>{text}</p>)}
    </a>
  );
}

export default SettingsButton;
