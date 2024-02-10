import classes from '../../styles/_gallery.module.sass';
import { GallerySlider } from './GallerySlider';
export const Gallery = ():JSX.Element => {
    return(
        <section className={classes.gallery}>
            <div className={classes.gallery__slider}>
                <div className={classes.gallery__slider__overlapper}>
                    <GallerySlider/>
                </div>
            </div>

        </section>
    );
}