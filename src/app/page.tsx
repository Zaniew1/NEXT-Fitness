import styles from './styles/_main.module.sass'
import { Header } from './components/Header/Header'
import { Welcome } from './components/Welcome/Welcome'
import { Footer } from './components/Footer/Footer'
import { About } from './components/About/About'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <About/>
      <Footer/>        
    </main>
  )
}
