import React from 'react';
import Header from '../Header/Header'
import Quick from '../Quick/Quick'
import Footer from '../Footer/Footer'
import Slide from "../../components/slide/Slide";
function LandingPage() {
  return (
    <div >



      <Header />
      <Quick />
      <div className="Main">
        <div className="Mainbanner">
          <Slide />
        </div>
        <div className="MainCalendar">

        </div>
        <div className="board"></div>

      </div>
      <Footer />

    </div>
  );
}

export default LandingPage;
