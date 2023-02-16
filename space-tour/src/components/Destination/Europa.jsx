import europa from "../../assets/images/image-europa.png";
import DestNav from "../DestNav";

export default function Europa() {
    return(
        <>
            <article className="moon">
                <h3> <span>01</span> PICK YOUR DESTINATION</h3>
                <img className="planet" src={europa} alt="europa" />
            </article>
            <article className="moon-content">
                <DestNav/>
                <h4>EUROPA</h4>
                <p>The smallest of the four Galilean moons orbiting Jupiter,
                    Europa is a winter lover’s dream. With an icy surface, it’s
                    perfect for a bit of ice skating, curling, hockey, or simple
                    relaxation in your snug wintery cabin.</p>
                <hr/>
                <section className="moon-content-btm">
                    <div className="distance">
                        <h5>AVG. DISTANCE</h5>
                        <div className="numbers">628 MIL. KM</div>
                    </div>
                    <div className="travel">
                        <h5>EST. TRAVEL TIME</h5>
                        <div className="numbers">3 YEARS</div>
                    </div>
                </section>
            </article>
        </>
    )
}