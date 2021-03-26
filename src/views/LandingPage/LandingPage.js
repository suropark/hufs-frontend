import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function LandingPage(props) {
  return (
    <div className="All">

      <div className="Quick">
        <ul >
          <li >퀵 링크</li>

          <a
            href="https://wis.hufs.ac.kr/src08/jsp/index.jsp"
            target="_blank"
          >
            <li> 종합정보시스템</li>
          </a>
          <li>시간표</li>
          <li>장학 게시판</li>
          <li>과 게시판</li>
        </ul>
      </div>
      <div className="Head">

        <div className="Pagename">페이지 이름</div>
        <img src="#" className="Image" alt="이미지 들어갈 곳" />
        <span className="loginbar">
          <a href="#">회원가입 </a>
          <a href="#">로그인 </a>
          <a href="#">언어선택</a>

        </span>
        <input className="Searchbar" value="검색창" />

        <div className="Menubar" >
          <span>커뮤니티</span>
          <span>학사 관련</span>
          <span>졸업생</span>
          <span>생활</span>
          <span>진로/취업</span>
          <span>정보</span>
        </div>

      </div>
      <div className="Main">
        <div className="Mainbanner">

        </div>
        <div className="MainCalendar">

        </div>
        <div className="board"></div>

      </div>
      <div className="Footer" >

      </div>

    </div>
  );
}

export default LandingPage;
