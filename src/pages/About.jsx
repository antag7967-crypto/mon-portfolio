import React from "react";

function About() {

return (

<section className="max-w-3xl mx-auto py-16 px-6 bg-white dark:bg-gray-900">

<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
À propos de moi
</h2>

<p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
Passionnée par le développement, je transforme des idées en solutions concrètes.
Mon parcours m'a permis de toucher au Java, au C et aux bases de données.
Actuellement je développe des interfaces modernes avec React.
</p>

<div className="mt-12">

<h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
Mon parcours
</h3>

<ul className="space-y-4 text-gray-600 dark:text-gray-300">

<li>🎓 2022 : Obtention du Bac</li>

<li>💻 Orientation à l’UNCHK en IDA (Informatique Développement d’Applications)</li>

<li>📚 2024-2025 : Formation en Génie Informatique à CEFAS</li>

<li>🎓 2025-2026 : Licence 2 à l’UNIPRO</li>

</ul>

</div>

</section>

);

}

export default About;