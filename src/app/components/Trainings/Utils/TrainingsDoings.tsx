import classes from '../../../styles/_trainings.module.sass';
import {CustomParagraph} from '../../UI/Texts/CustomParagraph';
import { CustomImage } from '../../UI/Image/CustomImage';
export const TrainingsDoings :React.FC = ():JSX.Element => {
    return(
        <div className={classes.trainings__doings}>
                <div className={classes.trainings__doings__img}>
                    <CustomImage src={'/treningperso.jpg'} alt={''} sizes={''} priority={false} quality={50} />
                </div>
                <div className={classes.trainings__doings__wrapper}>
                <CustomParagraph text={"Trener personalny projektuje program każdej sesji, a następnie towarzyszy Ci w jego realizacji:"}/>
                    <ul className={classes.trainings__doings__wrapper__list}>
                        <li className={classes.trainings__doings__wrapper__list__item}>modeluje poprawne wykonanie ćwiczenia,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>asekuruje i dba zarówno o bezpieczeństwo, jak i wygodę Klienta podczas treningu,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>asystuje zmieniając obciążenia i ustawienia maszyn treningowych,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>poprawia technikę,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>uczy prawidłowego oddychania w czasie ćwiczeń,</li>
                        <li className={classes.trainings__doings__wrapper__list__item}>przypomina o uzupełnianiu płynów w odpowiednim momencie treningu,</li>
                    </ul>
                </div>
            </div>
    )
}