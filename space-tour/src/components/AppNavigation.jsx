import logo from "../assets/images/logo.svg";
import icon from '../assets/images/icon-close.svg';
import hamburger from '../assets/images/icon-hamburger.svg';
import useToggle from './Toggle';
import {useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

export default function AppNavigation() {
    const [toggle, setToggle] = useToggle();

    const [mQuery, setMQuery] = useState({ matches:
        window.innerWidth > 480
    })

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 375px)");
        mediaQuery.addEventListener('change', setMQuery);
        return () => mediaQuery.removeEventListener('change',setMQuery)
    },[])

    const slideMenu = () => {
        const getHamburgerMenu = document.querySelector('.menu');
        getHamburgerMenu.classList.toggle('visible');
        document.querySelector(".menu-back").classList.toggle('visible');
        const getCloseBtn = document.getElementById('close-hamburger');
        getCloseBtn.classList.toggle('close-visible');
        setToggle();
    }

    return (
        <>
            { mQuery && !mQuery.matches ? (
                <>
                <nav>
                    <div className="logo">
                        <NavLink to="/home"><img src={logo} alt="space-logo"/></NavLink>
                    </div>
                    <div className="close" onClick={slideMenu}>{toggle && <img id="close-icon" src={icon} alt="hamburger-menu"/>}
                        <img id="close-hamburger" src={hamburger} alt="hamburger-menu"/></div>
                    <div className="space-line"><hr/></div>
                    <div className="menu">
                        <span className="space-line_2"><hr/></span>
                        <ul className="space-menu">
                            <NavLink  className="btn-nav" to= "/home"><li>HOME</li></NavLink>
                            <NavLink  className="btn-nav" to="/destination/moon"><li>DESTINATION</li></NavLink>
                            <NavLink className="btn-nav" to="/crew/commander"><li>CREW</li></NavLink>
                            <NavLink  className="btn-nav" to="/technology/launch_vehicle"><li>TECHNOLOGY</li></NavLink>
                        </ul>
                    </div>
                </nav>
                <div className="menu-back"></div>
                </>
            ) : (
                <nav>
                <div className="logo">
                    <NavLink to="/home"><img src={logo} alt="space-logo"/></NavLink>
                </div>
                <div className="space-line"><hr/></div>
                <div className="menu">
                    <span className="space-line_2"><hr/></span>
                    <ul className="space-menu">
                        <li> <NavLink className="btn-nav" to="/home"><span>00</span> HOME</NavLink></li>
                        <li> <NavLink className="btn-nav" to="/destination/moon"><span>01</span> DESTINATION</NavLink></li>
                        <li><NavLink className="btn-nav" to="/crew/commander"><span>02</span> CREW</NavLink></li>
                        <li> <NavLink className="btn-nav" to="/technology/launch_vehicle"><span>03</span> TECHNOLOGY</NavLink></li>
                    </ul>
                </div>
            </nav>
            )}
        </>
    )
}