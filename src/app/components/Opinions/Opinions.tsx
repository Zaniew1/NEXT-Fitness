
import classes from "../../styles/_opinions.module.sass";
import { CustomHeader } from "../UI/Texts/CustomHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OpinionSlider } from "./OpinionSlider";
export const Opinions:React.FC = () :JSX.Element => {

    return (
        <section id="opinions" className={classes.opinions}>
            <div className={classes.opinions__slider}>
                <div className={classes.opinions__slider__overlapper}>
                    <OpinionSlider/>
                </div>
            </div>
        </section>
    );
}
