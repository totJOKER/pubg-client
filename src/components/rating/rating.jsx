import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './rating.css'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export function Rating() {
    let [rating, setRating] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/rating')
            .then(res => {
                setRating(res.data);
            })
    }, [])

    let currentRating = [];
    let labels = [];
    rating.map((data, i) => {
        currentRating.push({ id: data.id, name: data.name, tour: data.tour, prize: data.prize, comm: data.comm, })
    })
    
    let topRating = []
    currentRating.sort((x, y) => (+y.prize + +y.tour + +y.comm) - (+x.prize + +x.tour + +x.comm))
    currentRating.map((data, i) => {
        if (i < 5) topRating.push({ id: data.id, name: data.name, tour: data.tour, prize: data.prize, comm: data.comm, })
    })
    topRating.map(data => labels.push(data.name))
    console.log(currentRating);

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
        },
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true,
                max: currentRating.map((el, i) => { if (i == 0) Math.floor(+currentRating.tour + +currentRating.comm + +currentRating.prize) }),
                min: 0,
                ticks: {
                    stepSize: 0.5
                }
            },
            y: {
                stacked: true,
                max: 10,
                min: 0,
                ticks: {
                    stepSize: 0.5
                }
            },
        }
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'TOURNAMENT',
                data: topRating.map(data => data.tour),
                backgroundColor: '#9F3FFF',
            },
            {
                label: 'PRIZEPOOL',
                data: topRating.map(data => data.prize),
                backgroundColor: '#DC07FF',
            },
            {
                label: 'community',
                data: topRating.map(data => data.comm),
                backgroundColor: '#DD94FF',
            },
        ],
    };
    return (
        <Bar className='rating-canvas' options={options} data={data} />

    );
}
