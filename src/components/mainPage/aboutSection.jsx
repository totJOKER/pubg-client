import React from "react";

class AboutSection extends React.Component {
    render() {
        return (
            <main id="about" className="about-section section">
                <div className="about-text">
                    <h1 className="about-h1">Благодарность</h1>
                    <p className="about-p">Hikari, основатель проекта <a className="m-about" href="https://t.me/LWHikarik">Light Warriors</a> и главный разработчик грядущего проекта Game Viewer - турниры, автоматический функционал для организаторов, приложение (скоро). Один из крупнейших спонсоров в СНГ комьюнити, поддерживает как новые, так и сформированные проекты. Следить за контентом спонсора вы можете в <a className="m-about" href="https://t.me/LWHikarik">Telegram</a> и <a className="m-about" href="https://t.me/LWHikarik">YouTube</a> канале.</p>
                </div>
                <img className="about-logo" src="/images/sponsorLogo.png" alt="" />
            </main>
        );
    }
}

export default AboutSection;