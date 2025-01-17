import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Collector from './Components/Collector/Collector';
import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Stake from './Components/Stake/Stake';
import Docs from './Components/Docs/Docs';
import Utilities from './Components/Utilities/Utilities';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div id={theme}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/stakes" element={<Stake />} />
            <Route path="/utilities" element={<Utilities />} />
            <Route path="/collector" element={<Collector />} />
            <Route path="/docs" element={<Docs />} />
            {/* Add more routes as needed */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
