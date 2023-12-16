import React from "react";
import axios from "axios";
import './auth.css'
import { NavLink } from "react-router-dom";

export default function TournamentsAdmin() {

    let nameTour = React.createRef()
    let nameOrg = React.createRef()
    let teams = React.createRef()
    let prizepool = React.createRef()
    let guarantee = React.createRef()
    let openReg = React.createRef()
    let link = React.createRef()
    let image = React.createRef()
    let currency = React.createRef()
    let invite = React.createRef()
    let regionCIS = React.createRef()
    let regionEU = React.createRef()
    let closeReg = React.createRef()

    let postData = () => {
        if (nameTour.current.value != '' && nameOrg.current.value != '' && teams.current.value != '' && prizepool.current.value != '' && guarantee.current.value != '' && openReg.current.value != '' && link.current.value != '' && image.current.value != '' && currency.current.value != '' && invite.current.value != '' && regionCIS.current.value != '' && regionEU.current.value != '' && closeReg.current.value != '') {
            let addTour = axios.post('http://5.35.82.3:3306/tour', {
                id: null,
                nameTourAdd: nameTour.current.value,
                nameOrgAdd: nameOrg.current.value,
                teamsAdd: teams.current.value,
                prizepoolAdd: prizepool.current.value,
                guaranteeAdd: guarantee.current.value,
                openRegAdd: openReg.current.value,
                linkAdd: link.current.value,
                imageAdd: image.current.value,
                currencyAdd: currency.current.value,
                inviteAdd: invite.current.value,
                regionCISAdd: regionCIS.current.value,
                regionEUAdd: regionEU.current.value,
                closeRegAdd: closeReg.current.value,
            })
            nameTour.current.value = '';
            nameOrg.current.value = '';
            teams.current.value = '';
            prizepool.current.value = '';
            guarantee.current.value = '';
            openReg.current.value = '';
            link.current.value = '';
            image.current.value = '';
            currency.current.value = '';
            invite.current.value = '';
            regionCIS.current.value = '';
            regionEU.current.value = '';
            closeReg.current.value = '';
            alert('Пост добавлен, код 200');
        } else {
            alert('Вы заполнили не все поля')
        }

    }


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

    const deleteCard = (id, name) => {
        let addTour = axios.post(`http://5.35.82.3:3306/tourdel`, {
            delId: id,
        })
        alert(`Турнир успешно удалён, id турнира - ${id}, название турнира - ${name}`)
    }

    return (
        <main className="admin-page tournaments-admin">
            <div className="add-container">
                <p className="category-add">Добавить турнир</p>

                <label htmlFor="name">Название турнира ( Полное )</label>
                <input ref={nameTour} name="name" className="add-input" placeholder="Введите название турнира" type="text" />

                <label htmlFor="name">Название организации</label>
                <input ref={nameOrg} className="add-input" placeholder="Введите название организации" type="text" />

                <label htmlFor="name">количество команд ( Число )</label>
                <input ref={teams} className="add-input" placeholder="Введите количество команд" type="text" />

                <label htmlFor="name">сумма призового фонда ( Число )</label>
                <input ref={prizepool} className="add-input" placeholder="Введите сумму призового фонда" type="text" />

                <label htmlFor="name">имя гаранта ( при отсутствие гаранта введите - none )</label>
                <input ref={guarantee} className="add-input" placeholder="Введите имя гаранта" type="text" />

                <label htmlFor="name">дата открытия регистрации ( В ру формате - ДД.ММ.ГГ )</label>
                <input ref={openReg} className="add-input" placeholder="Введите дату открытия регистрации" type="text" />

                <label htmlFor="name">ссылка на турнир ( HTTPS:// ... ) </label>
                <input ref={link} className="add-input" placeholder="Введите ссылку на турнир" type="text" />

                <label htmlFor="name">ссылка на изображение ( HTTPS/:: ... )</label>
                <input ref={image} className="add-input" placeholder="Введите" type="text" />

                <label htmlFor="name">валюта призового фонда ( RUB, USD, SOM ... )</label>
                <input ref={currency} className="add-input" placeholder="Введите валюту призового фонда" type="text" />

                <label htmlFor="name">Инвайты ( При наличие 1, при отсутствие 0 )</label>
                <input ref={invite} className="add-input" placeholder="Введите" type="text" />

                <label htmlFor="name">CIS регион ( При наличие 1, при отсутствие 0 )</label>
                <input ref={regionCIS} className="add-input" placeholder="Введите" type="text" />

                <label htmlFor="name">EU регион ( При наличие 1, при отсутствие 0 )</label>
                <input ref={regionEU} className="add-input" placeholder="Введите" type="text" />

                <label htmlFor="name">Дата закрытия регистрации ( Строго в международном формате - ГГГГ.ММ.ДД )</label>
                <input ref={closeReg} className="add-input" placeholder="Введите дату" type="text" />
                <button className="add-button" onClick={postData}>Добавить</button>
            </div>
            <ol className="tour-list">
                {currentTour.map(data => (
                    <li className="tour-card show" id={data.regionCis}>
                        <h1>Id турнира - {data.id}</h1>
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
                                <a href={data.link} title={data.link}>Discord</a>
                            </div>
                        </div>
                        <button className="del-button" onClick={() => deleteCard(data.id, data.name)}>DELETE</button>
                    </li>
                ))}
            </ol>
        </main>
    )

}