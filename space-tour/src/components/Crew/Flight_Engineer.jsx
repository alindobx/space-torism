import CrewNav from "./CrewNav";
import '../../assets/css/Crew.css'
import Anousheh from "../../assets/images/image-anousheh-ansari.png";
export default function Flight_Engineer() {
    return (
        <>
            <article className="crew-content">
                <h3 className="crew-h3"><span>02</span> MEET YOUR CREW</h3>
                <h4 className="crew-h4">Flight Engineer</h4>
                <h5>Anousheh Ansari</h5>
                <p className="dest-content">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first
                    Iranian in space. </p>
                <div className="slider">
                    <CrewNav/>
                </div>
            </article>
            <h3 className="crew-h3-2nd"><span>02</span> MEET YOUR CREW</h3>
            <article>
                <img className="med-image" src={Anousheh} alt="Anousheh Ansari" />
            </article>
        </>
    )
}