import style from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";

function Navbar(){
    return(
        <nav className = {style.navbar}>
        <div className = {style.left}>
            <img className = {style.icons} src={logo} alt = "logo"/>
        </div>
        <div className = {style.middle}>
            <button className = {style.btn}>Ticket</button>
            <button className = {style.btn}>New Ticket</button>
            <button className = {style.btn}>Reports</button>
        </div>

        <div className = {style.right}>
            <button className = {style.btn}>Login</button>
            <img className = {style.iconshidden} src = {hamburger} alt = "hamburger"/>
        </div>

        </nav>
    )
}

export default Navbar;