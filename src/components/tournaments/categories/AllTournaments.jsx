import React from 'react'
import axios from "axios";

export default function AllTournaments() {

    let [tour, setTour] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/tour')
            .then(res => {
                setTour(res.data);
            })
    }, [])

    let currentTour = [];
    tour.map(data => {
        currentTour.push({ id: data.id, name: data.name, orgName: data.orgName, teams: data.teams, prizepool: data.prizepool, guarantee: data.guarantee, openReg: data.openReg, link: data.link, image: data.image, currency: data.currency, invite: data.invite, regionCis: data.regionCis, regionEu: data.regionEu, closeReg: data.closeReg })
    })

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const nowDate = `${year}.${month}.${day}`;

    return (
        <ol className="tour-list">
            {currentTour.map(data => (
                <li className="tour-card show" id={data.regionCis}>
                    <div className="tour-image" style={{ backgroundImage: `url(${data.image})` }}>
                        <div className="tour-image-info">
                            <h3 className="tour-image-text fw500">Teams - {data.teams}</h3>
                        </div>
                        <div className="tour-image-info">
                            <h3 className="tour-image-text fw500">{nowDate <= data.closeReg ? 'Register' : 'Close'}</h3>
                        </div>
                    </div>
                    <div className="tour-info">
                        <div className="tour-reg-date">
                            <img src="/images/clock.svg" alt="" />
                            <h3 className="fw500">{data.openReg}</h3>
                        </div>
                        <h3 className="tour-p fw700">{data.prizepool} {data.currency}.</h3>
                    </div>
                    <div className="tour-button-container">
                        <h3 className="tour-info-h1 fw700">{data.name}</h3>
                        <h3 className="tour-info-other fw400">Guarantee - {data.guarantee}</h3>
                        <h3 className="tour-info-other fw400">Invitations - {data.invite ? 'yes' : 'none'}</h3>
                        <div className="tour-button-box">
                            <a href={data.link} title={data.link}>Link</a>
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    )
}
