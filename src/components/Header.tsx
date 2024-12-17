import React from 'react';
import { Menu, X } from './icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = ['About', 'Projects', 'Skills', 'Achievements', 'Experience', 'Education', 'More', 'Contact'];
  return (
    <header className="fixed w-full backdrop-blur-xl z-50 shadow-[0px_0.4px_0px_0px_rgba(250,200,146,0.4)]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold bg-white bg-clip-text text-transparent">
            Akhil Reddy Gaddam
          </h1>
          
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 text-[17px] hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="lg:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-300 hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;