import TechNav from "./TechNav";
import '../../assets/css/Tech.css'
import LandScape from "../../assets/images/image-space-capsule-landscape.jpg";
import Portrait from "../../assets/images/image-space-capsule-portrait.jpg";
export default function SpaceCapsule() {
    return (
        <>
            <article className="tech-content">
                <h3 className="crew-h3"><span>03</span> SPACE LAUNCH 101</h3>
                <div className="inner-module">
                    <div className="space-slider">
                        <TechNav/>
                    </div>
                    <div className="outer-module">
                        <h4 className="tech-h4">THE TERMINOLOGY…</h4>
                        <h5>SPACE CAPSULE</h5>
                        <p className="dest-content">A space capsule is an often-crewed spacecraft that uses a
                            blunt-body reentry capsule to reenter the Earth's atmosphere without wings.
                            Our capsule is where you'll spend your time during the flight. It includes a
                            space gym, cinema, and plenty of other activities to keep you entertained.</p>
                    </div>
                </div>
            </article>
            <article>
                <picture>
                    <h3 className="crew-h3"><span>03</span> SPACE LAUNCH 101</h3>
                    <source
                        media = "(max-width: 1280px)"
                        srcSet = {LandScape}
                        sizes = "1280px"
                    />
                    <source
                        media = "(max-width: 768px)"
                        srcSet = {Portrait}
                        sizes = "768px"
                    />
                    <img src={Portrait} alt="Landscape" />
                </picture>
            </article>
        </>
    )
}