import React from 'react'
import axios from "axios";

export default function ScamAdmin() {

    let nameOrg = React.createRef()
    let link = React.createRef()
    let image = React.createRef()
    let postData = () => {
        if (nameOrg.current.value != '' && link.current.value != '' && image.current.value != '') {
            let addTour = axios.post('http://5.35.82.3:3306/scam', {
                id: null,
                nameOrgAdd: nameOrg.current.value,
                linkAdd: link.current.value,
                imageAdd: image.current.value,
            })
            nameOrg.current.value = '';
            link.current.value = '';
            image.current.value = '';
            alert('Пост добавлен, код 200');
        } else {
            alert('Вы заполнили не все поля')
        }

    }

    let [scam, setScam] = React.useState([])
    React.useEffect(() => {
        let data = axios.get('http://5.35.82.3:3306/scam')
            .then(res => {
                setScam(res.data);
            })
    }, [])

    const deleteCard = (id, name) => {
        let addTour = axios.post(`http://5.35.82.3:3306/scamdel`, {
            delId: id,
        })
        alert(`Пост успешно удалён, id турнира - ${id}, название турнира - ${name}`)
    }

    return (
        <main className="admin-page tournaments-admin">
            <div className="add-container">
                <p className="category-add">Добавить Организацию в скам лист</p>

                <label htmlFor="name">Название организации</label>
                <input ref={nameOrg} name="name" className="add-input" placeholder="Введите название организации" type="text" />

                <label htmlFor="name">Ссылка на пост</label>
                <input ref={link} className="add-input" placeholder="Введите ссылку на пост" type="text" />

                <label htmlFor="name">Ссылка на лого</label>
                <input ref={image} className="add-input" placeholder="Введите ссылку на лого" type="text" />

                <button className="add-button" onClick={postData}>Добавить</button>
            </div>
            <ol className="news-list">
                {scam.map(data => (
                    <li className="scam-card">
                        <div className="scam-image" style={{ backgroundImage: `url(${data.image})` }}>

                        </div>
                        <div className="scam-info">
                            <h1 className="scam-info-h1">{data.nameOrg}</h1>
                        </div>
                        <div className="scam-button-container">
                            <a href={data.link} className="scam-link">Пост</a>
                        </div>
                        <button className="del-button" onClick={() => deleteCard(data.id, data.name)}>DELETE</button>
                    </li>
                ))}
            </ol>
        </main>
    )
}
