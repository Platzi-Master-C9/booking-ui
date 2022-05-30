import React from 'react';
// Styles
import '../../assets/styles/Footer.scss';

const Footer = () => {
  // Variables
  const tags = [
    {
      title: 'Sobre nosotros',
      link: '/home',
    },
    {
      title: 'Propósito del proyecto',
      link: '/home',
    },
    {
      title: 'Redes sociales',
      link: '/home',
    },
  ];

  return (
    <section className="footer">
      {tags
        ? tags.map((e, position) => (
            <a key={position} className="footer__link" href={e.link}>
              {e.title}
            </a>
          ))
        : null}
    </section>
  );
};

export default Footer;
