import { NavLink } from "react-router-dom";
import  "../../assets/css/Tech.css"
export default  function TechNav() {
    return (
        <>
            <ul className="tech-menu">
                <NavLink to="/technology/launch_vehicle"><li><button className="btn-space-slider">1</button></li></NavLink>
                <NavLink to="/technology/spaceport"><li><button className="btn-space-slider">2</button></li></NavLink>
                <NavLink to="/technology/space_capsule"><li><button className="btn-space-slider">3</button></li></NavLink>
            </ul>
        </>
    )
}
