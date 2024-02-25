"use client"
import styles from "../../styles/_welcome.module.sass"
import { Typewriter } from "@/app/customHooks/Typewriter";
import { CustomButton } from "../UI/Buttons/CustomButton"
import { CustomImage } from "../UI/Image/CustomImage"
export const Welcome:React.FC = ():JSX.Element => {
    const header = "Tu zaczyna sie Twoja zmiana";
    const paragraph1 = "“Zdobądź siłę, sprawność i zdrowie”";
    const paragraph2 = "Umów się na konsultacje i zacznij trenować z profesjonalistka";
    

    return(
        <section className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                {/* <p className={styles.welcome__wrapper__name}>{}</p> */}
                <p className={styles.welcome__wrapper__header}><Typewriter text={header} delay={50} /></p>
                <p className={styles.welcome__wrapper__text}><Typewriter text={paragraph1} delay={20} /></p>
                <p className={styles.welcome__wrapper__text}><Typewriter text={paragraph2} delay={15} /></p>
                <CustomButton text={"Kontakt"} path={'/contact'} color={"white"}/>
            </div>
            <CustomImage src={'/plecy.jpg'} alt={'Plecy jakiejś Pani'} priority={true} quality={100} sizes={"100vw"} customClass={styles.welcome__image}/>
        </section>
    )
}