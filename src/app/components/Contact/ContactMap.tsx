import classes from '../../styles/_contact.module.sass'
export const ContactMap = (): JSX.Element =>{
    
    return (
        <div className={classes.contact__map}>
            <div className={classes.contact__map__container} id="googleMap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550.6265327322903!2d19.0193101922395!3d50.261559127615314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716ce37173bc643%3A0x7b262d7793761b79!2sAltus%20Fitness!5e0!3m2!1spl!2spl!4v1707571053845!5m2!1spl!2spl"
                    width="100%"
                    height="100%"
                    style={{border:"0"}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy ="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}