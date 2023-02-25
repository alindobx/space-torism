
import { useEffect } from "react";
import { changeBackgroundImg } from "./functions/changeBackground";
import {Outlet} from 'react-router-dom'
export default function Technology() {
    useEffect(() => {
        changeBackgroundImg("techBackground")
    },[])
    return (
        <><Outlet /></>
    )
}