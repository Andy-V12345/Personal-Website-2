"use client"

import styles from './styles/home.module.css'
import Hero from './components/hero';
import Skills from './components/skills';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Footer from './components/footer';
import { useState, useEffect } from 'react';

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
    <div className={`fixed inset-0 flex justify-center sm:px-8 bg-white sm:bg-gray-50 overflow-scroll`}>
      <div className={`flex flex-col w-full max-w-5xl bg-white`}>
        <Hero />
        <Skills />
        <Experiences width={width} />
        <Projects />
        <Footer />
      </div>
    </div>
  );
  
}
