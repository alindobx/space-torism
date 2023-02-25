
import CrewNav from "./CrewNav";
import '../../assets/css/Crew.css'
import Mark from "../../assets/images/image-mark-shuttleworth.png";
export default function Mission_Specialist() {
    return (
        <>
            <article className="crew-content">
                <h3 className="crew-h3"><span>02</span> MEET YOUR CREW</h3>
                <h4 className="crew-h4">Mission Specialist</h4>
                <h5>MARK SHUTTLEWORTH</h5>
                <p className="dest-content">Mark Richard Shuttleworth is the founder and CEO of Canonical,
                    the company behind the Linux-based Ubuntu operating system. Shuttleworth became the
                    first South African to travel to space as a space tourist.</p>
                <div className="slider">
                    <CrewNav/>
                </div>
            </article>
            <article>
                <img className="med-image" srcSet={Mark} alt="Mark Shuttleworth" />
            </article>
        </>
    )
}