import { Footer } from './components/Footer/Footer'
import styles from './styles/_main.module.sass'
import { Navigation } from './components/Nav/Navigation'
export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation/>
      <Footer/>        
    </main>
  )
}
