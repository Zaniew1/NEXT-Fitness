import classes from '../../../styles/_customParagraph.module.sass'
export const CustomParagraph:React.FC<{text:string, customClass?:string}> = (props):JSX.Element => {
    return(
        <p className={props.customClass ? props.customClass : classes.customParagraph}>
            {props.text}
        </p>
    )    
}