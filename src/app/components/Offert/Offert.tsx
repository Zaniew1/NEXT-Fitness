import classes from '../../styles/_offert.module.sass'
import { CustomHeader } from '../UI/Texts/CustomHeader';
import { CustomImage } from '../UI/Image/CustomImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell,faUtensils,faFilePen  } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const Offert = ():JSX.Element => {
    return (
        <section className={classes.offert}>
            <CustomHeader text={"Moja oferta"}/>
            <div className={classes.offert__wrap}>
                <div className={classes.offert__wrap__square}>
                    <Link href="/personal" >
                        <div className={classes.offert__wrap__square__image}><CustomImage src={'/treningperso.jpg'} alt={''} quality={30} priority={false}/></div>
                        <p className={classes.offert__wrap__square__paragraph}><FontAwesomeIcon className={classes.offert__wrap__square__paragraph__icon} icon={faDumbbell} />Treningi personalne</p>
                        <div className={classes.offert__wrap__square__background}></div>
                    </Link>
                </div>
                <div className={classes.offert__wrap__square}>
                    <Link href="/diet" >
                        <div className={classes.offert__wrap__square__image}><CustomImage src={'/diet.jpg'} alt={''} quality={30} priority={false}/></div>
                        <p className={classes.offert__wrap__square__paragraph}><FontAwesomeIcon className={classes.offert__wrap__square__paragraph__icon} icon={faUtensils} />Opieka dietetyczna</p>
                        <div className={classes.offert__wrap__square__background}></div>
                    </Link>
                </div>
                <div className={classes.offert__wrap__square}>
                    <Link href="/plan" >
                        <div className={classes.offert__wrap__square__image}><CustomImage src={'/plan.jpg'} alt={''} quality={30} priority={false}/></div>
                        <p className={classes.offert__wrap__square__paragraph}><FontAwesomeIcon className={classes.offert__wrap__square__paragraph__icon} icon={faFilePen} />Plany treningowe</p>
                        <div className={classes.offert__wrap__square__background}></div>
                    </Link>
                </div>
            </div>
        </section>
    );
}