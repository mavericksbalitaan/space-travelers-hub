import React from 'react';
import github from '../assets/github.svg';
import './stylesheets/Footer.css';

function Footer() {
  return (
    <section className="footer">
      Copyright ©️ 2022
      <a href="https://github.com/mavericks-db">mavericks-db</a>
      <a href="https://github.com/leonard33">leonard33</a>
      <img className="footerImg" src={github} alt="github-logo" />
    </section>
  );
}

export default Footer;
