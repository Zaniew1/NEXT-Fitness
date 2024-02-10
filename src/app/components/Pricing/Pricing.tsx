import { SinglePricing } from "./SinglePricing"
import classes from '../../styles/_pricing.module.sass'
import {dataPricing} from './DataPricing'
import { CustomHeader } from "../UI/Texts/CustomHeader"
export const Pricing:React.FC = ():JSX.Element => {
    return (
        <section id="pricing" className={classes.pricing}>
            <CustomHeader text={"Pakiety"}/>
            <div className={classes.pricing__wrapper}>
                {dataPricing.map( element =>  {
                    return <SinglePricing key={element.header+Math.random()} header={element.header} subHeader={element.subHeader} price={element.price} paragraph={element.paragraph} />
                }
                )}
            </div>
            
        </section>
    )
}