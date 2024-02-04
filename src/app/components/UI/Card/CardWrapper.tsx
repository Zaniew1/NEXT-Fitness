import {ReactNode} from 'react';
type ChildrenType = {
    children: ReactNode
}
export const CardWrapper:React.FC<ChildrenType> = (props):JSX.Element => {
    return (
        <div >
            {props.children}
        </div>
    )
}