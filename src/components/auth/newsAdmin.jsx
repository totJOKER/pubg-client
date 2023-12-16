import React from 'react'
import axios from "axios";

export default function NewsAdmin() {

    let title = React.createRef()
    let description = React.createRef()
    let newsUrl = React.createRef()
    let image = React.createRef()
    let postData = () => {
        if (title.current.value != '' && description.current.value != '' && newsUrl.current.value != '' && image.current.value != '') {
            if (description.current.value.length <= 250) {
                let addTour = axios.post('http://5.35.82.3:3306/news', {
                    id: null,
                    titleAdd: title.current.value,
                    descriptionAdd: description.current.value,
                    newsUrlAdd: newsUrl.current.value,
                    imageAdd: image.current.value,
                })
                title.current.value = '';
                description.current.value = '';
                newsUrl.current.value = '';
                image.current.value = '';
                alert('Пост добавлен, код 200');
            }
            else {
                alert('Длина больше 250 символов')
            }
        } else {
            alert('Вы заполнили не все поля')
        }

    }

    let [news, setNews] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/news')
            .then(res => {
                setNews(res.data);
            })
    }, [])

    const deleteCard = (id) => {
        let addTour = axios.post(`http://5.35.82.3:3306/newsdel`, {
            delId: id,
        })
        alert(`Пост успешно удалён, id - ${id}`)
    }

    return (
        <main className="admin-page tournaments-admin">
            <div className="add-container">
                <p className="category-add">Добавить Новость</p>

                <label htmlFor="name">Заголовок Новости</label>
                <input ref={title} name="name" className="add-input" placeholder="Введите заголовок" type="text" />

                <label htmlFor="name">Описание новости ( максимум 250 символов, иначе будет отказано ) </label>
                <input ref={description} className="add-input" placeholder="Введите описание" type="text" />

                <label htmlFor="name">Ссылка на пост</label>
                <input ref={newsUrl} className="add-input" placeholder="Введите ссылку" type="text" />

                <label htmlFor="name">Ссылка на изображение</label>
                <input ref={image} className="add-input" placeholder="Введите ссылку на изображение" type="text" />

                <button className="add-button" onClick={postData}>Добавить</button>
            </div>
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
                        <button className="del-button" onClick={() => deleteCard(data.id, data.name)}>DELETE</button>
                    </li>
                ))}
            </ol>
        </main>
    )
}
