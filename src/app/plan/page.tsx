import styles from '../styles/_main.module.sass'
import { Plan } from '../components/Plan/Plan';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer';

export default function Personal() {
  return (
    <main className={styles.main}>
      <Header/>
      <Plan/>
      <Footer/>
    </main>
  )
}
