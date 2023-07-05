import React, { useState, useEffect } from 'react'

import About from "./components/About";
import Button from "./components/Button";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";


function App() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setShowButton(scrollPosition > 660);
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
    window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      {showButton && <Button onClick={scrollToTop}/>}
    </div>
  );
}

export default App;
