import classes from '../../../styles/_trainings.module.sass';
import {CustomHeader} from '../../UI/Texts/CustomHeader';
import {CustomParagraph} from '../../UI/Texts/CustomParagraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { CustomImage } from '../../UI/Image/CustomImage';
export const TrainingsIntroduction :React.FC = ():JSX.Element => {
    return(
        <div className={classes.trainings__training}>
                <div className={classes.trainings__training__wrapper}>
                    <CustomHeader customClass={classes.trainings__training__wrapper__header} text={"Trening personalny"}/>
                    <CustomParagraph text={"Rozpoczęcie cyklu treningów indywidualnych poprzedzone jest konsultacją, na której przeprowadzany jest wywiad z Klientem"} />
                    <div className={classes.trainings__training__wrapper__awesome}>
                    <FontAwesomeIcon icon={faClock} />
                        <span className={classes.trainings__training__wrapper__awesome__span}>60 minut</span>
                    </div>
                </div>
                <div className={classes.trainings__training__img}>
                    <CustomImage src={'/treningperso.jpg'} alt={''} sizes={''} priority={false} quality={50} />
                </div>
            </div>
    )
}