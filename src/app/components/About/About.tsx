import classes from '../../styles/_about.module.sass';
import { CustomButton } from '../UI/Buttons/CustomButton';
import { CustomImage } from '../UI/Image/CustomImage';
export const About:React.FC =():JSX.Element => {
    return(
        <section className={classes.about}>
              <div className={classes.about__image}>
                    {/* <CustomImage customClass={classes.about__image__img} src={'/plecy.jpg'} alt={'asd'} priority={false} quality={60}/> */}
              </div>
              <div className={classes.about__text}>
                <div className={classes.about__text__header}>Cześć! Jestem Klaudia i jestem trenerem personalnym w Katowicach</div>
                <div className={classes.about__text__paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt nemo placeat, recusandae aliquid ea, aspernatur provident ullam maiores vel voluptate facilis iusto natus dolores laudantium minima? Mollitia, libero quaerat.</div>
                <CustomButton text={'O mnie'} path={'/about'} color={'black'}/>
              </div>
        </section>
    )
}