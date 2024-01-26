import classes from '../../../styles/_customHeader.module.sass'
export const CustomHeader:React.FC<{text:string, customClass?:string}> = (props):JSX.Element => {
    return(
        <h3 className={props.customClass ? props.customClass :classes.customHeader}>
            {props.text}
        </h3>
    )    
}