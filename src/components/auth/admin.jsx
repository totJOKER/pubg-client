import React from "react";
import './auth.css'
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CategoryTour from "./categotyTour";

let check = false;

export default function Admin() {
    let login = 'PUbg-ADMIN-tmt-f123r3131';
    let pass = 'N@nr32@r3no_e23k';
    let checkUser = () => {
        let loginInp = document.getElementById('login');
        let passInp = document.getElementById('pass');
        console.log('cdc')
        console.log(passInp)
        if (login === loginInp.value && pass === passInp.value) {
            check = true;
        } else {
            alert('Вход отклонен');
        }
    }

    if (check) {
        return (
            <main className="tour-page section">
                <h1 className="tour-h1">Админ панель</h1>
                <CategoryTour />
                <Outlet />
            </main>
        )
    } else {
        return (
            <main className="login">
                <div className="login-container">
                    <h1>Вход в админ панель PUBG TMT</h1>
                    <input className="log-inp" placeholder="login" type="text" id="login" />
                    <input className="log-inp" type="password" placeholder="pass" name="" id="pass" />
                    <NavLink to='/admin' onClick={checkUser} >Войти</NavLink>
                </div>
            </main>
        )
    }

}