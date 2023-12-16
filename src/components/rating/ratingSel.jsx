import axios from 'axios';
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function RatingSel() {
  let items = 0;
  let [rating, setRating] = React.useState([])
  React.useEffect(() => {
      let data = axios.get('http://5.35.82.3:3306/rating')
          .then(res => {
              setRating(res.data);
          })
  }, [])
  rating.map(() => {
      items++
  })
  const resizeBox = () => {
    let box = document.getElementById('rating');
    box.style.height = (+items + 60) + "vh"
  }
  return (
    <main className='rating-page'>
        <h1 className='rating-h1'>Рейтинг среди организаций</h1>
        <div id='rating' className='rating-container'>
            <Outlet />
        </div>
        <NavLink onClick={resizeBox} to={'/rating/all'}>Полный список</NavLink>
    </main>
  )
}
