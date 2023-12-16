import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class CategoryTour extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                { key: '/admin/', name: 'Турниры' },
                { key: '/admin/news', name: 'Новости' },
                { key: '/admin/scam', name: 'Скам' },
                { key: '/admin/rating', name: 'Рейтинг' },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <NavLink key={el.key} to={el.key} >{el.name}</NavLink>
                ))}
            </div>
        )
    }
}