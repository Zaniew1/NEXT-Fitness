import { NavDesktop } from "./NavDesktop"
import { NavMobile } from "./NavMobile"
const navJSON = {
    pol:[{name:"O mnie", link:"#"},{name:"Oferta", link:"#"},{name:"Kontakt", link:"#"}],
    eng:[{name:"About", link:"#"},{name:"Offert", link:"#"},{name:"Contact", link:"#"}]
}
export const Navigation = (): JSX.Element => {
    return (
        <>
            <NavMobile data={navJSON}/>
            <NavDesktop data={navJSON}/>
        </>
    )
}