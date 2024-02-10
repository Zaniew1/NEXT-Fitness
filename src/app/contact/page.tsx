import styles from '../styles/_main.module.sass'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer';
import { Contact } from '../components/Contact/Contact';

export default function Personal() {
  return (
    <main className={styles.main}>
      <Header/>
      <Contact/>
      <Footer/>
    </main>
  )
}
