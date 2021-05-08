import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
import Footer from '../Footer/Footer';
import Slide from '../../components/slide/Slide';
import SearchAll from '../../components/post/SearchAll';
import CalendarMainPage from '../../components/calendar/CalendarMainPage';
import styles from '../../css/LandingPage.module.css';
function LandingPage(props) {
  // const now_url = window.location.href;
  // console.log(now_url);

  return (
    <div>
      <Header />

      <div className="Main">
        <SearchAll />
        {/* {now_url === 'https://hufspace.com/' ? <Quick /> : null} */}
        <div
          id={styles.quick}>
          <Quick />
        </div>
        <div className="Mainbanner">

          <Slide />
        </div>
        <div className="MainCalendar">
          <CalendarMainPage />
        </div>
        <div className="board"></div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
