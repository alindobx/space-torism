import moon from "../../assets/images/image-moon.png";
import DestNav from "../DestNav";

export default function Moon() {
    return(
        <>
            <article className="moon">
                <h3> <span>01</span> PICK YOUR DESTINATION</h3>
                <img className="planet" src={moon} alt="moon" />
            </article>
            <article className="moon-content">
                <DestNav/>
                <h4>MOON</h4>
                <p>See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by visiting
                    the Luna 2 and Apollo 11 landing sites.</p>
                <hr/>
                <section className="moon-content-btm">
                    <div className="distance">
                        <h5>AVG. DISTANCE</h5>
                        <div className="numbers">384,400 KM</div>
                    </div>
                    <div className="travel">
                        <h5>EST. TRAVEL TIME</h5>
                        <div className="numbers">3 DAYS</div>
                    </div>
                </section>
            </article>
        </>
    )
}