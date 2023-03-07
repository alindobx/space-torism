import { useEffect } from "react";
import {changeBackgroundImg} from "./functions/changeBackground";
import {NavLink} from "react-router-dom";

export default function Home() {

    useEffect(()=> {
        changeBackgroundImg('homeBackground')
    },[])

    return (
        <>
            <article className="article_1">
                <h2>SO, YOU WANT TO TRAVEL TO</h2>
                <h1>SPACE</h1>
                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go
                    to outer space and not hover kind of on the edge of it. Well sit back, and
                    relax because we’ll give you a truly out of this world experience!
                </p>
            </article>
            <aside>
                <NavLink to="/home"><button className="btn">EXPLORE</button></NavLink>
            </aside>
        </>
    )
}