import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function LandingPage(props) {
  return (
    <div>
      <div style={{ width: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'right' }}>
          <span>
            <a href="#">회원가입 </a>
            <a href="#">로그인 </a>
            <a href="#">언어선택</a>
          </span>
        </div>
        <div className="logo">
          <Link to="/list">
            <img src="#" alt="이미지" />
          </Link>
        </div>
        <div>
          <input className="searchBox"></input>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <span>커뮤니티</span>
          <span>학사 관련</span>
          <span>졸업생</span>
          <span>생활</span>
          <span>진로/취업</span>
          <span>정보</span>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
