import React from "react";
import './tournaments.css'
import axios from "axios";
import Category from "../category/category";
import { Outlet } from "react-router-dom";

export default function CisTournaments() {
    return (
        <main className="tour-page section">
            <h1 className="tour-h1">Актуальные турниры</h1>
            <Category />
            <Outlet />
        </main>
    );

}