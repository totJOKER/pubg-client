import React from 'react'
import axios from "axios";

export default function RatingAdmin() {

    let name = React.createRef()
    let tour = React.createRef()
    let prize = React.createRef()
    let comm = React.createRef()
    let postData = () => {
        let addTour = axios.post('http://5.35.82.3:3306/addrating', {
            id: null,
            nameAdd: name.current.value,
            tourAdd: tour.current.value,
            prizeAdd: prize.current.value,
            commAdd: comm.current.value,
        })
        name.current.value = '';
        tour.current.value = '';
        prize.current.value = '';
        comm.current.value = '';
        alert('Пост добавлен, код 200');

    }

    let [rating, setRating] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/rating')
            .then(res => {
                setRating(res.data);
            })
    }, [])

    let currentRating = [];
    rating.map(data => {
        currentRating.push({ id: data.id, name: data.name, tour: data.tour, prize: data.prize, comm: data.comm })
    })
    console.log(currentRating)

    const deleteCard = (id, name) => {
        let addTour = axios.post(`http://5.35.82.3:3306/ratingdel`, {
            delId: id,
        })
        alert(`Пост успешно удалён, id турнира - ${id}, название турнира - ${name}`)
    }

    return (
        <main className="admin-page tournaments-admin">
            <div className="add-container">
                <p className="category-add">Добавить организацию</p>
                <div className='rating-update-container'>
                    <label htmlFor="name">Название организации</label>
                    <input ref={name} name="name" className="add-input" placeholder="Введите название" type="text" />

                    <label htmlFor="name">Введите количество турниров</label>
                    <input ref={tour} className="add-input" placeholder="Введите число турниров" type="text" />

                    <label htmlFor="name">Введите количество суммы призового фонда</label>
                    <input ref={prize} className="add-input" placeholder="Введите количество призового фонда" type="text" />

                    <label htmlFor="name">Введите количество аудитории</label>
                    <input ref={comm} className="add-input" placeholder="Введите количество аудитории" type="text" />
                    <button className="add-button" onClick={postData}>Добавить</button>
                </div>
                <ol className="news-list">
                    {currentRating.map(data => (
                        // eslint-disable-next-line react/jsx-key
                        <li className="rating-card">
                            <h1>{data.name}</h1>
                            <p>{data.id}</p>
                            <p>{data.tour}</p>
                            <p>{data.prize}</p>
                            <p>{data.comm}</p>
                            <button className="del-button" onClick={() => deleteCard(data.id, data.name)}>DELETE</button>
                        </li>
                    ))}
                </ol>
            </div>
        </main>
    )
}
