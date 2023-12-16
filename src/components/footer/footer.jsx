import React from "react";
import { NavLink } from "react-router-dom";
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer id="footer" className="gl__footer">
                <div className="gl__footer-title-container">
                    <h2 className="gl__e-mail-h2">support@tmt.com</h2>
                    <NavLink className="gl__footer-logo" to={'/main#title'}>
                        <img className="gl__footer-logo" src="/images/tmt.svg" alt="" />
                    </NavLink>
                </div>
                <div className="gl__press-container">
                    <div className="gl__press-info-container">
                        <div className="gl__press">
                            <h2 className="gl__press-contact">Контакты</h2>
                            <div className="gl__press-info-container-text">
                                <h2 className="gl__category-name">CEO</h2>
                                <a href="https://t.me/neYourArchangel" className="gl__description-name">LINK</a>
                            </div>
                            <div className="gl__press-info-container-text">
                                <h2 className="gl__category-name">ADMIN</h2>
                                <h2 className="gl__description-name">LINK</h2>
                            </div>
                        </div>
                        <div className="gl__press">
                            <h2 className="gl__press-contact">МЕДИА</h2>
                            <div className="gl__press-info-container-text">
                                <h2 className="gl__category-name">ANTISCAM MARIARH</h2>
                                <a href="https://t.me/MARIARHH" className="gl__description-name">LINK</a>
                            </div>
                        </div>
                        <div className="gl__press">
                            <h2 className="gl__press-contact">Спонсор</h2>
                            <div className="gl__press-info-container-text">
                                <h2 className="gl__category-name">TGK</h2>
                                <a href="https://t.me/LWHikarik" className="gl__description-name">LINK</a>
                            </div>
                            <div className="gl__press-info-container-text">
                                <h2 className="gl__category-name">YouTube</h2>
                                <a href="https://youtube.com/@LWHikarik" className="gl__description-name">LINK</a>
                            </div>
                        </div>
                    </div>
                    <div className="gl__social-container">
                        <a href="https://t.me/TOT_Studio" className="gl__social-name a-footer">РАЗРАБОТАНО В TOT STUDIO</a>
                    </div>
                </div>
                <div className="gl__other-footer-info">
                    <h2 className="gl__footer-name">© PUBG TMT</h2>
                
                </div>
            </footer>
        );
    }
}

export default Footer