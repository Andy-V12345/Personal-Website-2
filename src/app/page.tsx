import styles from './styles/home.module.css'
import Hero from './components/hero';

export default function Home() {
  return (
    <div className={`${styles.container} bg-gray-50`}>
      <div className={`w-3/4 mx-auto bg-white h-full`}>
        <Hero />
      </div>
    </div>
  );
}
