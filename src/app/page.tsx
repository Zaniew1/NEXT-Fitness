import styles from './styles/_main.module.sass'
import { Header } from './components/Header/Header'
import { Welcome } from './components/Welcome/Welcome'
import { About } from './components/About/About'
import { Opinions } from './components/Opinions/Opinions'
import { Footer } from './components/Footer/Footer'
import { Pricing } from './components/Pricing/Pricing'
import { Telephone } from './components/UI/Buttons/Telephone'
import { Gallery } from './components/Gallery/Gallery'
import { Offert } from './components/Offert/Offert'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Welcome/>
      <Offert/>
      <About/>
      <Pricing/>
      <Opinions/>
      <Gallery/>
      <Footer/>        
      <Telephone/>
    </main>
  )
}
