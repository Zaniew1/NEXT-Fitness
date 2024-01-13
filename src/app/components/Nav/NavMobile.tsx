import { Header } from "../Header/Header";

export const NavMobile:React.FC<{data:{}}> = (props):JSX.Element => {
    return(
        <div className="mobile">
            <div className="mobile__wrapper">
                <Header customStyles={{transform:"scale(0.6)"}}/>
            </div>
            <div className="mobile__burger"></div>
            <div className="mobile__dropdown">
                <ul className="mobile__list">
                   
                </ul>
            </div>
        </div>
    );
} 