import classes from "../../styles/_opinions.module.sass";
import { CustomImage } from "../UI/Image/CustomImage";
import { CustomHeader } from "../UI/Texts/CustomHeader";
export const Opinions:React.FC = () :JSX.Element => {
 
    return (
        <section className={classes.opinions}>
            <CustomHeader text={"Opinie"}/>

        </section>
    );
}