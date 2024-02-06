import { HeaderDesktop } from "./HeaderDesktop"
import { HeaderMobile } from "./HeaderMobile"
export const Header = ():JSX.Element => {
    return (
        <>
            <HeaderMobile/>
            <HeaderDesktop color={'white'}/>
        </>
    )
} 