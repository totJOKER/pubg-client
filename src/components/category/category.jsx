import React, { Component } from 'react'
import './category.css'
import { NavLink } from 'react-router-dom'

export class Category extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                { key: '/tournaments/', name: 'Все' },
                { key: '/tournaments/cis', name: 'CIS' },
                { key: '/tournaments/eu', name: 'EU' }
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <NavLink className="categories-button" key={el.key} to={el.key} >{el.name}</NavLink>
                ))}
            </div>
        )
    }
}

export default Category