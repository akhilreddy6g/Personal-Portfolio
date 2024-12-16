import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default SocialLink;