import classes from "../../styles/_opinions.module.sass";
import { CustomHeader } from "../UI/Texts/CustomHeader";
import {dataOpinions} from './DataOpinions';
export const Opinions:React.FC = () :JSX.Element => {
    return (
        <section className={classes.opinions}>
            <CustomHeader text={"Opinie"}/>
            <div className={classes.opinions__slider}>
                
            </div>
        </section>
    );
}