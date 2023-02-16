import titan from "../../assets/images/image-titan.png";
import DestNav from "../DestNav";

export default function Titan() {
    return(
        <>
            <article className="moon">
                <h3> <span>01</span> PICK YOUR DESTINATION</h3>
                <img className="planet" src={titan} alt="titan" />
            </article>
            <article className="moon-content">
                <DestNav/>
                <h4>TITAN</h4>
                <p>The only moon known to have a dense atmosphere other than Earth,
                    Titan is a home away from home (just a few hundred degrees colder!).
                    As a bonus, you get striking views of the Rings of Saturn.</p>
                <hr/>
                <section className="moon-content-btm">
                    <div className="distance">
                        <h5>AVG. DISTANCE</h5>
                        <div className="numbers">1.6 BIL KM</div>
                    </div>
                    <div className="travel">
                        <h5>EST. TRAVEL TIME</h5>
                        <div className="numbers">7 YEARS</div>
                    </div>
                </section>
            </article>
        </>
    )
}