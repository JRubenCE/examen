import React, { useEffect } from 'react';

const socialLinks = ['facebook', 'instagram', 'twitter', 'github', 'dribbble'];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="policy-links">
          <li><a href="#">Términos & Condiciones</a></li>
          <li><a href="#">Política de Privacidad</a></li>
        </ul>
        <ul className="social-links">
          {socialLinks.map((name) => (
            <li key={name}>
              <a href="#" target="_blank" title={name}>
                <img src={`../img/${name}.png`} alt={name} style={{ width: '30px', height: '30px' }} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
