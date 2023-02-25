
import CrewNav from "./CrewNav";
import '../../assets/css/Crew.css'
import Flyer from "../../assets/images/image-victor-glover.png";
export default function Pilot() {
    return (
        <>
            <article className="crew-content">
                <h3 className="crew-h3"><span>02</span> MEET YOUR CREW</h3>
                <h4 className="crew-h4">PILOT</h4>
                <h5>VICTOR GLOVER</h5>
                <p className="dest-content">Pilot on the first operational flight of the SpaceX Crew Dragon
                    to the International Space Station. Glover is a commander in the U.S. Navy where he
                    pilots an F/A-18.He was a crew member of Expedition 64, and served as a station
                    systems flight engineer. </p>
                <div className="slider">
                    <CrewNav/>
                </div>
            </article>
            <article>
                <img className="med-image" src={Flyer} alt="Victor Glover" />
            </article>
        </>
    )
}