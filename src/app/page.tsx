"use client"

import styles from './styles/home.module.css'
import Hero from './components/hero';
import Skills from './components/skills';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Footer from './components/footer';
import { useState, useEffect } from 'react';
import FloatingNav from './components/floatingNav';

export default function Home() {


  const [width, setWidth] = useState<number>(0)

  useEffect(() => {

    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  return (
    <div className={`${styles.container} w-full sm:max-w-4xl`}>
        <FloatingNav/>
        <Hero />
        <Skills />
        <Experiences width={width} />
        <Projects />
        <Footer />
    </div>
  );
  
}
