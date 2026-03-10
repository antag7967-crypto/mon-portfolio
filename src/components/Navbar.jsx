import React, { useState } from 'react';

const Navbar = ({toggleDarkMode, darkMode}) => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Anta Gueye</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          ☰
        </button>
        <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-slate-900 p-4 md:p-0`}>
          <li><a href="/" className="block py-2 hover:text-blue-400">Accueil</a></li>
          <li><a href="/about" className="block py-2 hover:text-blue-400">À propos</a></li> 
          <li><a href="/projects" className="block py-2 hover:text-blue-400">Projets</a></li>
          <li><a href="/contact" className="block py-2 hover:text-blue-400">Contact</a></li>

          <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded">
          {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
          </button>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
    