import styles from './styles/_main.module.sass'
import { Header } from './components/Header/Header'
import { Welcome } from './components/Welcome/Welcome'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Opinions } from './components/Opinions/Opinions'
import { Footer } from './components/Footer/Footer'
import { Pricing } from './components/Pricing/Pricing'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <About/>
      <Pricing/>
      <Opinions/>
      <Contact/>
      <Footer/>        
    </main>
  )
}
