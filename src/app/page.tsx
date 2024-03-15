import styles from './styles/home.module.css'
import Hero from './components/hero';
import Skills from './components/skills';

export default function Home() {
  return (
    <div className={`${styles.container} bg-gray-50`}>
      <div className={`sm:w-full md:w-3/4 mx-auto bg-white h-full flex flex-col`}>
        <Hero />
        <Skills />
      </div>
    </div>
  );
}
