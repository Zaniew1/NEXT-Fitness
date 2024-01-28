import classes from '../../styles/_about.module.sass';
import { CustomImage } from '../UI/Image/CustomImage';
import { CustomHeader } from '../UI/Texts/CustomHeader';
import { CustomParagraph } from '../UI/Texts/CustomParagraph';
export const About:React.FC =():JSX.Element => {
    return(
        <section className={classes.about}>
          <CustomHeader text={"O mnie"}/>
              <div className={classes.about__image}>
                    <CustomImage src={'/klaudia.png'} alt={'asd'} priority={false} quality={60}/>
              </div>
              <div className={classes.about__text}>
                <CustomHeader customClass={classes.about__text__header} text={"Cześć!  Jestem Klaudia"}/>
                <CustomParagraph customClass={classes.about__text__paragraph} text={"Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sitsit amet consectetur adipisicing Lorem ipsum dolor sitsit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt nemo placeat, recusandae aliquid ea, aspernatur provident ullam maiores vel voluptate facilis iusto natus dolores laudantium minima? Mollitia, libero quaerat."}/>
              </div>
        </section>
    )
}