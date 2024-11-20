import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './socialLinks.css';

const SocialLinks = () => {
  const links = [
    {
      name: 'Telegram',
      url: 'https://t.me/your_channel',
      icon: (
        <StaticImage
          src="../../images/icons/Telegram_logo.svg.webp"
          alt="Telegram"
          className="social-icon"
        />
      ),
    },
    {
      name: 'Viber',
      url: 'viber://pa?chatURI=your_channel',
      icon: (
        <StaticImage
          src="../../images/icons/viber.svg"
          alt="Viber"
          className="social-icon"
        />
      ),
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/your_profile',
      icon: (
        <StaticImage
          src="../../images/icons/Instagram.svg.png"
          alt="Instagram"
          className="social-icon"
        />
      ),
    },
  ];

  return (
    <div className="social-links">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {link.icon}
          <span className="social-name">{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;