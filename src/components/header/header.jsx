import React, { Suspense } from "react";
import './header.css'
import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Model } from "../../model/Web";

class Header extends React.Component {
    headerArr = [
        { buttonValue: 'ГЛАВНАЯ', buttonUrl: '/main', },
        { buttonValue: 'ТУРНИРЫ', buttonUrl: '/tournaments', },
        { buttonValue: 'НОВОСТИ', buttonUrl: '/news', },
        { buttonValue: 'Скам', buttonUrl: '/scam', },
        { buttonValue: 'Рейтинг организаций', buttonUrl: '/rating', },
    ]
    showMenu = () => {
        let menu = document.getElementById("menu");
        menu.classList.toggle('show-menu');
        let burgerInput = document.getElementById("burger-input");
        burgerInput.classList.toggle('svg-act')
        let mainHader = document.getElementById('nav-header-main')
        mainHader.classList.toggle('unblur');
    }
    render() {
        return (
            <>
                <header id="nav-header-main" className="nav-header-main anim-js-elem">
                    <a href="/main" className="header-nav-div-logo">
                        <img className="header-nav-img" href='#home' src="/images/tmt.svg" />
                        <div className="header-text">
                            <h1 className="header-logo-h1">PUBG TMT</h1>
                            <h2 className="header-logo-h2">TOURNAMENTS MARIARH & TOT</h2>
                        </div>
                    </a>
                    <label className="hamburger">
                        <input id="burger-input" onClick={this.showMenu} type="checkbox" />
                        <svg viewBox="0 0 32 32">
                            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path className="line" d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </header>
                <nav id="menu" className="mobile-nav-menu">
                    <div className="logo-container">
                        <Canvas camera={{ position: [0, 2, 5], zoom: 0.5 }}>
                            <OrbitControls enableZoom={false} />
                            <hemisphereLight intensity={1.35} />
                            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} intensity={10} castShadow />
                            <Suspense fallback={null} >
                                <Model />
                            </Suspense>
                        </Canvas>
                    </div>
                    <ul className="header-nav-ul-m">
                        {this.headerArr.map(data => (
                            <li><NavLink onClick={this.showMenu} className="a-header-nav-fix but-hov-act" to={data.buttonUrl}>{data.buttonValue}</NavLink></li>
                        ))}
                        <li><a href="#footer" className="a-header-nav-fix but-hov-act">КОНТАКТЫ</a></li>
                    </ul>
                </nav>
            </>
        );
    }
}

export default Header;