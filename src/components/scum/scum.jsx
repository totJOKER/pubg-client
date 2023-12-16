import React from "react";
import './scum.css'
import axios from "axios";

export default function Scum() {
    let [scam, setScam] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://pubgm-tmt.org:3306/scam')
            .then(res => {
                setScam(res.data);
            })
    }, [])

    return (
        <main className="scam-page section">
            <h1 className="scam-h1">Скам лист</h1>
            <ol className="scam-list">
                {scam.map(data => (
                    // eslint-disable-next-line react/jsx-key
                    <li className="scam-card">
                        <div className="scam-image" style={{ backgroundImage: `url(${data.image})` }}>

                        </div>
                        <div className="scam-info">
                            <h1 className="scam-info-h1">{data.nameOrg}</h1>
                        </div>
                        <div className="scam-button-container">
                            <a href={data.link} className="scam-link">Пост</a>
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}