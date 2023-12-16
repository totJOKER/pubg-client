import React from "react";
import { NavLink } from "react-router-dom";

class TitleSection extends React.Component {
    render() {
        return (
            <main id="title" className="title-section section">
                <div className="title-container show">
                    <h1 className="title-h1">PUBG MOBILE СМИ</h1>
                    <div className="title-p-div">
                        <NavLink className="a-main-page" to='/tournaments'>Турниры</NavLink>
                        <NavLink className="a-main-page" to='/scam'>Скам</NavLink>
                        <NavLink className="a-main-page" to='/rating'>Рейтинг организаций</NavLink>
                        <NavLink className="a-main-page" to='/news'>Новости</NavLink>
                        <a className="a-main-page" href="https://t.me/MARIARHH">Гарантирование мероприятий</a>
                    </div>
                    <a className="title-scroll-but" href="#about">
                        <p className="title-scroll-p">SCROLL</p>
                        <img className="title-img" src="/images/scrollArrow.svg" alt="" />
                    </a>
                </div>
            </main>
        );
    }
}

export default TitleSection;