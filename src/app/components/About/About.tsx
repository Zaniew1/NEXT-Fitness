import styles from "../../styles/_about.module.sass"
import { CustomImage } from "../UI/Image/Image"
export const About:React.FC = ():JSX.Element => {
    return(
        <div className={styles.about}>
            {/* <div>
                <p></p>
                <p></p>
                <p></p>
                <button></button>
            </div> */}
            <CustomImage src={'/plecy.jpg'} alt={'Plecy jakiejś Pani'} priority={true} quality={100} sizes={"100vw"}/>
        </div>
    )
}