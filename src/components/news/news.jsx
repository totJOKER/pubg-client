import React from "react";
import './news.css'
import axios from "axios";

export default function News() {
    let [news, setNews] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/news')
            .then(res => {
                setNews(res.data);
            })
    }, [])

    // 250 des news

    return (
        <main className="news-page news section">
            <h1 className="news-h1">Новости киберспорта</h1>
            <ol className="news-list">
                {news.map(data => (
                    <li className="news-card">
                        <div className="news-image" style={{ backgroundImage: `url(${data.image})` }}>

                        </div>
                        <div className="news-info">
                            <h1 className="news-info-h1">{data.title}</h1>
                            <div className="news-info-p">{data.description}</div>
                        </div>
                        <div className="news-button-container">
                            <a href={data.newsUrl} className="news-link">Читать дальше</a>
                        </div>
                    </li>
                ))}
            </ol>
        </main>
    );
}