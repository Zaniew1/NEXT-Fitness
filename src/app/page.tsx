import { Footer } from './components/Footer/Footer'
import styles from './styles/_main.module.sass'
import { Header } from './components/Header/Header'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Footer/>        
    </main>
  )
}
