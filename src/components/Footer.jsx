import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-8 mt-16">
      <div className="max-w-2xl mx-auto text-center md:text-left px-6">

        <p className="text-lg mb-4">
          © 2026 Anta Gueye
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Portfolio React | Créé avec passion et Tailwind CSS
        </p>

        <div className="flex justify-center md:justify-start mt-4 gap-4">
          <a href="https://github.com/antag7967" target="_blank" rel="noreferrer" className="hover:text-purple-600 transition">
            GitHub
          </a>
          <a href="mailto:antag7967@gmail.com" className="hover:text-purple-600 transition">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;