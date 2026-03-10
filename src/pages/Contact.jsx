import React from "react";

function Contact() {

return (

<section className="max-w-2xl mx-auto py-16 px-6 bg-white dark:bg-gray-900">

<h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
Contact
</h2>

<form className="space-y-6">

<input
type="text"
placeholder="Nom"
className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
/>

<input
type="email"
placeholder="Email"
className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
/>

<textarea
placeholder="Message"
rows="5"
className="w-full p-3 border rounded bg-white dark:bg-gray-700 dark:text-white"
/>

<button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
Envoyer
</button>

</form>

</section>

);

}

export default Contact;