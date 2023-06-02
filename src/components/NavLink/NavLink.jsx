import { NavLink as NavLinkComp} from "react-router-dom"

function NavLink ({ to, children, ...props }) {
    return (
    <NavLinkComp
        {...props}
        to={to}
        className={({isActive})=> (isActive)}
        >{children}
    </NavLinkComp>
    )
}

export default NavLink;