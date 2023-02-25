
import { useEffect } from "react";
import { changeBackgroundImg } from "./functions/changeBackground";
import {Outlet} from 'react-router-dom'
export default function Crew() {
    useEffect(() => {
        changeBackgroundImg("crewBackground")
    },[])
    return (
        <><Outlet /></>
    )
}