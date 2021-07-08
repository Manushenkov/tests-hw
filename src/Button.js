import "./styles/Button.sass";
import React from 'react';

function Button({ text, href, className, onClick }) {
  return (
    <a href={href} className={className} onClick={onClick}> 
      <p>{text}</p>
    </a>
  );
}

export default Button;
