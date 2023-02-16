import mars from "../../assets/images/image-mars.png";
import DestNav from "../DestNav";

export default function Mars(props) {
    return(
        <>
            <article className="moon">
                <h3> <span>01</span> PICK YOUR DESTINATION</h3>
                <img className="planet" src={mars} alt="mars" />
            </article>
            <article className="moon-content">
                <DestNav className={props.className}/>
                <h4>MARS</h4>
                <p>Don’t forget to pack your hiking boots. You’ll need
                    them to tackle Olympus Mons, the tallest planetary
                    mountain in our solar system. It’s two and a half
                    times the size of Everest!</p>
                <hr/>
                <section className="moon-content-btm">
                    <div className="distance">
                        <h5>AVG. DISTANCE</h5>
                        <div className="numbers">225 MIL. KM</div>
                    </div>
                    <div className="travel">
                        <h5>EST. TRAVEL TIME</h5>
                        <div className="numbers">9 MONTHS</div>
                    </div>
                </section>
            </article>
        </>
    )
}