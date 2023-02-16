import { NavLink } from "react-router-dom";

export default  function DestNav() {
    return (
        <>
            <ul className="dest-menu">
                <li><NavLink className="btn-nav"  to="/destination/moon">Moon</NavLink></li>
                <li><NavLink className="btn-nav"  to="/destination/mars">Mars</NavLink></li>
                <li><NavLink className="btn-nav"  to="/destination/europa">Europa</NavLink></li>
                <li><NavLink className="btn-nav"  to="/destination/titan">Titan</NavLink></li>
            </ul>
        </>
    )
}