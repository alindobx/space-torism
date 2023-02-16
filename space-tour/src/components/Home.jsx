import { useEffect } from "react";
import {changeBackgroundImg} from "./functions/changeBackground";

export default function Home() {

    useEffect(()=> {
        changeBackgroundImg('homeBackground','destBackground')
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
                <button className="btn">EXPLORE</button>
            </aside>
        </>
    )
}