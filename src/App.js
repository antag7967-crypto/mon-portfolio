import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
  
    <Router> 
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>  
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />   
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App; 