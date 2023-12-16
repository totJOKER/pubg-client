import React from "react";
import './mainPage.css'
import TitleSection from "./titleSection";
import AboutSection from "./aboutSection";

class MainPage extends React.Component {
    render() {
        return (
            <main className="main-page">
                <TitleSection />
                <AboutSection />
            </main>
        );
    }
}

export default MainPage;