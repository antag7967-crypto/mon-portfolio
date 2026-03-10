import React from 'react';

const Projects = () => {
  const mesProjets = [
    { id: 1, title: "Gestion Bibliothéque", img: "/java.jpg", desc: "Mise en oeuvre des concepts de Programmation Orientée Object(POO) en Java" },
    { id: 2, title: "Gestion des Examens au Sénégal", img: "/algo.jpg", desc: "Développer un algorithme et un programme en C pour gérer les notes des étudiants, calculer les moyennes, les appréciations et les décisions du conseil de classe, ainsi que les moyennes générales par classe, établissement, département et région." },
    { id: 3, title: "Gestion d'une base de données d'Etat Civil", img: "/Base-données.jpg", desc: "Modéliser et manipuler les données relatives aux citoyens,naissances,mariages,décés,et logements" },
  ];

  return (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen py-16 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">Mes Réalisations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mesProjets.map((projet) => 
            <div key={projet.id} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform">
              <img src={projet.img} alt={projet.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{projet.title}</h3>
                <p className="text-gray-500 dark;text-gray-250 mt-2">{projet.desc}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Projects;