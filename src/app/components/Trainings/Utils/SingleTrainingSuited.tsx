import {dataSuited} from './../TrainingsDataSuited';
import classes from '../../../styles/_trainings.module.sass';
import { SingleTraining } from './../Utils/SingleTraining';
export const SingleTrainingSuited :React.FC<{visibility:boolean}> = (props):JSX.Element => {
    return(
        <>
            {!props.visibility && 
                <div className={classes.trainings__wrapper}>
                {dataSuited.map(singleSuited=>{
                    return <SingleTraining key={Math.random()+singleSuited.img} img={singleSuited.img} alt={singleSuited.header} header={singleSuited.header} paragraph={singleSuited.paragraph} path={singleSuited.path} />
                })}
            </div>
        }
       </>
    )
}