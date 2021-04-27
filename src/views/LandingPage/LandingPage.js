import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Quick from '../Quick/Quick';
import Footer from '../Footer/Footer';
import Slide from '../../components/slide/Slide';
import SearchAll from '../../components/post/SearchAll';
import CalendarMainPage from '../../components/calendar/CalendarMainPage';
function LandingPage(props) {
  const opner = 'https://hufspace.com/';

  return (
    <div>
      <Header />

      <div className="Main">
        <SearchAll />
        {opner === 'https://hufspace.com/' ? <Quick /> : null}
        {/* <Quick /> */}
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
