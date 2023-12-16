import { useState } from 'react'
import Header from './components/header/header'
import './reset.css';
import GlobalBackground from './components/globalBackground/globalBackground';
import MainPage from './components/mainPage/mainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tournaments from './components/tournaments/tournaments';
import News from './components/news/news';
import Scum from './components/scum/scum';
import Footer from './components/footer/footer';
import { Rating } from './components/rating/rating';
import Login from './components/auth/login';
import Admin from './components/auth/admin';
import CisTournaments from './components/tournaments/categories/CisTournaments';
import AllTournaments from './components/tournaments/categories/AllTournaments';
import EuTournaments from './components/tournaments/categories/EuTournaments';
import TournamentsAdmin from './components/auth/tournamentsAdmin';
import NewsAdmin from './components/auth/newsAdmin';
import ScamAdmin from './components/auth/scamAdmin';
import RatingAdmin from './components/auth/rating';
import RatingSel from './components/rating/ratingSel';
import { RatingAll } from './components/rating/ratingAll';
import Loader from './components/loader/Loader';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <main className='page'>
        <Loader/>
        <Header />
        <div className='components'>
          <Routes>
            <Route index Component={MainPage} />
            <Route path='/main' Component={MainPage} />
            <Route path='/tournaments' Component={Tournaments}>
              <Route index path='/tournaments/' Component={AllTournaments} />
              <Route path='/tournaments/cis' Component={CisTournaments} />
              <Route path='/tournaments/eu' Component={EuTournaments} />
            </Route>
            <Route path='/news' Component={News} />
            <Route path='/scam' Component={Scum} />
            <Route path='/rating' Component={RatingSel}>
              <Route index path='/rating/' Component={Rating} />
              <Route index path='/rating/all' Component={RatingAll} />
            </Route>
            <Route path='/login' Component={Login} />
            <Route path='/admin' Component={Admin}>
              <Route index path='/admin/' Component={TournamentsAdmin} />
              <Route index path='/admin/news' Component={NewsAdmin} />
              <Route index path='/admin/scam' Component={ScamAdmin} />
              <Route index path='/admin/rating' Component={RatingAdmin} />
            </Route>

          </Routes>
        </div>
        <Footer />
        <GlobalBackground />
      </main>
    </BrowserRouter>
  )
}

export default App
