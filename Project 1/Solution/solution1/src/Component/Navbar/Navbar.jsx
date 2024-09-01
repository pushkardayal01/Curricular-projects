import style from "./Navbar.module.css";
import logo from "../../assets/logo.svg";
import hamburger from "../../assets/hamburger.svg";

function Navbar(){
    return(
        <nav className = {style.navbar}>
        <div className = {style.left}>
            <img src={logo} alt = "logo"/>
        </div>
        <div className = {style.middle}>
            <button>Ticket</button>
            <button>New Ticket</button>
            <button>Reports</button>
        </div>

        <div className = {style.right}>
            <button>Login</button>
            <img src = {hamburger} alt = "hamburger"/>
        </div>

        </nav>
    )
}

export default Navbar;