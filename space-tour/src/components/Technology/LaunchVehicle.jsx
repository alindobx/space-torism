import TechNav from "./TechNav";
import '../../assets/css/Tech.css'
import LandScape from "../../assets/images/image-launch-vehicle-landscape.jpg";
import Portrait from "../../assets/images/image-launch-vehicle-portrait.jpg";

export default function LaunchVehicle() {
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
                        <h5>Launch Vehicle</h5>
                        <p className="dest-content">A launch vehicle or carrier rocket is a
                            rocket-propelled vehicle used to carry a payload from Earth's surface
                            to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket
                            is the most powerful in operation. Standing 150 metres tall, it's quite
                            an awe-inspiring sight on the launch pad!</p>
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