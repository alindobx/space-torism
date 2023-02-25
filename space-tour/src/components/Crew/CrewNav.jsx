import { NavLink } from "react-router-dom";

export default  function CrewNav() {
    return (
        <>
            <ul className="crew-menu">
                <NavLink to="/crew/commander"><li><button className="btn-slider"></button></li></NavLink>
                <NavLink to="/crew/flight_engineer"><li><button className="btn-slider"></button></li></NavLink>
                <NavLink to="/crew/mission_specialist"><li><button className="btn-slider"></button></li></NavLink>
                <NavLink to="/crew/pilot"><li><button className="btn-slider"></button></li></NavLink>
            </ul>
        </>
    )
}
