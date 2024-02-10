import styles from '../styles/_main.module.sass'
import { Diet } from '../components/Diet/Diet';
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer';

export default function Personal() {
  return (
    <main className={styles.main}>
      <Header/>
      <Diet/>
      <Footer/>
    </main>
  )
}
