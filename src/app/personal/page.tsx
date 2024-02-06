import styles from '../styles/_main.module.sass'
import { Trainings } from '../components/Trainings/Trainings'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer';

export default function Personal() {
  return (
    <main className={styles.main}>
      <Header/>
      <Trainings/>
      <Footer/>
    </main>
  )
}
