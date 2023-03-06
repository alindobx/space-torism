import CrewNav from "./CrewNav";
import '../../assets/css/Crew.css'
import Douglas from "../../assets/images/image-douglas-hurley.png";
export default function Commander() {
    return (
        <>
            <article className="crew-content">
                <h3 className="crew-h3"><span>02</span> MEET YOUR CREW</h3>
                <h4 className="crew-h4">Commander</h4>
                <h5>Douglas Hurley</h5>
                <p className="dest-content">Douglas Gerald Hurley is an American engineer, former Marine Corps
                    pilot and former NASA astronaut. He launched into space for the third
                    time as commander of Crew Dragon Demo-2.</p>
                <div className="slider">
                    <CrewNav/>
                </div>
            </article>
            <h3 className="crew-h3-2nd"><span>02</span> MEET YOUR CREW</h3>
            <article>
                <img className="med-image" src={Douglas} alt="Douglas Hurley" />
            </article>
        </>
    )
}