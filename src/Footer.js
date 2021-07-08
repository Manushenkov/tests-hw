/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles/Footer.sass";
import React from 'react';

function Footer() {
  return (
    <footer className="App__footer">
      <div className="container">
        <div className="footer__links">
          <a href="#">Support</a>
          <a href="#">Learning</a>
          <a href="#">Русская версия</a>
        </div>
        <p className="footer__copyright">© 2020 Your Name</p>
      </div>
    </footer>
  );
}

export default Footer;
