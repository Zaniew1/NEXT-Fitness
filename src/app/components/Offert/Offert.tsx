import classes from '../../styles/_offert.module.sass'
import { CustomHeader } from '../UI/Texts/CustomHeader';
import { CustomImage } from '../UI/Image/CustomImage';
export const Offert = ():JSX.Element => {
    return (
        <section className={classes.offert}>
            <CustomHeader text={"Moja oferta"}/>
            <div className={classes.offert__wrap}>
                <div className={classes.offert__wrap__square}>
                <div className={classes.offert__wrap__square__image}><CustomImage src={'/treningperso.jpg'} alt={''} quality={30} priority={false}/></div>
                    <p className={classes.offert__wrap__square__paragraph}>Treningi personalne</p>
                    <div className={classes.offert__wrap__square__background}></div>
                </div>
                <div className={classes.offert__wrap__square}>
                <div className={classes.offert__wrap__square__image}><CustomImage src={'/diet.jpg'} alt={''} quality={30} priority={false}/></div>
                    <p className={classes.offert__wrap__square__paragraph}>Opieka dietetyczna</p>
                    <div className={classes.offert__wrap__square__background}></div>
                </div>
                <div className={classes.offert__wrap__square}>
                    <div className={classes.offert__wrap__square__image}><CustomImage src={'/plan.jpg'} alt={''} quality={30} priority={false}/></div>
                    <p className={classes.offert__wrap__square__paragraph}>Plany treningowe</p>
                    <div className={classes.offert__wrap__square__background}></div>
                </div>
            </div>
        </section>
    );
}