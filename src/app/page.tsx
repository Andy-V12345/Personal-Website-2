import styles from './styles/home.module.css'
import Hero from './components/hero';
import Skills from './components/skills';
import Experiences from './components/experiences';

export default function Home() {
  return (
    <div className={`fixed inset-0 flex justify-center sm:px-8 bg-white sm:bg-gray-50 overflow-scroll`}>
      <div className={`flex flex-col w-full max-w-5xl bg-white`}>
        <Hero />
        <Skills />
        <Experiences />
      </div>
    </div>
  );
}
