import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [message] = useState("Bienvenue sur mon portfolio ! Je suis Anta Gueye, une développeuse web passionnée. Explorez mes projets et n'hésitez pas à me contacter pour toute collaboration ou opportunité professionnelle.")
  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600
    animate-gradient-x
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">

      <div className="text-center text-white">

        <h1 className="text-4xl font-bold mb-4">
          {message}
        </h1>

        <div className="flex gap-4 justify-center">

          <Link
          to="/projects"
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:scale-110 transition">
            Voir mes projets
          </Link>

          <Link
          to="/contact"
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:scale-110 transition">
            Me contacter
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Home;