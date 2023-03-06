import TechNav from "./TechNav";
import '../../assets/css/Tech.css'
import LandScape from "../../assets/images/image-spaceport-landscape.jpg";
import Portrait from "../../assets/images/image-spaceport-portrait.jpg";
export default function SpacePort() {
    return (
        <>
            <article className="tech-content">
                <h3 className="tech-h3-2nd"><span>03</span> SPACE LAUNCH 101</h3>
                <div className="inner-module">
                    <div className="space-slider">
                        <TechNav/>
                    </div>
                    <div className="outer-module">
                        <h4 className="tech-h4">THE TERMINOLOGY…</h4>
                        <h5>SPACEPORT</h5>
                        <p className="dest-content">A spaceport or cosmodrome is a site for launching (or receiving)
                            spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the
                            famous Cape Canaveral, our spaceport is ideally situated to take advantage of the
                            Earth’s rotation for launch.</p>
                    </div>
                </div>
            </article>
            <article>
                <picture>
                    <h3 className="tech-h3"><span>03</span> SPACE LAUNCH 101</h3>
                    <source
                        media = "(max-width: 768px)"
                        srcSet = {LandScape}
                        sizes = "768px"
                    />
                    <source
                        media = "(max-width: 1280px)"
                        srcSet = {Portrait}
                        sizes = "1280px"
                    />
                    <img className="space-image" src={Portrait} alt="Landscape" />
                </picture>
            </article>
        </>
    )
}